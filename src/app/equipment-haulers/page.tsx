import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipment Hauler Trailers for Sale",
  description:
    "Skid steer, mini-excavator, tractor haulers. New and used, in stock at our Cartersville lot. No credit check financing. Call (770) 608-6882.",
  alternates: { canonical: `${siteConfig.siteUrl}/equipment-haulers` },
};

export default function EquipmentHaulersPage() {
  return <LandingPage />;
}
