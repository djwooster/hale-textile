"use client";

import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";

const featured = [
  {
    name: "The Signature Tote",
    from: "From $125",
    tag: "Limited Seasonal Drops",
    image: "/images/acc-tote.jpg",
    placeholder: "bg-sand",
  },
  {
    name: "Custom Throw Pillows",
    from: "From $85",
    tag: "Made to Order",
    image: "/images/Island_colorseries1_water_300RGB.jpg",
    placeholder: "bg-muted-rose",
  },
  {
    name: "Coverlet & Quilt",
    from: "From $285",
    tag: "Made to Order",
    image: "/images/Soleil-ProteaPrint-pool-detail_300RGB.jpg",
    placeholder: "bg-linen",
  },
];

export default function FeaturedAccessories() {
  return (
    <section className="py-24 lg:py-32 bg-cream textile-bg-cream">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-14">
          <TextileDivider className="mb-14" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-4">
                Made from the Library
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy">
                Accessories
              </h2>
            </div>
            <Link
              href="/accessories"
              className="inline-flex items-center gap-2 font-body text-[12px] tracking-[0.25em] uppercase font-medium text-navy hover:text-terracotta transition-colors duration-300 self-start md:self-end"
            >
              View all accessories
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.12} direction="up">
              <Link href="/accessories" className="group block">
                <div
                  className={`aspect-[4/5] ${item.placeholder} relative overflow-hidden mb-5`}
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-[9px] tracking-[0.25em] uppercase bg-warm-white/90 px-3 py-1.5 text-terracotta">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-light text-navy group-hover:text-terracotta transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="font-body text-[12px] tracking-[0.2em] uppercase text-warm-gray mt-1">
                    {item.from}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
