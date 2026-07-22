import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "No Credit Check Trailer Financing | Approved in Minutes",
  description:
    "Bad credit, no credit, no problem. Same-day approvals, competitive rates that beat the banks. Apply now at Georgia Trailer Outlet. Call (770) 608-6882.",
  alternates: { canonical: `${siteConfig.siteUrl}/financing` },
};

export default function FinancingPage() {
  return (
    <LandingPage
      headline="NO CREDIT CHECK FINANCING. APPROVED IN MINUTES."
      subhead="Bad credit, no credit, no problem. Same-day approvals, competitive rates that beat the banks. Apply now."
      defaultTrailer=""
    />
  );
}
