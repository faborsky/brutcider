import { setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/home/HeroSection";
import BrandIntro from "@/components/home/BrandIntro";
import ProductGrid from "@/components/home/ProductGrid";
import BuyOnlineSection from "@/components/home/BuyOnlineSection";
import PhilosophyTeaser from "@/components/home/PhilosophyTeaser";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <BrandIntro />
      <ProductGrid />
      <BuyOnlineSection />
      <PhilosophyTeaser />
    </>
  );
}
