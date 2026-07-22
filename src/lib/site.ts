export const siteConfig = {
  name: "Georgia Trailer Outlet",
  phoneDisplay: "(770) 608-6882",
  phoneTel: "+17706086882",
  addressLine1: "45 Carson Loop NW",
  addressLine2: "Cartersville, GA 30121",
  addressShort: "45 Carson Loop NW, Cartersville, GA",
  mapsUrl: "https://maps.app.goo.gl/yWjHA54YPWDuSfV69",
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday", time: "Closed", closed: true },
  ],
  hoursShort: "Mon–Fri 9–5 · Sat 9–1",
  siteUrl: "https://go.georgiatraileroutlet.com",
  ogImage: "https://georgiatraileroutlet.com/image/gto-lot.jpg",
} as const;

export const trailerOptions = [
  "Dump Trailer",
  "Flatbed / Gooseneck",
  "Tilt Deck",
  "Enclosed / Cargo",
  "Utility Trailer",
  "Equipment Hauler",
  "Not sure — help me pick",
] as const;

export type TrailerOption = (typeof trailerOptions)[number];

export type InventoryCategory =
  | "dump"
  | "enclosed"
  | "flatbed"
  | "equipment"
  | "utility"
  | "tilt";

export const faqItems = [
  {
    question: "Do you really finance with no credit check?",
    answer:
      "Yes. We work with lenders that offer no-credit-check options on most approvals. Even if you've been turned down before, give us a few minutes — we'll show you what's possible. Most customers get an answer within the day.",
  },
  {
    question: "How quickly can I drive off with a trailer?",
    answer:
      "Same day in most cases. If you're approved and the trailer is on our lot (hundreds are), you can pick it up the same afternoon. We handle all the paperwork in-house.",
  },
  {
    question: "What brands do you carry?",
    answer:
      "Lamar, Load Trail, Diamond Cargo, RawMaxx, Behnke, and NEO. These are the top-rated trailer brands in the Southeast — we don't sell anything we wouldn't put our name on.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes, we deliver across Georgia and surrounding states. Call us with your ZIP and we'll quote delivery at the same time we quote the trailer.",
  },
  {
    question: "Are your prices really the lowest in the Southeast?",
    answer:
      "We believe so — we buy in volume and keep our margins tight so you win. Got a lower written quote from another dealer on the same model? Call us. We'll do our best to beat it.",
  },
] as const;

export const brands = [
  { src: "/images/brands/logo-lamar.webp", alt: "Lamar Trailers" },
  { src: "/images/brands/logo-diamond-cargo.webp", alt: "Diamond Cargo" },
  { src: "/images/brands/logo-load-trail.webp", alt: "Load Trail Trailers" },
  { src: "/images/brands/logo-rawmaxx.webp", alt: "RawMaxx Trailers" },
  { src: "/images/brands/logo-behnke.webp", alt: "Behnke Trailers" },
  { src: "/images/brands/logo-neo.webp", alt: "NEO Trailers" },
] as const;

export const testimonials = [
  {
    text: "Drove two hours down from Tennessee because the price beat everyone local. In and out in an hour with a new dump trailer. No haggling, no games.",
    author: "Mike R.",
    meta: "· Contractor, Chattanooga",
  },
  {
    text: "My credit isn't great and every other dealer turned me away. These guys got me approved same-day for a Load Trail dump and I was working by the weekend.",
    author: "Terrence W.",
    meta: "· Landscaping, Atlanta",
  },
  {
    text: "Finally a dealer that doesn't treat you like a mark. Straight prices, honest answers about what was used and what was new. Picked up our enclosed the same day.",
    author: "Sarah L.",
    meta: "· Small Business Owner, Marietta",
  },
] as const;

export const inventory = [
  {
    id: "tilt-22",
    category: "tilt" as InventoryCategory,
    track: "inv_tilt_22",
    name: "7x22 Behnke Tilt Deck",
    title: "7' × 22' Behnke Tilt Deck",
    meta: "Hydraulic tilt · 14K GVWR · In stock",
    price: "$17,995",
    badge: "New Arrival",
    image: "/images/inventory/inv-tilt-22.webp",
  },
  {
    id: "cargo-12",
    category: "enclosed" as InventoryCategory,
    track: "inv_cargo_12",
    name: "6x12 Diamond Cargo",
    title: "6' × 12' Diamond Cargo",
    meta: "Enclosed · Single axle · In stock",
    price: "$5,295",
    badge: "Best Value",
    image: "/images/inventory/inv-cargo-12.webp",
  },
  {
    id: "tilt-20",
    category: "tilt" as InventoryCategory,
    track: "inv_lt_tilt",
    name: "7x20 Load Trail Tilt",
    title: "7' × 20' Load Trail Tilt",
    meta: "Workhorse tilt · 14K GVWR",
    price: "$11,995",
    image: "/images/inventory/inv-tilt-20.webp",
  },
  {
    id: "dump-14",
    category: "dump" as InventoryCategory,
    track: "inv_dump_14",
    name: "7x14 Load Trail Dump",
    title: "7' × 14' Load Trail Dump",
    meta: "Scissor lift · 14K GVWR · Great for contractors",
    price: "$9,995",
    badge: "🔥 Popular",
    image: "/images/inventory/inv-dump-14.webp",
  },
  {
    id: "cargo-20",
    category: "enclosed" as InventoryCategory,
    track: "inv_cargo_20",
    name: "8.5x20 Diamond Cargo",
    title: "8.5' × 20' Diamond Cargo",
    meta: "Tandem axle · Enclosed · Huge space",
    price: "$10,795",
    image: "/images/inventory/inv-cargo-20.webp",
  },
  {
    id: "dump-16",
    category: "dump" as InventoryCategory,
    track: "inv_dump_16",
    name: "7x16 Load Trail Dump",
    title: "7' × 16' Load Trail Dump",
    meta: "Bigger load capacity · 14K GVWR",
    price: "$12,695",
    image: "/images/inventory/inv-dump-16.webp",
  },
] as const;

export type InventoryItem = (typeof inventory)[number];
