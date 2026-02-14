"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

interface LanguageSwitcherProps {
  dark?: boolean;
}

export default function LanguageSwitcher({ dark = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageSwitcher");

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e.target.value as Locale;
    // Type assertion needed because usePathname returns resolved paths
    // (e.g., /products/original) which don't match pattern types
    router.replace(pathname as "/", { locale: nextLocale });
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      aria-label={t("label")}
      className={`bg-transparent text-sm font-medium tracking-wider uppercase cursor-pointer border-none outline-none appearance-none ${
        dark ? "text-offblack" : "text-warmwhite"
      }`}
    >
      {routing.locales.map((l) => (
        <option key={l} value={l} className="text-offblack bg-warmwhite">
          {t(l)}
        </option>
      ))}
    </select>
  );
}
