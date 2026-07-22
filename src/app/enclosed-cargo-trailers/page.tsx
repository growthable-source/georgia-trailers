import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enclosed Cargo Trailers for Sale Near Atlanta",
  description:
    "6x12 to 8.5x24 enclosed cargo trailers — single & tandem axle. Cartersville, GA lot, 45 minutes from Atlanta. No credit check financing. Call (770) 608-6882.",
  alternates: { canonical: `${siteConfig.siteUrl}/enclosed-cargo-trailers` },
};

export default function EnclosedCargoTrailersPage() {
  return <LandingPage />;
}
