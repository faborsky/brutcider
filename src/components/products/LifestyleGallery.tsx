"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Image from "next/image";
import type { Product } from "@/data/products";

interface LifestyleGalleryProps {
  product: Product;
}

export default function LifestyleGallery({ product }: LifestyleGalleryProps) {
  if (product.images.gallery.length === 0) return null;

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {product.images.gallery.map((img, i) => (
            <motion.div
              key={img}
              variants={fadeInUp}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={img}
                  alt={`${product.fullName} dry craft cider in lifestyle setting`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
