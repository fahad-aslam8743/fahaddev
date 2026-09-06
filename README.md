# FahadDev v5 — client-first funnel + mobile navigation rebuild

This version fixes the mobile menu by moving the full-screen overlay outside the sticky/backdrop-filter header stacking context, adds hard horizontal-overflow containment, adds real image assets to every hero, adds scroll reveals/floating micro-motion, rebuilds the stack as branded technology tiles with client outcomes, and restructures core page copy around what clients get.

Reviews/admin from v4 remain in place. Required environment variables are unchanged:
- NEXT_PUBLIC_SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- ADMIN_PASSWORD

Run `reviews.sql` once in Supabase if the reviews table has not been created yet.
