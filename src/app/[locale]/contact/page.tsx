import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  const baseUrl = "https://www.brutcider.com";
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${baseUrl}${getPathname({ locale: l, href: "/contact" })}`;
  }
  languages["x-default"] = `${baseUrl}/contact`;

  const canonicalUrl = `${baseUrl}${getPathname({ locale, href: "/contact" })}`;

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("description"),
      url: canonicalUrl,
    },
    twitter: {
      title: t("ogTitle"),
      description: t("description"),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactForm />;
}
