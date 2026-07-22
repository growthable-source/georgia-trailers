import Image from "next/image";
import { brands } from "@/lib/site";

export function BrandsRow() {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="brands-title">Quality Brands We Carry</div>
        <div className="brands-grid">
          {brands.map((brand) => (
            <Image
              key={brand.src}
              src={brand.src}
              alt={brand.alt}
              width={160}
              height={60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
