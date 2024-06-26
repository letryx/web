-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP VIEW sec_contract;
--
-- CREATE VIEW "public"."sec_contract" AS
--  SELECT filings.accession_number,
--     attachments.sequence,
--     companies.name AS company_name,
--     companies.cik AS company_cik,
--     companies.geo AS company_geo,
--     companies.sic AS company_sic,
--     companies.sic_name AS company_sic_name,
--     filings.filing_type AS filing_type,
--     filings.header AS filing_header,
--     attachments.description,
--     attachments.attachment_type AS attachment_type,
--     attachments.text,
--     attachments.contents,
--     attachments.tsv_search_text,
--     0.0 as relevance
--    FROM ((sec_company companies
--      JOIN sec_filing filings ON ((filings.cik = companies.cik)))
--      JOIN sec_filing_attachment attachments ON ((attachments.accession_number = filings.accession_number)));
