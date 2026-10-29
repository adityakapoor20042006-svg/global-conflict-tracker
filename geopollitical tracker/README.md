# Puri The Aravallis — Website Redesign

A from-scratch luxury real-estate marketing site for a ₹5+ crore residential
masterplan, built with Next.js (App Router), TypeScript, Tailwind CSS v4,
Framer Motion and GSAP.

## Design direction

The palette and motifs are drawn from the Aravalli hills themselves rather
than a generic "luxury gold" template:

- **Basalt** (`#0E1410`), **Limestone** (`#F5F1E8`), **Sandstone** (`#C9A876`),
  **Moss** (`#3F4A3D`), **Clay** (`#8B7355`) — see `src/app/globals.css`.
- **Fraunces** for display type (carved, organic serif), **Inter** for body
  copy, **JetBrains Mono** for data labels — elevation figures, tower IDs,
  construction percentages.
- The signature element is a **topographic contour line** that climbs as the
  visitor scrolls (`src/components/ui/ContourProgress.tsx`), and reappears as
  the masterplan's site-plan contours and the location map's ridgelines —
  used instead of a generic numbered-steps motif since this is a hillside
  development.
- The "3 more towers" expansion story is told three times deliberately:
  in the scroll-driven story chapter ("Phase II"), in the interactive
  masterplan (towers 04–07 marked as upcoming), and in the construction
  timeline.

## Getting started

```bash
npm install
cp .env.example .env.local   # add your ANTHROPIC_API_KEY for the AI concierge
npm run dev
```

Open http://localhost:3000.

## Folder structure

```
src/
  app/
    api/concierge/route.ts   # server-side Anthropic API call (key never exposed to client)
    layout.tsx                # fonts, metadata, JSON-LD
    page.tsx                  # assembles all homepage sections
    globals.css                # design tokens (Tailwind v4 @theme)
    robots.ts / sitemap.ts    # SEO
  components/
    layout/                   # Header, Footer
    sections/                 # one file per homepage section
    ui/                       # Button, Container, SectionHeading, AnimatedNumber, ContourProgress
  data/site.ts                 # all copy/content — single source of truth
  lib/                         # cn() classname helper, useScrollProgress hook
```

## Replacing placeholder content

- `src/data/site.ts` — every stat, tower, price, FAQ and testimonial lives
  here. Update this file first; components re-render automatically.
- `public/media/` — drop in `hero.mp4`, `hero-poster.jpg`, `og-cover.jpg`.
  See `public/media/README.md`.
- Architecture render, lifestyle photography, and gallery images are
  currently styled placeholder blocks (gradient + label) inside
  `Architecture.tsx`, `Lifestyle.tsx` and `Gallery.tsx`. Swap these for
  `next/image` `<Image>` components once real photography is available —
  this keeps automatic image optimization and Lighthouse scores high.

## AI concierge

`src/app/api/concierge/route.ts` calls the Anthropic Messages API
server-side using `ANTHROPIC_API_KEY` from your environment. The system
prompt is grounded in the same facts as `data/site.ts` (towers, pricing,
amenities) so it won't invent numbers. Deploy this as a serverless function
on Vercel/Netlify; set the env var in your hosting dashboard.

## Performance & accessibility notes

- All animated sections use `whileInView` with `once: true` so animations
  don't re-fire on scroll-back, keeping CPU low on long pages.
- `prefers-reduced-motion: reduce` is respected globally (`globals.css`).
- Every interactive element has a visible focus ring (`:focus-visible`) and
  an `aria-label` or associated `<label>`.
- Once real media is added, use `next/image` with explicit `sizes` and
  `priority` only on the hero poster to hit Lighthouse 95+.
- The hero video should be compressed (H.264, ~1080p, <8MB, no audio track)
  and always paired with a `poster` image, as scaffolded.

## Deploying

Standard Next.js app — works on Netlify or Vercel out of the box.
For Netlify: build command `npm run build`, publish directory `.next`
(use the Next.js Netlify plugin), and add `ANTHROPIC_API_KEY` under
Site settings → Environment variables.
