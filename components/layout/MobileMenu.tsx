"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import TextileMotif from "@/components/shared/TextileMotif";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fabric-library", label: "The Collection" },
  { href: "/wallpaper", label: "Wallpaper" },
  { href: "/accessories", label: "Accessories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Visit Us" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

interface Props {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex flex-col bg-navy"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      {/* Textile texture overlay */}
      <div className="absolute inset-0 textile-bg opacity-30 pointer-events-none" />

      {/* Top bar spacer */}
      <div className="h-16" />

      {/* Links */}
      <motion.nav
        className="flex-1 flex flex-col justify-center px-10 pb-8 relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {navLinks.map((link, i) => (
          <motion.div key={link.href} variants={item}>
            <Link
              href={link.href}
              onClick={onClose}
              className={`block py-4 border-b font-display text-4xl font-light tracking-tight transition-colors duration-200 ${
                i === navLinks.length - 1
                  ? "border-transparent text-terracotta mt-8 text-3xl tracking-[0.15em] uppercase font-body font-medium text-base"
                  : "border-navy-light text-warm-white hover:text-terracotta"
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        {/* Bottom tagline */}
        <motion.p
          className="mt-12 font-body text-[12px] tracking-[0.3em] uppercase text-navy-light"
          variants={item}
        >
          Premium Fabrics · Bespoke Accessories
        </motion.p>
      </motion.nav>

      {/* Decorative motif */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <TextileMotif size={200} color="#d4614a" />
      </div>
    </motion.div>
  );
}
