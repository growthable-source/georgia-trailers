import Image from "next/image";
import {
  inventory,
  type InventoryCategory,
} from "@/lib/site";

type HotInventoryProps = {
  filter?: InventoryCategory | InventoryCategory[];
};

export function HotInventory({ filter }: HotInventoryProps) {
  const filters = filter
    ? Array.isArray(filter)
      ? filter
      : [filter]
    : null;

  const items = filters
    ? inventory.filter((item) => filters.includes(item.category))
    : inventory;

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Price Tags. No Guesswork.</span>
          <h2 className="section-title">This Week&apos;s Hot Inventory</h2>
          <p className="section-sub">
            Real trailers on our lot right now — move fast, the good ones
            don&apos;t last.
          </p>
        </div>

        <div className="inventory-grid">
          {items.map((item) => (
            <a
              key={item.id}
              href="#lead-form"
              className="inv-card"
              data-track={item.track}
              data-inv={item.name}
            >
              <div className="inv-img">
                {"badge" in item && item.badge ? (
                  <span className="inv-badge">{item.badge}</span>
                ) : null}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="inv-body">
                <div className="inv-title">{item.title}</div>
                <div className="inv-meta">{item.meta}</div>
                <div className="inv-price-row">
                  <div className="inv-price">{item.price}</div>
                  <div className="inv-cta">Claim It →</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="center-cta">
          <a
            href="#lead-form"
            className="btn btn-primary"
            data-track="inv_bottom_cta"
          >
            Get Pricing On Any Trailer
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
