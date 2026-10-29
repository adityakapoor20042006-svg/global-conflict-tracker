"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves, Flower2, Footprints, Users, Clapperboard,
  CircleDot, Sunrise, Headset, Sprout, Baby, Dumbbell, Wine,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { AMENITIES } from "@/data/site";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "infinity-pool": Waves,
  spa: Flower2,
  trail: Footprints,
  club: Users,
  theatre: Clapperboard,
  court: CircleDot,
  yoga: Sunrise,
  concierge: Headset,
  garden: Sprout,
  kids: Baby,
  gym: Dumbbell,
  lounge: Wine,
};

export function Amenities() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="amenities" className="relative bg-basalt py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Amenities"
          title="Forty acres of reasons to stay home."
          description="Every amenity sits within a five-minute walk of any tower entrance — connected by the same trail system that threads through the masterplan."
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {AMENITIES.map((amenity, i) => {
            const Icon = ICONS[amenity.id] ?? Waves;
            const isActive = active === amenity.id;
            return (
              <motion.button
                key={amenity.id}
                onMouseEnter={() => setActive(amenity.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(amenity.id)}
                onBlur={() => setActive(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-start gap-4 overflow-hidden rounded-xl border border-limestone/10 bg-ridge/30 p-6 text-left transition-colors hover:border-sandstone/40"
              >
                <motion.div
                  animate={isActive ? { y: -4, scale: 1.08 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-limestone/5 text-sandstone"
                >
                  <Icon size={20} />
                </motion.div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-clay">
                    {amenity.category}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-limestone">
                    {amenity.name}
                  </p>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-sandstone"
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
