"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Divider from "@/components/ui/Divider";

export default function BrandIntro() {
  const t = useTranslations("HomePage");
  const titleParts = t("introTitle").split("\n");

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
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
            {t("introText")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Divider className="mt-16" />
        </AnimatedSection>
      </div>
    </section>
  );
}
