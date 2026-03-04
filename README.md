# BRUT. — Dry Craft Cider Website

> Demo website for a fictional dry craft cider brand from Ghent, Belgium. Built as a reference project for the [Vibe Coding for Marketers](https://www.vibecodingformarketers.com) course.

**Live site:** [brutcider.com](https://www.brutcider.com)

## About

This is a complete, production-quality marketing website built entirely with vibe coding (AI-assisted development using Claude Code). It serves as the demo project for **Lesson 3: A Complete Website** of the Vibe Coding for Marketers course, where students learn to build multi-page websites with animations, SEO, and multilingual support.

Later lessons build on this project:
- **Lesson 5:** Technical SEO — meta tags, sitemap, structured data
- **Lesson 7:** Multilingual — adding 6 locales with next-intl
- **Lesson 9:** Analytics — GTM + GA4 event tracking

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | App Router, SSG, Turbopack |
| React 19 | UI framework |
| TypeScript | Strict mode |
| Tailwind CSS 4 | Styling (`@theme` syntax) |
| next-intl | 6 locales (EN, NL, FR, DE, PL, CS) |
| motion | Scroll animations |
| Leaflet | Stockist map |

## Getting Started

```bash
git clone https://github.com/faborsky/brutcider.git
cd brutcider
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/[locale]/          # All pages (Home, Products, Our Story, Find Us, Contact)
├── components/            # React components by section
├── data/                  # Product data, stockist locations
├── i18n/                  # Internationalization config
└── lib/                   # Utils, animations, analytics
messages/                  # Translation files (6 locales, 260+ keys each)
public/images/             # All images (WebP)
```

See [CLAUDE.md](CLAUDE.md) for detailed architecture, conventions, and workflows.

## Features

- 6-language support with localized URLs
- SEO-optimized (sitemap, hreflang, Open Graph, canonical URLs)
- GTM + GA4 analytics with custom event tracking
- Static generation (54 pages)
- Age gate, responsive navigation, animated sections
- Leaflet stockist map

## For Students

This repo is a companion to the [Vibe Coding for Marketers](https://www.vibecodingformarketers.com) course. The `CLAUDE.md` file contains all the project instructions that Claude Code uses to understand the codebase — study it to learn how to write effective AI project instructions for your own sites.

---

Built by [Jindrich Faborsky](https://faborsky.com) with [Claude Code](https://claude.ai/code)

License: MIT
