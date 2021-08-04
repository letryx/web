update sec_filing
set filing_date = TO_DATE(substring(header from 'FILED AS OF DATE\s*:\s*([0-9]+).*'), 'YYYYMMDD');

ALTER TABLE sec_filing ALTER COLUMN filing_date SET NOT NULL;
