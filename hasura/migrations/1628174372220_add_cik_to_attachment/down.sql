
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."sec_filing_attachment" add column "cik" text
--  null;

alter table "public"."sec_filing_attachment" alter column "cik" set default ''(select cik from sec_filing where sec_filing.accession_number  = new.accession_number)'::text';
alter table "public"."sec_filing_attachment" alter column "cik" drop not null;
alter table "public"."sec_filing_attachment" add column "cik" text;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."sec_filing_attachment" add column "cik" text
--  not null default '(select cik from sec_filing where sec_filing.accession_number  = new.accession_number)';

alter table "public"."sec_filing_attachment" alter column "cik" drop not null;
alter table "public"."sec_filing_attachment" add column "cik" text;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."sec_filing_attachment" add column "cik" text
--  null;
