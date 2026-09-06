# FahadDev v2 rebuild

Production-oriented Next.js rebuild based on the supplied Master Rebuild Prompt v2.

## Run
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Admin
Set `ADMIN_PASSWORD` in `.env.local`, then open `/admin`.

## Supabase
The dashboard will read a `projects` table when `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are configured. The current package ships safe seeded portfolio data so the marketing site is not empty before database setup.

Recommended table columns: `id uuid primary key default gen_random_uuid()`, `title text`, `slug text unique`, `short_description text`, `full_description text`, `cover_image text`, `gallery jsonb`, `live_url text`, `tech_tags text[]`, `featured boolean default false`, `order int default 0`, `created_at timestamptz default now()`.

Before launch: replace the About portrait placeholder, add the real ÉLITES live URL/screenshots, connect the contact form to Resend/Formspree/server action, wire project create/edit/delete actions, and add Supabase Storage uploads.
