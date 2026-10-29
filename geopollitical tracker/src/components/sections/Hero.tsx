"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100vh] min-h-[640px] w-full overflow-hidden bg-basalt"
    >
      <motion.div style={{ scale: videoScale }} className="absolute inset-0">
        {/* Replace /media/hero-poster.jpg and /media/hero.mp4 with real production assets */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-poster.jpg"
          className="h-full w-full object-cover"
          aria-label="Aerial cinematic footage of Puri The Aravallis hillside towers at golden hour"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-basalt/70 via-basalt/30 to-basalt"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-basalt via-transparent to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-end pb-24 md:pb-28"
      >
        <Container>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-sandstone"
          >
            842M Above Sea Level · Dwarka Expressway, Gurugram
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-balance font-display text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.98] text-limestone"
          >
            Where the city ends
            <br />
            <span className="italic text-sandstone-soft">and the hills begin.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-xl text-balance text-base text-limestone/75 md:text-lg"
          >
            A seven-tower masterplan carved into the Aravalli ridge — 3 &amp; 4 BHK
            residences and sky villas from ₹5.1 Cr, twelve minutes from the
            international airport.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="#book-visit" variant="primary" icon={<Calendar size={15} />}>
              Book a Site Visit
            </Button>
            <Button href="#residences" variant="secondary">
              Explore Residences
            </Button>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-limestone/60"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
