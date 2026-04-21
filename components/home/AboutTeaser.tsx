"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileMotif from "@/components/shared/TextileMotif";

export default function AboutTeaser() {
  return (
    <section className="py-24 lg:py-36 bg-navy relative overflow-hidden textile-bg">
      {/* Decorative motifs */}
      <div className="absolute top-12 right-12 opacity-8 pointer-events-none">
        <TextileMotif size={180} color="#d4614a" />
      </div>
      <div className="absolute bottom-8 left-8 opacity-5 pointer-events-none">
        <TextileMotif size={120} color="#FBF9F6" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <AnimatedSection>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-6">
              The Studio
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-warm-white leading-tight mb-8">
              Where cloth becomes
              <span className="italic text-terracotta-light"> something more</span>.
            </h2>
            <p className="font-body text-sm font-light text-linen leading-relaxed mb-6">
              Hale Textile Studio was founded on a simple belief: that the right
              fabric can transform a space, an object, or a garment into something
              deeply personal. We curate and create textiles that carry history,
              intention, and beauty.
            </p>
            <p className="font-body text-sm font-light text-linen leading-relaxed mb-10">
              Our studio is open to designers, collectors, and anyone who believes
              that the materials around us matter.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 border border-terracotta text-terracotta font-body text-[10px] tracking-[0.25em] uppercase font-medium px-7 py-3.5 hover:bg-terracotta hover:text-warm-white transition-all duration-300"
            >
              Our Story
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="relative">
              <div
                className="aspect-[4/5] bg-navy-mid relative overflow-hidden"
                style={{
                  backgroundImage: "url('/images/about-teaser.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-navy/20" />
              </div>
              {/* Offset decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-terracotta/30 pointer-events-none" />
              {/* Stat block */}
              <motion.div
                className="absolute -bottom-8 -left-6 lg:-left-10 bg-terracotta px-6 py-5 max-w-[180px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <p className="font-display text-4xl font-light text-warm-white leading-none">
                  500+
                </p>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-warm-white/80 mt-1">
                  Fabrics in library
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
