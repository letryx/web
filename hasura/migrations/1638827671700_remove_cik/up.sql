DROP FUNCTION public.sec_search(text, date, date, text, text, text, text, text, text[]);
CREATE OR REPLACE FUNCTION public.sec_search(search text DEFAULT NULL::text, filing_date_lt date DEFAULT NULL::date, filing_date_gt date DEFAULT NULL::date, description_includes text DEFAULT NULL::text, description_excludes text DEFAULT NULL::text, company_name_includes text DEFAULT NULL::text, company_name_excludes text DEFAULT NULL::text, contract_type_eq text DEFAULT NULL::text)
 RETURNS SETOF sec_contract
 LANGUAGE sql
 STABLE
AS $function$
SELECT
  a.accession_number,
  a.sequence,
  a.company_name,
  a.company_cik,
  a.company_geo,
  a.company_sic,
  a.company_sic_name,
  a.filing_type,
  a.filing_header,
  a.filing_date,
  a.description,
  a.attachment_type,
  a.tsv_search_text,
  ts_rank(tsv_search_text, q) AS relevance,
  a.contract_type
FROM
  sec_contract AS a,
  plainto_tsquery(search) AS q
WHERE
  (
    search is null
    or search = ''
    or q @@ tsv_search_text
  )
  and (
    filing_date_lt is null
    or filing_date <= filing_date_lt
  )
  and (
    filing_date_gt is null
    or filing_date >= filing_date_gt
  )
  and (
    description_includes is null
    or description ilike concat('%', trim(description_includes), '%')
  )
  and (
    description_excludes is null
    or description not ilike concat('%', trim(description_excludes), '%')
  )
  and (
    company_name_includes is null
    or company_name ilike concat('%', trim(company_name_includes), '%')
  )
  and (
    description_excludes is null
    or company_name not ilike concat('%', trim(description_excludes), '%')
  )
  and (
    contract_type_eq is null
    or a.contract_type = contract_type_eq
  )
ORDER BY
  relevance desc
$function$;
