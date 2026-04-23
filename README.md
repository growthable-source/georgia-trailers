# Georgia Trailer Outlet - Landing Page

Conversion-optimized landing page for CPC ad traffic with Meta Pixel and Google Ads tracking.

## Deployment

Static HTML site — deploys automatically on Vercel with zero config.

## Before going live

1. Replace `YOUR_PIXEL_ID` with the Meta Pixel ID (appears twice in `<head>`)
2. Replace `AW-XXXXXXXXX` with the Google Ads ID (appears 3 times)
3. Replace `PHONE_CALL_LABEL` and `LEAD_FORM_LABEL` with real Google Ads conversion labels
4. Swap testimonial quotes for real Google reviews

## Form submissions

POST to the GoHighLevel webhook with UTM/gclid/fbclid attribution captured automatically.
