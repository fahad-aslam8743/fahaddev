# FahadDev v8 — Conversion, Lead Capture, Responsive UX & SEO Rebuild

This version turns the site from a portfolio-first presentation into a clearer client-acquisition funnel while preserving the requested design rule: **centered hierarchy on desktop, left-aligned reading flow on mobile**.

## Funnel and UX changes
- Homepage now moves through: outcome-led hero → trust ribbon → client problem recognition → service self-selection → benefits → proof → delivery/value → stack → relevant experience → risk reduction → process → real reviews → FAQs → final CTA.
- Added dedicated service pages for:
  - `/services/ecommerce-development`
  - `/services/dashboard-development`
  - `/services/full-stack-web-app-development`
  - `/services/website-improvements`
- FAQ sections are now centered on desktop with questions directly below, while remaining left-aligned on mobile.
- About page “More than implementation” introduction is centered on desktop and left-aligned on mobile.
- Added a mobile lead bar after scroll with Project Brief and WhatsApp actions; it is intentionally hidden on Contact, Privacy and Admin.
- Added active navigation states and stronger internal linking in the footer.
- Contact page now explains what happens after a prospect messages, reducing uncertainty before the form.
- Removed the fragile `mailto:` project form and replaced it with on-site lead capture.
- Added project leads to the private admin dashboard with statuses: `new`, `contacted`, `qualified`, `won`, `closed`.
- Contact form includes WhatsApp/email fallback when the lead API is unavailable.
- Removed fabricated fallback testimonial content. Empty review states now stay truthful.
- Concept portfolio work is explicitly labeled as concept work.
- Added Youth Senate of Pakistan to Work so real organization experience is not hidden behind concept projects.
- Removed the dead “New Project” admin screen; portfolio case studies are code-managed in this build.

## SEO changes
- Unique canonical metadata and social images retained/enhanced across public pages.
- Added four dedicated service landing pages with unique copy, metadata, internal links, Service JSON-LD and BreadcrumbList JSON-LD.
- Added BreadcrumbList structured data to case studies.
- Removed obsolete FAQ rich-result JSON-LD. Google stopped showing FAQ rich results in May 2026 and removed the documentation in August 2026.
- Removed generic meta-keyword stuffing from root metadata.
- Sitemap now includes all service and case-study routes and avoids inaccurate always-current `lastModified` values.
- Robots now exclude all `/api/` and `/admin/` routes from crawling.
- Page-specific hero artwork is used for Open Graph/Twitter metadata where available.
- Footer now adds descriptive internal links to each core service page.
- Fixed root social metadata that referenced missing image files and added a real `manifest.webmanifest`.
- Added a concise `/privacy` route for contact/review data handling.
- Review create/edit/delete now revalidates the homepage so public feedback is not trapped behind a stale pre-rendered cache.

## Lead database setup
Run `supabase-setup.sql` once in the Supabase SQL Editor. It creates both `reviews` and `leads` tables.

Environment variables:
```text
NEXT_PUBLIC_SITE_URL=https://fahaddev.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser/client code.

## Security / dependency note
- Project remains on Next.js `15.5.25`, above the August 2026 maintenance security release floor (`15.5.24`).
- React / React DOM are updated to `19.1.8`, the latest published 19.1 line listed by React as of this audit.
- Admin login uses constant-time password comparison and an HTTP-only session cookie.
- Public forms use server-side length/format validation and honeypot fields.
- Production responses add HSTS and a Content Security Policy; development mode avoids CSP so Next.js HMR is not broken.

## Validation completed in this workspace
- TypeScript/TSX syntax-transpile validation: **49 files, 0 syntax errors**.
- Internal route/link inventory: **no suspicious broken internal links found**.
- CSS brace balance: **0**.
- FAQ rich-result schema references: **0**.

A full `next build` could not be executed in this workspace because npm registry access returned `EAI_AGAIN`; run `npm install && npm run build` in your normal environment or Vercel before production promotion.

## Launch checklist
1. Run `supabase-setup.sql`.
2. Add the environment variables above in Vercel.
3. Run `npm install` and `npm run build`.
4. Test Home, Services, all four service pages, Work, all case studies, Process, About, Contact and Privacy on desktop/mobile.
5. Submit `https://fahaddev.com/sitemap.xml` in Google Search Console.
6. Inspect the Home, Services, Work and Contact URLs in Search Console after production deployment.
7. Test one real project brief submission and confirm it appears under `/admin/dashboard`.
8. Test review posting/edit/delete before sharing the review feature publicly.
