# FahadDev v16 — Coded Background Heroes

This release replaces the v15 photographic/split-column hero system with a fully coded, background-led hero system.

## What changed
- All public hero headings are black again.
- Primary buttons keep a restrained blue/indigo/violet accent; gradients are no longer used as headline text.
- Home, Work, Services, Process, About, Contact and Privacy each use a different coded hero scene.
- Service-detail pages adapt the hero scene to commerce, dashboard/internal tools, full-stack apps or improvement work.
- Case-study heroes use project context and visual variants instead of reusing a generic hero image.
- Hero content now sits on top of the visual background instead of next to a separate media column.
- Old `/public/heroes-v15` photographic assets were removed.
- Mobile heroes use a dedicated lower-background composition and a compact short-phone mode.
- Existing admin, leads, review moderation, projects CMS and Supabase behavior remain unchanged.

## Database
No new Supabase migration is required.

## Environment
Use the same environment variables as the previous working release.

## Final build check
Source-level syntax, routes, assets and CSS were audited. A full `npm install` could not complete in the build workspace due registry/network timeout, so run `npm install && npm run build` locally or let Vercel perform the final compiler/runtime check.
