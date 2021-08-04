ALTER TABLE IF EXISTS sec_contract
RENAME TO sec_contracts;

ALTER TABLE IF EXISTS sec_company
RENAME TO sec_companies;

ALTER TABLE IF EXISTS sec_filing
RENAME TO sec_filings;

ALTER TABLE IF EXISTS sec_filing_attachment
RENAME TO sec_filing_attachments;