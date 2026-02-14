import { MetadataRoute } from "next";
import { products } from "@/data/products";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.brutcider.com";

  type AppPathname = Parameters<typeof getPathname>[0]["href"];

  function localizedUrl(locale: (typeof routing.locales)[number], href: AppPathname) {
    const path = getPathname({ locale, href });
    return `${baseUrl}${path}`;
  }

  function buildAlternates(href: AppPathname) {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = localizedUrl(locale, href);
    }
    languages["x-default"] = localizedUrl(routing.defaultLocale, href);
    return { languages };
  }

  function buildEntry(
    href: AppPathname,
    changeFrequency: "weekly" | "monthly",
    priority: number
  ) {
    return routing.locales.map((locale) => ({
      url: localizedUrl(locale, href),
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: buildAlternates(href),
    }));
  }

  const staticRoutes = [
    ...buildEntry("/", "weekly", 1),
    ...buildEntry("/products", "weekly", 0.9),
    ...buildEntry("/our-story", "monthly", 0.8),
    ...buildEntry("/find-us", "weekly", 0.8),
    ...buildEntry("/contact", "monthly", 0.7),
  ];

  const productRoutes = products.flatMap((product) =>
    buildEntry(
      { pathname: "/products/[slug]", params: { slug: product.slug } },
      "monthly",
      0.9
    )
  );

  return [...staticRoutes, ...productRoutes];
}
