CREATE EXTENSION pg_trgm;
CREATE INDEX sec_filing_attachments_text_idx ON data.sec_filing_attachments
USING GIN ((text) gin_trgm_ops);
