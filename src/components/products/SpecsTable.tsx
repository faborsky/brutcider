"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Divider from "@/components/ui/Divider";
import type { Product } from "@/data/products";

interface SpecsTableProps {
  product: Product;
}

export default function SpecsTable({ product }: SpecsTableProps) {
  const t = useTranslations("Products");
  const td = useTranslations("ProductDetail");
  const slug = product.slug;

  const specs = [
    { label: td("specAbv"), value: product.abv },
    { label: td("specSweetness"), value: t(`${slug}.sweetness`) },
    { label: td("specCarbonation"), value: t(`${slug}.carbonation`) },
    { label: td("specBody"), value: t(`${slug}.body`) },
    { label: td("specCharacter"), value: t(`${slug}.character`) },
    { label: td("specBestFor"), value: t(`${slug}.bestFor`) },
    { label: td("specFormat"), value: td("formatValue") },
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-offblack">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
            {td("specsLabel")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-warmwhite mb-12">
            {td("specsTitle")}
          </h2>
        </AnimatedSection>

        <div>
          {specs.map((spec, i) => (
            <AnimatedSection key={spec.label} delay={i * 0.05}>
              <div className="flex justify-between items-center py-4">
                <span className="text-softgrey text-sm uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="text-warmwhite font-medium">
                  {spec.value}
                </span>
              </div>
              {i < specs.length - 1 && (
                <Divider className="border-softgrey/20" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
