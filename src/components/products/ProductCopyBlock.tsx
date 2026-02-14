"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Divider from "@/components/ui/Divider";
import type { Product } from "@/data/products";

interface ProductCopyBlockProps {
  product: Product;
}

export default function ProductCopyBlock({ product }: ProductCopyBlockProps) {
  const t = useTranslations("Products");
  const td = useTranslations("ProductDetail");
  const slug = product.slug;

  const blocks = [
    { heading: td("copyWhatItIs"), text: t(`${slug}.copyBlocks.whatItIs`) },
    { heading: td("copyWhyDry"), text: t(`${slug}.copyBlocks.whyItMatters`) },
    { heading: td("copyHowWeMake"), text: t(`${slug}.copyBlocks.howWeMakeIt`) },
    { heading: td("copyWhoItsFor"), text: t(`${slug}.copyBlocks.whoItsFor`) },
  ];

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {blocks.map((block, i) => (
          <AnimatedSection key={block.heading} delay={i * 0.1}>
            <div className="mb-16 last:mb-0">
              <h3 className="text-sm font-bold uppercase tracking-wider text-softgrey mb-4">
                {block.heading}
              </h3>
              <p className="text-xl md:text-2xl font-medium tracking-tight leading-relaxed">
                {block.text}
              </p>
              {i < blocks.length - 1 && <Divider className="mt-16" />}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
