"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative bg-basalt-soft py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Enquire"
            title="Talk to our sales team."
            description="Share a few details and a relationship manager will reach out — usually within the hour, during business hours."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-limestone/10 bg-ridge/25 py-14 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sandstone/20 text-sandstone">
                  <Check size={26} />
                </div>
                <h3 className="font-display text-2xl text-limestone">Message received</h3>
                <p className="max-w-sm text-sm text-limestone/65">
                  We&apos;ll be in touch shortly. For anything urgent, call us directly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-limestone/10 bg-ridge/25 p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-xs font-medium text-limestone/60">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone placeholder:text-limestone/30 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-xs font-medium text-limestone/60">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      required
                      type="tel"
                      className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone placeholder:text-limestone/30 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-medium text-limestone/60">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone placeholder:text-limestone/30 focus:outline-none"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-xs font-medium text-limestone/60">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    className="w-full rounded-lg bg-limestone/5 px-4 py-3 text-sm text-limestone placeholder:text-limestone/30 focus:outline-none"
                    placeholder="I'm interested in a 4 BHK residence…"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center"
                  icon={<Send size={14} />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
