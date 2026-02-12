import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = `${product.fullName} Cider`;
  const description = `${product.tagline} ${product.copyBlocks.whatItIs}`;

  return {
    title,
    description,
    openGraph: {
      title: `${product.fullName} Cider — BRUT.`,
      description,
      url: `/products/${slug}`,
      images: [
        {
          url: product.images.lifestyle,
          width: 1000,
          height: 1000,
          alt: `${product.fullName} - ${product.tagline}`,
        },
      ],
    },
    twitter: {
      title: `${product.fullName} Cider — BRUT.`,
      description,
      images: [product.images.lifestyle],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
