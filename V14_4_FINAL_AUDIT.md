# FahadDev v14.4 — Final Funnel & Responsive Audit

## Funnel

### Home
1. Hero
2. Everything needed to launch
3. Pain points
4. Interactive implementation view
5. Selected work
6. Real reviews
7. FAQs
8. Final CTA

### Services
Hero → 4 service paths → focused-fix/full-build reassurance → FAQs → CTA.

### Work
Hero → project gallery → FAQs → CTA.

### Process
Hero → 5 delivery stages → FAQs → CTA.

### About
Hero → what you are hiring → relevant experience → working principles → FAQs → CTA.

### Contact
Hero → contact routes + lead form + what happens next → FAQs.

### Detail pages
Service detail: Hero → outcomes + typical scope → FAQs → CTA.
Case study: Hero → challenge → what was built → result → CTA.

## Responsive fixes

- Home launch-benefit cards: one column by 760px.
- Home pain cards: one column by 760px.
- Work/project cards: one column by 800px.
- Project visuals use a fixed responsive aspect ratio.
- Work grid is two columns on desktop, one on mobile/tablet.
- Service lists collapse before copy gets squeezed.
- Contact and About layouts collapse cleanly.
- Long card text uses safe wrapping.
- Existing four-option Home selector remains one row on mobile with no horizontal scroller.

## Process hero

The old independently-positioned labels/dots/line were replaced. The hero now uses one five-column `process-rail`; each stage owns its label, dot and supporting text. The connecting line sits behind the shared dot row, preventing the line from crossing or hiding titles.

## Hero treatment

- Existing hero wording retained or tightened only where pages were shortened.
- New `hero-title-lockup` provides a restrained visual signal rule.
- Eyebrows use a light status treatment.
- Desktop/laptop still use copy-left / visual-right composition with a deliberate gutter.
- Mobile stays left-aligned.

## Motion

Reveal root margin increased so sections trigger before the reader reaches them. Reveal duration is ~0.18s with only 6px travel and no nested card stagger.

## Source checks

- 54 TS/TSX files transpile with zero syntax diagnostics.
- CSS brace balance: 0.
- Bad local imports: 0.
- 34 literal internal links checked; unresolved: 0.

## Limitation

`npm install` timed out in this environment, so a full `next build` could not be certified locally. Vercel/local production build remains the final compiler/runtime verification.
