BEGIN TRANSACTION;
ALTER TABLE "public"."sec_filing_attachment" DROP CONSTRAINT "sec_filing_attachment_pkey";

ALTER TABLE "public"."sec_filing_attachment"
    ADD CONSTRAINT "sec_filing_attachment_pkey" PRIMARY KEY ("uid");
COMMIT TRANSACTION;
