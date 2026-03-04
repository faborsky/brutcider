"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");

  const footerLinks = [
    { href: "/products" as const, label: nav("products") },
    { href: "/our-story" as const, label: nav("ourStory") },
    { href: "/find-us" as const, label: nav("findUs") },
    { href: "/contact" as const, label: nav("contact") },
  ];

  return (
    <footer className="bg-offblack text-warmwhite">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div>
            <Image
              src="/images/logo/brut_white_no_backround.webp"
              alt={t("logoAlt")}
              width={100}
              height={36}
            />
            <p className="mt-4 text-softgrey text-sm max-w-xs">
              {t("description")}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-softgrey hover:text-warmwhite transition-colors duration-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-softgrey">
            <p>{t("brewedIn")}</p>
            <p>{t("notForEveryone")}</p>
            <p className="mt-4 text-xs">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <p className="mt-1 text-xs">{t("responsible")}</p>
            <p className="mt-4 text-xs border-t border-softgrey/20 pt-4">
              <strong>{t("demoLabel")}</strong> {t("demoText")}
            </p>
            <p className="mt-2 text-xs">
              {t("githubLabel")}:{" "}
              <a
                href="https://github.com/faborsky/brutcider"
                className="text-warmwhite hover:text-lime transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("githubLink")}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-softgrey/20">
          <LanguageSwitcher dark={false} layout="row" />
        </div>
      </div>
    </footer>
  );
}
