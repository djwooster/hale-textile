"use client";

import { motion } from "framer-motion";
import TextileDivider from "./TextileDivider";

interface Props {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, headline, subheadline, dark = false }: Props) {
  return (
    <section
      className={`pt-36 pb-20 px-6 lg:px-12 ${dark ? "bg-navy textile-bg" : "bg-cream textile-bg-cream"}`}
    >
      <div className="max-w-screen-xl mx-auto">
        {eyebrow && (
          <motion.p
            className={`font-body text-[10px] tracking-[0.35em] uppercase mb-6 ${
              dark ? "text-terracotta" : "text-terracotta"
            }`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          className={`font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.0] text-balance ${
            dark ? "text-warm-white" : "text-navy"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            className={`mt-6 font-body text-lg font-light leading-relaxed max-w-2xl ${
              dark ? "text-linen" : "text-warm-gray"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            {subheadline}
          </motion.p>
        )}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TextileDivider variant={dark ? "dark" : "default"} />
        </motion.div>
      </div>
    </section>
  );
}
