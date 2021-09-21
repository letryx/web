ALTER TABLE sec_filing_attachment ADD COLUMN contract_type text;
CREATE INDEX contract_type_idx ON sec_filing_attachment (contract_type);

CREATE OR REPLACE VIEW sec_contract AS
SELECT attachment.accession_number,
    attachment.sequence,
    company.name AS company_name,
    company.cik AS company_cik,
    company.geo AS company_geo,
    company.sic AS company_sic,
    company.sic_name AS company_sic_name,
    filing.filing_type,
    filing.header AS filing_header,
    filing.filing_date,
    attachment.description,
    attachment.attachment_type,
    attachment.tsv_search_text,
    (0.0)::real AS relevance,
    attachment.contract_type
FROM sec_company company
JOIN sec_filing filing ON filing.cik = company.cik
JOIN sec_filing_attachment attachment ON attachment.accession_number = filing.accession_number;