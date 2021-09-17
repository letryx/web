CREATE OR REPLACE FUNCTION sec_contract_uid(contract_row sec_contract)
RETURNS TEXT AS $$
  SELECT CONCAT(contract_row.accession_number, '/', contract_row.sequence::text)
$$ LANGUAGE sql STABLE;
