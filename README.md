# Georgia Trailer Outlet — Ads Landing Page

Calls-first CPC landing page for Google Ads. Static HTML on Vercel.

## Live

https://go.georgiatraileroutlet.com

## Ads phone (Twilio)

| | |
| --- | --- |
| Display | `(770) 796-5038` |
| Click-to-call | `tel:+17707965038` |

Do not use the lot number `(770) 608-6882` on this page. All `tel:` links and visible numbers must stay on the Twilio ads line.

## Before going live

Edit the **single** `window.GTO_ADS` block at the top of `<head>` in `index.html`. Replace these four placeholders once — Pixel, gtag `config`, and every `send_to` path read from that object.

| Constant | Placeholder (leave until you have the real value) | What it is |
| --- | --- | --- |
| `META_PIXEL_ID` | `YOUR_PIXEL_ID` | Meta Pixel ID |
| `GOOGLE_ADS_ID` | `AW-XXXXXXXXX` | Google Ads tag ID |
| `PHONE_CALL_LABEL` | `PHONE_CALL_LABEL` | Google Ads conversion label for click-to-call |
| `LEAD_FORM_LABEL` | `LEAD_FORM_LABEL` | Google Ads conversion label for form submit |

Do not invent IDs. Leave the placeholders until Ads Manager / Events Manager values are confirmed.

Also confirm:

1. Twilio `(770) 796-5038` forwards to the lot.
2. Meta Pixel PageView fires after `META_PIXEL_ID` is set.
3. Google Ads conversions fire on phone click + form submit after `GOOGLE_ADS_ID` and both labels are set.
4. (Optional) Swap testimonial quotes for real Google reviews.

## Events

| Event | When | Destination |
| --- | --- | --- |
| PageView | Page load | Meta Pixel |
| Contact | Any `tel:` click | Meta Pixel |
| conversion (`PHONE_CALL_LABEL`) | Any `tel:` click | Google Ads |
| Lead | Quote form submit | Meta Pixel |
| conversion (`LEAD_FORM_LABEL`) | Quote form submit | Google Ads |

Form POST still goes to the existing GHL webhook. Payload includes `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `fbclid`, `wbraid`, and `gbraid` from the landing URL.

## Google Ads final URL UTM scheme

Use the live domain as the final URL. Example:

```
https://go.georgiatraileroutlet.com/?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={adgroupid}
```

| Param | Suggested ValueTrack |
| --- | --- |
| `utm_source` | `google` |
| `utm_medium` | `cpc` |
| `utm_campaign` | `{campaignid}` or a human campaign name |
| `utm_term` | `{keyword}` |
| `utm_content` | `{adgroupid}` or `{creative}` |

Google appends `gclid` automatically when auto-tagging is on. iOS / Privacy Sandbox traffic may send `gbraid` or `wbraid` instead — those are captured on submit.

## Form submissions

`POST` JSON to the GoHighLevel webhook. Attribution fields are read from the query string at submit time.

## Deployment

`vercel.json` is already valid for this static site. Deploys on push to Vercel with no extra build step.
