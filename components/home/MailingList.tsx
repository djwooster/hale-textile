"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import TextileMotif from "@/components/shared/TextileMotif";

export default function MailingList() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setError(data.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="mailing-list" className="py-24 lg:py-32 bg-terracotta relative overflow-hidden">
      {/* Textile texture */}
      <div className="absolute inset-0 textile-bg opacity-20 pointer-events-none" />

      {/* Decorative motifs */}
      <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none">
        <TextileMotif size={100} color="#0A2A3A" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-body text-[12px] tracking-[0.4em] uppercase text-warm-white/70 mb-5">
              Stay in the Loop
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-warm-white leading-tight mb-6">
              New arrivals, seasonal
              <br />
              <span className="italic">stories & studio notes</span>.
            </h2>
            <p className="font-body text-[20px] font-light text-warm-white/75 leading-relaxed mb-10">
              Join the Hale circle. Be the first to know about new fabric arrivals,
              limited accessory drops, and studio events.
            </p>

            {!submitted ? (
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    disabled={loading}
                    className="flex-1 bg-warm-white/10 border border-warm-white/30 text-warm-white placeholder:text-warm-white/40 font-body text-[20px] px-5 py-4 outline-none focus:border-warm-white/70 transition-colors duration-300 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-navy text-warm-white font-body text-[12px] tracking-[0.25em] uppercase font-medium px-7 py-4 hover:bg-navy-mid transition-colors duration-300 whitespace-nowrap disabled:opacity-50"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
                {error && (
                  <p className="mt-3 font-body text-sm text-warm-white/80">{error}</p>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="max-w-md mx-auto border border-warm-white/30 px-8 py-6"
              >
                <p className="font-display text-2xl text-warm-white font-light mb-2">
                  Welcome to the circle.
                </p>
                <p className="font-body text-xs text-warm-white/70">
                  You&apos;ll hear from us when something beautiful arrives.
                </p>
              </motion.div>
            )}

            <p className="mt-5 font-body text-[9px] tracking-[0.15em] text-warm-white/40">
              No spam. Unsubscribe at any time.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
