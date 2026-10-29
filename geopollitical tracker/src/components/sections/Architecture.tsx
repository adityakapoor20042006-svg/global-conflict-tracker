"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { ELEVATION_STATS } from "@/data/site";

export function Architecture() {
  return (
    <section id="architecture" className="relative bg-basalt py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <SectionHeading
            eyebrow="Architecture & Site"
            title="Built into the ridge, not on top of it."
            description="Every tower follows the natural contour of the hillside. Facades are cut from local sandstone tones, terraces step back with the slope, and no two towers share the same skyline silhouette — deliberately, so the ridge profile stays legible from the highway below."
          />

          <div className="relative">
            <div
              className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ridge"
              role="img"
              aria-label="Architectural rendering of Puri The Aravallis towers stepping down the hillside"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ridge via-basalt-soft to-basalt text-limestone/20">
                <span className="font-mono text-xs uppercase tracking-[0.3em]">
                  Architectural render
                </span>
              </div>
            </div>
            <div className="glass-dark absolute -bottom-6 -left-6 hidden rounded-xl px-5 py-4 md:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sandstone">
                Site Elevation
              </p>
              <p className="mt-1 font-display text-2xl text-limestone">842M ASL</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-limestone/10 md:grid-cols-4">
          {ELEVATION_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-basalt p-6 md:p-8"
            >
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-clay">
                {stat.unit}
              </p>
              <p className="font-display text-4xl font-medium text-limestone md:text-5xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-limestone/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
