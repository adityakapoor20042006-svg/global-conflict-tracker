import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://www.puritheravallis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE.name} | Luxury Hillside Residences, ${SITE.location}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Puri The Aravallis is a 7-tower luxury residential masterplan set against the Aravalli hills on Dwarka Expressway, Gurugram. 3, 4 BHK residences and sky villas from ₹5.1 Cr. Book a private site visit.",
  keywords: [
    "Puri The Aravallis",
    "luxury apartments Gurugram",
    "Dwarka Expressway property",
    "Aravalli hills residences",
    "Puri Constructions",
    "4 BHK Gurugram",
    "luxury real estate India",
  ],
  authors: [{ name: "Puri Constructions" }],
  openGraph: {
    title: `${SITE.name} | Luxury Hillside Residences`,
    description:
      "A 7-tower masterplan on the edge of the Aravalli hills. Residences from ₹5.1 Cr. Private site visits now open.",
    url: siteUrl,
    siteName: SITE.name,
    images: [{ url: "/media/og-cover.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Luxury Hillside Residences`,
    description:
      "A 7-tower masterplan on the edge of the Aravalli hills. Residences from ₹5.1 Cr.",
    images: ["/media/og-cover.jpg"],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: SITE.name,
    description:
      "A 7-tower luxury residential masterplan on the Aravalli hills, Dwarka Expressway, Gurugram.",
    brand: { "@type": "Organization", name: SITE.developer },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 88, Dwarka Expressway",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    telephone: SITE.phone,
    numberOfAccommodationUnits: 7,
  };

  return (
    <html lang="en-IN">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} font-body bg-basalt text-limestone antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
