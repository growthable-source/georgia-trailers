import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Trailers for Sale Near Atlanta | No Credit Check Financing | Georgia Trailer Outlet",
  description:
    "Hundreds of trailers in stock at the lowest prices in the Southeast. No credit check financing. Dump, flatbed, tilt, enclosed & utility trailers in Cartersville, GA. Call (770) 608-6882.",
  alternates: { canonical: siteConfig.siteUrl },
};

export default function HomePage() {
  return (
    <LandingPage
      headline={
        <>
          Trailers <span className="blaze">Built Tough.</span>
          <br />
          Prices <span className="underline">Built Right.</span>
        </>
      }
      subhead={
        <>
          Dump, flatbed, tilt, enclosed, utility &amp; equipment trailers in
          stock at our Cartersville, GA lot — 45 minutes north of Atlanta. Drive
          off today with <strong>no credit check financing</strong> and zero
          high-pressure sales.
        </>
      }
    />
  );
}
