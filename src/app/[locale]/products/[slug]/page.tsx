import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { products, getProductBySlug } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.flatMap((p) =>
    routing.locales.map((locale) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const t = await getTranslations({ locale, namespace: "Products" });
  const td = await getTranslations({ locale, namespace: "ProductDetail" });

  const fullName = t(`${slug}.fullName`);
  const tagline = t(`${slug}.tagline`);
  const whatItIs = t(`${slug}.copyBlocks.whatItIs`);
  const title = `${fullName} ${td("ciderSuffix")}`;
  const description = `${tagline} ${whatItIs}`;

  const baseUrl = "https://www.brutcider.com";
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    const path = getPathname({
      locale: l,
      href: { pathname: "/products/[slug]", params: { slug } },
    });
    languages[l] = `${baseUrl}${path}`;
  }
  languages["x-default"] = `${baseUrl}/products/${slug}`;

  const canonicalUrl = `${baseUrl}${getPathname({
    locale,
    href: { pathname: "/products/[slug]", params: { slug } },
  })}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: `${fullName} ${td("ogSuffix")}`,
      description,
      url: canonicalUrl,
      images: [
        {
          url: product.images.lifestyle,
          width: 1000,
          height: 1000,
          alt: `${fullName} - ${tagline}`,
        },
      ],
    },
    twitter: {
      title: `${fullName} ${td("ogSuffix")}`,
      description,
      images: [product.images.lifestyle],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
