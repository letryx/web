CREATE OR REPLACE FUNCTION public.sec_search(search text)
 RETURNS SETOF sec_filing_attachment
 LANGUAGE sql
 STABLE
AS $function$
SELECT
  attachment.*
FROM
  sec_filing_attachment AS attachment,
  plainto_tsquery(search) AS q
WHERE
  search = '' or q @@ tsv_search_text
ORDER BY
  ts_rank(tsv_search_text, q) desc
$function$
