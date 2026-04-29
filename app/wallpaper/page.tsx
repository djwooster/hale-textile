import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";
import TextileMotif from "@/components/shared/TextileMotif";
import MailingList from "@/components/home/MailingList";

const categories = [
  {
    name: "Grasscloth & Natural",
    details: [
      "Woven natural fibers",
      "Jute · Seagrass · Sisal",
      "Perfect for Hawaii climate",
      "Textural · Tactile · Timeless",
    ],
    accent: false,
  },
  {
    name: "Printed & Patterned",
    details: [
      "Botanical · Geometric",
      "Traditional · Contemporary",
      "Exclusive designer lines",
      "Custom colorways available",
    ],
    accent: false,
  },
  {
    name: "Textured & Embossed",
    details: [
      "Linen · Silk · Faux Finish",
      "Venetian plaster effect",
      "Dimensional surface",
      "Luxurious hand feel",
    ],
    accent: false,
  },
  {
    name: "Mural & Scenic",
    details: [
      "Floor-to-ceiling panoramas",
      "Custom sizing available",
      "Tropical · Botanical",
      "Ocean & landscape scenes",
    ],
    accent: false,
  },
  {
    name: "Vinyl & Performance",
    details: [
      "Humidity resistant",
      "Cleanable surfaces",
      "Commercial grade",
      "Hawaii climate optimized",
    ],
    accent: false,
  },
  {
    name: "Fabric-Backed",
    details: [
      "Upholstered wall panels",
      "Fabric on walls",
      "Acoustic properties",
      "Ultimate luxury finish",
    ],
    accent: true,
  },
];

const galleryImages = [
  {
    src: "/images/Islander-RainforestMural-tropical_300RGB.jpg",
    alt: "Rainforest Mural wallpaper — tropical botanical panorama",
  },
  {
    src: "/images/Islander-BatikFish-coral&blue_300RGB.jpg",
    alt: "Batik Fish wallpaper in coral and blue — poolside room",
  },
  {
    src: "/images/Islander-StKitts-brown_300RGB.jpg",
    alt: "St Kitts wallpaper in brown — jungle silhouette bar setting",
  },
  {
    src: "/images/Islander-CanaryTrellis-coral-detail_300RGB.jpg",
    alt: "Canary Trellis wallpaper detail in coral",
  },
  {
    src: "/images/Islander-UndertheSea-turquoise&plum-detail_300RGB.jpg",
    alt: "Under the Sea wallpaper in turquoise and plum",
  },
  {
    src: "/images/Wanderlust-AlberoWP-tangerine&turquoise-detail-300RGB.jpg",
    alt: "Albero wallpaper detail in tangerine and turquoise",
  },
];

export default function WallpaperPage() {
  return (
    <>
      <PageHero
        eyebrow="Wall Coverings"
        headline="Wallpaper changes everything."
        subheadline="A single wall of the right wallpaper transforms a room completely. It is the highest-impact decision you can make in interior design — and the most personal."
      />

      {/* Intro + Quote */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <AnimatedSection>
              <p className="font-body text-[20px] font-light text-warm-gray leading-relaxed mb-8">
                Our studio has every wallpaper sample on display in context. You
                can see how it reads in the light. You can feel the texture. You
                can imagine it in your home.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-terracotta text-warm-white font-body text-[12px] tracking-[0.25em] uppercase font-medium px-8 py-4 hover:bg-terracotta-dark transition-colors duration-300"
              >
                Book a Wallpaper Consultation
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <blockquote className="bg-navy p-10 lg:p-12 relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                  <TextileMotif size={80} color="#FBF9F6" />
                </div>
                <div className="absolute -top-3 left-8 font-display text-8xl text-terracotta/20 leading-none select-none">
                  "
                </div>
                <p className="font-display text-xl lg:text-2xl font-light italic text-warm-white leading-relaxed relative z-10">
                  The right wallpaper is not decoration. It is architecture. It
                  defines the entire feeling of a room before a single piece of
                  furniture enters.
                </p>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-linen">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px">
          {galleryImages.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="overflow-hidden">
              <div className="relative aspect-[4/3] group overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* What We Carry */}
      <section className="py-20 lg:py-28 bg-cream textile-bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <TextileDivider className="mb-14" />
            <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-4">
              What We Carry
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">
              Six categories.
              <br />
              <span className="italic text-terracotta">One studio.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-linen">
            {categories.map((cat, i) => (
              <AnimatedSection
                key={cat.name}
                delay={i * 0.08}
                className={cat.accent ? "bg-navy" : "bg-warm-white"}
              >
                <div className="p-8 lg:p-10 h-full">
                  <h3
                    className={`font-display text-2xl lg:text-3xl font-light mb-5 ${
                      cat.accent ? "text-warm-white" : "text-navy"
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <ul
                    className={`space-y-2 border-t pt-5 ${
                      cat.accent ? "border-navy-light" : "border-linen"
                    }`}
                  >
                    {cat.details.map((d) => (
                      <li
                        key={d}
                        className={`font-body text-[12px] tracking-[0.18em] uppercase flex items-center gap-2 ${
                          cat.accent ? "text-linen" : "text-warm-gray"
                        }`}
                      >
                        <span className="w-1 h-1 rounded-full bg-terracotta flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Studio visit CTA */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden textile-bg">
        <div className="absolute bottom-0 right-0 opacity-8 pointer-events-none">
          <TextileMotif size={200} color="#d4614a" />
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-6">
                See It In Person
              </p>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-light text-warm-white leading-tight mb-6">
                Every sample is on display
                <span className="italic text-terracotta-light"> in context</span>.
              </h2>
              <p className="font-body text-[20px] font-light text-linen leading-relaxed mb-10 max-w-lg">
                Wallpaper is one of the few materials that must be experienced
                before you commit. Come to the studio — see how each pattern reads
                at scale, how the texture catches light, how the room changes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-terracotta text-warm-white font-body text-[12px] tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-terracotta-dark transition-colors duration-300"
                >
                  Book a Consultation
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <MailingList />
    </>
  );
}
