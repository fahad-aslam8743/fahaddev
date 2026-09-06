# FahadDev v4

Production-focused Next.js portfolio rebuild.

## What changed
- Rebuilt mobile navigation and removed horizontal viewport drift.
- New professional home hero and tech visuals on every primary page.
- Reworked Work, Services, Process, About, and Contact funnels.
- Removed fixed week-based process promises.
- Rebuilt stack section.
- Added organization/project-brand proof section without fabricated partnerships.
- Added testimonials and public review submission.
- Added admin review editing/deletion.

## Reviews setup
Run `reviews.sql` once in the Supabase SQL editor.

Required server environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`

Public review submissions go through `/api/reviews` and publish immediately. The private `/admin/dashboard` page can edit/delete reviews.

## Development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```
