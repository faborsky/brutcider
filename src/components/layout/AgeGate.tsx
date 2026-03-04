"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { trackAgeGate } from "@/lib/analytics";

const emptySubscribe = () => () => {};

export default function AgeGate() {
  const stored = useSyncExternalStore(
    emptySubscribe,
    () => localStorage.getItem("brut-age-verified"),
    () => "pending"
  );
  const [localVerified, setLocalVerified] = useState(false);
  const [denied, setDenied] = useState(false);
  const t = useTranslations("AgeGate");

  const verified = stored === "true" || localVerified;

  function handleYes() {
    trackAgeGate(true);
    localStorage.setItem("brut-age-verified", "true");
    setLocalVerified(true);
  }

  function handleNo() {
    trackAgeGate(false);
    setDenied(true);
  }

  if (stored === "pending") return null;

  return (
    <AnimatePresence>
      {!verified && (
        <motion.div
          key="age-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 z-[100] bg-offblack flex flex-col items-center justify-center px-6"
        >
          <Image
            src="/images/logo/brut_white_no_backround.webp"
            alt={t("logoAlt")}
            width={160}
            height={60}
            className="mb-16"
          />

          {!denied ? (
            <div className="text-center">
              <h2 className="text-warmwhite text-2xl md:text-3xl font-bold mb-2">
                {t("question")}
              </h2>
              <p className="text-softgrey text-sm mb-12">{t("subtitle")}</p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleYes}
                  className="px-10 py-4 bg-lime text-offblack text-sm font-bold uppercase tracking-wider hover:bg-warmwhite transition-colors duration-0"
                >
                  {t("yes")}
                </button>
                <button
                  onClick={handleNo}
                  className="px-10 py-4 border border-softgrey text-softgrey text-sm font-bold uppercase tracking-wider hover:text-warmwhite hover:border-warmwhite transition-colors duration-0"
                >
                  {t("no")}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-warmwhite text-xl md:text-2xl font-bold mb-4">
                {t("denied")}
              </p>
              <p className="text-softgrey text-sm">{t("deniedSub")}</p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
