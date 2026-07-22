import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        <Image
          src="/images/lot/gto-lot.webp"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className="container">
        <h2>
          Ready To <span className="gold">Pull Away?</span>
          <br />
          Let&apos;s Go.
        </h2>
        <p>
          Get your price in 5 minutes. No spam, no pressure, no credit check
          required to start.
        </p>
        <div className="final-cta-row">
          <a
            href="#lead-form"
            className="btn btn-primary btn-xl"
            data-track="final_quote"
          >
            Get My Quote
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </a>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="btn btn-outline btn-xl"
            data-track="final_call"
          >
            <svg viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.1z" />
            </svg>
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
