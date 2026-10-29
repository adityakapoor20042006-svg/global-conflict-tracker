"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const item = TESTIMONIALS[index];

  return (
    <section className="relative bg-basalt-soft py-28 md:py-36">
      <Container>
        <SectionHeading eyebrow="Residents" title="Heard from the hill." align="center" className="mb-14" />

        <div className="relative mx-auto max-w-2xl text-center">
          <Quote size={32} className="mx-auto mb-6 text-sandstone/40" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-balance font-display text-2xl leading-relaxed text-limestone md:text-3xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-medium text-limestone">{item.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-clay">
                {item.role}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="rounded-full border border-limestone/15 p-2.5 text-limestone/70 transition-colors hover:border-sandstone/50 hover:text-limestone"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-sandstone" : "w-1.5 bg-limestone/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
              className="rounded-full border border-limestone/15 p-2.5 text-limestone/70 transition-colors hover:border-sandstone/50 hover:text-limestone"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
