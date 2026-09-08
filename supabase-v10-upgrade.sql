-- FahadDev v10 upgrade for an existing v9 database.
-- Safe to run more than once.

alter table public.leads add column if not exists phone text;

-- New v10 contact submissions require phone/WhatsApp at the application layer.
-- The database column intentionally remains nullable so older enquiries are preserved.
