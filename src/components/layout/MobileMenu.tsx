"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { slideFromRight } from "@/lib/animations";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations("Navigation");

  const links = [
    { href: "/" as const, label: t("home") },
    { href: "/products" as const, label: t("products") },
    { href: "/our-story" as const, label: t("ourStory") },
    { href: "/find-us" as const, label: t("findUs") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-offblack flex flex-col justify-center px-8"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-warmwhite text-3xl font-light"
            aria-label={t("closeMenu")}
          >
            &times;
          </button>

          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-warmwhite text-4xl font-bold tracking-tight hover:text-lime transition-colors duration-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <LanguageSwitcher dark={false} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
