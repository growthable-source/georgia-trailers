import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flatbed & Gooseneck Trailers for Sale",
  description:
    "Heavy-duty flatbed and gooseneck trailers built for contractors and farmers. In stock now, drive off today. Cartersville, GA. Call (770) 608-6882.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/flatbed-gooseneck-trailers`,
  },
};

export default function FlatbedGooseneckTrailersPage() {
  return <LandingPage />;
}
