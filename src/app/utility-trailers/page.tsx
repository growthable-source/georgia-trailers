import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Utility Trailers for Sale | Lowest Prices in the Southeast",
  description:
    "Single-axle and tandem utility trailers for landscapers, homeowners, and small business. Lowest prices in the Southeast. Cartersville, GA. Call (770) 608-6882.",
  alternates: { canonical: `${siteConfig.siteUrl}/utility-trailers` },
};

export default function UtilityTrailersPage() {
  return (
    <LandingPage
      headline="UTILITY TRAILERS. BUDGET-FRIENDLY."
      subhead="Single-axle and tandem utility trailers for landscapers, homeowners, and small business. Lowest prices in the Southeast."
      defaultTrailer="Utility Trailer"
      inventoryFilter="utility"
    />
  );
}
