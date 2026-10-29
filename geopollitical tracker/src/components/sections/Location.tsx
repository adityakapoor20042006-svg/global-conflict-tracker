"use client";

import { motion } from "framer-motion";
import { Plane, Building2, GraduationCap, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const POINTS = [
  { icon: Plane, label: "IGI Airport", time: "12 min", x: 75, y: 25 },
  { icon: Building2, label: "Cyber City", time: "18 min", x: 60, y: 60 },
  { icon: GraduationCap, label: "The Shri Ram School", time: "9 min", x: 30, y: 35 },
  { icon: ShoppingBag, label: "DLF Mall of India", time: "22 min", x: 40, y: 75 },
];

export function Location() {
  return (
    <section id="location" className="relative bg-basalt-soft py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <SectionHeading
            eyebrow="Location"
            title="On the Dwarka Expressway, against the hills."
            description="Sector 88 sits at the rare intersection of expressway connectivity and the Aravalli's last undeveloped stretch — close enough for a daily commute, far enough to forget it at the end of one."
          />

          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-limestone/10 bg-ridge/30">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-25" aria-hidden="true">
              <path d="M0 80 Q 30 60, 50 65 T 100 40" className="contour-line" />
              <path d="M0 90 Q 35 75, 55 78 T 100 55" className="contour-line" style={{ opacity: 0.5 }} />
            </svg>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-sandstone/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-sandstone" />
              </span>
              <span className="absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-sandstone">
                You are here
              </span>
            </motion.div>

            {POINTS.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                >
                  <div className="glass-dark flex items-center gap-2 rounded-full px-3 py-1.5">
                    <Icon size={13} className="text-sandstone" />
                    <span className="font-mono text-[10px] text-limestone">{point.time}</span>
                  </div>
                  <p className="mt-1 text-center text-[10px] text-limestone/50">{point.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
