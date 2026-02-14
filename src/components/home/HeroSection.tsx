"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const t = useTranslations("HomePage");

  const titleParts = t("heroTitle").split("\n");

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/hero/hero01.webp"
          alt={t("heroImageAlt")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-offblack/40" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-warmwhite tracking-tight"
        >
          {titleParts.map((part, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {part}
            </span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-warmwhite/80"
        >
          {t("heroSubtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <Button href="/products">{t("heroCta")}</Button>
        </motion.div>
      </div>
    </section>
  );
}
