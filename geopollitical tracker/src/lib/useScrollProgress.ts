"use client";

import { useEffect, useState } from "react";

/**
 * Tracks overall page scroll progress as a 0–1 value.
 * Powers the signature "contour line" navigation indicator —
 * a visual echo of climbing an elevation profile as the visitor scrolls.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
