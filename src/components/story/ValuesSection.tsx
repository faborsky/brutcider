"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Dry or nothing",
    description:
      "We ferment everything completely. Zero residual sugar. If you want sweet, we're not your brand. And that's fine.",
  },
  {
    title: "Four ingredients",
    description:
      "Apples, water, yeast, and whatever post-fermentation addition defines each variant. That's the list. We could make it shorter, but then we'd have apple juice.",
  },
  {
    title: "Design matters",
    description:
      "The branding is as minimal as the product. No craft-beverage clichés. No burlap. No hand-drawn anything. We look the way we taste — stripped back.",
  },
  {
    title: "Local first",
    description:
      "Flemish apples from small orchards. The kind Google Maps doesn't know about. We source local because local is better, not because it's a marketing angle.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="What we believe"
          subtitle="Not a manifesto. Just how we work."
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
