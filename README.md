# FahadDev v20 — Mobile Hero Elements + Service Depth

This release keeps the professional desktop two-column hero system from v19 and restores the coded hero elements on mobile in a compact, controlled format. It also expands all four service detail pages with much stronger trust-building information.

## Hero behavior

### Desktop / laptop
- Copy remains on the left.
- The coded live product visual remains on the right.
- No generated hero photography is used.

### Mobile / tablet
- The coded hero element is visible again.
- It is intentionally scaled and clipped as a compact product preview instead of becoming a second full-screen block.
- The hero label is removed on mobile to reduce height and noise.
- Copy and CTAs remain the priority.

## Service pages

Each service detail page now explains:
- the business outcomes the work should improve;
- the typical project scope;
- how the project moves from discovery to launch;
- what happens under the visible interface;
- project-specific launch/quality checks;
- what source/access/ownership the client keeps after handoff;
- expanded FAQs.

The four service routes remain:
- `/services/ecommerce-development`
- `/services/dashboard-development`
- `/services/full-stack-web-app-development`
- `/services/website-improvements`

The main Services page also shows all four outcomes plus a short “usually includes” scope preview for each service.

## Database

No new Supabase migration is required. Leads, review moderation, project CMS, image uploads and admin behavior are unchanged.

## Environment

Use the same environment variables as the current working deployment.

## Final production check

Source, routes and CSS were audited in this workspace. Dependencies are not installed here, so the final Next.js compiler/runtime check should still be `npm install && npm run build` locally or the Vercel production build.
