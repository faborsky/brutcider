"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function FoundersSection() {
  return (
    <section className="pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/founders/founders.webp"
                alt="Roos, Sander, and Wout — founders of BRUT."
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
                Our Story
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                Three friends.
                <br />
                One garage.
                <br />
                Zero experience.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-lg text-softgrey leading-relaxed mb-6">
                Started by Roos, Sander, and Wout in a garage in Ghent. Background
                in design and hospitality, zero experience in brewing. They wanted a
                drink that fits their life — clean, no sugar, no bullshit.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-softgrey leading-relaxed">
                Belgium has great beer culture, but they saw a gap: no one was making
                cider that looked and tasted like it belongs in 2026. They source
                apples from small Flemish orchards, ferment everything dry, and keep
                the ingredient list embarrassingly short.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
