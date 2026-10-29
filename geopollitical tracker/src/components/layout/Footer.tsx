import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/data/site";

const SITEMAP = [
  { href: "#architecture", label: "Architecture" },
  { href: "#residences", label: "Residences" },
  { href: "#amenities", label: "Amenities" },
  { href: "#masterplan", label: "Masterplan" },
  { href: "#location", label: "Location" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-limestone/10 bg-basalt pt-20">
      <Container>
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-2xl font-medium text-limestone">
              Puri <span className="text-sandstone">The Aravallis</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-limestone/60">
              A seven-tower luxury masterplan on the Aravalli ridge — three towers
              standing, three more rising, one held in reserve.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-clay">
              Explore
            </p>
            <ul className="space-y-2.5">
              {SITEMAP.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-limestone/65 hover:text-limestone">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-clay">
              More
            </p>
            <ul className="space-y-2.5">
              {SITEMAP.slice(4).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-limestone/65 hover:text-limestone">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-clay">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-limestone/65">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-sandstone" />
                {SITE.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="flex-shrink-0 text-sandstone" />
                <a href={`tel:${SITE.phone}`} className="hover:text-limestone">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="flex-shrink-0 text-sandstone" />
                <a href={`mailto:${SITE.email}`} className="hover:text-limestone">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-limestone/10 py-8 text-xs text-limestone/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.developer}. All rights reserved.
          </p>
          <p>{SITE.rera}</p>
        </div>

        <p className="pb-8 text-[11px] leading-relaxed text-limestone/30">
          Disclaimer: Images, renders and visuals on this site are for illustrative and
          conceptual purposes only and may not represent the final product. All
          information is subject to change without prior notice and does not constitute
          a legal offer. Please refer to the RERA-approved documents before making any
          purchase decision.
        </p>
      </Container>
    </footer>
  );
}
