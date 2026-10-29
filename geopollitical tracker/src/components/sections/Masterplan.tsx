"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { TOWERS } from "@/data/site";

// Hand-placed coordinates (percentage of plot) tracing the ridge layout.
const POSITIONS: Record<string, { x: number; y: number }> = {
  T01: { x: 18, y: 70 },
  T02: { x: 30, y: 52 },
  T03: { x: 44, y: 36 },
  T04: { x: 58, y: 58 },
  T05: { x: 68, y: 40 },
  T06: { x: 80, y: 62 },
  T07: { x: 88, y: 30 },
};

export function Masterplan() {
  const [selected, setSelected] = useState<string>(TOWERS[0].id);
  const active = TOWERS.find((t) => t.id === selected)!;

  return (
    <section id="masterplan" className="relative bg-basalt-soft py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Masterplan"
          title="Seven towers, one ridge."
          description="Towers 01–03 are complete or actively under construction. Three further towers — 05, 06 and 07 — begin the next phase of the masterplan, extending the same ridge-facing design language."
          className="mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Interactive plot */}
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-limestone/10 bg-ridge/40">
            <svg
              viewBox="0 0 100 70"
              className="absolute inset-0 h-full w-full opacity-30"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 55 C 15 50, 25 35, 40 32 S 60 18, 75 22 S 95 12, 100 8"
                className="contour-line"
              />
              <path
                d="M0 62 C 18 58, 28 45, 42 42 S 62 28, 78 32 S 96 22, 100 18"
                className="contour-line"
                style={{ opacity: 0.6 }}
              />
            </svg>

            {TOWERS.map((tower) => {
              const pos = POSITIONS[tower.id];
              const isSelected = tower.id === selected;
              return (
                <button
                  key={tower.id}
                  onClick={() => setSelected(tower.id)}
                  aria-label={`View details for ${tower.name}`}
                  aria-pressed={isSelected}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                >
                  <motion.div
                    animate={{
                      scale: isSelected ? 1.25 : 1,
                      opacity: tower.upcoming && !isSelected ? 0.55 : 1,
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex h-9 w-9 items-center justify-center rounded-full font-mono text-[10px] font-medium md:h-11 md:w-11 ${
                      isSelected
                        ? "bg-sandstone text-basalt"
                        : tower.upcoming
                          ? "border border-dashed border-sandstone/60 text-sandstone"
                          : "bg-limestone/15 text-limestone"
                    }`}
                  >
                    {tower.id}
                    {isSelected && (
                      <motion.span
                        layoutId="masterplan-ring"
                        className="absolute -inset-2 rounded-full border border-sandstone/50"
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </motion.div>
                </button>
              );
            })}

            <div className="glass-dark absolute bottom-4 left-4 rounded-lg px-3 py-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-limestone/60">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-limestone/70 align-middle" />
                Live · <span className="ml-2 inline-block h-2 w-2 rounded-full border border-dashed border-sandstone align-middle" /> Upcoming
              </p>
            </div>
          </div>

          {/* Tower detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-limestone/10 bg-ridge/30 p-8"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sandstone">
                  {active.id} {active.upcoming && "· Upcoming Phase"}
                </p>
                <h3 className="mt-3 font-display text-3xl font-medium text-limestone">
                  {active.name.split("— ")[1]}
                </h3>
                <p className="mt-4 text-sm text-limestone/70">{active.status}</p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                      Floors
                    </p>
                    <p className="mt-1 font-display text-2xl text-limestone">{active.floors}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                      Construction
                    </p>
                    <p className="mt-1 font-display text-2xl text-limestone">{active.progress}%</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-limestone/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${active.progress}%` }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-sandstone"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
