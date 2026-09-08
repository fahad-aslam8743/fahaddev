# FahadDev v15 — Human Studio Hero System

This release uses the supplied visual reference as a composition benchmark, not as a copied design.

## What changed

- Floating rounded navigation with spacing from every screen edge.
- Primary CTA and major public headings now use one restrained blue → indigo → violet gradient identity.
- Home hero rebuilt around a bright studio scene and a product/browser composition.
- If an Admin-uploaded featured project screenshot exists, Home places the real project inside the hero browser.
- Work, Services, Process, About, Contact and Privacy each have their own hero background and their own explanatory scene.
- Service-detail heroes vary their visual background according to service type.
- Case-study fallback heroes vary by project; uploaded project screenshots remain the preferred case-study image.
- Mobile hero is intentionally compact: smaller editorial headline, compact two-button row, no breadcrumb/microproof clutter, and a capped visual height.
- Existing funnel, Supabase, leads, review moderation, project CMS and admin behavior are unchanged.

## Mobile behavior

The mobile hero is not a shrunk desktop hero. At phone widths:

- navigation stays inset and rounded;
- copy remains left aligned;
- breadcrumbs and redundant proof rows are removed from the first screen;
- two hero actions remain compact;
- the hero artwork is capped around 214–278px depending on viewport height;
- content is never clipped because the hero uses min-height, not a fixed page height.

## Database

No new Supabase migration is required when upgrading from v14.5.

## Required environment variables

Use the same environment variables as the previous build:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`

## Final production check

Run:

```bash
npm install
npm run build
```

Then deploy the successful build to Vercel.
