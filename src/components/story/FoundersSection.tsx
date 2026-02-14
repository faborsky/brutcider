"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function FoundersSection() {
  const t = useTranslations("OurStoryPage");
  const headingParts = t("heading").split("\n");

  return (
    <section className="pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/founders/founders.webp"
                alt={t("foundersImageAlt")}
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
                {t("label")}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                {headingParts.map((part, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {part}
                  </span>
                ))}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-lg text-softgrey leading-relaxed mb-6">
                {t("foundersParagraph1")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg text-softgrey leading-relaxed">
                {t("foundersParagraph2")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
