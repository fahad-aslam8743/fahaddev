# FahadDev v12 Changelog

## Direction
- Rolled the public experience back to the stable v10 base.
- Did not carry forward v11 ticker, cursor-glow, tilt-glare, capability-ticker or "live" gimmick effects.
- Rebuilt the public UI around restrained product-page interaction and Liquid Glass-inspired hierarchy.

## New
- `components/ProductShowcase.tsx`
- `components/BuildStory.tsx`
- New glass hero system in `components/HeroSystem.tsx`
- Floating glass navigation styling
- Product-style segmented controls
- Scroll-linked delivery story
- New responsive glass product canvases

## Restyled
- Home and page heroes
- Navigation
- Buttons
- Promise rail
- Service and benefit cards
- Project cards
- Stack section
- FAQs
- Contact form and channels
- Service detail surfaces
- Case-study hero surfaces
- CTA bands

## Preserved
- Lead inbox
- Gmail / WhatsApp / Call actions
- Project CMS + image upload
- Review moderation
- Supabase schema
- SEO structure and public routes

## Validation
- 53 TS/TSX files transpiled with 0 syntax errors
- CSS brace balance passed
- 17 known routes
- 35 literal internal links, 0 broken
- 11 local asset references, 0 missing
- No v11 interaction-class leftovers detected
