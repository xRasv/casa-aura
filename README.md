# Casa Aura — Premium Experience Template

Warm, editorial, image-led website template for premium spas, salons, event venues, boutique gyms, restaurants, and other reservation-based experience brands.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript**
- **Tailwind CSS** with full design-token mapping from `DESIGN.md`
- **Framer Motion** for scroll-triggered reveals and micro-interactions
- **next/font** (Newsreader serif + Inter sans)
- **next/image** for optimized imagery
- **lucide-react** icons

## Sections

1. Hero — cinematic image, staggered headline + dual CTAs
2. Experience / value — editorial split with value list
3. Featured experiences — 4 image cards with metadata
4. Gallery — asymmetric editorial mosaic
5. Social proof — pullquote + reputation chips
6. Location & hours — address, hours, stylized map
7. FAQ / booking notes — animated hairline accordion
8. Final CTA + footer — cinematic close with WhatsApp-first conversion

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Customization

- Colors, typography, spacing → `tailwind.config.ts` (matches `DESIGN.md`)
- Imagery → `components/images.ts` (swap Unsplash URLs for brand photography)
- Copy → individual section components in `components/`
