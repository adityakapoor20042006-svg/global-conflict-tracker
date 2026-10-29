"use client";

import { useScrollProgress } from "@/lib/useScrollProgress";

/**
 * The site's signature element: a topographic contour line that climbs
 * as the visitor scrolls, echoing an elevation profile of the Aravalli
 * ridge the towers sit on. Lives in the floating nav.
 */
export function ContourProgress() {
  const progress = useScrollProgress();
  const path = "M2 58 C 20 58, 28 40, 42 40 S 60 22, 76 22 S 96 6, 118 6";
  const length = 160;

  return (
    <div className="relative h-[64px] w-[120px]" aria-hidden="true">
      <svg viewBox="0 0 120 64" className="h-full w-full overflow-visible">
        <path d={path} className="contour-line" style={{ opacity: 0.25 }} />
        <path
          d={path}
          className="contour-line"
          strokeDasharray={length}
          strokeDashoffset={length - progress * length}
          style={{ transition: "stroke-dashoffset 80ms linear" }}
        />
      </svg>
    </div>
  );
}
