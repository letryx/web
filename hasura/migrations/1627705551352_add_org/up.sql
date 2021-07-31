

CREATE TABLE "public"."org_type" ("value" text NOT NULL, "comment" text, PRIMARY KEY ("value") , UNIQUE ("value"));

alter table "public"."user" rename column "id" to "auth0_id";

alter table "public"."user" add column "id" serial
 not null unique;

BEGIN TRANSACTION;
ALTER TABLE "public"."user" DROP CONSTRAINT "users_pkey";

ALTER TABLE "public"."user"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;

alter table "public"."user" drop constraint "user_id_key";
alter table "public"."user" add constraint "user_id_key" unique ("id");

alter table "public"."user" add constraint "user_auth0_id_key" unique ("auth0_id");

alter table "public"."user" drop constraint "user_id_key";
alter table "public"."user" add constraint "user_id_key" unique ("id");

INSERT INTO "public"."org_type"("value", "comment") VALUES (E'firm', E'Law Firm');

INSERT INTO "public"."org_type"("value", "comment") VALUES (E'company', E'Company');

CREATE TABLE "public"."org" ("id" serial NOT NULL, "name" text NOT NULL, "type" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("type") REFERENCES "public"."org_type"("value") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"), UNIQUE ("name"));

alter table "public"."org" add column "created_at" timestamptz
 null default now();

alter table "public"."org" add column "updated_at" timestamptz
 null default now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_org_updated_at"
BEFORE UPDATE ON "public"."org"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_org_updated_at" ON "public"."org" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."org_user" ("org_id" integer NOT NULL, "user_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("org_id","user_id") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE cascade ON DELETE cascade, FOREIGN KEY ("org_id") REFERENCES "public"."org"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("org_id", "user_id"), UNIQUE ("user_id", "org_id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_org_user_updated_at"
BEFORE UPDATE ON "public"."org_user"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_org_user_updated_at" ON "public"."org_user" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

alter table "public"."user" add column "default_org_id" integer
 not null default '1';

ALTER TABLE "public"."user" ALTER COLUMN "default_org_id" drop default;

INSERT INTO "public"."org"("id", "name", "type", "created_at", "updated_at") VALUES (1, E'Letryx', E'company', E'2021-07-30T21:52:01.347773+00:00', E'2021-07-30T21:52:01.347773+00:00');

alter table "public"."user"
  add constraint "user_default_org_id_fkey"
  foreign key ("default_org_id")
  references "public"."org"
  ("id") on update restrict on delete restrict;

DROP table "public"."org_user";

alter table "public"."org" add column "auth0_id" text
 null;

alter table "public"."org" alter column "auth0_id" set not null;
alter table "public"."org" add constraint "org_auth0_id_key" unique ("auth0_id");

alter table "public"."org" add column "auth0_name" text
 null;

alter table "public"."org" add column "auth0_display_name" text
 null;

alter table "public"."org" drop column "auth0_display_name" cascade;

alter table "public"."org" rename column "auth0_id" to "auth0_connection_id";

alter table "public"."org" rename column "auth0_name" to "auth0_connection_name";
