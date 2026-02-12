"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

export default function AgeGate() {
  const [verified, setVerified] = useState<boolean | null>(null);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("brut-age-verified");
    setVerified(stored === "true");
  }, []);

  function handleYes() {
    localStorage.setItem("brut-age-verified", "true");
    setVerified(true);
  }

  function handleNo() {
    setDenied(true);
  }

  if (verified === null) return null;

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
            alt="BRUT."
            width={160}
            height={60}
            className="mb-16"
          />

          {!denied ? (
            <div className="text-center">
              <h2 className="text-warmwhite text-2xl md:text-3xl font-bold mb-2">
                Are you 18 or older?
              </h2>
              <p className="text-softgrey text-sm mb-12">
                You need to be of legal drinking age to enter.
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleYes}
                  className="px-10 py-4 bg-lime text-offblack text-sm font-bold uppercase tracking-wider hover:bg-warmwhite transition-colors duration-0"
                >
                  Yes, I am
                </button>
                <button
                  onClick={handleNo}
                  className="px-10 py-4 border border-softgrey text-softgrey text-sm font-bold uppercase tracking-wider hover:text-warmwhite hover:border-warmwhite transition-colors duration-0"
                >
                  No
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-warmwhite text-xl md:text-2xl font-bold mb-4">
                Sorry, you must be 18 or older.
              </p>
              <p className="text-softgrey text-sm">
                Come back when you're old enough. We'll be here.
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
