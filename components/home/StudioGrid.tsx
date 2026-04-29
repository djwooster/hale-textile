"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const images = [
  {
    src: "/section/Wanderlust-TivoliWP-skyblue-SolsburyFAB-sunshineyellow-1-300RGB.jpg",
    alt: "Tivoli wallpaper and Solsbury fabric in sky blue and sunshine yellow",
    scale: 0.82,
  },
  {
    src: "/section/Poolside_colorseries_hkm_300RGB.jpg",
    alt: "Poolside colour series — striped and tropical pillows",
    scale: 0.92,
  },
  {
    src: "/section/TurtleBay_colorseries_300RGB.jpg",
    alt: "Turtle Bay colour series — blue and green printed pillows",
    scale: 1,
  },
  {
    src: "/section/VortexFAB_colorstory_hkm_300RGB.jpg",
    alt: "Vortex fabric colour story — stacked patterned pillows on chair",
    scale: 1,
  },
  {
    src: "/section/LacinatoWP&FAB_mineral_300RGB.jpg",
    alt: "Lacinato wallpaper and fabric in mineral — botanical leaf pattern",
    scale: 0.92,
  },
  {
    src: "/section/Wanderlust-MangroveTreeFAB-green&white-SolsburyFAB-green-RailwayStripeWP-green-300RGB.jpg",
    alt: "Mangrove Tree fabric in green and white with Railway Stripe wallpaper",
    scale: 0.82,
  },
];

export default function StudioGrid() {
  return (
    <section className="py-16 lg:py-24 bg-cream overflow-hidden">
      {/* Header */}
      <AnimatedSection className="text-center mb-10 px-6">
        <p className="font-body text-[12px] tracking-[0.35em] uppercase text-warm-gray mb-4">
          Follow Along
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy">
          Life at the Studio
        </h2>
        <a
          href="https://instagram.com/haletextilestudio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 font-body text-[12px] tracking-[0.25em] uppercase text-terracotta hover:text-terracotta-dark transition-colors duration-200"
        >
          @haletextilestudio
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </a>
      </AnimatedSection>

      {/* Panoramic strip */}
      <div className="relative">
        {/* Mobile: horizontal scroll */}
        <div className="flex lg:hidden gap-2 overflow-x-auto px-6 pb-2 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[72vw] snap-center overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="72vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: panoramic strip with varying heights */}
        <div className="hidden lg:flex items-center h-[420px] gap-px overflow-hidden">
          {images.map((img, i) => {
            const height = `${img.scale * 100}%`;
            return (
              <motion.div
                key={i}
                className="flex-1 overflow-hidden"
                style={{ height }}
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <div className="relative w-full h-full overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 17vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/15 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative chevron motif below grid */}
      <div className="flex justify-center mt-10">
        <svg width="60" height="16" viewBox="0 0 60 16" fill="none" aria-hidden>
          <polyline points="0,8 10,2 20,8 30,2 40,8 50,2 60,8" stroke="#d4614a" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <polyline points="0,13 10,7 20,13 30,7 40,13 50,7 60,13" stroke="#D4C9B8" strokeWidth="0.8" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
