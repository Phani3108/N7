# N7 — Number7 marketing site

The public website for **Number 7 Cognition LLP** — an AI-agents studio shipping products that earn their desk.

Live at https://number7.io (pending deploy).

## Stack

- **[Astro 5](https://astro.build)** — static site generator
- **MDX** — product and legal content
- **Inline SVG** — logo, product icons, favicon (no icon fonts, no external SVG deps)
- **Vanilla CSS** — design tokens in `src/styles/global.css`

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm check        # astro + TypeScript check
pnpm build        # → dist/ (static)
pnpm preview      # serve dist/
```

## Structure

```
src/
├── layouts/Base.astro              shared <head>, nav, footer
├── components/
│   ├── Logo.astro                  N7 monogram + AI orbit mark
│   ├── ProductIcon.astro           14 unique product icons (24×24)
│   ├── TopNav.astro
│   ├── Footer.astro                4 featured products + Others + legal rail
│   ├── ProductCard.astro
│   └── CookieToggles.astro
├── content/
│   ├── products/                   14 product MDX files
│   └── legal/                      6 legal MDX files
└── pages/
    ├── index.astro                 Home
    ├── about.astro · trust.astro · contact.astro
    ├── products/{index,b2b,b2c,[slug]}.astro
    └── legal/[slug].astro
```

## Brand

- **Palette**: ink `#0D0F1A` · paper `#F5F1E8` · lime `#C9F24A` · ember `#E85D3C`
- **Voice**: Ogilvy × New Yorker — short sentences, concrete verbs, one claim per sentence.
- **Master claim**: *"Six days, the world talks about AI. On the seventh, we ship it."*

## Products

| Bucket | Flagships |
|---|---|
| **B2B** | Digitalization of Schools · Enterprise AgentOS · Cortex · Zeta IMA · Digital Twin |
| **B2C** | Vexa · TransactionWonder · Shadow · Cadbury · Tasket |
| **Supporting** | DealFrame · MusicLuv · 3D World · PropertyCalculator |

## License

© Number 7 Cognition LLP. All rights reserved.
