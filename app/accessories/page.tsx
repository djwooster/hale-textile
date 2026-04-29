import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";
import MailingList from "@/components/home/MailingList";
import Link from "next/link";

const accessories = [
  {
    name: "The Signature Tote",
    from: "From $125",
    tag: "Limited Seasonal Drops",
    details: [
      "Upholstery-weight fabric",
      "Dior Book Tote silhouette",
      "No hardware · Surprise lining",
      "Numbered · Named · Collectible",
    ],
    placeholder: "bg-sand",
    image: "/images/coral linen (1).jpg",
    featured: true,
  },
  {
    name: "Custom Throw Pillows",
    from: "From $85",
    tag: "Made to Order",
    details: [
      "Choose your fabric",
      "Custom sizing available",
      "Knife edge or flange",
      "Zipper or envelope back",
    ],
    placeholder: "bg-muted-rose",
    image: "/images/Island_colorseries1_water_300RGB.jpg",
  },
  {
    name: "Table Runners",
    from: "From $65",
    tag: "Made to Order",
    details: [
      "Custom length & width",
      "Jacquard · Linen · Tapestry",
      "Hemmed or fringed ends",
      "Matching napkin sets",
    ],
    placeholder: "bg-linen",
    image: "/images/Soleil-ProteaPrint-pool-Bistro-aqua-Calista-mandarin_300RGB.jpg",
  },
  {
    name: "Coverlet & Quilt",
    from: "From $285",
    tag: "Made to Order",
    details: [
      "King · Queen · Twin",
      "Choose face fabric",
      "Coordinating shams",
      "Heirloom quality",
    ],
    placeholder: "bg-navy/20",
    image: "/images/Soleil-ProteaPrint-pool-detail_300RGB.jpg",
  },
  {
    name: "Duvet Covers",
    from: "From $195",
    tag: "Made to Order",
    details: [
      "All standard sizes",
      "Zip or button closure",
      "Matching pillow shams",
      "Monogram available",
    ],
    placeholder: "bg-cream",
    image: "/images/PACIFIC_72J9301-02 (1).jpg",
  },
  {
    name: "Furoshiki Gift Bags",
    from: "From $35",
    tag: "In Studio",
    details: [
      "Japanese wrapping cloth",
      "Reusable · Beautiful",
      "Any size order",
      "Perfect for gifting",
    ],
    placeholder: "bg-terracotta/20",
    image: "/images/DSC_9075 (1).jpg",
  },
  {
    name: "Placemats & Napkins",
    from: "From $45 Set",
    tag: "Made to Order",
    details: [
      "Set of 4 or 6",
      "Mix & match fabric",
      "Hemstitched or bound",
      "Monogram available",
    ],
    placeholder: "bg-sand",
    image: "/images/DSC_9066_no tags (1).jpg",
  },
  {
    name: "Lavender Sachets",
    from: "From $15",
    tag: "In Studio",
    details: [
      "Made from library scraps",
      "Hawaii lavender filling",
      "Perfect gift · Gift sets",
      "Custom quantities",
    ],
    placeholder: "bg-muted-rose",
    image: "/images/CIVIC_17J7891-01 (1).jpg",
  },
];

export default function AccessoriesPage() {
  return (
    <>
      {/* Coming Soon Banner */}
      <div className="bg-terracotta relative overflow-hidden pt-16 lg:pt-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          <p className="font-body text-[12px] tracking-[0.15em] uppercase font-semibold text-warm-white">Coming Soon</p>
          <span className="w-px h-4 bg-warm-white/40 hidden sm:block" />
          <p className="font-body text-base font-light text-warm-white">
            Our accessories collection is being prepared —{" "}
            <a href="#mailing-list" className="underline underline-offset-2 hover:text-warm-white/80 transition-colors duration-200">sign up</a>
            {" "}to be notified when it launches.
          </p>
        </div>
      </div>

      <PageHero
        eyebrow="Made from the Library"
        headline="Accessories"
        subheadline="Everything is made from fabric in our library. You choose the cloth — we make it beautiful. Each piece is crafted to order in our studio."
        slim
      />

      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Accessory grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-linen">
            {accessories.map((item, i) => (
              <AnimatedSection
                key={item.name}
                delay={i * 0.07}
                className={`bg-warm-white group ${item.featured ? "lg:col-span-2" : ""}`}
              >
                <div className="p-8 lg:p-10 h-full flex flex-col">
                  {/* Image placeholder */}
                  <div
                    className={`${item.placeholder} ${item.featured ? "aspect-[16/7]" : "aspect-[4/3]"} mb-6 relative overflow-hidden`}
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-2xl lg:text-3xl font-light text-navy">
                          {item.name}
                        </h3>
                        <p className="font-body text-[9px] tracking-[0.25em] uppercase text-terracotta mt-1">
                          {item.from} · {item.tag}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-1.5 border-t border-linen pt-4">
                      {item.details.map((d) => (
                        <li
                          key={d}
                          className="font-body text-[12px] tracking-[0.18em] uppercase text-warm-gray flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Custom Order CTA card */}
            <AnimatedSection delay={0.5} className="bg-navy group lg:col-span-3">
              <div className="p-8 lg:p-10 h-full flex flex-col justify-between min-h-[320px] relative overflow-hidden">
                <div className="absolute inset-0 textile-bg opacity-20" />
                <div className="relative z-10">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-terracotta mb-4">
                    Price on Request
                  </p>
                  <h3 className="font-display text-3xl font-light text-warm-white mb-4">
                    Custom Order
                  </h3>
                  <p className="font-body text-[20px] font-light text-linen leading-relaxed">
                    Don&apos;t see what you need? We make almost anything from our
                    fabric library. Visit the studio to discuss.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="relative z-10 inline-flex items-center gap-3 border border-terracotta text-terracotta font-body text-[12px] tracking-[0.25em] uppercase font-medium px-6 py-3 hover:bg-terracotta hover:text-warm-white transition-all duration-300 self-start mt-8"
                >
                  Visit the Studio
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-16">
            <TextileDivider />
          </AnimatedSection>
        </div>
      </section>

      <MailingList />
    </>
  );
}
