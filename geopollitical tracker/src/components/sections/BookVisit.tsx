"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TOWERS } from "@/data/site";

const SLOTS = ["10:00 AM", "12:00 PM", "2:30 PM", "4:30 PM", "6:00 PM"];

export function BookVisit() {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState(SLOTS[0]);
  const [tower, setTower] = useState<string>(TOWERS[0].id);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="book-visit" className="relative bg-basalt py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Site Visit"
            title="See the ridge before you decide."
            description="A private, guided visit through the show residence, the completed Tower 01, and the active construction site — so you can see exactly what's ready and what's coming."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-limestone/10 bg-ridge/25 p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sandstone/20 text-sandstone">
                  <Check size={26} />
                </div>
                <h3 className="font-display text-2xl text-limestone">Visit requested</h3>
                <p className="max-w-sm text-sm text-limestone/65">
                  Our sales team will call within the hour to confirm your slot on{" "}
                  {date || "your preferred date"} at {slot}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="visit-name" className="mb-2 block text-xs font-medium text-limestone/60">
                      Full name
                    </label>
                    <input
                      id="visit-name"
                      required
                      type="text"
                      className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone placeholder:text-limestone/30 focus:outline-none"
                      placeholder="Aditya Kapoor"
                    />
                  </div>
                  <div>
                    <label htmlFor="visit-phone" className="mb-2 block text-xs font-medium text-limestone/60">
                      Phone number
                    </label>
                    <input
                      id="visit-phone"
                      required
                      type="tel"
                      className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone placeholder:text-limestone/30 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="visit-date" className="mb-2 block text-xs font-medium text-limestone/60">
                      Preferred date
                    </label>
                    <input
                      id="visit-date"
                      required
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label htmlFor="visit-tower" className="mb-2 block text-xs font-medium text-limestone/60">
                      Tower of interest
                    </label>
                    <select
                      id="visit-tower"
                      value={tower}
                      onChange={(e) => setTower(e.target.value)}
                      className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone focus:outline-none [color-scheme:dark]"
                    >
                      {TOWERS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-limestone/60">Preferred time slot</p>
                  <div className="flex flex-wrap gap-2">
                    {SLOTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSlot(s)}
                        className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                          slot === s
                            ? "bg-sandstone text-basalt"
                            : "border border-limestone/15 text-limestone/70 hover:border-sandstone/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                  icon={<Calendar size={15} />}
                >
                  Confirm Site Visit
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
