"use client";

import PageHero from "@/components/shared/PageHero";
import MailchimpEmbed from "@/components/contact/MailchimpEmbed";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";

const reasons = [
  "Fabric enquiry",
  "Custom accessory",
  "Partner / trade account",
  "General question",
  "Book a studio visit",
];

export default function ContactPage() {

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        headline="Visit Us"
        subheadline="We&apos;d love to hear from you. Come by the studio, send a note, or just ask about a fabric."
      />

      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Info column */}
            <AnimatedSection>
              <div className="sticky top-28">
                <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-8">
                  Studio Details
                </p>

                {/* Address */}
                <div className="mb-10">
                  <p className="font-display text-2xl font-light text-navy mb-3">Address</p>
                  <address className="not-italic font-body text-[20px] font-light text-warm-gray leading-relaxed">
                    <p>1050 Queen Street #100</p>
                    <p>Honolulu, HI 96814</p>
                  </address>
                </div>

                <TextileDivider className="mb-10" />

                {/* Contact */}
                <div className="mb-12">
                  <p className="font-display text-2xl font-light text-navy mb-3">Contact</p>
                  <p className="font-body text-[20px] font-light text-warm-gray mb-1">
                    Email:{" "}
                    <a href="mailto:info@haletexttilestudio.com" className="text-terracotta hover:text-terracotta-dark transition-colors duration-200">
                      info@haletexttilestudio.com
                    </a>
                  </p>
                  <p className="font-body text-[20px] font-light text-warm-gray">
                    Phone:{" "}
                    <a href="tel:+18082015900" className="text-terracotta hover:text-terracotta-dark transition-colors duration-200">
                      808-201-5900
                    </a>
                  </p>
                </div>

              </div>
            </AnimatedSection>

            {/* Form column */}
            <AnimatedSection delay={0.15}>
              <p className="font-body text-[12px] tracking-[0.35em] uppercase text-terracotta mb-8">
                Send a Message
              </p>

              <MailchimpEmbed />

              {/* Original form — commented out while testing Mailchimp embed
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-[9px] tracking-[0.25em] uppercase text-warm-gray block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-linen bg-transparent font-body text-[20px] text-charcoal px-4 py-3 focus:border-navy focus:outline-none transition-colors duration-200"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="font-body text-[9px] tracking-[0.25em] uppercase text-warm-gray block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full border border-linen bg-transparent font-body text-[20px] text-charcoal px-4 py-3 focus:border-navy focus:outline-none transition-colors duration-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-[9px] tracking-[0.25em] uppercase text-warm-gray block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-linen bg-transparent font-body text-[20px] text-charcoal px-4 py-3 focus:border-navy focus:outline-none transition-colors duration-200"
                      placeholder="jane@studio.com"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[9px] tracking-[0.25em] uppercase text-warm-gray block mb-2">
                      Reason for Contact
                    </label>
                    <select className="w-full border border-linen bg-transparent font-body text-[20px] text-charcoal px-4 py-3 focus:border-navy focus:outline-none transition-colors duration-200 appearance-none cursor-pointer">
                      <option value="">Select one…</option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[9px] tracking-[0.25em] uppercase text-warm-gray block mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full border border-linen bg-transparent font-body text-[20px] text-charcoal px-4 py-3 focus:border-navy focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell us a little about what you're working on…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-navy text-warm-white font-body text-[12px] tracking-[0.25em] uppercase font-medium px-10 py-4 hover:bg-navy-mid transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="border border-linen p-12 text-center"
                >
                  <p className="font-display text-3xl font-light text-navy mb-3">
                    Thank you.
                  </p>
                  <p className="font-body text-[20px] font-light text-warm-gray">
                    We'll be in touch soon. In the meantime, feel free to
                    browse the library.
                  </p>
                </motion.div>
              )}
              */}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
