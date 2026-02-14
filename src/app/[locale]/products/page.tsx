import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import ProductsOverview from "./ProductsOverview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProductsPage" });

  const baseUrl = "https://www.brutcider.com";
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${baseUrl}${getPathname({ locale: l, href: "/products" })}`;
  }
  languages["x-default"] = `${baseUrl}/products`;

  const canonicalUrl = `${baseUrl}${getPathname({ locale, href: "/products" })}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("description"),
      url: canonicalUrl,
    },
    twitter: {
      title: t("ogTitle"),
      description: t("description"),
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProductsOverview />;
}
