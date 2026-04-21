"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";

const gridItems = [
  {
    id: 1,
    label: "Drapery & Upholstery",
    description: "Intricate patterns woven directly into the cloth.",
    span: "lg:col-span-2 lg:row-span-2",
    image: "/images/Wanderlust-OrleansFAB-skyblue-CoronadoEmbroidery-green-300RGB.jpg",
    placeholder: "bg-navy/80",
  },
  {
    id: 2,
    label: "Linen & Natural",
    description: "Honest texture, enduring character.",
    span: "",
    image: "/images/Islander-CanaryTrellis-coral-detail_300RGB.jpg",
    placeholder: "bg-terracotta/70",
  },
  {
    id: 3,
    label: "Tapestry Collection",
    description: "Heritage patterns reinterpreted.",
    span: "",
    image: "/images/Wanderlust-AlberoWP-tangerine&turquoise-detail-300RGB.jpg",
    placeholder: "bg-sand",
  },
  {
    id: 4,
    label: "Studio Originals",
    description: "Designed and woven exclusively at Hale.",
    span: "lg:col-span-3",
    image: "/images/Islander-UndertheSea-turquoise&plum-detail_300RGB.jpg",
    placeholder: "bg-linen",
  },
];

export default function EditorialGrid() {
  return (
    <section className="py-24 lg:py-32 bg-warm-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-terracotta mb-4">
              The Collection
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-tight">
              Fabric Library
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="font-body text-[18px] font-light text-warm-gray leading-relaxed">
              An ever-growing collection of premium textiles — each one chosen for
              its hand, weight, and story.
            </p>
            <Link
              href="/fabric-library"
              className="inline-flex items-center gap-2 mt-4 font-body text-[10px] tracking-[0.25em] uppercase font-medium text-navy hover:text-terracotta transition-colors duration-300"
            >
              View full library
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-linen">
          {gridItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`group relative overflow-hidden ${item.span}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              {/* Image / placeholder */}
              <div
                className={`relative w-full aspect-square overflow-hidden ${item.placeholder}`}
                style={{
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-500" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400 ease-out">
                  <div className="bg-warm-white/95 p-4">
                    <p className="font-body text-[9px] tracking-[0.3em] uppercase text-terracotta mb-1">
                      {item.label}
                    </p>
                    <p className="font-display text-lg text-navy font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="mt-20" delay={0.2}>
          <TextileDivider />
        </AnimatedSection>
      </div>
    </section>
  );
}
