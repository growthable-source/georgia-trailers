import Image from "next/image";
import { ReactNode } from "react";
import { LeadForm } from "@/components/LeadForm";
import { siteConfig, type TrailerOption } from "@/lib/site";

type HeroProps = {
  headline: ReactNode;
  subhead: ReactNode;
  defaultTrailer?: TrailerOption | "";
};

export function Hero({ headline, subhead, defaultTrailer = "" }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/images/lot/gto-lot.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" aria-hidden />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-kicker">
              <span>⚡ Hundreds In Stock · Lowest Prices in the SE</span>
            </div>
            <h1>{headline}</h1>
            <p className="hero-lede">{subhead}</p>

            <div className="hero-cta-row">
              <a href="#lead-form" className="btn btn-primary" data-track="hero_quote">
                Get My Instant Quote
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="btn btn-outline"
                data-track="hero_call"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.1z" />
                </svg>
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="hero-badges">
              <div className="hero-badge">
                <div className="hero-badge-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <div className="hero-badge-text">
                  <strong>No Credit Check</strong>Financing available
                </div>
              </div>
              <div className="hero-badge">
                <div className="hero-badge-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="hero-badge-text">
                  <strong>Top-Rated Brands</strong>Lamar · Load Trail · More
                </div>
              </div>
              <div className="hero-badge">
                <div className="hero-badge-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                </div>
                <div className="hero-badge-text">
                  <strong>Hundreds In Stock</strong>Ready to drive away
                </div>
              </div>
            </div>
          </div>

          <LeadForm defaultTrailer={defaultTrailer} />
        </div>
      </div>
    </section>
  );
}
