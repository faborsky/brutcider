"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Image from "next/image";
import type { Product } from "@/data/products";

interface SocialGalleryProps {
  product: Product;
}

export default function SocialGallery({ product }: SocialGalleryProps) {
  const t = useTranslations("Products");
  const td = useTranslations("ProductDetail");

  const images = product.images.socialGallery;
  if (!images || images.length === 0) return null;

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-4">
              {td("socialLabel")}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {td("socialTitle")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          >
            {images.map((img) => (
              <motion.div key={img} variants={fadeInUp}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={img}
                    alt={td("socialAlt", {
                      name: t(`${product.slug}.fullName`),
                    })}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
