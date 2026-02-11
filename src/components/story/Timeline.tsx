"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import Divider from "@/components/ui/Divider";

const milestones = [
  {
    year: "2023",
    title: "The garage",
    description:
      "First batch brewed in a rented garage in Ghent. Three friends, one press, no clue what they were doing. The cider was dry. Everything else was chaos.",
  },
  {
    year: "2024",
    title: "First bars",
    description:
      "Local bars and festivals across Ghent. People started asking for 'the dry one.' We took that as a compliment.",
  },
  {
    year: "2025",
    title: "Four ciders",
    description:
      "Launched Haze, Cassis, and Ginger alongside Original. Expanded across Belgium. Still no sugar. Still no shortcuts.",
  },
  {
    year: "2026",
    title: "Beyond Belgium",
    description:
      "Benelux-wide distribution. Launching into Germany and France. Same four ingredients. Bigger map.",
  },
];

export default function Timeline() {
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
