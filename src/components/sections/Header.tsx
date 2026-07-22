"use client";

import Image from "next/image";
import Link from "next/link";
import { firePhoneClick } from "@/lib/tracking";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-left">
            <span>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                />
              </svg>
              {siteConfig.addressShort}
            </span>
            <span>
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
                />
              </svg>
              {siteConfig.hoursShort}
            </span>
          </div>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="topbar-phone"
            data-track="topbar_call"
            onClick={() => firePhoneClick("topbar_call")}
          >
            <svg viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.1z" />
            </svg>
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>

      <header>
        <div className="container">
          <Link
            href="/"
            className="logo-wrap"
            aria-label="Georgia Trailer Outlet"
            prefetch={false}
          >
            <Image
              src="/images/gto-logo.webp"
              alt="Georgia Trailer Outlet"
              width={140}
              height={56}
              priority
            />
          </Link>
          <a href="#lead-form" className="header-cta" data-track="header_cta">
            <span className="hide-sm">Get My Quote</span>
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}
