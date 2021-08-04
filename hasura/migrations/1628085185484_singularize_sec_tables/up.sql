ALTER TABLE IF EXISTS sec_contracts
RENAME TO sec_contract;

ALTER TABLE IF EXISTS sec_companies
RENAME TO sec_company;

ALTER TABLE IF EXISTS sec_filings
RENAME TO sec_filing;

ALTER TABLE IF EXISTS sec_filing_attachments
RENAME TO sec_filing_attachment;

CREATE OR REPLACE FUNCTION sec_search(search text)
 RETURNS SETOF sec_filing_attachment
 LANGUAGE sql
 STABLE
AS $function$
SELECT
  attachment.*
FROM
  sec_filing_attachment AS attachment,
  plainto_tsquery(search) AS q
WHERE
  q @@ tsv_search_text
ORDER BY
  ts_rank(tsv_search_text, q) desc
$function$;

CREATE OR REPLACE FUNCTION attachment_text_search_trigger()
  RETURNS trigger AS
$BODY$
BEGIN
    SELECT setweight(to_tsvector(coalesce(new.accession_number, '')), 'A') ||
           setweight(to_tsvector(coalesce(new.description, '')), 'B') ||
           setweight(to_tsvector(coalesce(company.name, '')), 'C') ||
           setweight(to_tsvector(coalesce(new.text, '')), 'D')
    INTO new.tsv_search_text
    FROM sec_filing AS filing
    JOIN sec_company AS company
    ON filing.cik = company.cik
    WHERE filing.accession_number = new.accession_number;
    RETURN new;
END
$BODY$
LANGUAGE plpgsql VOLATILE;