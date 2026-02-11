"use client";

import ProductHero from "@/components/products/ProductHero";
import FlavorProfile from "@/components/products/FlavorProfile";
import SpecsTable from "@/components/products/SpecsTable";
import ProductCopyBlock from "@/components/products/ProductCopyBlock";
import LifestyleGallery from "@/components/products/LifestyleGallery";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import type { Product } from "@/data/products";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  return (
    <>
      <ProductHero product={product} />

      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-4">
              {product.personality}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {product.fullName}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-softgrey">
              {product.heroSub}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FlavorProfile product={product} />
      <SpecsTable product={product} />
      <ProductCopyBlock product={product} />
      <LifestyleGallery product={product} />

      <section className="py-20 md:py-32 px-6 bg-offblack">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-warmwhite tracking-tight mb-6">
              Want to try {product.fullName}?
            </h2>
            <p className="text-softgrey mb-10">
              Find it at a bar near you or order online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/find-us">Find a stockist</Button>
              <Button href={`#shop-${product.slug}`} variant="outline">
                <span className="text-warmwhite">Order online</span>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
