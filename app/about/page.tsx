import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";
import TextileMotif from "@/components/shared/TextileMotif";
import MailingList from "@/components/home/MailingList";
import Link from "next/link";

const values = [
  {
    title: "Curation Over Volume",
    body: "We would rather carry fifty exceptional fabrics than five hundred ordinary ones. Every yard in our library earns its place.",
  },
  {
    title: "Made to Endure",
    body: "Trend-proof materials, honest construction. We believe the things you keep should last long enough to be passed on.",
  },
  {
    title: "The Human Thread",
    body: "Behind every cloth is a maker. We trace provenance, support sustainable mills, and share those stories.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        headline="About the Studio"
        subheadline="Hale Textile Studio is a living, breathing library of cloth — and the people and principles behind it."
      />

      {/* Founder story */}
      <section className="py-20 lg:py-32 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-5">
              <div
                className="aspect-[3/4] bg-sand relative overflow-hidden"
                style={{
                  backgroundImage: "url('/images/founder.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-navy/10" />
              </div>
              <div className="absolute top-4 left-4 opacity-15 pointer-events-none hidden lg:block">
                <TextileMotif size={100} color="#0A2A3A" />
              </div>
            </AnimatedSection>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatedSection delay={0.15}>
                <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6">
                  Founder
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-light text-navy mb-8 leading-tight">
                  A studio built on the
                  <span className="italic text-terracotta"> belief that cloth matters</span>.
                </h2>
                <div className="space-y-5 font-body text-[18px] font-light text-warm-gray leading-relaxed max-w-2xl">
                  <p>
                    Hale Textile Studio was born from years spent searching for
                    fabric that was truly worth using. Not fabric that was
                    good enough — but cloth with depth, with hand, with a story
                    worth telling.
                  </p>
                  <p>
                    We opened our studio doors as a resource for anyone who
                    believes the materials around them matter. Our fabric library
                    is the heart of what we do — a curated collection built slowly,
                    deliberately, without compromise.
                  </p>
                  <p>
                    Our accessories follow the same principle: each one made from
                    our library, crafted with care, designed to last. Nothing is
                    mass-produced. Everything is intentional.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-display text-2xl font-light text-navy italic">— The Hale Team</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden textile-bg">
        <div className="absolute top-0 right-0 opacity-8 pointer-events-none">
          <TextileMotif size={200} color="#d4614a" />
        </div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection className="mb-14">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-4">What We Believe</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-warm-white">Our values</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="border-t border-navy-light pt-8">
                  <h3 className="font-display text-2xl lg:text-3xl font-light text-warm-white mb-4">{v.title}</h3>
                  <p className="font-body text-xs font-light text-linen leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Studio / space */}
      <section className="py-20 lg:py-28 bg-cream textile-bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <TextileDivider className="mb-14" />
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-4">The Space</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">Come find us</h2>
          </AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div
              className="aspect-video bg-linen"
              style={{
                backgroundImage: "url('/images/studio-space.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <AnimatedSection delay={0.2}>
              <p className="font-body text-[18px] font-light text-warm-gray leading-relaxed mb-6">
                Our studio is open to visitors by appointment and during regular
                walk-in hours. We love meeting the people who will ultimately live
                with these fabrics.
              </p>
              <address className="not-italic font-body text-[18px] font-light text-charcoal leading-relaxed mb-8">
                <p className="font-medium text-navy">Hale Textile Studio</p>
                <p>142 Weavers Lane</p>
                <p>San Francisco, CA 94103</p>
              </address>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-terracotta text-warm-white font-body text-[10px] tracking-[0.25em] uppercase font-medium px-8 py-4 hover:bg-terracotta-dark transition-colors duration-300"
              >
                Get in Touch
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <MailingList />
    </>
  );
}
