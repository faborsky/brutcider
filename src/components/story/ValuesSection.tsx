"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const valueKeys = [1, 2, 3, 4] as const;

export default function ValuesSection() {
  const t = useTranslations("OurStoryPage");

  const values = valueKeys.map((n) => ({
    title: t(`value${n}Title`),
    description: t(`value${n}Text`),
  }));

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title={t("valuesTitle")}
          subtitle={t("valuesSubtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeInUp}>
              <h3 className="text-xl font-bold tracking-tight mb-3">
                {v.title}
              </h3>
              <p className="text-softgrey leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
