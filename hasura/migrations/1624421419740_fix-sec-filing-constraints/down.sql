
alter table "data"."sec_filings" alter column "header" set not null;

alter table "data"."sec_filing_attachments" alter column "filing_type" drop not null;

alter table "data"."sec_filing_attachments" alter column "filing_type" set not null;

alter table "data"."sec_filing_attachments" alter column "description" set not null;

alter table "data"."sec_filing_attachments" alter column "filename" set not null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "data"."sec_filings" add column "filing_type" text
 not null;
