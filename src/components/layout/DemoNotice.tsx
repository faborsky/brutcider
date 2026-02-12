"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const DEMO_BAR_HEIGHT = 48; // height in pixels

export default function DemoNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("demo-notice-dismissed");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    // Add padding to body when demo notice is visible
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
    setVisible(false);
    // Dispatch event to notify other components
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
              <span className="font-bold">Demo Website:</span> This is a
              demonstration project created for educational purposes. Not a real
              business.
            </p>
            <button
              onClick={handleDismiss}
              className="text-warmwhite hover:text-lime transition-colors text-xl leading-none flex-shrink-0"
              aria-label="Dismiss notice"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
