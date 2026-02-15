"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { trackLanguageSwitch } from "@/lib/analytics";

const flags: Record<Locale, string> = {
  en: "\u{1F1EC}\u{1F1E7}",
  nl: "\u{1F1F3}\u{1F1F1}",
  fr: "\u{1F1EB}\u{1F1F7}",
  de: "\u{1F1E9}\u{1F1EA}",
  pl: "\u{1F1F5}\u{1F1F1}",
  cs: "\u{1F1E8}\u{1F1FF}",
};

interface LanguageSwitcherProps {
  dark?: boolean;
  layout?: "inline" | "row";
}

export default function LanguageSwitcher({
  dark = true,
  layout = "inline",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LanguageSwitcher");

  function switchLocale(nextLocale: Locale) {
    trackLanguageSwitch(locale, nextLocale);
    // Type assertion needed because usePathname returns resolved paths
    // (e.g., /products/original) which don't match pattern types
    router.replace(pathname as "/", { locale: nextLocale });
  }

  if (layout === "row") {
    return (
      <div className="flex flex-wrap gap-3" role="group" aria-label={t("label")}>
        {routing.locales.map((l) => (
          <button
            key={l}
            onClick={() => switchLocale(l)}
            className={`flex items-center gap-1.5 text-sm tracking-wider uppercase transition-colors duration-0 ${
              l === locale
                ? dark
                  ? "text-offblack font-bold"
                  : "text-warmwhite font-bold"
                : dark
                  ? "text-softgrey hover:text-offblack"
                  : "text-softgrey hover:text-warmwhite"
            }`}
            aria-current={l === locale ? "true" : undefined}
          >
            <span aria-hidden="true">{flags[l]}</span>
            {t(l)}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex items-center gap-1" role="group" aria-label={t("label")}>
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          title={t(l)}
          className={`px-1 text-base transition-opacity duration-0 ${
            l === locale ? "opacity-100" : "opacity-40 hover:opacity-80"
          }`}
          aria-label={t(l)}
          aria-current={l === locale ? "true" : undefined}
        >
          {flags[l]}
        </button>
      ))}
    </div>
  );
}
