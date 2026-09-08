# FahadDev v14 — Faster Reveal + Mobile Scope Fix

This release keeps the v13 White Studio design and all existing admin/Supabase functionality.

## Changes

- Reveal animations trigger earlier and complete much faster.
- Main reveal duration reduced from 720ms to 360ms.
- Nested stagger transitions reduced from 550ms to 300ms.
- Stagger gaps reduced from 70ms steps to 25ms steps.
- IntersectionObserver now starts reveals earlier in the viewport.
- Route entry animation shortened.
- Mobile navigation stagger shortened.
- Home project-type switcher is now a fixed four-column row on mobile with no horizontal scrollbar.
- Fourth label shortened from `Improve existing` to `Improve` so all four controls fit cleanly even on narrow phones.
- Extra-tight styling added for screens at or below 380px.

## Architecture decision

The site remains hybrid rather than being collapsed into one page: Home is designed to answer most buyer questions in one scroll, while Work, service-detail, Process, About and Contact pages remain available for proof, search intent and deeper evaluation.

## Database

No Supabase migration is required.

### v14.1 responsive follow-up
Desktop/laptop hero visuals now stay to the right of hero copy down to the tablet breakpoint. The mobile Process hero also keeps all stage titles above its timeline rather than letting labels fall below the connector.
