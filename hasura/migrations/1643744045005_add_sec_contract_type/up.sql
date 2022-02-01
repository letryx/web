
CREATE TABLE "public"."sec_contract_type" ("id" serial NOT NULL, "parent_id" integer, "name" text NOT NULL, PRIMARY KEY ("id") );

alter table "public"."sec_contract_type"
  add constraint "sec_contract_type_parent_id_fkey"
  foreign key ("parent_id")
  references "public"."sec_contract_type"
  ("id") on update restrict on delete restrict;

alter table "public"."sec_filing_attachment" add column "contract_type_id" integer
 null;

alter table "public"."sec_filing_attachment"
  add constraint "sec_filing_attachment_contract_type_id_fkey"
  foreign key ("contract_type_id")
  references "public"."sec_contract_type"
  ("id") on update restrict on delete restrict;
