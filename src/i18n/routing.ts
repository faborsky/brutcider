import { defineRouting } from "next-intl/routing";

export const locales = ["en", "nl", "fr", "de", "pl", "cs"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/products": {
      en: "/products",
      nl: "/producten",
      fr: "/produits",
      de: "/produkte",
      pl: "/produkty",
      cs: "/produkty",
    },
    "/products/[slug]": {
      en: "/products/[slug]",
      nl: "/producten/[slug]",
      fr: "/produits/[slug]",
      de: "/produkte/[slug]",
      pl: "/produkty/[slug]",
      cs: "/produkty/[slug]",
    },
    "/our-story": {
      en: "/our-story",
      nl: "/ons-verhaal",
      fr: "/notre-histoire",
      de: "/unsere-geschichte",
      pl: "/nasza-historia",
      cs: "/nas-pribeh",
    },
    "/find-us": {
      en: "/find-us",
      nl: "/vind-ons",
      fr: "/nous-trouver",
      de: "/finden-sie-uns",
      pl: "/znajdz-nas",
      cs: "/kde-nas-najdete",
    },
    "/contact": {
      en: "/contact",
      nl: "/contact",
      fr: "/contact",
      de: "/kontakt",
      pl: "/kontakt",
      cs: "/kontakt",
    },
  },
});
