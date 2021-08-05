ALTER TABLE sec_filing_attachment ADD COLUMN cik TEXT NULL;

UPDATE sec_filing_attachment as attachment
SET cik = filing.cik
FROM sec_filing AS filing
WHERE filing.accession_number = attachment.accession_number;

CREATE OR REPLACE FUNCTION set_attachment_cik()
RETURNS TRIGGER AS $$
BEGIN
    SELECT filing.cik
    INTO new.cik
    FROM sec_filing AS filing
    WHERE filing.accession_number = new.accession_number;
    RETURN new;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_attachment_cik_ti
BEFORE INSERT ON sec_filing_attachment
FOR EACH ROW
EXECUTE PROCEDURE set_attachment_cik();

CREATE TRIGGER set_attachment_cik_tu
BEFORE UPDATE ON sec_filing_attachment
FOR EACH ROW
EXECUTE PROCEDURE set_attachment_cik();

ALTER TABLE sec_filing_attachment ALTER column cik SET NOT NULL;
