import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import FoundersSection from "@/components/story/FoundersSection";
import Timeline from "@/components/story/Timeline";
import ValuesSection from "@/components/story/ValuesSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "OurStoryPage" });

  const baseUrl = "https://www.brutcider.com";
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${baseUrl}${getPathname({ locale: l, href: "/our-story" })}`;
  }
  languages["x-default"] = `${baseUrl}/our-story`;

  const canonicalUrl = `${baseUrl}${getPathname({ locale, href: "/our-story" })}`;

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
  };
}

export default async function OurStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FoundersSection />
      <Timeline />
      <ValuesSection />
    </>
  );
}
