ALTER TABLE sec_filing_attachment ADD COLUMN uid TEXT NULL;

UPDATE sec_filing_attachment as a
SET uid = gen_slug('sec-'||a.accession_number||'/'||a.sequence);

CREATE OR REPLACE FUNCTION set_attachment_uid()
RETURNS TRIGGER AS $$
BEGIN
    new.uid = gen_slug('sec-'||new.accession_number||'/'||new.sequence);
    RETURN new;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_attachment_uid_ti
BEFORE INSERT ON sec_filing_attachment
FOR EACH ROW
EXECUTE PROCEDURE set_attachment_uid();

CREATE TRIGGER set_attachment_uid_tu
BEFORE UPDATE ON sec_filing_attachment
FOR EACH ROW
EXECUTE PROCEDURE set_attachment_uid();

ALTER TABLE sec_filing_attachment ALTER column uid SET NOT NULL;
CREATE UNIQUE INDEX idx_sec_filing_attachment_uid ON sec_filing_attachment(uid);
