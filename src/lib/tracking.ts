export function fireLead(_payload?: {
  trailer?: string;
  value?: number;
  currency?: string;
}): void {
  void _payload;
  // TODO: wire later — Meta Pixel Lead + Google Ads conversion
}

export function firePhoneClick(_label?: string): void {
  void _label;
  // TODO: wire later — Meta Contact + Google Ads phone conversion
}

export function captureAttribution(): {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  fbclid: string;
} {
  // TODO: wire later — persist attribution across session
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      gclid: "",
      fbclid: "",
    };
  }

  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get("utm_source") || "",
    utm_medium: urlParams.get("utm_medium") || "",
    utm_campaign: urlParams.get("utm_campaign") || "",
    utm_term: urlParams.get("utm_term") || "",
    utm_content: urlParams.get("utm_content") || "",
    gclid: urlParams.get("gclid") || "",
    fbclid: urlParams.get("fbclid") || "",
  };
}
