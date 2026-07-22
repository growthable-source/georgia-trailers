# GTO Handover

## 2026-07-22 — Next.js 15 migration + 6 paid-ads pages

### Summary
Migrated the static `index.html` landing page to Next.js 15 (App Router, TypeScript) + Tailwind v3.4 + shadcn/ui + Framer Motion. Design, copy, form fields, and section structure preserved. Added 6 category/financing landing pages for paid ads.

### What was migrated
- Full home page layout (header → hero/form → trust → categories → inventory → financing → brands → testimonials → lot visit → FAQ → final CTA → footer + sticky mobile)
- Self-hosted fonts (Bebas Neue, Oswald, DM Sans) via `next/font/local` in `public/fonts/`
- Images extracted to WebP in `public/images/`
- GTO color tokens in Tailwind (`gto-red`, `gto-black`, `gto-cream`, etc.) + CSS vars in `globals.css`
- Lead form (4 fields) → `submitToGHL()` with same payload shape as original
- `vercel.json` left untouched

### Scaffolded but not wired
- `TrackingScripts.tsx` — loads Meta Pixel / gtag only if env IDs present
- `src/lib/tracking.ts` — `fireLead`, `firePhoneClick`, `captureAttribution` stubs (`// TODO: wire later`)
- GHL webhook URL via `NEXT_PUBLIC_GHL_WEBHOOK_URL` (logs payload when unset)
- `.env.local` left empty; see `.env.example`

### Files touched (high level)
- `src/app/**` — layout, home, 6 ad pages, globals.css
- `src/components/**` — sections, LeadForm, TrackingScripts, shadcn ui
- `src/lib/**` — site, ghl, tracking, utils
- `public/fonts/**`, `public/images/**`
- `README.md`, `GTO_HANDOVER.md`, `CHANGELOG.md`, `.env.example`

### Open items for next session
- Drop real Meta Pixel, Google Ads, GA4 IDs into Vercel env / `.env.local`
- Set `NEXT_PUBLIC_GHL_WEBHOOK_URL` (same hook as previous HTML)
- Wire `fireLead` / `firePhoneClick` to Pixel + Ads conversion labels
- Confirm inventory for flatbed / equipment / utility pages (filters currently empty — no matching items in home inventory set)
- Visual QA against live `https://go.georgiatraileroutlet.com/` on branch preview
- Swap testimonial quotes for real Google reviews (pre-existing note)
