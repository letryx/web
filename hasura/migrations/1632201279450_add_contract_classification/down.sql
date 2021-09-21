CREATE OR REPLACE VIEW "public"."sec_contract" AS
 SELECT attachments.accession_number,
    attachments.sequence,
    companies.name AS company_name,
    companies.cik AS company_cik,
    companies.geo AS company_geo,
    companies.sic AS company_sic,
    companies.sic_name AS company_sic_name,
    filings.filing_type,
    filings.header AS filing_header,
    filings.filing_date,
    attachments.description,
    attachments.attachment_type,
    attachments.tsv_search_text,
    (0.0)::real AS relevance
   FROM ((sec_company companies
     JOIN sec_filing filings ON ((filings.cik = companies.cik)))
     JOIN sec_filing_attachment attachments ON ((attachments.accession_number = filings.accession_number)));

DROP INDEX contract_type_idx ON sec_filing_attachment;
ALTER TABLE sec_filing_attachment DROP COLUMN contract_type;