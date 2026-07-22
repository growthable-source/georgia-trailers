import { siteConfig } from "@/lib/site";

export function FinancingBlock() {
  return (
    <section className="finance-section" id="financing">
      <div className="container">
        <div className="finance-grid">
          <div>
            <div className="finance-eyebrow">
              ★ Bad Credit? No Credit? No Problem.
            </div>
            <h2 className="finance-title">
              Approved In
              <br />
              Minutes. Not Weeks.
            </h2>
            <p className="finance-lede">
              We specialize in affordable trailer financing for everyone —
              working folks, contractors, landscapers, farmers. No credit checks
              on most approvals, and competitive rates that beat the banks.
            </p>
            <ul className="finance-points">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>{" "}
                No Credit Check Options
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>{" "}
                Competitive Rates
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>{" "}
                Same-Day Answers
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>{" "}
                Drive Off Today
              </li>
            </ul>
            <div className="finance-cta-row">
              <a
                href="#lead-form"
                className="btn btn-on-blaze"
                data-track="finance_apply"
              >
                Start My Application
              </a>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="btn btn-on-blaze-outline"
                data-track="finance_call"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.21 1.11l-2.24 2.1z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
          <div className="finance-stat-card">
            <div className="big">5 MIN</div>
            <div className="label">To Get Pre-Approved</div>
            <hr className="hr" />
            <div className="tiny">
              Most customers get an answer in under 5 minutes. Fill the form or
              call {siteConfig.phoneDisplay} — takes two minutes, zero pressure.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
