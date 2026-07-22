"use client";

import Link from "next/link";

const categories = [
  {
    track: "cat_dump",
    cat: "Dump Trailers",
    href: "/dump-trailers",
    title: "Dump Trailers",
    count: "From $9,995",
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M4 44h48v4H4zm2-12l20-8 12 12h14v6H4zm8 14a4 4 0 108 0 4 4 0 00-8 0zm24 0a4 4 0 108 0 4 4 0 00-8 0z" />
      </svg>
    ),
  },
  {
    track: "cat_equipment",
    cat: "Equipment Haulers",
    href: "/equipment-haulers",
    title: "Equipment Haulers",
    count: "For skid steers & more",
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M2 42h60v6H2zm6-4L28 24l10 6h18v8H8zm8 10a4 4 0 108 0 4 4 0 00-8 0zm28 0a4 4 0 108 0 4 4 0 00-8 0z" />
      </svg>
    ),
  },
  {
    track: "cat_flatbed",
    cat: "Flatbed / Gooseneck",
    href: "/flatbed-gooseneck-trailers",
    title: "Flatbed & Gooseneck",
    count: "Heavy-duty hauling",
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M4 40h56v4H4zm52-4H8l-2-8h52zm-42 14a4 4 0 108 0 4 4 0 00-8 0zm32 0a4 4 0 108 0 4 4 0 00-8 0zM6 24l2-8h6v8z" />
      </svg>
    ),
  },
  {
    track: "cat_tilt",
    cat: "Tilt Decks",
    href: "/#lead-form",
    title: "Tilt Decks",
    count: "From $11,995",
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M4 44h56v4H4zm54-8L8 42l-4-8 50-12zm-44 14a4 4 0 108 0 4 4 0 00-8 0zm28 0a4 4 0 108 0 4 4 0 00-8 0z" />
      </svg>
    ),
  },
  {
    track: "cat_enclosed",
    cat: "Enclosed / Cargo",
    href: "/enclosed-cargo-trailers",
    title: "Enclosed Cargo",
    count: "From $5,295",
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M6 16h44v30H6zM50 24h10v22H50zm-36 26a4 4 0 108 0 4 4 0 00-8 0zm34 0a4 4 0 108 0 4 4 0 00-8 0z" />
      </svg>
    ),
  },
  {
    track: "cat_utility",
    cat: "Utility",
    href: "/utility-trailers",
    title: "Utility Trailers",
    count: "Budget-friendly",
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M4 40h56v4H4zm2-8h52v6H6zm2-8h48v6H8zm6 22a4 4 0 108 0 4 4 0 00-8 0zm32 0a4 4 0 108 0 4 4 0 00-8 0z" />
      </svg>
    ),
  },
];

export function CategoryGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Shop by Category</span>
          <h2 className="section-title">Find Your Trailer</h2>
          <p className="section-sub">
            Every trailer on our lot is hand-picked. Click what you need and
            we&apos;ll show you what&apos;s in stock today.
          </p>
        </div>

        <div className="cat-grid">
          {categories.map((c) => (
            <Link
              key={c.track}
              href={c.href}
              className="cat-card"
              data-track={c.track}
              data-cat={c.cat}
              prefetch
            >
              <div className="cat-card-icon">{c.icon}</div>
              <div className="cat-card-title">{c.title}</div>
              <div className="cat-card-count">{c.count}</div>
              <div className="cat-arrow">See In Stock →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
