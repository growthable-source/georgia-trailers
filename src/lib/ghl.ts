export type GHLPayload = {
  full_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  trailer_type: string;
  source: string;
  page_url: string;
  referrer: string;
  submitted_at: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
};

export async function submitToGHL(payload: GHLPayload): Promise<void> {
  const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("[GHL] Webhook URL not set — payload:", payload);
    return;
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    console.warn("Webhook POST failed:", err);
  }
}
