"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContourProgress } from "@/components/ui/ContourProgress";
import { SITE } from "@/data/site";

const LINKS = [
  { href: "#architecture", label: "Architecture" },
  { href: "#residences", label: "Residences" },
  { href: "#amenities", label: "Amenities" },
  { href: "#masterplan", label: "Masterplan" },
  { href: "#location", label: "Location" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-4 flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-6 ${
            scrolled ? "glass-dark" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold tracking-tight text-limestone md:text-xl">
              Puri
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-sandstone">
              The Aravallis
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-limestone/75 transition-colors hover:text-limestone"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="hidden xl:block">
              <ContourProgress />
            </div>
            <Button href={`tel:${SITE.phone}`} variant="secondary" className="px-5 py-2.5">
              <Phone size={14} />
              Call Now
            </Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-limestone lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </motion.div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-basalt/98 lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-display text-lg font-semibold text-limestone">
                Puri The Aravallis
              </span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-limestone"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-1 px-6" aria-label="Mobile">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-limestone/10 py-4 font-display text-2xl text-limestone"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-10 px-6">
              <Button href={`tel:${SITE.phone}`} variant="primary" className="w-full justify-center">
                <Phone size={16} />
                Call Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
