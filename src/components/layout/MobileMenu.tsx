"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { slideFromRight } from "@/lib/animations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/our-story", label: "Our Story" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
            aria-label="Close menu"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
