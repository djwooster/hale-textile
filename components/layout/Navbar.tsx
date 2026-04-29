"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fabric-library", label: "The Collection" },
  { href: "/wallpaper", label: "Wallpaper" },
  { href: "/accessories", label: "Accessories" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled || !isHome
    ? "bg-warm-white/95 backdrop-blur-md border-b border-linen"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-charcoal" : "text-warm-white";
  const logoColor = scrolled || !isHome ? "text-navy" : "text-warm-white";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Wordmark */}
            <Link
              href="/"
              className={`flex flex-col leading-none transition-colors duration-300 ${logoColor}`}
            >
              <span className="font-display text-xl lg:text-2xl font-light tracking-[0.12em] uppercase">
                Hale
              </span>
              <span
                className="font-body text-[9px] lg:text-[12px] tracking-[0.35em] uppercase font-light -mt-0.5"
                style={{ color: scrolled || !isHome ? "var(--terracotta)" : "var(--muted-rose)" }}
              >
                Textile Studio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-body text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 group ${textColor}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-terracotta transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`hidden lg:inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase font-medium px-5 py-2.5 border transition-all duration-300 ${
                  scrolled || !isHome
                    ? "border-navy text-navy hover:bg-navy hover:text-warm-white"
                    : "border-warm-white/60 text-warm-white hover:bg-warm-white hover:text-navy"
                }`}
              >
                Visit Us
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className={`lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 transition-colors duration-300 ${textColor}`}
                aria-label="Toggle menu"
              >
                <motion.span
                  className="block h-px w-6 bg-current origin-center"
                  animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-px w-6 bg-current origin-center"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-px w-6 bg-current origin-center"
                  animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
