"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function PhilosophyTeaser() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
            Our Philosophy
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-offblack">
            Started in a garage.
            <br />
            Still no sugar.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-8 text-lg md:text-xl text-softgrey max-w-2xl">
            Three friends from Ghent. Background in design and hospitality, zero
            experience in brewing. They wanted a drink that fits their life —
            clean, no sugar, no bullshit.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10">
            <Button href="/our-story" variant="outline">
              Read our story
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
