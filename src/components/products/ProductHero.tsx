"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Product } from "@/data/products";

interface ProductHeroProps {
  product: Product;
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-square">
          <Image
            src={product.images.lifestyle}
            alt={`${product.fullName} dry craft cider lifestyle photo`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div
          className="flex items-center justify-center p-12 md:p-20"
          style={{ backgroundColor: product.color }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-80 md:w-64 md:h-[420px]"
          >
            <Image
              src={product.images.transparent}
              alt={`${product.fullName} - ${product.tagline} - Dry cider from Belgium`}
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
