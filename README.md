# FahadDev v14.4 — Dream Engine

A full-site buyer-focused refinement of v14.3.

## What changed

- All public pages shortened to the content a serious buyer needs.
- Home keeps the complete funnel; deeper pages now support rather than repeat it.
- Home benefit and pain cards are mobile-safe and collapse before they become cramped.
- Work cards use a stable visual ratio, two-column desktop gallery, and one-column mobile/tablet layout.
- Process hero timeline rebuilt as one grid-based rail so labels stay above the line at every breakpoint.
- Hero headlines keep the existing copy but gain a restrained visual lockup and signal line.
- Services simplified to four buying paths + a focused-fix/full-build note.
- Process simplified to five real delivery stages.
- About simplified to role, relevant experience, working principles and FAQs.
- Contact simplified to direct channels + project brief + three next steps.
- Service detail pages simplified to outcomes + typical scope + FAQs.
- Case studies simplified to challenge + what was built + result.
- Reveal motion triggers earlier and finishes in ~0.18s.

## Database

No new Supabase migration is required if v10+ is already configured.

## Production checklist

1. Keep your existing environment variables.
2. Run `npm install`.
3. Run `npm run build`.
4. Deploy to Vercel.
5. Check Home, Work, Process and Contact at 360px, 390px, 768px, 1024px and desktop widths.
6. Verify one lead submission, one review moderation flow, and one project image upload after deployment.

## Important

This environment could not complete npm dependency installation, so the full Next.js production build was not executed here. Source-level TS/TSX syntax, local imports, CSS balance and literal internal routes were checked.
