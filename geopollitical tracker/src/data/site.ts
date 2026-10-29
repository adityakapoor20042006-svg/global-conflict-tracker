// Single source of truth for project content.
// Replace placeholder media paths in /public/media once real assets are supplied.

export const SITE = {
  name: "Puri The Aravallis",
  developer: "Puri Constructions",
  tagline: "Where the city ends and the hills begin",
  location: "Sector 88, Dwarka Expressway, Gurugram",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "sales@puritheravallis.com",
  rera: "RERA Registered — GGM/843/2024/112",
};

export const ELEVATION_STATS = [
  { value: 842, suffix: "M", label: "Above sea level", unit: "ASL" },
  { value: 12.4, suffix: "", label: "Acres of low-rise living", unit: "ACRES" },
  { value: 70, suffix: "%", label: "Open & green", unit: "OPEN" },
  { value: 7, suffix: "", label: "Towers across the masterplan", unit: "TOWERS" },
] as const;

export const TOWERS = [
  {
    id: "T01",
    name: "Tower 01 — Kasturi",
    status: "Possession Ready",
    floors: 32,
    progress: 100,
    upcoming: false,
  },
  {
    id: "T02",
    name: "Tower 02 — Rohini",
    status: "Structure Complete · Finishing",
    floors: 32,
    progress: 92,
    upcoming: false,
  },
  {
    id: "T03",
    name: "Tower 03 — Aravalli Crown",
    status: "Under Construction",
    floors: 34,
    progress: 64,
    upcoming: false,
  },
  {
    id: "T04",
    name: "Tower 04 — Sandstone",
    status: "Foundation Stage",
    floors: 34,
    progress: 28,
    upcoming: true,
  },
  {
    id: "T05",
    name: "Tower 05 — Ridgeline",
    status: "Launching Next Phase",
    floors: 36,
    progress: 8,
    upcoming: true,
  },
  {
    id: "T06",
    name: "Tower 06 — Basalt",
    status: "Pre-Launch",
    floors: 36,
    progress: 0,
    upcoming: true,
  },
  {
    id: "T07",
    name: "Tower 07 — Summit",
    status: "Masterplan Reserve",
    floors: 38,
    progress: 0,
    upcoming: true,
  },
] as const;

export const AMENITIES = [
  { id: "infinity-pool", name: "Cliff-edge infinity pool", category: "Water" },
  { id: "spa", name: "Aravalli Spa & thermal baths", category: "Wellness" },
  { id: "trail", name: "1.8 km private hill trail", category: "Outdoor" },
  { id: "club", name: "The Ridge Clubhouse", category: "Social" },
  { id: "theatre", name: "Private screening theatre", category: "Leisure" },
  { id: "court", name: "Tennis & padel courts", category: "Sport" },
  { id: "yoga", name: "Sunrise yoga deck", category: "Wellness" },
  { id: "concierge", name: "24×7 white-glove concierge", category: "Service" },
  { id: "garden", name: "Aromatic herb gardens", category: "Outdoor" },
  { id: "kids", name: "Children's adventure cove", category: "Family" },
  { id: "gym", name: "Sky gym & training studio", category: "Wellness" },
  { id: "lounge", name: "Sky lounge at 38 floors", category: "Social" },
] as const;

export const FLOOR_PLANS = [
  { id: "3bhk", name: "3 BHK Residence", area: "2,840 sq.ft.", price: "₹5.1 Cr onwards", bedrooms: 3, baths: 4 },
  { id: "4bhk", name: "4 BHK Residence", area: "3,920 sq.ft.", price: "₹7.4 Cr onwards", bedrooms: 4, baths: 5 },
  { id: "4bhk-sky", name: "4 BHK Sky Villa", area: "5,180 sq.ft.", price: "₹10.2 Cr onwards", bedrooms: 4, baths: 6 },
  { id: "penthouse", name: "Penthouse", area: "7,650 sq.ft.", price: "On request", bedrooms: 5, baths: 7 },
] as const;

export const TESTIMONIALS = [
  {
    name: "Arjun & Meher Sethi",
    role: "Tower 01 Residents",
    quote:
      "We viewed nine properties across Gurugram before this. Nothing else gave us the hills, the silence, and a twelve-minute drive to the airport.",
  },
  {
    name: "Dr. Kabir Anand",
    role: "Tower 02 Resident",
    quote:
      "The construction quality shows in the details — the stone, the lift lobbies, even the way light enters each room at different hours.",
  },
  {
    name: "Naina Oberoi",
    role: "Tower 01 Resident",
    quote:
      "My favourite hour is dusk on the sky lounge, watching the ridge change colour. It still doesn't feel like Gurugram.",
  },
] as const;

export const FAQS = [
  {
    q: "How many towers make up the full masterplan?",
    a: "The Aravallis masterplan spans seven towers in total. Towers 01–03 are complete or under active construction; Towers 04, 05, 06 and 07 are the next phase of development, currently in foundation, pre-launch and reserve stages respectively.",
  },
  {
    q: "What is the RERA status of the project?",
    a: "The project is fully RERA registered. Registration number and approved layouts are available on request and displayed at the sales lounge.",
  },
  {
    q: "What is the possession timeline for the upcoming towers?",
    a: "Tower 01 has received possession. Tower 02 is in final finishing. Towers 03 onward follow a phased timeline shared at the time of booking, with projected possession windows for each tower.",
  },
  {
    q: "Can I customise my unit's interiors?",
    a: "Pre-finishing stage units across Towers 03–07 offer a curated palette of customisation options across flooring, modular kitchens and wardrobe finishes.",
  },
  {
    q: "Is a site visit necessary before booking?",
    a: "We strongly recommend it. The hill topography, light and scale are best experienced in person — we arrange a private guided visit including the show residence and the active construction site.",
  },
  {
    q: "What financing and home loan partners are available?",
    a: "We work with all major nationalised and private banks for home loans, with pre-approved project status that simplifies your loan disbursement.",
  },
] as const;

export const GALLERY_IMAGES = [
  { id: "g1", alt: "Aerial view of the Aravalli hillside towers at golden hour", tall: true },
  { id: "g2", alt: "Cliff-edge infinity pool overlooking the ridge", tall: false },
  { id: "g3", alt: "Living room interior with floor-to-ceiling glass", tall: false },
  { id: "g4", alt: "Private hill trail through native Aravalli scrub", tall: true },
  { id: "g5", alt: "Sky lounge at dusk with ridge silhouette", tall: false },
  { id: "g6", alt: "Master bedroom suite with stone detailing", tall: false },
  { id: "g7", alt: "The Ridge Clubhouse facade", tall: true },
  { id: "g8", alt: "Sunrise yoga deck above the canopy", tall: false },
] as const;
