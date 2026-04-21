"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileDivider from "@/components/shared/TextileDivider";
import MailingList from "@/components/home/MailingList";

const categories = ["All", "Jacquard", "Linen", "Tapestry", "Velvet", "Wool", "Cotton", "Studio Originals"];

const fabrics = [
  { id: 1, name: "Indigo Herringbone", category: "Jacquard", weight: "Upholstery", origin: "Belgium", image: "/images/fabric-01.jpg", placeholder: "bg-navy/80" },
  { id: 2, name: "Raw Linen Natural", category: "Linen", weight: "Medium", origin: "France", image: "/images/fabric-02.jpg", placeholder: "bg-sand" },
  { id: 3, name: "Amber Tapestry Weave", category: "Tapestry", weight: "Heavy", origin: "Portugal", image: "/images/fabric-03.jpg", placeholder: "bg-terracotta/60" },
  { id: 4, name: "Sage Bouclé", category: "Wool", weight: "Medium", origin: "Scotland", image: "/images/fabric-05.jpg", placeholder: "bg-linen" },
  { id: 5, name: "Midnight Velvet", category: "Velvet", weight: "Upholstery", origin: "Italy", image: "/images/fabric-06.jpg", placeholder: "bg-navy-mid" },
  { id: 6, name: "Bone Slubbed Cotton", category: "Cotton", weight: "Light", origin: "Japan", image: "/images/fabric-07.jpg", placeholder: "bg-muted-rose" },
  { id: 7, name: "Hale Original No. 4", category: "Studio Originals", weight: "Drapery", origin: "In Studio", image: "/images/fabric-08.jpg", placeholder: "bg-deep-warm/40" },
  { id: 8, name: "Terracotta Dobby", category: "Cotton", weight: "Medium", origin: "India", image: "/images/fabric-09.jpg", placeholder: "bg-terracotta/40" },
  { id: 9, name: "Ivory Damask", category: "Jacquard", weight: "Drapery", origin: "Belgium", image: "/images/fabric-10.jpg", placeholder: "bg-cream" },
];

export default function FabricLibraryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? fabrics : fabrics.filter((f) => f.category === active);

  return (
    <>
      <PageHero
        eyebrow="The Collection"
        headline="Fabric Library"
        subheadline="An ever-growing curation of premium textiles — chosen for hand, weight, and story. Each fabric in our library is available for custom accessories or purchase by the yard."
        dark
      />

      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-14 pb-8 border-b border-linen">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-[9px] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-200 ${
                  active === cat
                    ? "bg-navy text-warm-white border-navy"
                    : "border-linen text-warm-gray hover:border-navy hover:text-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((fabric, i) => (
              <motion.div
                key={fabric.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="group cursor-pointer"
              >
                <div
                  className={`aspect-[5/4] ${fabric.placeholder} relative overflow-hidden mb-4`}
                  style={{
                    backgroundImage: `url('${fabric.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    <div className="bg-warm-white/95 p-3">
                      <p className="font-body text-[9px] tracking-[0.2em] uppercase text-warm-gray">
                        {fabric.weight} weight · {fabric.origin}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-light text-navy group-hover:text-terracotta transition-colors duration-300">
                      {fabric.name}
                    </h3>
                    <p className="font-body text-[9px] tracking-[0.2em] uppercase text-warm-gray mt-0.5">
                      {fabric.category}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 mt-1.5 text-linen group-hover:text-terracotta transition-colors duration-300 flex-shrink-0"
                    fill="none" viewBox="0 0 16 16"
                  >
                    <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="mt-20">
            <div className="bg-cream p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-terracotta mb-3">
                  Don&apos;t see what you need?
                </p>
                <h3 className="font-display text-3xl lg:text-4xl font-light text-navy">
                  We source on request.
                </h3>
                <p className="font-body text-sm font-light text-warm-gray mt-2 max-w-md">
                  Our library is only a fraction of what we can access. Tell us what you&apos;re looking for.
                </p>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 inline-flex items-center gap-3 bg-navy text-warm-white font-body text-[10px] tracking-[0.25em] uppercase font-medium px-8 py-4 hover:bg-navy-mid transition-colors duration-300"
              >
                Enquire
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <MailingList />
    </>
  );
}
