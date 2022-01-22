alter table "public"."sec_filing_attachment" drop constraint "sec_filing_attachment_pkey";
alter table "public"."sec_filing_attachment"
    add constraint "sec_filing_attachment_pkey"
    primary key ("accession_number", "sequence");
