import type { ReactNode } from "react";
import type { InventoryCategory, TrailerOption } from "@/lib/site";

export type PageConfig = {
  path: string;
  headline: ReactNode;
  subhead: ReactNode;
  defaultTrailer?: TrailerOption | "";
  inventoryFilter?: InventoryCategory | InventoryCategory[];
};

export const homeHeadline = (
  <>
    Trailers <span className="blaze">Built Tough.</span>
    <br />
    Prices <span className="underline">Built Right.</span>
  </>
);

export const homeSubhead = (
  <>
    Dump, flatbed, tilt, enclosed, utility &amp; equipment trailers in stock at
    our Cartersville, GA lot — 45 minutes north of Atlanta. Drive off today with{" "}
    <strong>no credit check financing</strong> and zero high-pressure sales.
  </>
);

export const pageConfigs: Record<string, PageConfig> = {
  "/": {
    path: "/",
    headline: homeHeadline,
    subhead: homeSubhead,
  },
  "/dump-trailers": {
    path: "/dump-trailers",
    headline: "DUMP TRAILERS BUILT FOR THE JOB.",
    subhead:
      "Heavy-duty dump trailers in stock at our Cartersville, GA lot. Hydraulic lift, 10K-14K GVWR, no credit check financing available.",
    defaultTrailer: "Dump Trailer",
    inventoryFilter: "dump",
  },
  "/enclosed-cargo-trailers": {
    path: "/enclosed-cargo-trailers",
    headline: "ENCLOSED CARGO. LOCKED, LOADED, READY.",
    subhead:
      "6x12 to 8.5x24 enclosed cargo trailers — single & tandem axle. Cartersville, GA lot, 45 minutes from Atlanta.",
    defaultTrailer: "Enclosed / Cargo",
    inventoryFilter: "enclosed",
  },
  "/flatbed-gooseneck-trailers": {
    path: "/flatbed-gooseneck-trailers",
    headline: "FLATBED & GOOSENECK. HAUL ANYTHING.",
    subhead:
      "Heavy-duty flatbed and gooseneck trailers built for contractors and farmers. In stock now, drive off today.",
    defaultTrailer: "Flatbed / Gooseneck",
    inventoryFilter: "flatbed",
  },
  "/equipment-haulers": {
    path: "/equipment-haulers",
    headline: "EQUIPMENT HAULERS. WORK-READY.",
    subhead:
      "Skid steer, mini-excavator, tractor haulers. New and used, in stock at our Cartersville lot.",
    defaultTrailer: "Equipment Hauler",
    inventoryFilter: "equipment",
  },
  "/utility-trailers": {
    path: "/utility-trailers",
    headline: "UTILITY TRAILERS. BUDGET-FRIENDLY.",
    subhead:
      "Single-axle and tandem utility trailers for landscapers, homeowners, and small business. Lowest prices in the Southeast.",
    defaultTrailer: "Utility Trailer",
    inventoryFilter: "utility",
  },
  "/financing": {
    path: "/financing",
    headline: "NO CREDIT CHECK FINANCING. APPROVED IN MINUTES.",
    subhead:
      "Bad credit, no credit, no problem. Same-day approvals, competitive rates that beat the banks. Apply now.",
    defaultTrailer: "",
  },
};

export function getPageConfig(pathname: string): PageConfig {
  const normalized =
    pathname.endsWith("/") && pathname.length > 1
      ? pathname.slice(0, -1)
      : pathname;
  return pageConfigs[normalized] ?? pageConfigs["/"];
}
