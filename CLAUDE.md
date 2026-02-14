# BRUT. Website — Project Instructions

## About This Project

Marketing website for **BRUT.**, a fictional dry craft cider brand from Ghent, Belgium. This is a **demo/portfolio project** — not a real commercial site. It showcases a premium brand website with multilingual support, SEO best practices, and modern web design.

**Live domain:** `brutcider.com`

**Brand voice:** Minimalist, provocative, confident. Short sentences. Direct language. Anti-mainstream. Target audience: design-conscious adults who drink dry wine, craft beer, espresso.

**Products:** 4 cider variants — Original, Haze, Cassis, Ginger. Product slugs are brand names and stay the same across all locales.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | App Router, Turbopack, SSG |
| React | 19.2.3 | UI framework |
| TypeScript | 5.x | Strict mode enabled |
| Tailwind CSS | 4.x | Styling (v4 `@theme` syntax in globals.css) |
| next-intl | 4.8.2 | i18n — routing, translations, middleware |
| motion | 12.34.0 | Animations (motion/react) |
| Leaflet + react-leaflet | 1.9.4 / 5.0.0 | Stockist map |
| clsx | 2.1.1 | Conditional class names |

**Font:** Satoshi (loaded via Fontshare CDN in globals.css)

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build — generates 59 static pages
npm run start    # Serve production build
npm run lint     # ESLint
```

## File Structure

```
brut-website/
├── messages/                    # Translation JSON files (258 keys each)
│   ├── en.json                  # English (source of truth)
│   ├── nl.json                  # Dutch
│   ├── fr.json                  # French
│   ├── de.json                  # German
│   ├── pl.json                  # Polish
│   └── cs.json                  # Czech
├── public/
│   └── images/
│       ├── founders/            # Founders photo
│       ├── hero/                # Homepage hero images
│       ├── lifestyle/           # Lifestyle gallery images (16:9)
│       ├── logo/                # Brand logos (black/white, with/without bg)
│       ├── products/
│       │   ├── background/      # Product hero backgrounds (4:5)
│       │   ├── lifestyle/       # Product lifestyle shots (1:1)
│       │   └── transparent/     # Product bottle cutouts
│       └── web-hero/            # Additional hero/gallery images
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout — minimal shell, just `children`
│   │   ├── globals.css          # Tailwind v4 @theme, brand colors, font
│   │   ├── sitemap.ts           # Multilingual sitemap with hreflang alternates
│   │   ├── opengraph-image.jpg  # Default OG image
│   │   ├── favicon.ico
│   │   └── [locale]/            # All pages live under [locale] segment
│   │       ├── layout.tsx       # Locale layout — <html lang>, metadata, i18n provider
│   │       ├── page.tsx         # Home
│   │       ├── not-found.tsx    # Localized 404
│   │       ├── products/
│   │       │   ├── page.tsx              # Products listing
│   │       │   ├── ProductsOverview.tsx  # Client component
│   │       │   └── [slug]/
│   │       │       ├── page.tsx                # Product detail (SSG)
│   │       │       └── ProductDetailClient.tsx # Client component
│   │       ├── our-story/page.tsx
│   │       ├── find-us/
│   │       │   ├── page.tsx
│   │       │   └── FindUsClient.tsx
│   │       └── contact/
│   │           ├── page.tsx
│   │           └── ContactForm.tsx
│   ├── components/
│   │   ├── home/                # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BrandIntro.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── BuyOnlineSection.tsx
│   │   │   └── PhilosophyTeaser.tsx
│   │   ├── layout/              # App-wide layout
│   │   │   ├── Navigation.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── AgeGate.tsx
│   │   │   ├── DemoNotice.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── products/            # Product detail sections
│   │   │   ├── ProductHero.tsx
│   │   │   ├── FlavorProfile.tsx
│   │   │   ├── SpecsTable.tsx
│   │   │   ├── ProductCopyBlock.tsx
│   │   │   └── LifestyleGallery.tsx
│   │   ├── story/               # Our Story page sections
│   │   │   ├── FoundersSection.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── ValuesSection.tsx
│   │   ├── map/
│   │   │   └── StockistMap.tsx  # Leaflet map (client-only, dynamic import)
│   │   └── ui/                  # Reusable UI primitives
│   │       ├── AnimatedSection.tsx
│   │       ├── Button.tsx
│   │       ├── Divider.tsx
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   ├── products.ts          # Product structural data (slug, abv, color, images)
│   │   └── stockists.ts         # Stockist locations with lat/lng
│   ├── i18n/
│   │   ├── routing.ts           # Locales, pathnames, localePrefix config
│   │   ├── navigation.ts        # Locale-aware Link, usePathname, useRouter, getPathname
│   │   └── request.ts           # Server-side message loading
│   ├── lib/
│   │   ├── animations.ts        # motion/react animation variants
│   │   └── utils.ts             # cn() helper (clsx wrapper)
│   └── middleware.ts             # next-intl locale detection middleware
```

## i18n Architecture

**6 locales:** `en` (default, no URL prefix), `nl`, `fr`, `de`, `pl`, `cs`

**URL pattern:** `/` for EN, `/{locale}/{localized-path}` for others.

**Localized URL slugs** (defined in `src/i18n/routing.ts`):
- `/products` → `/producten`, `/produits`, `/produkte`, `/produkty`, `/produkty`
- `/our-story` → `/ons-verhaal`, `/notre-histoire`, `/unsere-geschichte`, `/nasza-historia`, `/nas-pribeh`
- `/find-us` → `/vind-ons`, `/nous-trouver`, `/finden-sie-uns`, `/znajdz-nas`, `/kde-nas-najdete`
- `/contact` → `/contact`, `/contact`, `/kontakt`, `/kontakt`, `/kontakt`

**Key patterns:**

```typescript
// Client components — use hooks
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
const t = useTranslations("NamespaceName");

