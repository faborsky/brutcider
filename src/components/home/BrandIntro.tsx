"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Divider from "@/components/ui/Divider";

export default function BrandIntro() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-offblack">
            We make cider.
            <br />
            Dry cider. That&apos;s it.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-8 text-lg md:text-xl text-softgrey max-w-2xl">
            Four ingredients. We could list them, but you&apos;d get bored.
            Flemish apples, water, yeast, and nothing else. Fermented bone dry.
            No sugar. No shortcuts. No apologies.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Divider className="mt-16" />
        </AnimatedSection>
      </div>
    </section>
  );
}
