"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";

const DEMO_BAR_HEIGHT = 48;

const emptySubscribe = () => () => {};

export default function DemoNotice() {
  const dismissed = useSyncExternalStore(
    emptySubscribe,
    () => localStorage.getItem("demo-notice-dismissed"),
    () => "pending"
  );
  const [localDismissed, setLocalDismissed] = useState(false);
  const t = useTranslations("DemoNotice");

  const visible = dismissed === null && !localDismissed;

  useEffect(() => {
    if (visible) {
      document.body.style.paddingTop = `${DEMO_BAR_HEIGHT}px`;
    } else {
      document.body.style.paddingTop = "0";
    }

    return () => {
      document.body.style.paddingTop = "0";
    };
  }, [visible]);

  function handleDismiss() {
    localStorage.setItem("demo-notice-dismissed", "true");
    setLocalDismissed(true);
    window.dispatchEvent(new Event("demo-notice-dismissed"));
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-offblack text-warmwhite py-3 px-6"
          style={{ height: `${DEMO_BAR_HEIGHT}px` }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 h-full">
            <p className="text-sm">
              <span className="font-bold">{t("label")}</span> {t("text")}
            </p>
            <button
              onClick={handleDismiss}
              className="text-warmwhite hover:text-lime transition-colors text-xl leading-none flex-shrink-0"
              aria-label={t("dismiss")}
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
