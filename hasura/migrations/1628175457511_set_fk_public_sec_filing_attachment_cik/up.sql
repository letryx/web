alter table "public"."sec_filing_attachment"
  add constraint "sec_filing_attachment_cik_fkey"
  foreign key ("cik")
  references "public"."sec_company"
  ("cik") on update restrict on delete restrict;
