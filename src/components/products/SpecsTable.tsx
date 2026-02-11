"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Divider from "@/components/ui/Divider";
import type { Product } from "@/data/products";

interface SpecsTableProps {
  product: Product;
}

export default function SpecsTable({ product }: SpecsTableProps) {
  const specs = [
    { label: "ABV", value: product.abv },
    { label: "Sweetness", value: product.sweetness },
    { label: "Carbonation", value: product.carbonation },
    { label: "Body", value: product.body },
    { label: "Character", value: product.character },
    { label: "Best for", value: product.bestFor },
    { label: "Format", value: "330ml slim can" },
  ];

  return (
    <section className="py-20 md:py-32 px-6 bg-offblack">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
            Specs
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-warmwhite mb-12">
            The details
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
