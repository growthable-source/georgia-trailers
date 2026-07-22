export function TrustStrip() {
  const items = [
    "No Credit Check Financing",
    "Family Owned & Operated",
    "Drive Off Today",
    "No High-Pressure Sales",
  ];

  return (
    <div className="trust-strip">
      <div className="container">
        <div className="trust-strip-inner">
          {items.map((item) => (
            <div className="trust-item" key={item}>
              <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
