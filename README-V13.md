# FahadDev v13 — White Studio Live

This release rebuilds the public experience around a restrained, modern studio direction while preserving the working FahadDev business systems from v10/v12.

## Design direction

- White, editorial studio theme with restrained cobalt/cyan accents.
- Rounded floating navigation that never touches the viewport edges.
- Mobile hamburger opens a contained dropdown below the navbar; links reveal downward one by one.
- Every public page begins at the top after route navigation.
- Purposeful route entrances and scroll reveals without blur-heavy or constant motion.
- Live product-style hero systems on Home, Work, Services, Process, About, Contact and Privacy.
- Real featured project screenshot from the project CMS is used in the Home hero automatically when available.
- Interactive project-type showcase explains what the customer gets and what the business/team gets.
- Scroll-linked process story turns delivery stages into a visible product narrative.
- Responsive, left-aligned mobile reading flow retained.
- `prefers-reduced-motion` support retained.

## Business systems preserved

- Supabase lead inbox.
- Phone / WhatsApp capture.
- Gmail, WhatsApp and Call actions in Admin.
- Lead pipeline statuses.
- Moderated reviews: pending, approve, edit, unpublish and delete.
- Projects CMS: create, edit, publish/hide, reorder and delete.
- Project image upload via Supabase Storage.
- Project images reused across Home, Work and case studies.
- SEO metadata, sitemap, service pages and privacy page.

## Supabase

No new database migration is required for v13 if v10/v12 is already working.

If upgrading from an older build that does not yet have phone capture, run:

```sql
alter table public.leads
add column if not exists phone text;
```

## Environment variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_PASSWORD=choose_a_private_admin_password
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code.

## Run locally

```bash
npm install
npm run dev
```

Production compile:

```bash
npm run build
```

## Release validation

The release was source-audited for TS/TSX syntax, internal routes, local imports/assets and CSS structure. A complete `next build` could not be executed in the packaging environment because package installation could not complete there, so Vercel or your local machine remains the final compiler check.
