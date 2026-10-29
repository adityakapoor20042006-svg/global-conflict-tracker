"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const SCENES = [
  {
    title: "Mornings on the ridge",
    body: "Sunrise yoga decks face east, catching first light over the hills before the city wakes.",
    tag: "Wellness",
  },
  {
    title: "Evenings at the edge",
    body: "The cliff-edge pool turns gold at dusk — residents call it 'the hour'.",
    tag: "Leisure",
  },
  {
    title: "Weekends on the trail",
    body: "A private 1.8 km path winds through native Aravalli scrub, just for residents.",
    tag: "Outdoor",
  },
];

export function Lifestyle() {
  return (
    <section className="relative bg-basalt-soft py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Lifestyle"
          title="Three ways the hill becomes home."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {SCENES.map((scene, i) => (
            <motion.div
              key={scene.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ridge via-basalt to-basalt-soft transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/20 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-between p-7">
                <span className="self-start rounded-full glass px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-limestone">
                  {scene.tag}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium text-limestone">
                    {scene.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-limestone/70">{scene.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
