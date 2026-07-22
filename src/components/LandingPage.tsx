"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { HotInventory } from "@/components/sections/HotInventory";
import { FinancingBlock } from "@/components/sections/FinancingBlock";
import { BrandsRow } from "@/components/sections/BrandsRow";
import { Testimonials } from "@/components/sections/Testimonials";
import { LotVisit } from "@/components/sections/LotVisit";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { getPageConfig } from "@/lib/pages";

export function LandingPage() {
  const pathname = usePathname() || "/";
  const config = getPageConfig(pathname);

  return (
    <div data-page={config.path} key={config.path}>
      <Header />
      <Hero
        headline={config.headline}
        subhead={config.subhead}
        defaultTrailer={config.defaultTrailer ?? ""}
      />
      <TrustStrip />
      <CategoryGrid />
      <HotInventory filter={config.inventoryFilter} />
      <FinancingBlock />
      <BrandsRow />
      <Testimonials />
      <LotVisit />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
