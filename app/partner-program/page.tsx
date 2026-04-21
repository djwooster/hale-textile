import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";
import TextileMotif from "@/components/shared/TextileMotif";
import Link from "next/link";

const tiers = [
  {
    name: "Studio Partner",
    description:
      "For independent designers and small studios who access our library regularly.",
    perks: [
      "10% trade discount on all fabric",
      "Priority access to new arrivals",
      "Sample yardage program",
      "Dedicated studio liaison",
    ],
    cta: "Apply",
    accent: false,
  },
  {
    name: "Trade Account",
    description:
      "For interior design firms, architects, and established studios with ongoing projects.",
    perks: [
      "15% trade discount on all fabric",
      "Net-30 payment terms",
      "Reserved studio time",
      "Custom sourcing service",
      "Wholesale accessory pricing",
    ],
    cta: "Apply",
    accent: true,
  },
  {
    name: "Wholesale",
    description:
      "For retailers, showrooms, and businesses purchasing accessories at volume.",
    perks: [
      "Wholesale pricing on accessories",
      "Minimum order quantities apply",
      "Private label available",
      "Exclusivity by region (select items)",
    ],
    cta: "Enquire",
    accent: false,
  },
];

const process = [
  { step: "01", title: "Apply", body: "Submit a short application with your studio or firm details." },
  { step: "02", title: "Connect", body: "We&apos;ll reach out to learn more about your work and needs." },
  { step: "03", title: "Access", body: "Receive your trade account access and begin working with us." },
];

export default function PartnerProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Trade & Wholesale"
        headline="Partner Program"
        subheadline="We work closely with designers, interior firms, and retailers who share our commitment to quality. Our partner program is built for serious makers."
        dark
      />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-warm-white textile-bg-light">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-display text-4xl lg:text-5xl font-light text-navy mb-6">
                Fabric, made for
                <br />
                <span className="italic text-terracotta">the people who use it</span>.
              </h2>
              <p className="font-body text-sm font-light text-warm-gray leading-relaxed mb-5">
                Our trade program gives designers and firms direct access to the
                full Hale library at preferred pricing, with the personal
                relationship that makes projects go smoothly.
              </p>
              <p className="font-body text-sm font-light text-warm-gray leading-relaxed">
                We believe the best work happens when the designer and the material
                source are truly aligned. That&apos;s the foundation of every partner
                relationship we build.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="relative">
              <div
                className="aspect-[4/3] bg-linen relative overflow-hidden"
                style={{
                  backgroundImage: "url('/images/partner-hero.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-terracotta/25 pointer-events-none" />
              <div className="absolute top-4 left-4 opacity-20">
                <TextileMotif size={80} color="#0A2A3A" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14 text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-4">Program Tiers</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">Find your fit</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-px bg-linen">
            {tiers.map((tier, i) => (
              <AnimatedSection
                key={tier.name}
                delay={i * 0.1}
                className={`p-10 ${tier.accent ? "bg-navy" : "bg-warm-white"}`}
              >
                <p className={`font-body text-[9px] tracking-[0.35em] uppercase mb-2 ${tier.accent ? "text-terracotta" : "text-terracotta"}`}>
                  {tier.accent ? "Most Popular" : " "}
                </p>
                <h3 className={`font-display text-3xl font-light mb-4 ${tier.accent ? "text-warm-white" : "text-navy"}`}>
                  {tier.name}
                </h3>
                <p className={`font-body text-xs font-light leading-relaxed mb-6 ${tier.accent ? "text-linen" : "text-warm-gray"}`}>
                  {tier.description}
                </p>
                <ul className={`space-y-2.5 mb-8 border-t pt-6 ${tier.accent ? "border-navy-light" : "border-linen"}`}>
                  {tier.perks.map((p) => (
                    <li key={p} className={`flex items-start gap-2 font-body text-[10px] tracking-[0.12em] ${tier.accent ? "text-linen" : "text-charcoal"}`}>
                      <svg className="w-3 h-3 mt-0.5 flex-shrink-0 text-terracotta" fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase font-medium px-6 py-3 border transition-all duration-300 ${
                    tier.accent
                      ? "border-terracotta text-terracotta hover:bg-terracotta hover:text-warm-white"
                      : "border-navy text-navy hover:bg-navy hover:text-warm-white"
                  }`}
                >
                  {tier.cta}
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <TextileDivider className="mb-14" />
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-4">How It Works</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-navy">Three steps</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-10">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.12}>
                <p className="font-display text-6xl font-light text-linen mb-4">{p.step}</p>
                <h3 className="font-display text-2xl font-light text-navy mb-3">{p.title}</h3>
                <p
                  className="font-body text-sm font-light text-warm-gray leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
