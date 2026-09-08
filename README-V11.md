# FahadDev v11 — Live Dynamic Experience

v11 builds on the working v10 funnel, admin CMS, lead inbox and review moderation. It changes the public site from a polished static brochure into a more interactive independent-builder experience without adding a motion framework or changing the database.

## What changed

- Global scroll progress line.
- Cursor-responsive ambient light on desktop/fine-pointer devices.
- Sticky navigation becomes a lighter glass surface after scrolling.
- Public hero backgrounds now react visually to pointer position and animate subtly.
- Hero system diagrams have pointer tilt, scanning light, animated bars, live pills and staged motion.
- Homepage headline has a kinetic gradient emphasis and live-status treatment.
- Added a continuously moving capability ticker directly below the homepage hero.
- Added page-specific kinetic tickers to Work, Services, Process, About and Contact.
- Added dynamic tickers to service-detail and case-study heroes.
- Added an interactive "What needs to move?" outcome switcher on Home:
  - Sell more clearly
  - Run operations better
  - Build a real product
  - Fix what already exists
- The switcher changes copy, bullets, CTA, system graphic and signal path instantly.
- Project cards now react to pointer position with controlled 3D tilt and glare.
- Generic content cards use a softer moving-light response rather than a static shadow-only hover.
- Stack tool rows react on hover without scattering the layout.
- FAQ open/close states now animate more clearly.
- Reveal motion uses blur + depth + easing instead of a simple fade.
- Page hero writing was made more direct/personal so the brand feels like an independent builder rather than a consultancy.
- Admin pages do not receive the ambient/cursor motion layer.
- `prefers-reduced-motion` disables nonessential animation.
- No Framer Motion or other new runtime dependency was added.

## Database

No database migration is required when upgrading from v10 to v11.

Keep the same Supabase tables, storage bucket and environment variables.

## Environment variables

```env
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_PASSWORD=...
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

## Run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm start
```

## Release audit

- TypeScript/TSX syntax parsed independently of missing dependencies.
- No unresolved literal internal links in the source audit.
- No missing local image references found.
- CSS block braces balanced.
- No new package dependency added for the dynamic experience.

The local environment used to prepare this release could not complete `npm install`, so the final Next.js production compiler check should be run locally or by Vercel.
