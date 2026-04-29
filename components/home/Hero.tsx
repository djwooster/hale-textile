"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const words = ["cloth", "texture", "weave", "craft"];

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = wordRef.current;
    if (!el) return;
    const cycle = () => {
      el.style.opacity = "0";
      el.style.transform = "translateY(8px)";
      setTimeout(() => {
        indexRef.current = (indexRef.current + 1) % words.length;
        el.textContent = words[indexRef.current];
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 400);
    };
    const timer = setInterval(cycle, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-image-new.jpg')" }}
        />
        {/* Gradient overlay — top-down to keep bottom focal point clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/30 to-transparent" />
        {/* Textile texture */}
        <div className="absolute inset-0 textile-bg opacity-20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-6 lg:px-12 pt-32 lg:pt-36 max-w-screen-xl mx-auto w-full">
        <div className="overflow-hidden pb-4">
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-light text-warm-white leading-[0.95] tracking-tight text-shadow-hero"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            A living
            <br />
            library of{" "}
            <span
              ref={wordRef}
              className="italic text-terracotta-light"
              style={{ display: "inline-block", transition: "opacity 0.6s ease, transform 0.6s ease" }}
            >
              cloth
            </span>
            .
          </motion.h1>
        </div>

        <motion.p
          className="mt-8 font-body text-lg lg:text-[20px] font-light text-warm-white max-w-lg leading-relaxed text-shadow-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          Premium fabrics, bespoke accessories, and an atelier where every thread
          tells a story.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <Link
            href="/fabric-library"
            className="inline-flex items-center gap-3 bg-terracotta text-warm-white font-body text-[11px] tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-terracotta-dark transition-colors duration-300"
          >
            Explore the Library
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-warm-white/40 text-warm-white font-body text-[11px] tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-warm-white/70 transition-all duration-300 bg-white/10 backdrop-blur-sm hover:bg-white/15"
          >
            Visit Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
