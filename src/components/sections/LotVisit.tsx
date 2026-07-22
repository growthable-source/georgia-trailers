import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function LotVisit() {
  return (
    <section className="visit-section">
      <div className="container">
        <div className="visit-grid">
          <div className="visit-info">
            <h2>
              Come Kick
              <br />
              The Tires
            </h2>
            <p className="lede">
              45 minutes north of Atlanta. Walk the lot, climb on trailers, ask
              questions. No one&apos;s going to pressure you.
            </p>

            <div className="visit-block">
              <div className="visit-block-label">📞 Call or Text</div>
              <div className="visit-block-value">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  data-track="visit_call"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="visit-block">
              <div className="visit-block-label">📍 Address</div>
              <div className="visit-block-value">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="visit_directions"
                >
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </a>
              </div>
            </div>

            <div className="visit-block">
              <div className="visit-block-label">🕘 Hours</div>
              <ul className="visit-hours-list">
                {siteConfig.hours.map((h) => (
                  <li key={h.day}>
                    <span className="day">{h.day}</span>
                    <span className={"closed" in h && h.closed ? "closed" : undefined}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="visit-map"
            role="img"
            aria-label="Georgia Trailer Outlet lot"
          >
            <Image
              src="/images/lot/gto-lot4.webp"
              alt="Georgia Trailer Outlet lot"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
