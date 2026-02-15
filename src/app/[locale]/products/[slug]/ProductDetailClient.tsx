"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import ProductHero from "@/components/products/ProductHero";
import FlavorProfile from "@/components/products/FlavorProfile";
import SpecsTable from "@/components/products/SpecsTable";
import ProductCopyBlock from "@/components/products/ProductCopyBlock";
import LifestyleGallery from "@/components/products/LifestyleGallery";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import type { Product } from "@/data/products";
import { trackViewItem, trackCtaClick } from "@/lib/analytics";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const t = useTranslations("Products");
  const td = useTranslations("ProductDetail");

  const slug = product.slug;
  const fullName = t(`${slug}.fullName`);

  useEffect(() => {
    trackViewItem({ name: fullName, id: slug, category: "cider" });
  }, [fullName, slug]);

  return (
    <>
      <ProductHero product={product} />

      <section className="py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-4">
              {t(`${slug}.personality`)}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              {fullName}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-softgrey">
              {t(`${slug}.heroSub`)}
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
              {td("ctaTitle", { name: fullName })}
            </h2>
            <p className="text-softgrey mb-10">{td("ctaSubtitle")}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                href="/find-us"
                onClick={() => trackCtaClick("Find a Stockist", "product_detail_cta")}
              >
                {td("ctaFindStockist")}
              </Button>
              <Button
                href={`#shop-${slug}`}
                variant="outline"
                onClick={() => trackCtaClick("Order Online", "product_detail_cta")}
              >
                <span className="text-warmwhite">{td("ctaOrderOnline")}</span>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
