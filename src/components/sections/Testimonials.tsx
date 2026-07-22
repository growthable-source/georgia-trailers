import { testimonials } from "@/lib/site";

function Stars() {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Real Customers. Real Reviews.</span>
          <h2 className="section-title">People Drive From Hours Away</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial" key={t.author}>
              <Stars />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                {t.author} <span>{t.meta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="review-bar">
          <div className="review-bar-inner">
            <Stars />
            <strong>Trusted by trailer buyers across the Southeast</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
