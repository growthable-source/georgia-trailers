"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { submitToGHL } from "@/lib/ghl";
import { captureAttribution, fireLead } from "@/lib/tracking";
import { trailerOptions, type TrailerOption } from "@/lib/site";

type LeadFormProps = {
  defaultTrailer?: TrailerOption | "";
};

export function LeadForm({ defaultTrailer = "" }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [trailer, setTrailer] = useState<string>(defaultTrailer);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTrailer(defaultTrailer);
  }, [defaultTrailer]);

  useEffect(() => {
    function onSelectTrailer(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setTrailer(detail);
    }
    window.addEventListener("gto:select-trailer", onSelectTrailer);
    return () => window.removeEventListener("gto:select-trailer", onSelectTrailer);
  }, []);

  function formatPhone(value: string) {
    const v = value.replace(/\D/g, "").slice(0, 10);
    if (v.length > 6) return `(${v.slice(0, 3)}) ${v.slice(3, 6)}-${v.slice(6)}`;
    if (v.length > 3) return `(${v.slice(0, 3)}) ${v.slice(3)}`;
    if (v.length > 0) return `(${v}`;
    return "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !trailer) {
      alert("Please fill in your name, phone, and trailer type.");
      return;
    }

    fireLead({ trailer, value: 1, currency: "USD" });

    setSending(true);

    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const utm = captureAttribution();

    const payload = {
      full_name: name.trim(),
      first_name: firstName,
      last_name: lastName,
      phone: phone.trim(),
      email: email.trim(),
      trailer_type: trailer,
      source: "Landing Page - CPC",
      page_url: window.location.href,
      referrer: document.referrer || "direct",
      submitted_at: new Date().toISOString(),
      ...utm,
    };

    await submitToGHL(payload);

    setSending(false);
    setSuccess(true);
  }

  return (
    <div className="lead-card" id="lead-form">
      <div className="lead-card-ribbon">Fast Reply · No Spam</div>
      <h2>
        Get Your Price
        <br />
        In 5 Minutes
      </h2>
      <p className="lead-card-sub">
        Tell us what you&apos;re hauling. We&apos;ll text you availability &amp; your
        best price — no games.
      </p>

      {!success ? (
        <form onSubmit={onSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Number</label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(770) 555-1234"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="trailer">What Trailer Do You Need?</label>
            <select
              id="trailer"
              name="trailer"
              required
              value={trailer}
              onChange={(e) => setTrailer(e.target.value)}
            >
              <option value="">Choose one…</option>
              {trailerOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email (optional)</label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <motion.button
            type="submit"
            className="form-submit"
            disabled={sending}
            whileTap={sending ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            {sending ? "Sending…" : "Send Me My Price →"}
          </motion.button>
          <p className="form-privacy">
            By submitting you agree to receive SMS/email about your quote. Msg
            rates may apply. We never sell your info.
          </p>
        </form>
      ) : (
        <div className="form-success show" id="formSuccess">
          ✓ Got it! We&apos;ll text you within a few minutes with pricing and
          availability.
        </div>
      )}
    </div>
  );
}
