import { ReactNode } from "react";
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
import type { InventoryCategory, TrailerOption } from "@/lib/site";

type LandingPageProps = {
  headline: ReactNode;
  subhead: ReactNode;
  defaultTrailer?: TrailerOption | "";
  inventoryFilter?: InventoryCategory | InventoryCategory[];
};

export function LandingPage({
  headline,
  subhead,
  defaultTrailer = "",
  inventoryFilter,
}: LandingPageProps) {
  return (
    <>
      <Header />
      <Hero
        headline={headline}
        subhead={subhead}
        defaultTrailer={defaultTrailer}
      />
      <TrustStrip />
      <CategoryGrid />
      <HotInventory filter={inventoryFilter} />
      <FinancingBlock />
      <BrandsRow />
      <Testimonials />
      <LotVisit />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