// Server components / generateMetadata — use async
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
const t = await getTranslations({ locale, namespace: "NamespaceName" });

// Build localized URLs for hreflang/canonical
const url = `${baseUrl}${getPathname({ locale, href: "/products" })}`;
// getPathname INCLUDES the locale prefix — do NOT add /${locale} manually

// Dynamic route links
<Link href={{ pathname: "/products/[slug]", params: { slug } }}>

// LanguageSwitcher route replacement (type assertion needed)
router.replace(pathname as "/", { locale: nextLocale });
```

**Translation file structure** (`messages/en.json` is source of truth):
- 14 namespaces: `Metadata`, `Navigation`, `Footer`, `AgeGate`, `DemoNotice`, `HomePage`, `ProductsPage`, `ProductDetail`, `Products`, `OurStoryPage`, `FindUsPage`, `ContactPage`, `LanguageSwitcher`, `NotFound`
- Product text lives in `Products` namespace, nested by slug: `Products.original.tagline`, `Products.haze.flavorProfile.base`, etc.
- Structural/non-translatable product data (slug, abv, color, images) stays in `src/data/products.ts`
- Title template uses `%s` (Next.js format), NOT `{title}` (ICU format)

**When adding a new page:**
1. Create `src/app/[locale]/new-page/page.tsx` with `generateMetadata()` and `setRequestLocale(locale)`
2. Add pathname to `src/i18n/routing.ts` with all locale variants
3. Add translation namespace to all 6 `messages/*.json` files
4. Add route to `src/app/sitemap.ts`
5. Add hreflang alternates via `getPathname()` in `generateMetadata()`

**When adding translation keys:**
- Add to ALL 6 JSON files simultaneously — missing keys cause build failures
- Use `en.json` as the reference structure

## Design System

**Brand colors** (defined as CSS custom properties in `globals.css`):
- `offblack` (#1e1e1a) — primary text, dark backgrounds
- `warmwhite` (#f6f7f0) — page background, light text
- `lime` (#c8fd02) — primary accent, CTAs
- `softgrey` (#B0ADA8) — secondary text, dividers
- Product colors: `original` (#e0a038), `haze` (#e3dccc), `cassis` (#5a1a3c), `ginger` (#e56741)

**Tailwind usage:** v4 syntax with `@theme` block. Colors referenced as utility classes: `text-offblack`, `bg-lime`, `text-softgrey`, etc.

**Typography:** Satoshi font (400, 500, 700). Uppercase tracking-wider for labels and buttons. Bold tracking-tight for headings.

**Animations:** `motion/react` library. Use `AnimatedSection` wrapper for scroll-triggered fade-in-up. Variants defined in `src/lib/animations.ts`.

**Button variants:** `primary` (lime bg), `outline` (border), `dark` (offblack bg). All uppercase, tracking-wider. Uses i18n-aware `Link` for internal navigation.

## SEO

Every page's `generateMetadata()` includes:
- Translated `title` and `description`
- `alternates.canonical` — self-referencing, locale-aware
- `alternates.languages` — all 6 locales + `x-default` (pointing to EN)
- `openGraph` and `twitter` metadata
- `metadataBase` set in locale layout: `https://www.brutcider.com`

**Sitemap** (`src/app/sitemap.ts`): Generates 54 entries (9 pages x 6 locales) with hreflang alternates using `getPathname()` for localized URLs.

All images use WebP format. All `<img>` tags have descriptive alt text from translations.

## Known Warnings

- `The "middleware" file convention is deprecated. Please use "proxy" instead.` — Next.js 16 deprecation notice for middleware. Does not break anything. next-intl still uses this convention.
- `metadataBase property in metadata export is not set` — Appears during build for pages with OG images. The `metadataBase` IS set in the locale layout and cascades correctly; the warning is cosmetic.

## Content Update & New Page Workflows

### Updating existing text content

When any text changes on the site (copy edits, new tagline, updated description, etc.):

1. **Edit `messages/en.json` first** — this is the source of truth
2. **Update the same key in ALL 5 other files** (`nl.json`, `fr.json`, `de.json`, `pl.json`, `cs.json`) with native-quality translations
3. Run `npm run build` to verify — missing or mismatched keys will cause build failures

### Adding a new product

1. **`src/data/products.ts`** — Add a new entry with `slug`, `abv`, `color`, `textOnColor`, and `images` paths
2. **Add product images** to `public/images/products/` in three folders: `transparent/`, `lifestyle/`, `background/` (all WebP)
3. **Add gallery images** to `public/images/lifestyle/` or `public/images/web-hero/`
4. **`messages/en.json`** — Add a new object under `Products` namespace keyed by the slug:
   ```json
   "Products": {
     "newslug": {
       "name": "...",
       "fullName": "BRUT. NewName",
       "tagline": "...",
       "personality": "...",
       "sweetness": "...",
       "carbonation": "...",
       "body": "...",
       "character": "...",
       "bestFor": "...",
       "flavorProfile": { "base": "...", "mid": "...", "finish": "..." },
       "copyBlocks": { "whatItIs": "...", "howItsMade": "...", "whyItWorks": "..." },
       "heroMessage": "...",
       "heroSub": "..."
     }
   }
   ```
5. **Add the same product object** to all 5 other translation files with native translations
6. **No code changes needed** — the products page and detail page auto-generate from the data file via `generateStaticParams`
7. Run `npm run build` — should now show additional pages (1 new product x 6 locales = 6 more pages)

### Adding a new static page

Full checklist — every step is required:

1. **Create the page file**: `src/app/[locale]/new-page/page.tsx`
   ```typescript
   import { getTranslations, setRequestLocale } from "next-intl/server";
   import { getPathname } from "@/i18n/navigation";
   import { routing } from "@/i18n/routing";

   export async function generateMetadata({
     params,
   }: {
     params: Promise<{ locale: string }>;
   }) {
     const { locale } = await params;
     const t = await getTranslations({ locale, namespace: "NewPageName" });

     const baseUrl = "https://www.brutcider.com";
     const languages: Record<string, string> = {};
     for (const l of routing.locales) {
       languages[l] = `${baseUrl}${getPathname({ locale: l, href: "/new-page" })}`;
     }
     languages["x-default"] = `${baseUrl}/new-page`;

     const canonicalUrl = `${baseUrl}${getPathname({ locale, href: "/new-page" })}`;

     return {
       title: t("title"),
       description: t("description"),
       alternates: { canonical: canonicalUrl, languages },
       openGraph: { title: t("ogTitle"), description: t("description"), url: canonicalUrl },
       twitter: { title: t("ogTitle"), description: t("description") },
     };
   }

   export default async function NewPage({
     params,
   }: {
     params: Promise<{ locale: string }>;
   }) {
     const { locale } = await params;
     setRequestLocale(locale);

     return <YourComponent />;
   }
   ```

2. **Add localized pathnames** to `src/i18n/routing.ts`:
   ```typescript
   pathnames: {
     // ... existing paths
     "/new-page": {
       en: "/new-page",
       nl: "/nieuwe-pagina",
       fr: "/nouvelle-page",
       de: "/neue-seite",
       pl: "/nowa-strona",
       cs: "/nova-stranka",
     },
   }
   ```

3. **Add translation namespace** to all 6 `messages/*.json` files:
   ```json
   "NewPageName": {
     "title": "Page Title",
     "description": "Meta description for SEO",
     "ogTitle": "Open Graph Title",
     ...
   }
   ```

4. **Add to sitemap** in `src/app/sitemap.ts`:
   ```typescript
   const staticRoutes = [
     // ... existing routes
     ...buildEntry("/new-page", "monthly", 0.7),
   ];
   ```

5. **Add navigation link** (if needed) in `messages/*.json` under `Navigation` namespace and update `Navigation.tsx` / `MobileMenu.tsx` / `Footer.tsx`

6. Run `npm run build` and verify the new page appears for all 6 locales

### Adding a new locale

1. Add locale code to `src/i18n/routing.ts` in the `locales` array
2. Add localized path variants for every pathname in the `pathnames` map
3. Create `messages/{locale}.json` with all 258+ keys translated (use `en.json` as reference)
4. Add language label in `LanguageSwitcher` namespace in ALL translation files
5. Run `npm run build` — page count should increase by ~9-10 (one per route)

### Adding a new stockist location

Edit `src/data/stockists.ts` — add a new object with `name`, `type` (bar/restaurant/shop/bottle-shop), `address`, `city`, `country` (2-letter code), `lat`, and `lng`. No translation files or code changes needed.

## Important Conventions

- **Never use `type: any`** — use strict typing, generics, or `unknown`
- **All navigation** must use `Link`, `usePathname`, `useRouter` from `@/i18n/navigation` (NOT from `next/link` or `next/navigation`)
- **All hardcoded text** must go through translation files — no English strings in components
- **Images** stored in `public/images/` as WebP format
- **Client components** marked with `"use client"` directive at top
- **`setRequestLocale(locale)`** must be called at the top of every server page component
