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

## FALSE CLAIMS - DO NOT USE

The following claims are NOT accurate and should NOT be used on any landing page:

- ❌ "No credit card required" - This is false, credit card is required for signup
- ❌ "Claims paid in 3 seconds" - Use "~50% of claims paid in minutes" instead
- ❌ "30% of claims paid instantly" - Use "about half" or "~50%" based on latest data
- ❌ "1 million pet parents" - Unverified claim, avoid specific numbers unless confirmed
- ❌ "Rated #1 by..." without citing the actual source
- ❌ "47 companies reviewed" or similar made-up research statistics
- ❌ "Wellness coverage from $1.89/month" - Unverified specific pricing, use "Optional wellness add-on available" instead

### Verified Claims You CAN Use
- ✅ Plans starting at $10/month (for basic accident coverage)
- ✅ ~50% of claims processed in minutes (AI-powered)
- ✅ 4.9★ app store rating
- ✅ Any licensed vet in the US
- ✅ 2-day waiting period for accidents, 14-day for illness
- ✅ 70-90% reimbursement options
- ✅ Average dog policy ~$35/month, cats ~$20/month (industry average)
