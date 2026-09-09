# FahadDev v17 — Distinct Hero Visuals Audit

## Hero redesign
- Replaced the v16 coded-scene hero renderer with real background-image scenes.
- 11 desktop hero backgrounds plus 11 mobile-specific background variants.
- Top-level pages use distinct scenes: Home, Services, Work, Process, About, Contact, Privacy.
- Service detail pages use distinct visuals for e-commerce, dashboards/internal tools, full-stack web apps, and website improvements.
- Case studies use the actual project image from the CMS when one exists, with the Work scene as a fallback.
- Hero copy stays real HTML above the image; generated visuals are background art, not the content layer.

## Readability / responsive work
- Strong white editorial gradient behind copy on desktop.
- Mobile swaps to dedicated mobile hero assets with a quiet upper area and visual subject lower in the hero.
- Headings remain black; body copy remains dark neutral.
- Primary/secondary button contrast is preserved.
- Case-study copy receives a light translucent panel when sitting over project imagery.

## Validation
- 22 local WebP hero assets present.
- CSS brace balance clean.
- HeroSystem source references desktop + mobile assets.
- Case-study hero image wiring confirmed.
- No Supabase/database changes required.

## Build note
A complete Next.js build was not run because project dependencies are not installed in this environment. Vercel or local `npm install && npm run build` remains the final compiler/runtime check.
