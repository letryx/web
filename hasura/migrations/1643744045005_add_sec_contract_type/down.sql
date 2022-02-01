
alter table "public"."sec_filing_attachment" drop constraint "sec_filing_attachment_contract_type_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."sec_filing_attachment" add column "contract_type_id" integer
--  null;

alter table "public"."sec_contract_type" drop constraint "sec_contract_type_parent_id_fkey";

DROP TABLE "public"."sec_contract_type";
