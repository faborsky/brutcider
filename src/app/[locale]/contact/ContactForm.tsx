"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("ContactPage");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <p className="text-softgrey text-sm uppercase tracking-wider font-medium mb-6">
            {t("label")}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {t("heading")}
          </h1>
          <p className="text-softgrey text-lg mb-16">{t("subtitle")}</p>
        </AnimatedSection>

        {!submitted ? (
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium uppercase tracking-wider mb-2"
                >
                  {t("nameLabel")}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t("namePlaceholder")}
                  className="w-full bg-transparent border-b border-softgrey py-3 text-offblack placeholder:text-softgrey/60 focus:outline-none focus:border-offblack"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium uppercase tracking-wider mb-2"
                >
                  {t("emailLabel")}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
                  className="w-full bg-transparent border-b border-softgrey py-3 text-offblack placeholder:text-softgrey/60 focus:outline-none focus:border-offblack"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium uppercase tracking-wider mb-2"
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  className="w-full bg-transparent border-b border-softgrey py-3 text-offblack placeholder:text-softgrey/60 focus:outline-none focus:border-offblack resize-none"
                />
              </div>

              <div className="mt-4">
                <Button type="submit" variant="primary">
                  {t("submit")}
                </Button>
              </div>

              <p className="text-xs text-softgrey">{t("demoDisclaimer")}</p>
            </form>
          </AnimatedSection>
        ) : (
          <AnimatedSection>
            <div className="py-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("successTitle")}
              </h2>
              <p className="text-softgrey">{t("successText")}</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
