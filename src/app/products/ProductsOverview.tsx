"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/data/products";

export default function ProductsOverview() {
  return (
    <section className="pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Ciders"
          subtitle="We don't do seasonal flavors. We do four things well."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.slug} variants={fadeInUp}>
              <Link
                href={`/products/${product.slug}`}
                className="block group"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: product.color }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-2/5 h-4/5"
                  >
                    <Image
                      src={product.images.transparent}
                      alt={product.fullName}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>
                <div className="mt-6">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {product.fullName}
                  </h2>
                  <p className="text-softgrey mt-2 text-lg">
                    {product.tagline}
                  </p>
                  <p className="text-softgrey mt-1 text-sm">
                    {product.abv} ABV — {product.sweetness}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
