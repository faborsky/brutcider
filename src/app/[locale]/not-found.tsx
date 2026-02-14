import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <section className="pt-32 pb-20 md:pb-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          404
        </h1>
        <p className="text-xl md:text-2xl font-bold mb-4">{t("title")}</p>
        <p className="text-softgrey mb-10">{t("description")}</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider bg-lime text-offblack hover:bg-offblack hover:text-warmwhite transition-colors duration-0"
        >
          {t("backHome")}
        </Link>
      </div>
    </section>
  );
}
