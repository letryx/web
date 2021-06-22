SET check_function_bodies = false;
CREATE SCHEMA data;
CREATE FUNCTION data.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE data.sec_companies (
    cik text NOT NULL,
    name text NOT NULL,
    geo text,
    sic text NOT NULL,
    sic_name text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT "fields not empty" CHECK (((length(cik) > 0) AND (length(name) > 0) AND (length(sic) > 0) AND (length(sic_name) > 0)))
);
CREATE TABLE data.sec_filing_attachments (
    accession_number text NOT NULL,
    sequence integer NOT NULL,
    filing_type text NOT NULL,
    filename text NOT NULL,
    description text NOT NULL,
    contents text NOT NULL,
    text text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE TABLE data.sec_filings (
    accession_number text NOT NULL,
    cik text NOT NULL,
    header text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
CREATE VIEW data.sec_contracts AS
 SELECT filings.accession_number,
    attachments.sequence,
    companies.name AS company_name,
    companies.cik AS company_cik,
    companies.geo AS company_geo,
    filings.header AS filing_metadata,
    attachments.description,
    attachments.filing_type,
    attachments.text,
    attachments.contents
   FROM ((data.sec_companies companies
     JOIN data.sec_filings filings ON ((filings.cik = companies.cik)))
     JOIN data.sec_filing_attachments attachments ON ((attachments.accession_number = filings.accession_number)));
CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    hash character varying(40) NOT NULL,
    executed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE ONLY data.sec_companies
    ADD CONSTRAINT sec_companies_pkey PRIMARY KEY (cik);
ALTER TABLE ONLY data.sec_filing_attachments
    ADD CONSTRAINT sec_filing_attachment_accession_number_sequence_key UNIQUE (accession_number, sequence);
ALTER TABLE ONLY data.sec_filing_attachments
    ADD CONSTRAINT sec_filing_attachment_pkey PRIMARY KEY (accession_number, sequence);
ALTER TABLE ONLY data.sec_filings
    ADD CONSTRAINT sec_filing_pkey PRIMARY KEY (accession_number);
ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_name_key UNIQUE (name);
ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
CREATE TRIGGER set_data_sec_companies_updated_at BEFORE UPDATE ON data.sec_companies FOR EACH ROW EXECUTE FUNCTION data.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_data_sec_companies_updated_at ON data.sec_companies IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_data_sec_filing_attachments_updated_at BEFORE UPDATE ON data.sec_filing_attachments FOR EACH ROW EXECUTE FUNCTION data.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_data_sec_filing_attachments_updated_at ON data.sec_filing_attachments IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_data_sec_filings_updated_at BEFORE UPDATE ON data.sec_filings FOR EACH ROW EXECUTE FUNCTION data.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_data_sec_filings_updated_at ON data.sec_filings IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY data.sec_filing_attachments
    ADD CONSTRAINT sec_filing_attachment_accession_number_fkey FOREIGN KEY (accession_number) REFERENCES data.sec_filings(accession_number) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY data.sec_filings
    ADD CONSTRAINT sec_filings_cik_fkey FOREIGN KEY (cik) REFERENCES data.sec_companies(cik) ON UPDATE RESTRICT ON DELETE RESTRICT;
