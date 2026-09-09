# FahadDev v19 — Two-Column Heroes Restored

This release removes the photographic/background hero experiment and restores the professional interactive two-column hero system.

## Hero behavior

- Desktop/laptop: copy on the left, interactive coded product/system visual on the right.
- Mobile/tablet (<= 860px): hero visual is fully hidden. Only the headline, description and CTAs remain.
- Service-detail and case-study heroes follow the same rule.
- Generated `/public/hero-scenes` assets were removed from the release.
- Existing rounded navbar, funnel content, admin, leads, reviews, project CMS and Supabase integration are retained.

## Validation

- 54 TS/TSX files transpile with 0 syntax diagnostics.
- CSS brace balance: 0.
- 46 literal internal links checked, 0 unresolved.
- Coded HeroSystem restored.
- Desktop two-column layout verified in source.
- Mobile hero-media hide rule verified in source.

No Supabase migration is required.
