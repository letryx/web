
-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- drop schema "data" cascade;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION sec_search(search text)
--  RETURNS SETOF sec_filing_attachments
--  LANGUAGE sql
--  STABLE
-- AS $function$
-- SELECT
--   attachment.*
-- FROM
--   sec_filing_attachments AS attachment,
--   plainto_tsquery(search) AS q
-- WHERE
--   q @@ tsv_search_text
-- ORDER BY
--   ts_rank(tsv_search_text, q) desc
-- $function$;

-- alter table sec_companies
--   set schema data;
-- alter table sec_filings
--   set schema data;
-- alter table sec_filing_attachments
--   set schema data;
-- alter view sec_contracts
--   set schema data;
-- alter function sec_search
--   set schema data;
select 1;