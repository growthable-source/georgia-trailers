# Georgia Trailer Outlet — Landing Pages

Conversion-optimized landing pages for CPC ad traffic.

## Stack

- Next.js 15 (App Router, TypeScript, `src/` directory)
- Tailwind CSS v3.4+
- shadcn/ui (button, input, select, accordion, card)
- Framer Motion (form micro-interactions)
- `next/font/local` + `next/image`
- Deployed on Vercel

## Local development

```bash
npm install
cp .env.example .env.local   # leave blank until IDs are ready
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Environment variables

See `.env.example`. All tracking/webhook vars are optional — if unset, tracking scripts render nothing and form submissions `console.log` the GHL payload.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads gtag |
| `NEXT_PUBLIC_GA4_ID` | GA4 gtag |
| `NEXT_PUBLIC_GHL_WEBHOOK_URL` | GoHighLevel webhook POST |

## Pages

| Route | Purpose |
|---|---|
| `/` | Main CPC landing (mirrors original static page) |
| `/dump-trailers` | Paid ads — dump trailers |
| `/enclosed-cargo-trailers` | Paid ads — enclosed cargo |
| `/flatbed-gooseneck-trailers` | Paid ads — flatbed & gooseneck |
| `/equipment-haulers` | Paid ads — equipment haulers |
| `/utility-trailers` | Paid ads — utility trailers |
| `/financing` | Paid ads — no credit check financing |

## Deployment

Unchanged — auto-deploys via Vercel on push. `vercel.json` headers left intact.
