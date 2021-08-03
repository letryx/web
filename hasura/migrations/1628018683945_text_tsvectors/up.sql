
DROP INDEX data.sec_filing_attachments_text_idx;

-- https://austingwalters.com/fast-full-text-search-in-postgresql/
ALTER TABLE data.sec_filing_attachments ADD COLUMN tsv_search_text tsvector;
CREATE INDEX tsv_search_text_idx ON data.sec_filing_attachments USING gin(tsv_search_text);

-- https://austingwalters.com/fast-full-text-search-in-postgresql/
UPDATE data.sec_filing_attachments as attachment
SET tsv_search_text =
  setweight(to_tsvector(coalesce(attachment.accession_number, '')), 'A') ||
  setweight(to_tsvector(coalesce(attachment.description, '')), 'B') ||
  setweight(to_tsvector(coalesce(company.name, '')), 'C') ||
  setweight(to_tsvector(coalesce(attachment.text, '')), 'D')
FROM data.sec_filings AS filing
JOIN data.sec_companies AS company
ON filing.cik = company.cik
WHERE filing.accession_number = attachment.accession_number;

-- https://austingwalters.com/fast-full-text-search-in-postgresql/
-- UPDATE data.sec_filing_attachments as attachment
-- SET tsv_search_text =
--   setweight(to_tsvector(coalesce(attachment.accession_number, '')), 'A') ||
--   setweight(to_tsvector(coalesce(attachment.description, '')), 'B') ||
--   setweight(to_tsvector(coalesce(company.name, '')), 'C') ||
--   setweight(to_tsvector(coalesce(attachment.text, '')), 'D')
-- FROM data.sec_filings AS filing
-- JOIN data.sec_companies AS company
-- ON filing.cik = company.cik
-- WHERE filing.accession_number = attachment.accession_number;

-- CREATE FUNCTION comment_text_search_trigger() RETURNS trigger AS $$
-- begin
--   new.tsv_comment_text :=
--     setweight(to_tsvector(coalesce(new.story_title,'')), 'A') ||
--     setweight(to_tsvector(coalesce(new.comment_text,'')), 'B');
-- return new;
-- end
-- $$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION attachment_text_search_trigger()
  RETURNS trigger AS
$BODY$
BEGIN
    SELECT setweight(to_tsvector(coalesce(new.accession_number, '')), 'A') ||
           setweight(to_tsvector(coalesce(new.description, '')), 'B') ||
           setweight(to_tsvector(coalesce(company.name, '')), 'C') ||
           setweight(to_tsvector(coalesce(new.text, '')), 'D')
    INTO new.tsv_search_text
    FROM data.sec_filings AS filing
    JOIN data.sec_companies AS company
    ON filing.cik = company.cik
    WHERE filing.accession_number = new.accession_number;
    RETURN new;
END
$BODY$
  LANGUAGE plpgsql VOLATILE;

/* Trigger on update */
CREATE TRIGGER attachment_text_search_update BEFORE INSERT OR UPDATE
ON data.sec_filing_attachments FOR EACH ROW EXECUTE PROCEDURE attachment_text_search_trigger();
