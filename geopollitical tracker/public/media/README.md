Place production media here:
- hero.mp4         (cinematic aerial/drone footage, <15s loop, muted, h264, ~1080p, compressed under 8MB for fast first paint)
- hero-poster.jpg  (first-frame still of hero.mp4, used while video loads / as fallback)
- og-cover.jpg     (1200x630 social share image)

Architecture renders, lifestyle photography, and gallery images referenced as
placeholder blocks in Architecture.tsx, Lifestyle.tsx, and Gallery.tsx should
be swapped for next/image <Image> components pointing at real assets once
photography is available — this keeps Lighthouse image-optimization scores high.
