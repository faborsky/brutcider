"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Product } from "@/data/products";

interface FlavorProfileProps {
  product: Product;
}

export default function FlavorProfile({ product }: FlavorProfileProps) {
  const t = useTranslations("Products");
  const td = useTranslations("ProductDetail");
  const slug = product.slug;

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
            {td("flavorProfileLabel")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            {t(`${slug}.heroMessage`)}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <AnimatedSection delay={0.1}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              {td("base")}
            </h3>
            <p className="text-softgrey">{t(`${slug}.flavorProfile.base`)}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              {td("tasteJourney")}
            </h3>
            <p className="text-softgrey">{t(`${slug}.flavorProfile.tasteJourney`)}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              {td("sweetness")}
            </h3>
            <p className="text-softgrey">{t(`${slug}.flavorProfile.sweetnessLevel`)}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              {td("mouthfeel")}
            </h3>
            <p className="text-softgrey">{t(`${slug}.flavorProfile.mouthfeel`)}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              {td("notLike")}
            </h3>
            <p className="text-softgrey">{t(`${slug}.flavorProfile.notLike`)}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.35}>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
              {td("moreLike")}
            </h3>
            <p className="text-softgrey">{t(`${slug}.flavorProfile.moreLike`)}</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
