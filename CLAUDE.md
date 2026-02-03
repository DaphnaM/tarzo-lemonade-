# Lemonade Pet Insurance Landing Pages

## Project Overview
A/B testing landing pages for Lemonade pet insurance affiliate marketing. Each page variant targets a different audience segment with unique messaging and design.

### Landing Page Variants
- `/get-quote` — Speed & Simplicity (90-second signup focus)
- `/protect` — Urgency & Emotion (vet bill shock)
- `/plans` — Budget Shoppers (pricing & plan options)
- `/coverage` — Trust & Proof (skeptical users)
- `/start` — Dog/Cat Personalization (Facebook cold traffic)
- `/simple` — Editor's Choice widget style

### Tech Stack
- Next.js 14 with App Router
- Tailwind CSS
- TypeScript
- Deployed on Netlify

## Important Notes

### Netlify Deployment
**DO NOT push to main on every small change.** We have limited build credits on Netlify. Bundle multiple changes into fewer commits when possible, or work on a feature branch and merge when ready. 
Merge to main when specified. 

### CTA Links
All buttons use the affiliate tracking URL defined in `src/components/shared/CTAButton.tsx`.

### Images
Stock images are stored in `/public/images/`. Current images are from Unsplash.
