# FahadDev v12 — Professional Liquid Glass Experience

This release intentionally rolls the public-facing interaction design back to the stable v10 business/CMS base and replaces the v11 high-energy motion language with a restrained, Apple-inspired glass design system.

## What stays from v10

- Supabase lead inbox
- Gmail / WhatsApp / Call actions in Admin
- Lead pipeline statuses
- Review moderation and approval
- Review edit / unpublish / delete
- Project CRUD
- Project image uploads
- Supabase Storage integration
- SEO pages, sitemap, metadata and existing business funnel

## What changed in v12

### Design language
- Floating translucent navigation layer
- Light editorial page backgrounds
- Frosted glass controls and interactive surfaces
- Large product-style typography and spacing
- Softer shadows, blue optical highlights and restrained depth
- Rounded product canvases rather than developer-tool windows
- Cleaner project, service, FAQ, form and stack presentation
- Mobile remains left aligned and deliberately calmer

### New interaction 1: product showcase
The homepage now includes a segmented product explorer for:
- Commerce
- Internal tools
- Full-stack products
- Existing-site improvements

Changing the selected problem updates the content, business outcomes, CTA and product canvas in place.

### New interaction 2: scroll-linked delivery story
The delivery section now follows the reader through:
1. Understand
2. Shape
3. Build & review
4. Launch & hand off

The product canvas updates as the relevant stage enters the reading area. Motion follows content instead of running continuously.

### Hero system
Every main page still has a page-specific hero visual, but the old dark window / LIVE-badge style has been replaced with a softer product-interface system:
- Home: conversion path
- Work: case-study structure
- Services: connected delivery layers
- Process: visible delivery stages
- About: builder principles
- Contact: project-intake flow

## Database
No new SQL migration is required when upgrading from v10 or v11.

Use the same environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_PASSWORD=...
NEXT_PUBLIC_SITE_URL=...
```

## Local run

```bash
npm install
npm run dev
```

## Production check

```bash
npm install
npm run build
```

The build could not be executed in the packaging environment because npm dependencies were not available in the local cache and external registry access was unavailable. Source-level TypeScript/TSX transpilation and route/asset audits were completed instead.
