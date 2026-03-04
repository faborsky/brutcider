"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

const subscribeDemoNotice = (callback: () => void) => {
  window.addEventListener("demo-notice-dismissed", callback);
  return () => window.removeEventListener("demo-notice-dismissed", callback);
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const demoNoticeVisible = useSyncExternalStore(
    subscribeDemoNotice,
    () => !localStorage.getItem("demo-notice-dismissed"),
    () => true
  );
  const pathname = usePathname();
  const t = useTranslations("Navigation");
  const isHome = pathname === "/";

  const navLinks = [
    { href: "/products" as const, label: t("products") },
    { href: "/our-story" as const, label: t("ourStory") },
    { href: "/find-us" as const, label: t("findUs") },
    { href: "/contact" as const, label: t("contact") },
  ];

  const useDark = !isHome || scrolled;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-200 ${
          useDark ? "bg-warmwhite" : "bg-transparent"
        }`}
        style={{ top: demoNoticeVisible ? "48px" : "0" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/">
            <Image
              src={
                useDark
                  ? "/images/logo/brut_black_no_backround.webp"
                  : "/images/logo/brut_white_no_backround.webp"
              }
              alt={t("logoAlt")}
              width={100}
              height={36}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-0 hover:text-lime ${
                  useDark ? "text-offblack" : "text-warmwhite"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher dark={useDark} />
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden text-2xl ${
              useDark ? "text-offblack" : "text-warmwhite"
            }`}
            aria-label={t("openMenu")}
          >
            <svg
              width="28"
              height="18"
              viewBox="0 0 28 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1h28M0 9h28M0 17h28"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
