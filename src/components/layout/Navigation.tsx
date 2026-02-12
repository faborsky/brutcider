"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/our-story", label: "Our Story" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoNoticeVisible, setDemoNoticeVisible] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On non-home pages, always use dark (black) variant
  // On home, start light (white) over the dark hero, switch to dark on scroll
  const useDark = !isHome || scrolled;

  useEffect(() => {
    // Check if demo notice is dismissed
    const dismissed = localStorage.getItem("demo-notice-dismissed");
    setDemoNoticeVisible(!dismissed);

    // Listen for demo notice dismissal
    const handleDismiss = () => setDemoNoticeVisible(false);
    window.addEventListener("demo-notice-dismissed", handleDismiss);
    return () => window.removeEventListener("demo-notice-dismissed", handleDismiss);
  }, []);

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
              alt="BRUT Dry Craft Cider Logo"
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
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden text-2xl ${
              useDark ? "text-offblack" : "text-warmwhite"
            }`}
            aria-label="Open menu"
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
