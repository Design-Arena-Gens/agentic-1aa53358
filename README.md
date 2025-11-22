## Printable Wall Art Conversion Radar

This research-driven Next.js application surfaces the strongest printable wall art opportunities with an action plan for scaling sales across Etsy, Shopify, TikTok Shop, and other digital marketplaces. The experience combines curated market intelligence, persona targeting, demand signals, and conversion-ready positioning for each niche.

### Key Features
- **Deep niche intelligence** with conversion, search volume, CPC, and competition data across primary channels.
- **Dynamic filtering** by platform, buyer persona, evergreen strength, trend momentum, and competition thresholds.
- **Conversion scoring** that balances momentum, virality, evergreen durability, and market saturation.
- **Execution blueprints** outlining upsell ideas, proof of demand, content topics, and emotional hooks per concept.
- **Strategic insights hub** summarizing platform alignment, fastest momentum plays, and durable anchor niches.

### Tech Stack
- [Next.js](https://nextjs.org/) App Router + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with radial gradient theming
- Modular data + analytics utilities for fast iteration

### Local Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to explore the radar. Tailor the dataset in `src/data/wallArtNiches.ts` to inject fresh research inputs as trends evolve.

### Production Build
```bash
npm run build
npm run start
```

### Project Structure Highlights
- `src/data/wallArtNiches.ts` — curated opportunity dataset with platform metrics and positioning.
- `src/lib/analytics.ts` — filtering, scoring, and aggregate intelligence helpers.
- `src/components/` — UI primitives including strategic insight cards and research filters.
- `src/app/page.tsx` — main dashboard experience assembled with React hooks.

Deployable instantly to Vercel with `vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-1aa53358`.
