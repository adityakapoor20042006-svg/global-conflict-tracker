"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { GALLERY_IMAGES } from "@/data/site";

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-basalt-soft py-28 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="The ridge, in every light."
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              className={`overflow-hidden rounded-xl bg-gradient-to-br from-ridge via-basalt-soft to-basalt ${
                img.tall ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
              role="img"
              aria-label={img.alt}
            >
              <div className="flex h-full w-full items-center justify-center text-limestone/15">
                <span className="px-3 text-center font-mono text-[10px] uppercase tracking-[0.15em]">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
