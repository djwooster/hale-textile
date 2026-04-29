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
      {/* Founder story */}
      <section className="pt-36 pb-20 lg:pb-32 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <AnimatedSection className="lg:col-span-5">
              <div
                className="aspect-[3/4] bg-sand relative overflow-hidden"
                style={{
                  backgroundImage: "url('/meeta-about.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-navy/10" />
              </div>
            </AnimatedSection>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatedSection delay={0.15}>
                <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-6">
                  Founder
                </p>
                <h2 className="font-display text-4xl lg:text-5xl font-light text-navy mb-8 leading-tight">
                  Aloha, I'm Meeta Vu —
                  <span className="italic text-terracotta"> founder of Hale Textile Studio</span>.
                </h2>
                <div className="space-y-5 font-body text-[20px] font-light text-warm-gray leading-relaxed max-w-2xl">
                  <p>
                    We are Hawaii's only dedicated home fabric library — a trade showroom and creative resource for interior designers, architects, and anyone who loves beautiful things for the home. We carry fabric, wallpaper, rugs, and furniture from the world's finest textile houses.
                  </p>
                  <p>
                    I'm not a designer. But I believe that when you walk in, touch a fabric, and fall in love with what's possible — that's the beginning of something. We're here to make that happen, and to connect you with the right people to bring it to life.
                  </p>
                  <p>
                    Come by. Bring your team. Tell us what you're working on.
                  </p>
                  <p>
                    We'd love to meet you.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-display text-2xl font-light text-navy italic">— Meeta Vu</p>
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
            <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-4">What We Believe</p>
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
            <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-4">The Space</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">Come find us</h2>
          </AnimatedSection>
          <div className="max-w-2xl">
            <AnimatedSection delay={0.2}>
              <p className="font-body text-[20px] font-light text-warm-gray leading-relaxed mb-6">
                Our studio is open to visitors by appointment and during regular
                walk-in hours. We love meeting the people who will ultimately live
                with these fabrics.
              </p>
              <address className="not-italic font-body text-[20px] font-light text-charcoal leading-relaxed mb-8">
                <p className="font-medium text-navy">Hale Textile Studio</p>
                <p>1050 Queen St. Suite #100</p>
                <p>Honolulu, HI 96814</p>
              </address>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-terracotta text-warm-white font-body text-[12px] tracking-[0.25em] uppercase font-medium px-8 py-4 hover:bg-terracotta-dark transition-colors duration-300"
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
