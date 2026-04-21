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
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-image-new.jpg')" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/20" />
        {/* Textile texture */}
        <div className="absolute inset-0 textile-bg opacity-20" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-warm-white/50 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-warm-white/30 origin-top"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Hero content */}
      <div className="relative z-10 px-6 lg:px-12 pb-16 lg:pb-24 max-w-screen-xl mx-auto w-full">
        <motion.p
          className="font-body text-[10px] tracking-[0.4em] uppercase text-terracotta-light mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          Hale Textile Studio
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-light text-warm-white leading-[0.95] tracking-tight"
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
          className="mt-8 font-body text-base lg:text-lg font-light text-warm-white/70 max-w-lg leading-relaxed"
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
            className="inline-flex items-center gap-3 border border-warm-white/40 text-warm-white font-body text-[11px] tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-warm-white/80 transition-colors duration-300"
          >
            Visit Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
