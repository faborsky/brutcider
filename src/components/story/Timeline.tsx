"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Divider from "@/components/ui/Divider";

const years = ["2023", "2024", "2025", "2026"] as const;

export default function Timeline() {
  const t = useTranslations("OurStoryPage");

  const milestones = years.map((year) => ({
    year,
    title: t(`timeline${year}Title`),
    description: t(`timeline${year}Text`),
  }));

  return (
    <section className="py-20 md:py-32 px-6 bg-offblack">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {milestones.map((m, i) => (
            <motion.div key={m.year} variants={fadeInUp}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12">
                <div className="md:w-32 shrink-0">
                  <span className="text-lime text-4xl md:text-5xl font-bold">
                    {m.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-warmwhite mb-3">
                    {m.title}
                  </h3>
                  <p className="text-softgrey leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
              {i < milestones.length - 1 && (
                <Divider className="border-softgrey/20" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
