"use client";

import Image from "next/image";
import { firePhoneClick } from "@/lib/tracking";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <Image
            src="/images/gto-logo.webp"
            alt="Georgia Trailer Outlet"
            width={100}
            height={40}
          />
          <div>
            © 2026 Georgia Trailer Outlet · {siteConfig.addressShort} ·{" "}
            {siteConfig.phoneDisplay}
          </div>
        </div>
      </footer>

      <div className="sticky-mobile">
        <a
          href={`tel:${siteConfig.phoneTel}`}
          className="call"
          data-track="sticky_call"
          onClick={() => firePhoneClick("sticky_call")}
        >
          <svg viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.1z" />
          </svg>
          Call Now
        </a>
        <a href="#lead-form" className="quote" data-track="sticky_quote">
          Get Quote →
        </a>
      </div>
    </>
  );
}
