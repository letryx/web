CREATE OR REPLACE FUNCTION data.sec_search(search text)
returns setof data.sec_filing_attachments AS $$
SELECT
  attachment.*
FROM
  data.sec_filing_attachments AS attachment,
  plainto_tsquery(search) AS q
WHERE
  q @@ tsv_search_text
ORDER BY
  ts_rank(tsv_search_text, q) desc
$$
language sql stable;