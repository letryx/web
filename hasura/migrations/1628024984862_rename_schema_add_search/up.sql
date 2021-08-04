
alter table data.sec_companies
  set schema public;
alter table data.sec_filings
  set schema public;
alter table data.sec_filing_attachments
  set schema public;
alter view data.sec_contracts
  set schema public;
CREATE OR REPLACE FUNCTION sec_search(search text)
 RETURNS SETOF sec_filing_attachments
 LANGUAGE sql
 STABLE
AS $function$
SELECT
  attachment.*
FROM
  sec_filing_attachments AS attachment,
  plainto_tsquery(search) AS q
WHERE
  q @@ tsv_search_text
ORDER BY
  ts_rank(tsv_search_text, q) desc
$function$;

drop schema "data" cascade;
