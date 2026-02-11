"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";

const retailers = [
  { name: "Original", href: "#shop-original" },
  { name: "Haze", href: "#shop-haze" },
  { name: "Cassis", href: "#shop-cassis" },
  { name: "Ginger", href: "#shop-ginger" },
];

export default function BuyOnlineSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-offblack">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-bold text-warmwhite tracking-tight">
            Order BRUT.
          </h2>
          <p className="mt-4 text-lg text-softgrey">
            We&apos;re in bars that care. And online for those who don&apos;t
            want to leave the house.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            {retailers.map((r) => (
              <Button key={r.name} href={r.href} variant="primary">
                Shop {r.name}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Divider className="mt-16 border-softgrey/20" />
          <p className="mt-8 text-sm text-softgrey">
            Free shipping on orders over &euro;40. Belgium, Netherlands, Germany, France.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
