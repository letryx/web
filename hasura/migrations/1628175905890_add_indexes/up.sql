-- existing indexes
-- sec_companies_pkey
-- migrations_pkey
-- migrations_name_key
-- sec_filing_attachment_accession_number_sequence_key
-- sec_filing_attachment_pkey
-- tsv_search_text_idx
-- org_type_pkey
-- users_email_key
-- users_pkey
-- user_auth0_id_key

CREATE INDEX trgm_idx_sec_company_name ON sec_company USING gin (name gin_trgm_ops);
CREATE INDEX trgm_idx_sec_filing_attachment_description ON sec_filing_attachment USING gin (description gin_trgm_ops);

CREATE INDEX idx_sec_filing_cik ON sec_filing (cik);
CREATE INDEX idx_sec_filing_filing_date ON sec_filing (filing_date);
CREATE INDEX idx_sec_filing_filing_type ON sec_filing (filing_type);

CREATE INDEX idx_sec_filing_attachment_cik ON sec_filing_attachment (cik);
