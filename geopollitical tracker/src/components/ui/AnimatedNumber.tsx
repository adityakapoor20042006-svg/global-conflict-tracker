"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export function AnimatedNumber({
  value,
  suffix = "",
  duration = 1.8,
  decimals,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  const places = decimals ?? (value % 1 !== 0 ? 1 : 0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(places)),
    });
    return () => controls.stop();
  }, [isInView, value, duration, places]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
