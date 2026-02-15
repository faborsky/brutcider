"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { trackCtaClick } from "@/lib/analytics";

export default function PhilosophyTeaser() {
  const t = useTranslations("HomePage");
  const titleParts = t("philosophyTitle").split("\n");

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
            {t("philosophyLabel")}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-offblack">
            {titleParts.map((part, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {part}
              </span>
            ))}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-8 text-lg md:text-xl text-softgrey max-w-2xl">
            {t("philosophyText")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10">
            <Button
              href="/our-story"
              variant="outline"
              onClick={() => trackCtaClick("Read Our Story", "homepage_philosophy")}
            >
              {t("philosophyCta")}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
