"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/site";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I'm interested in Puri The Aravallis. Could you share more details?"
  );

  return (
    <motion.a
      href={`https://wa.me/${SITE.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-basalt/40 md:bottom-8 md:left-8"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.6 1.42 5.13L2 22l5.13-1.5a9.85 9.85 0 0 0 4.91 1.31h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.78 14.1c-.24.68-1.4 1.32-1.92 1.4-.5.08-1.13.11-1.82-.11-.42-.13-.95-.31-1.65-.6-2.9-1.25-4.79-4.16-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.74-2.12 1-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.47-.15.17-.32.38-.46.51-.15.14-.31.29-.13.58.18.29.8 1.31 1.71 2.12 1.18 1.05 2.17 1.38 2.47 1.53.3.15.48.13.66-.05.18-.18.79-.91.99-1.23.2-.31.4-.26.66-.16.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.13.07.74-.17 1.42Z" />
      </svg>
    </motion.a>
  );
}
