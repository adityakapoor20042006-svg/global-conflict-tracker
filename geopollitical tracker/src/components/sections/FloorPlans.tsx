"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Bed, Bath, Maximize2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FLOOR_PLANS } from "@/data/site";

const ROOMS = [
  { id: "living", label: "Living & Dining", x: 10, y: 10, w: 130, h: 90 },
  { id: "kitchen", label: "Kitchen", x: 150, y: 10, w: 70, h: 50 },
  { id: "master", label: "Master Suite", x: 10, y: 110, w: 90, h: 80 },
  { id: "bed2", label: "Bedroom 02", x: 110, y: 110, w: 60, h: 80 },
  { id: "deck", label: "Private Deck", x: 150, y: 70, w: 70, h: 30 },
  { id: "bath", label: "En-suite Bath", x: 180, y: 110, w: 40, h: 35 },
];

export function FloorPlans() {
  const [activePlan, setActivePlan] = useState<string>(FLOOR_PLANS[1].id);
  const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);
  const plan = FLOOR_PLANS.find((p) => p.id === activePlan)!;

  return (
    <section id="residences" className="relative bg-basalt py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Residences"
          title="Floor plans built for hill light."
          description="Every layout orients living spaces toward the ridge. Tap a room to see it highlighted on the plan."
          className="mb-12"
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {FLOOR_PLANS.map((fp) => (
            <button
              key={fp.id}
              onClick={() => setActivePlan(fp.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activePlan === fp.id
                  ? "bg-sandstone text-basalt"
                  : "border border-limestone/15 text-limestone/70 hover:border-sandstone/50 hover:text-limestone"
              }`}
            >
              {fp.name}
            </button>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative rounded-2xl border border-limestone/10 bg-ridge/30 p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.svg
                key={plan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                viewBox="0 0 240 210"
                className="h-auto w-full"
                role="img"
                aria-label={`Floor plan for ${plan.name}`}
              >
                {ROOMS.map((room) => (
                  <g key={room.id}>
                    <motion.rect
                      x={room.x}
                      y={room.y}
                      width={room.w}
                      height={room.h}
                      rx={4}
                      onMouseEnter={() => setHoveredRoom(room.id)}
                      onMouseLeave={() => setHoveredRoom(null)}
                      onFocus={() => setHoveredRoom(room.id)}
                      onBlur={() => setHoveredRoom(null)}
                      tabIndex={0}
                      role="button"
                      aria-label={room.label}
                      animate={{
                        fill: hoveredRoom === room.id ? "var(--color-sandstone)" : "transparent",
                        opacity: hoveredRoom === room.id ? 0.25 : 1,
                      }}
                      stroke="var(--color-limestone)"
                      strokeOpacity={0.35}
                      strokeWidth={1}
                      className="cursor-pointer focus-visible:outline-none"
                      style={{ fill: "transparent" }}
                    />
                    <text
                      x={room.x + room.w / 2}
                      y={room.y + room.h / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="select-none font-mono"
                      fontSize="7"
                      fill="var(--color-limestone)"
                      opacity={hoveredRoom === room.id ? 1 : 0.55}
                    >
                      {room.label}
                    </text>
                  </g>
                ))}
              </motion.svg>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-limestone/10 bg-ridge/20 p-8">
            <div>
              <h3 className="font-display text-3xl font-medium text-limestone">{plan.name}</h3>
              <p className="mt-2 font-mono text-lg text-sandstone">{plan.price}</p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 rounded-xl bg-limestone/5 py-4">
                  <Bed size={18} className="text-sandstone" />
                  <span className="text-sm text-limestone/80">{plan.bedrooms} Beds</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl bg-limestone/5 py-4">
                  <Bath size={18} className="text-sandstone" />
                  <span className="text-sm text-limestone/80">{plan.baths} Baths</span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-xl bg-limestone/5 py-4">
                  <Maximize2 size={18} className="text-sandstone" />
                  <span className="text-sm text-limestone/80">{plan.area}</span>
                </div>
              </div>
            </div>

            <Button
              href="/brochure.pdf"
              variant="secondary"
              className="mt-8 w-full justify-center"
              icon={<Download size={15} />}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
