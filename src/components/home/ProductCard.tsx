"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="block group">
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
            alt={product.fullName}
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold tracking-tight">{product.fullName}</h3>
        <p className="text-sm text-softgrey mt-1">{product.tagline}</p>
      </div>
    </Link>
  );
}
