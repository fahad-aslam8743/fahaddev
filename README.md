# FahadDev v6 — Client-First Conversion Rebuild

This version is a structural rebuild focused on client conversion and desktop/mobile polish.

## Major fixes
- Rebuilt navigation with an explicit Home link and a conditional full-screen mobile menu rendered at the document root level.
- Mobile menu has its own close button and very high fixed z-index; body scroll locks only while the menu is actually rendered.
- Six unique hero visuals: Home, Work, Services, Process, About, Contact.
- Desktop layout rebalanced around a centered 1200px container, centered section introductions, consistent card spacing and one CTA hierarchy.
- Removed duplicate technology/logo strip below the hero. Technology appears once in the dedicated stack section.
- Added direct WhatsApp contact: +92 325 5504461.
- Reworked homepage funnel: hero → proof ribbon → client benefits → work → business outcomes → stack → client/ecosystem proof → direct-build benefits → flexible process → testimonials → consultation CTA.
- No fixed week-based delivery promises.
- Reviews/admin/Supabase functionality from v5 is retained.

## Environment variables
- NEXT_PUBLIC_SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- ADMIN_PASSWORD

## WhatsApp
The contact page and footer link to `https://wa.me/923255504461`.
