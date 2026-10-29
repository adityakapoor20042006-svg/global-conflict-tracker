"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

const CHAPTERS = [
  {
    mark: "650 MYA",
    title: "An ancient ridge",
    body: "The Aravallis are among the oldest mountain ranges on Earth — older than the Himalayas, weathered to a quiet, rounded grandeur over six hundred million years.",
  },
  {
    mark: "12.4 ACRES",
    title: "Low-rise, low-density",
    body: "Seven towers sit across a footprint that keeps 70% of the land open — ridgeline trails, water bodies and tree cover instead of wall-to-wall concrete.",
  },
  {
    mark: "RESIDENT NO. 1",
    title: "Already home",
    body: "Tower 01 has welcomed its first residents. The hills outside their windows haven't changed in half a billion years — the view they bought is permanent.",
  },
  {
    mark: "PHASE II",
    title: "Three more towers, rising",
    body: "Towers 05, 06 and 07 begin construction next phase — the same masterplan, the same ridge, extended for the families joining next.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels.length) return;

    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        if (i === 0) return;
        gsap.set(panel, { yPercent: 100 });
      });

      const triggers = panels.map((panel, i) => {
        if (i === panels.length - 1) return null;
        const next = panels[i + 1];
        return ScrollTrigger.create({
          trigger: sectionRef.current,
          start: () => `top+=${i * window.innerHeight} top`,
          end: () => `top+=${(i + 1) * window.innerHeight} top`,
          scrub: true,
          onUpdate: (self) => {
            gsap.set(next, { yPercent: 100 - self.progress * 100 });
          },
        });
      });

      return () => triggers.forEach((t) => t?.kill());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-basalt"
      style={{ height: `${CHAPTERS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {CHAPTERS.map((chapter, i) => (
          <div
            key={chapter.mark}
            ref={(el) => {
              if (el) panelsRef.current[i] = el;
            }}
            className="absolute inset-0 flex items-center bg-basalt"
            style={{ zIndex: i }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(circle at ${20 + i * 15}% 50%, var(--color-ridge), var(--color-basalt) 70%)`,
              }}
            />
            <Container className="relative z-10">
              <div className="max-w-2xl">
                <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-sandstone">
                  {chapter.mark}
                </p>
                <h3 className="text-balance font-display text-[clamp(2rem,5vw,4.2rem)] font-medium leading-[1.05] text-limestone">
                  {chapter.title}
                </h3>
                <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-limestone/70 md:text-lg">
                  {chapter.body}
                </p>
              </div>
            </Container>
            <div className="absolute bottom-10 right-6 z-10 hidden md:right-16 lg:block">
              <span className="font-mono text-[11px] tracking-widest text-limestone/30">
                {String(i + 1).padStart(2, "0")} / {String(CHAPTERS.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
