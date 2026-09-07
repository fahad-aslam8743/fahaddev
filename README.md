# FahadDev v9 — Moderated Reviews, Portfolio CMS & Visual Polish

This version builds on the CEO/conversion rebuild and adds a real content-management workflow for the two trust surfaces that matter most: **client reviews and portfolio work**. The design rule remains unchanged: **centered hierarchy on desktop, left-aligned reading flow on mobile**.

## What changed in v9

### Review moderation
- Public review submissions are now saved as **pending**.
- Pending reviews never render on the public homepage.
- `/admin/dashboard` shows pending and published counts plus filters.
- Admin can edit the reviewer name, company, role, review copy and rating.
- **Approve & publish** makes a pending review public and refreshes the homepage.
- **Unpublish** hides a review without deleting it.
- **Delete** permanently removes it.
- Existing v8 reviews are migrated to `approved` when `supabase-setup.sql` is rerun, so real existing feedback is not accidentally hidden.

### Functional portfolio admin
- Projects are no longer locked inside `lib/projects.ts` after database setup.
- Admin now has **Add new work**.
- Every work item can be expanded and edited in place.
- Editable fields include title, slug, type, timeline label, display order, live URL, stack, concept flag, publish state, summary, problem, approach, build and result.
- Projects can be deleted from Admin.
- New or hidden work can be published/unpublished without deleting it.
- Existing Youth Senate, ÉLITES, Pulse and Loom Studio projects are seeded into Supabase so they are immediately editable after setup.

### Project image management
- Admin accepts JPG, PNG or WebP project screenshots up to 4 MB.
- Images are uploaded server-side to a public Supabase Storage bucket named `project-images`.
- One uploaded project image automatically appears on:
  - homepage Featured Work
  - Work page project card
  - individual case-study hero
- Replacing/deleting a project also cleans up the previous stored image when possible.

### Visual polish
- Rebuilt the homepage “Built for mobile / Built for action / Built as a system / Built to hand over” strip as a lighter premium promise rail with consistent icon blocks.
- Rebuilt the stack section into equal tool tiles with controlled icon sizing, spacing and alignment instead of loose logo chips.
- Added polished project-image overlays and case-study image treatment.
- Upgraded Admin from a basic table into an operational dashboard with overview metrics, moderation states, filters, expandable portfolio editors and upload previews.

## Supabase setup — required once after upgrading
Run `supabase-setup.sql` in the Supabase SQL Editor. It is written to be safe to run again and will:
1. upgrade reviews with `pending` / `approved` moderation fields;
2. preserve existing reviews as approved;
3. keep the leads table;
4. create the editable `projects` table;
5. seed the four existing portfolio projects if they are missing;
6. create/update the public `project-images` Storage bucket.

Environment variables stay the same:
```text
NEXT_PUBLIC_SITE_URL=https://fahaddev.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser/client code.

## Validation completed in this workspace
- TypeScript/TSX syntax-transpile validation: **53 files, 0 syntax errors**.
- CSS braces: balanced.
- Known public routes: **15**, with dynamic project routes enabled for new Admin-created work.
- Broken literal internal links found: **0**.
- Critical feature audit passed for:
  - pending review inserts
  - approved-only public reviews
  - project CRUD API
  - project-image upload API
  - Admin Add/Edit/Delete UI
  - Supabase Storage setup
  - project images on cards
  - project images on case studies

A complete `next build` could not be executed here because dependency installation timed out in this environment. Run `npm install && npm run build` locally or let Vercel run the production build before promotion.

## Launch checklist
1. Run the new `supabase-setup.sql` once.
2. Confirm the existing four projects appear under `/admin/dashboard`.
3. Upload one project screenshot and verify it appears on Home, Work and its case-study page.
4. Submit one public review and confirm it appears as **Pending** in Admin but not on Home.
5. Approve the review and confirm it appears publicly.
6. Unpublish it and confirm it disappears without being deleted.
7. Add a temporary new project, publish it, verify its route, then delete it.
8. Run `npm install && npm run build` before production deployment.
