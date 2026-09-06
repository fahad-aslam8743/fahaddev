# FahadDev v7 — Conversion, Responsive UX & Advanced SEO Rebuild

This pass replaces the accumulated v5/v6 styling with one clean CSS system and focuses on conversion, mobile/desktop polish, navigation clarity, useful FAQs and technical SEO.

## UX / funnel fixes
- Desktop keeps centered section introductions where that hierarchy works best.
- Mobile deliberately switches those introductions and hero copy back to left alignment.
- Desktop navigation is reduced to Home, Services, Work, Process, About + one `Start a Project` CTA.
- Compact FahadDev mark + text on desktop; icon-only brand treatment on mobile.
- Full-screen mobile menu has its own fixed top-level stacking layer and body scroll lock.
- Contact hero no longer links back to the contact page. It offers WhatsApp and an anchor to the project brief.
- Contact cards are compact and responsive instead of oversized desktop blocks.
- WhatsApp: `https://wa.me/923255504461`.
- Unique hero artwork remains in place for Home, Work, Services, Process, About and Contact.
- Stack section is grouped by the client outcome each technology supports instead of a vague logo wall.
- Organization/product proof is separated from the technology stack to avoid duplicate logos.
- Large FAQ sections added to Home, Services, Work, Process, About and Contact.
- Existing instant review + admin edit/delete system retained.

## SEO implemented
- Unique page titles and meta descriptions.
- Canonical URLs for all public pages.
- Open Graph + Twitter Card metadata and a 1200×630 social image.
- `sitemap.ts` including every case study.
- `robots.ts` allowing public pages while excluding `/admin` and `/api/admin`.
- `manifest.ts`, favicon, app icon and Apple touch icon.
- WebSite + ProfessionalService JSON-LD.
- FAQ structured data on Home and Contact.
- CreativeWork structured data + dynamic metadata for every case study.
- Breadcrumbs on interior heroes and case studies.
- Admin routes set to `noindex`.
- Optional Google Search Console verification through an environment variable.
- Semantic headings, skip link, focus states, reduced-motion support and responsive image handling.
- Security headers, compression, AVIF/WebP image support and `poweredByHeader: false`.

## Environment variables
```text
NEXT_PUBLIC_SITE_URL=https://fahaddev.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
CONTACT_EMAIL=hello@fahaddev.com
```

`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is optional until Google Search Console gives you a verification token.

## Reviews
Run `reviews.sql` once in Supabase SQL Editor. Then add the Supabase URL, server secret/service role value and admin password to Vercel.

## Search launch checklist
1. Confirm `NEXT_PUBLIC_SITE_URL` matches the final canonical domain.
2. Deploy production.
3. Add the domain property to Google Search Console.
4. Add the verification token to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` if using the HTML-tag verification method.
5. Submit `https://fahaddev.com/sitemap.xml` in Search Console.
6. Inspect Home, Services, Work and Contact with URL Inspection after deployment.
