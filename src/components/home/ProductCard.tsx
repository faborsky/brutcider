"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("Products");
  const td = useTranslations("ProductDetail");

  return (
    <Link href={{ pathname: "/products/[slug]", params: { slug: product.slug } }} className="block group">
      <div
        className="relative aspect-[4/5] overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: product.color }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-3/5 h-4/5"
        >
          <Image
            src={product.images.transparent}
            alt={td("productCardAlt", {
              name: t(`${product.slug}.fullName`),
              tagline: t(`${product.slug}.tagline`),
            })}
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight">
          {t(`${product.slug}.fullName`)}
        </h3>
        <p className="text-sm text-softgrey mt-1">
          {t(`${product.slug}.tagline`)}
        </p>
      </div>
    </Link>
  );
}
