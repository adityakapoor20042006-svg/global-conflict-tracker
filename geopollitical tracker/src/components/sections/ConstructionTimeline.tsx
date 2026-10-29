"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { TOWERS } from "@/data/site";

export function ConstructionTimeline() {
  return (
    <section className="relative bg-basalt py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Construction Progress"
          title="Three towers stand. Three more are rising."
          description="Towers 01–03 anchor the ridge today. Towers 04, 05 and 06 begin the next phase of construction, with Tower 07 held in masterplan reserve."
          className="mb-16"
        />

        <div className="space-y-3">
          {TOWERS.map((tower, i) => (
            <motion.div
              key={tower.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-limestone/10 bg-ridge/20 px-5 py-4 md:grid-cols-[80px_1fr_180px_60px] md:gap-6 md:px-6"
            >
              <span className="font-mono text-xs text-clay">{tower.id}</span>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-limestone">
                  {tower.name.split("— ")[1]}
                </p>
                <p className="truncate text-xs text-limestone/50">{tower.status}</p>
              </div>

              <div className="col-span-2 mt-2 md:col-span-1 md:mt-0">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-limestone/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tower.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.06 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full ${tower.upcoming ? "bg-clay" : "bg-sandstone"}`}
                  />
                </div>
              </div>

              <span className="hidden text-right font-mono text-xs text-limestone/60 md:block">
                {tower.progress}%
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
