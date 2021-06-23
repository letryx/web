
alter table "data"."sec_filings" add column "filing_type" text
 not null;

alter table "data"."sec_filing_attachments" alter column "filename" drop not null;

alter table "data"."sec_filing_attachments" alter column "description" drop not null;

alter table "data"."sec_filing_attachments" alter column "filing_type" drop not null;

alter table "data"."sec_filing_attachments" alter column "filing_type" set not null;

alter table "data"."sec_filings" alter column "header" drop not null;
