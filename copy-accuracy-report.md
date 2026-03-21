# Copy Accuracy Report — All Landing Pages

**Date:** 2026-03-19
**Reviewed against:** CLAUDE.md verified/false claims list

---

## ISSUES FOUND

### 1. "30% of claims paid instantly" — FALSE CLAIM
CLAUDE.md explicitly says: *Use "about half" or "~50%" based on latest data*

| File | Line | Current Text |
|---|---|---|
| `/adventure/page.tsx` | 25 | "about 30% of claims instantly" |
| `/adventure-video/page.tsx` | 25 | "about 30% of claims instantly" |
| `/simple/page.tsx` | 25 | "About a third of claims are paid within seconds" |
| `/video/page.tsx` | 24 | "About a third of claims are paid within seconds" |
| `/gif/page.tsx` | 25 | "About a third of claims are paid within seconds" |

**Fix:** Replace with "~50% of claims are processed in minutes"

---

### 2. "1 million pet parents" / "1M+" — UNVERIFIED
CLAUDE.md says: *"1 million pet parents" — Unverified claim, avoid specific numbers unless confirmed*

| File | Line | Current Text |
|---|---|---|
| `/simple/page.tsx` | 83 | "4.9★ rated by 1M+ pet parents" |
| `/simple/page.tsx` | 174 | "Join over 1 million pet parents who trust Lemonade" |
| `/video/page.tsx` | 88 | "4.9★ rated by 1M+ pet parents" |
| `/video/page.tsx` | 179 | "Join over 1 million pet parents who trust Lemonade" |
| `/gif/page.tsx` | 88 | "4.9★ rated by 1M+ pet parents" |
| `/gif/page.tsx` | 179 | "Join over 1 million pet parents who trust Lemonade" |

**Fix:** Replace "1M+ pet parents" with "85K+ reviews" (verified). Replace "Join over 1 million pet parents" with "Join pet parents everywhere" or similar.

---

### 3. "Join millions" / "millions of pet parents" — UNVERIFIED
Same issue as above — unverified user count.

| File | Line | Current Text |
|---|---|---|
| `/get-quote/page.tsx` | 59 | "Join millions of pet parents who protect their furry family members" |
| `/coverage/page.tsx` | 67 | "Millions of pets protected" |
| `/coverage/page.tsx` | 158 | "Join 2 Million+ Happy Pet Parents" |
| `/coverage/page.tsx` | 247 | "Join the millions of pet parents who trust Lemonade" |
| `/coverage/page.tsx` | 37 | "They now protect millions of pets across the US" |

**Fix:** Remove specific numbers. Use "pet parents everywhere" or "thousands of pet parents".

---

### 4. "$1.89/month" wellness pricing — UNVERIFIED
CLAUDE.md says: *"Wellness coverage from $1.89/month" — Unverified specific pricing, use "Optional wellness add-on available" instead*

| File | Line | Current Text |
|---|---|---|
| `/get-quote/page.tsx` | 182 | "starting at $1.89/month" |
| `/plans/page.tsx` | 196 | "Vet visit fees: $1.89+/mo" |

**Fix:** Replace with "Optional wellness add-on available" or remove specific pricing.

---

### 5. Specific add-on pricing — UNVERIFIED
Same category as $1.89 — these specific add-on prices are not in the verified claims list.

| File | Line | Current Text |
|---|---|---|
| `/plans/page.tsx` | 197 | "Dental illness: $4+/mo" |
| `/plans/page.tsx` | 198 | "Physical therapy: $3+/mo" |
| `/plans/page.tsx` | 199 | "Behavioral conditions: $2+/mo" |
| `/plans/page.tsx` | 200 | "Preventive care: $10+/mo" |

**Fix:** Remove specific add-on prices or replace with "Available as add-on".

---

### 6. "6.1% increase in vet costs" — UNVERIFIED / NO SOURCE
Not in verified claims list. No source cited.

| File | Line | Current Text |
|---|---|---|
| `/protect/page.tsx` | 90 | "6.1% increase in vet costs in the past year alone" |

**Fix:** Remove this stat or replace with a sourced/verified claim.

---

### 7. "1 in 4 dogs will develop cancer" — UNVERIFIED
Not in verified claims list. No source cited.

| File | Line | Current Text |
|---|---|---|
| `/start/page.tsx` | 115 | "1 in 4 dogs will develop cancer" |

**Fix:** Remove or replace with a verified stat.

---

### 8. "#1 Rated" / "Editor's Choice" — NO SOURCE
CLAUDE.md says: *"Rated #1 by..." without citing the actual source* is a false claim.

| File | Line | Current Text |
|---|---|---|
| `/get-quote/page.tsx` | 52 | "#1 Rated Pet Insurance App" |
| `/mobile/page.tsx` | 32 | "🏆 #1 Rated" |
| `/simple/page.tsx` | 5 | "Editor's Choice #1 Pet Insurance" (metadata) |
| `/simple/page.tsx` | 49 | "Editor's Choice 2026 · #1 Pet Insurance" |
| `/video/page.tsx` | 48 | "Editor's Choice 2026 · #1 Pet Insurance" |
| `/gif/page.tsx` | 49 | "Editor's Choice 2026 · #1 Pet Insurance" |
| `/compare/page.tsx` | 19 | "Editor's Choice" (highlight tag) |

**Fix:** Remove "#1" claims or replace with "Top-Rated" / "Highly Rated". The compare page can keep "Editor's Choice" as it's PawPolicy's own editorial pick.

---

### 9. "Claims paid in minutes" without qualifier
Missing the "~50%" qualifier — implies ALL claims are paid in minutes.

| File | Line | Current Text |
|---|---|---|
| `/simple/page.tsx` | 81 | "Fast, app-based claims paid in minutes" |
| `/video/page.tsx` | 86 | "Fast, app-based claims paid in minutes" |
| `/gif/page.tsx` | 86 | "Fast, app-based claims paid in minutes" |

**Fix:** Change to "~50% of claims paid in minutes" or "Many claims paid in minutes".

---

## VERIFIED & ACCURATE (no changes needed)

These claims appear across pages and are confirmed accurate per CLAUDE.md:

- Plans starting at $10/month
- ~50% of claims processed in minutes (when correctly stated)
- 4.9★ app store rating with 85,000+ reviews
- Any licensed vet in the US
- 70-90% reimbursement options
- Average dog policy ~$35/month, cats ~$20/month
- 2-day accident waiting period, 14-day illness
- 1 in 3 pets need emergency care each year
- 37% of pet owners went into debt (2024)
- 5% multi-pet discount, 10% bundle discount
- $10M+ donated through Giveback

---

## LINKS — ALL CLEAN

All external links point to `https://mecondstutiolin.com/click` (affiliate URL). No stray lemonade.com links remain. "View official Lemonade FAQ" link has been removed.
