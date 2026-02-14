"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Link } from "@/i18n/navigation";
import SectionHeading from "@/components/ui/SectionHeading";

const StockistMap = dynamic(() => import("@/components/map/StockistMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[60vh] md:h-[70vh] bg-softgrey/20 flex items-center justify-center">
      <p className="text-softgrey text-sm">Loading map...</p>
    </div>
  ),
});

export default function FindUsClient() {
  const t = useTranslations("FindUsPage");

  return (
    <section className="pt-32 pb-20 md:pb-32">
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />
      </div>
      <StockistMap />
      <div className="px-6 max-w-4xl mx-auto mt-16 text-center">
        <p className="text-softgrey">
          {t("stockCta")}{" "}
          <Link
            href="/contact"
            className="text-offblack font-medium underline hover:text-lime transition-colors duration-0"
          >
            {t("stockLink")}
          </Link>
        </p>
      </div>
    </section>
  );
}
