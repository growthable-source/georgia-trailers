import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dump Trailers for Sale | No Credit Check Financing",
  description:
    "Heavy-duty dump trailers in stock at our Cartersville, GA lot. Hydraulic lift, 10K-14K GVWR, no credit check financing available. Call (770) 608-6882.",
  alternates: { canonical: `${siteConfig.siteUrl}/dump-trailers` },
};

export default function DumpTrailersPage() {
  return <LandingPage />;
}
