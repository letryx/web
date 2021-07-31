
alter table "public"."org" rename column "auth0_connection_name" to "auth0_name";

alter table "public"."org" rename column "auth0_connection_id" to "auth0_id";

alter table "public"."org" alter column "auth0_display_name" drop not null;
alter table "public"."org" add column "auth0_display_name" text;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."org" add column "auth0_display_name" text
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."org" add column "auth0_name" text
--  null;

alter table "public"."org" drop constraint "org_auth0_id_key";
alter table "public"."org" alter column "auth0_id" drop not null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."org" add column "auth0_id" text
--  null;


-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."org_user";

alter table "public"."user" drop constraint "user_default_org_id_fkey";

DELETE FROM "public"."org" WHERE "id" = 1;

alter table "public"."user" alter column "default_org_id" set default '1';

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "default_org_id" integer
--  not null default '1';

DROP TABLE "public"."org_user";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."org" add column "updated_at" timestamptz
--  null default now();
--
-- CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
-- RETURNS TRIGGER AS $$
-- DECLARE
--   _new record;
-- BEGIN
--   _new := NEW;
--   _new."updated_at" = NOW();
--   RETURN _new;
-- END;
-- $$ LANGUAGE plpgsql;
-- CREATE TRIGGER "set_public_org_updated_at"
-- BEFORE UPDATE ON "public"."org"
-- FOR EACH ROW
-- EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
-- COMMENT ON TRIGGER "set_public_org_updated_at" ON "public"."org"
-- IS 'trigger to set value of column "updated_at" to current timestamp on row update';

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."org" add column "created_at" timestamptz
--  null default now();

DROP TABLE "public"."org";

DELETE FROM "public"."org_type" WHERE "value" = 'company';

DELETE FROM "public"."org_type" WHERE "value" = 'firm';

alter table "public"."user" drop constraint "user_id_key";
alter table "public"."user" add constraint "user_id_key" unique ("id");

alter table "public"."user" drop constraint "user_auth0_id_key";

alter table "public"."user" drop constraint "user_id_key";
alter table "public"."user" add constraint "user_id_key" unique ("id");

alter table "public"."user" drop constraint "user_pkey";
alter table "public"."user"
    add constraint "users_pkey"
    primary key ("auth0_id");

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user" add column "id" serial
--  not null unique;

alter table "public"."user" rename column "auth0_id" to "id";

DROP TABLE "public"."org_type";
