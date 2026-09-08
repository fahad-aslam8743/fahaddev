# FahadDev v10 — Seamless UI + Actionable Lead Inbox

This version builds on v9 and focuses on two things that directly affect client acquisition: **a modern, coherent visual system across every public hero** and **a lead inbox that lets you reply immediately instead of only reading enquiries**.

The site still follows the established responsive rule: **desktop uses centered section hierarchy and balanced compositions; mobile uses a natural left-aligned reading flow**.

## What changed in v10

### 1. Contact enquiries now include WhatsApp / phone
- The project brief now collects name, email, WhatsApp/phone, company, website, project type, project shape and the actual brief.
- Phone is required for new submissions so each new lead can be answered through email or WhatsApp/phone.
- Existing v9 leads are preserved even if they do not already have a phone number.
- The privacy page now explicitly explains that the submitted phone number is used to reply to the enquiry.

### 2. Admin is now an actionable sales inbox
Every lead card on `/admin/dashboard` now includes:
- **Gmail** button with a Gmail compose window addressed to that lead;
- **WhatsApp** button with a prepared first-reply message;
- **Call** button using the saved phone number;
- lead status: new → contacted → qualified → won → closed;
- search across name, email, phone, company, project and message;
- status filters;
- project URL, project type, size, message and received date;
- permanent delete control.

Older enquiries that have no phone number still render safely and show that WhatsApp is unavailable for that historical record.

### 3. Rebuilt the hero system across the public site
The previous repeated screenshot-in-a-frame treatment has been removed from the actual page UI.

The new heroes are interface-native product scenes rather than ambiguous decorative images:
- **Home:** customer journey from arrival → understanding → action;
- **Work:** project systems and problem/build/outcome proof structure;
- **Services:** connected business/product architecture;
- **Process:** visible discovery → shape → build → verify → launch route;
- **About:** product thinking + direct-builder principles;
- **Contact:** actual project-intake and response-channel model;
- **Service detail pages:** the visual changes according to commerce, dashboard, full-stack app or focused-improvement intent;
- **Case-study pages:** project screenshots become a proper hero when available; otherwise a structured work-system visual is used.

### 4. Homepage visual discipline
- Rebuilt the “Built for mobile / Built for action / Built as a system / Built to hand over” area into one contained white trust surface rather than a colored band.
- Rebuilt the technology section again so tools appear as compact aligned rows inside three purpose-based groups instead of scattered icon tiles.
- Unified borders, shadows, radius, card hover behavior and alternate-section backgrounds.

### 5. Social preview cleanup
- Removed the old repeated hero illustration assets from the live UI path.
- Rebuilt the default Open Graph / Twitter share card at the correct **1200 × 630** ratio.
- All default page metadata now uses the new branded social card.
- Real uploaded portfolio screenshots can still be used for individual case-study sharing.

## Supabase upgrade — required

If you already ran the v9 setup, the only new database migration required by v10 is:

```sql
alter table public.leads add column if not exists phone text;
```

You can run `supabase-v10-upgrade.sql` for that one-line upgrade.

Alternatively, `supabase-setup.sql` has also been updated and is designed to be safe to run again. It contains the phone migration plus the existing reviews, leads, projects and project-image storage setup.

## Environment variables

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=use-a-long-private-password
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code.

## Validation completed

- TS/TSX source syntax validation: **52 files, 0 syntax errors** after removing obsolete hero components.
- CSS brace balance: clean.
- Known routes audited: **16** including admin and seeded dynamic service/work routes.
- Literal internal links audited: **35, 0 broken**.
- Referenced local assets missing: **0**.
- Critical lead workflow checks passed:
  - phone capture
  - phone API insert
  - phone database migration
  - Gmail compose action
  - WhatsApp reply action
  - Call action
  - search + lead filters
- Hero coverage checks passed for Home, all top-level pages, service-detail routes and case-study routes.
- New Open Graph and Twitter images verified at 1200 × 630.

A complete `next build` could not be executed in this workspace because `npm install` timed out before dependencies could be downloaded. Source-level validation passed; run `npm install && npm run build` locally or let Vercel perform the production build before promotion.

## v10 launch checklist

1. Run `supabase-v10-upgrade.sql` in Supabase SQL Editor (or rerun the full `supabase-setup.sql`).
2. Redeploy v10 with the same environment variables.
3. Submit a test project brief with your own email and phone.
4. Open `/admin/dashboard` and confirm the lead appears.
5. Test **Gmail**, **WhatsApp** and **Call** from the lead card.
6. Move the test lead through statuses and test search/filtering.
7. Verify Home, Services, Work, Process, About and Contact heroes on desktop and mobile.
8. Upload a real project screenshot in Admin and confirm it appears on Home, Work and that case-study hero.
9. Run a production build / deployment check before pointing the final domain.
