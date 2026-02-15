# BRUT. Website — Analytics Setup

## Overview

Google Tag Manager (GTM) + Google Analytics 4 (GA4) for engagement tracking on a branding/portfolio site. No e-commerce funnels, no consent mode (demo site).

## IDs

| Service | ID |
|---|---|
| GTM Container | `GTM-57P44WM9` |
| GA4 Measurement | `G-CJM3XBBB9T` |
| GTM Account | `6339452546` |
| GTM Container ID | `243666824` |

## Tracked Events

| Event | GA4 Name | Parameters | Where It Fires |
|---|---|---|---|
| Page views | `page_view` | _(automatic)_ | Every page load via GA4 config tag |
| Product detail view | `view_item` | `item_name`, `item_id`, `item_category` | Product detail page mount (`ProductDetailClient.tsx`) |
| CTA clicks | `cta_click` | `cta_text`, `cta_location` | Hero CTA, Philosophy CTA, Product detail CTAs |
| Age gate response | `age_gate` | `age_verified` (boolean) | Age gate Yes/No buttons (`AgeGate.tsx`) |
| Language switch | `language_switch` | `language_from`, `language_to` | Language switcher (`LanguageSwitcher.tsx`) |

## What We Don't Track

Contact form submissions, map interactions, hover events, menu open/close, demo notice dismiss, scroll depth.

## GTM Container Structure

### Folder
- `GA4` — all tags, triggers organized here

### Built-in Variables (enabled)
Click Classes, Click ID, Click URL, Click Text, Page URL, Page Path, Referrer

### User-Defined Variables (9)

| Name | Type | Value |
|---|---|---|
| `Const - GA4 Measurement ID` | Constant | `G-CJM3XBBB9T` |
| `DLV - item_name` | Data Layer Variable | `item_name` |
| `DLV - item_id` | Data Layer Variable | `item_id` |
| `DLV - item_category` | Data Layer Variable | `item_category` |
| `DLV - cta_text` | Data Layer Variable | `cta_text` |
| `DLV - cta_location` | Data Layer Variable | `cta_location` |
| `DLV - age_verified` | Data Layer Variable | `age_verified` |
| `DLV - language_from` | Data Layer Variable | `language_from` |
| `DLV - language_to` | Data Layer Variable | `language_to` |

### Triggers (4)

| Name | Type | Fires On |
|---|---|---|
| `Custom Event - view_item` | Custom Event | `event === "view_item"` |
| `Custom Event - cta_click` | Custom Event | `event === "cta_click"` |
| `Custom Event - age_gate` | Custom Event | `event === "age_gate"` |
| `Custom Event - language_switch` | Custom Event | `event === "language_switch"` |

### Tags (5)

| Tag | Type | Trigger | Parameters |
|---|---|---|---|
| `GA4 - Config - Main` | Google Tag | All Pages | Measurement ID via variable |
| `GA4 - Event - view_item` | GA4 Event | view_item | `item_name`, `item_id`, `item_category` |
| `GA4 - Event - cta_click` | GA4 Event | cta_click | `cta_text`, `cta_location` |
| `GA4 - Event - age_gate` | GA4 Event | age_gate | `age_verified` |
| `GA4 - Event - language_switch` | GA4 Event | language_switch | `language_from`, `language_to` |

## Website Implementation

### GTM Snippet

Injected in `src/app/[locale]/layout.tsx`:
- `<Script>` tag with `strategy="afterInteractive"` in `<head>`
- `<noscript>` iframe after `<body>` opening

### Data Layer Helpers

File: `src/lib/analytics.ts`

4 typed helper functions, each wrapping `window.dataLayer.push()` with SSR safety:

```typescript
trackViewItem({ name, id, category })  // Product detail page
trackCtaClick(ctaText, ctaLocation)     // CTA buttons
trackAgeGate(verified)                  // Age gate Yes/No
trackLanguageSwitch(from, to)           // Language switcher
```

TypeScript declaration: `src/types/gtm.d.ts`

### Component Integration

| Component | Event | Details |
|---|---|---|
| `ProductDetailClient.tsx` | `view_item` | `useEffect` on mount with product name, slug, "cider" |
| `ProductDetailClient.tsx` | `cta_click` | "Find a Stockist" and "Order Online" buttons |
| `HeroSection.tsx` | `cta_click` | "Shop Now" hero CTA |
| `PhilosophyTeaser.tsx` | `cta_click` | "Read Our Story" CTA |
| `AgeGate.tsx` | `age_gate` | Yes (`true`) and No (`false`) buttons |
| `LanguageSwitcher.tsx` | `language_switch` | Before `router.replace`, logs from/to locale |

CTA tracking uses fixed English strings for consistent cross-locale GA4 reporting.

## How to Add a New Tracked Event

1. **Add helper function** to `src/lib/analytics.ts`:
   ```typescript
   export function trackNewEvent(param1: string) {
     pushEvent({ event: "new_event", param1 });
   }
   ```

2. **Wire into component** — import and call the helper on the relevant user action.

3. **Add GTM variable** (if new parameters) — create a DLV via GTM MCP or UI.

4. **Add GTM trigger** — create a Custom Event trigger matching the event name.

5. **Add GTM tag** — create a GA4 Event tag with the trigger and parameter mappings.

6. **Publish** a new GTM version.

## Consent Mode

Not implemented. This is a demo/portfolio site with no real user data collection. If consent becomes necessary, implement GTM Consent Mode v2 with `analytics_storage` and `ad_storage` defaults set to `denied` for EU visitors.
