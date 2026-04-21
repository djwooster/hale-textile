import Link from "next/link";
import TextileMotif from "@/components/shared/TextileMotif";
import TextileDivider from "@/components/shared/TextileDivider";

const shop = [
  { href: "/fabric-library", label: "Fabric Library" },
  { href: "/accessories", label: "Accessories" },
];

const studio = [
  { href: "/partner-program", label: "Partner Program" },
  { href: "/about", label: "About the Studio" },
  { href: "/contact", label: "Visit Us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Textile texture */}
      <div className="absolute inset-0 textile-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 opacity-8 pointer-events-none">
        <TextileMotif size={220} color="#d4614a" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top divider */}
        <div className="pt-16 pb-12">
          <TextileDivider variant="dark" />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-light text-warm-white tracking-[0.08em]">
                Hale
              </span>
              <span className="block font-body text-[9px] tracking-[0.4em] uppercase text-terracotta mt-0.5">
                Textile Studio
              </span>
            </Link>
            <p className="font-body text-xs font-light text-linen leading-relaxed max-w-xs mb-8">
              A curated textile studio offering premium fabrics, bespoke
              accessories, and a living library of cloth. Open to designers,
              collectors, and the textile-curious.
            </p>
            <address className="not-italic font-body text-xs text-warm-gray leading-relaxed">
              <p className="text-linen font-medium mb-1">Hale Textile Studio</p>
              <p>142 Weavers Lane</p>
              <p>San Francisco, CA 94103</p>
              <a
                href="mailto:hello@hale-textile.com"
                className="block mt-3 text-terracotta hover:text-terracotta-light transition-colors duration-200"
              >
                hello@hale-textile.com
              </a>
            </address>
          </div>

          {/* Shop links */}
          <div>
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-terracotta mb-5">
              Shop
            </p>
            <ul className="space-y-3">
              {shop.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-xs text-linen hover:text-warm-white transition-colors duration-200 tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio links */}
          <div>
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-terracotta mb-5">
              Studio
            </p>
            <ul className="space-y-3">
              {studio.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-xs text-linen hover:text-warm-white transition-colors duration-200 tracking-wide"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-light py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[9px] tracking-[0.2em] uppercase text-warm-gray">
            © {new Date().getFullYear()} Hale Textile Studio. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="#" className="font-body text-[9px] tracking-[0.2em] uppercase text-warm-gray hover:text-linen transition-colors duration-200">
              Privacy
            </Link>
            <Link href="#" className="font-body text-[9px] tracking-[0.2em] uppercase text-warm-gray hover:text-linen transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
