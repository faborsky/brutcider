export interface Product {
  slug: string;
  abv: string;
  color: string;
  textOnColor: string;
  images: {
    transparent: string;
    lifestyle: string;
    gallery: string[];
  };
}

export const products: Product[] = [
  {
    slug: "original",
    abv: "5.4%",
    color: "var(--color-original)",
    textOnColor: "text-offblack",
    images: {
      transparent: "/images/products/transparent/original.webp",
      lifestyle: "/images/products/lifestyle/brut_original_lifestyle_1x1_1K_20260210_082337.webp",
      gallery: [
        "/images/lifestyle/lifestyle_01_rooftop_original_16x9_1K_20260208_153003.webp",
        "/images/lifestyle/lifestyle_05_firepit_original_16x9_1K_20260208_153121.webp",
        "/images/lifestyle/lifestyle_09_skate_original_16x9_1K_20260208_153231.webp",
        "/images/web-hero/web_hero_01_rooftop_original_16x9_1K_20260208_155401.webp",
        "/images/web-hero/web_hero_05_cafe_original_16x9_1K_20260208_155513.webp",
      ],
    },
  },
  {
    slug: "haze",
    abv: "4.8%",
    color: "var(--color-haze)",
    textOnColor: "text-offblack",
    images: {
      transparent: "/images/products/transparent/haze.webp",
      lifestyle: "/images/products/lifestyle/brut_haze_lifestyle_1x1_1K_20260210_082354.webp",
      gallery: [
        "/images/lifestyle/lifestyle_04_park_haze_16x9_1K_20260208_153102.webp",
        "/images/lifestyle/lifestyle_08_festival_haze_16x9_1K_20260208_153213.webp",
        "/images/web-hero/web_hero_04_balcony_haze_16x9_1K_20260208_155456.webp",
        "/images/web-hero/web_hero_08_firepit_haze_16x9_1K_20260208_155607.webp",
      ],
    },
  },
  {
    slug: "cassis",
    abv: "4.5%",
    color: "var(--color-cassis)",
    textOnColor: "text-warmwhite",
    images: {
      transparent: "/images/products/transparent/cassis.webp",
      lifestyle: "/images/products/lifestyle/brut_cassis_lifestyle_1x1_1K_20260210_082410.webp",
      gallery: [
        "/images/lifestyle/lifestyle_03_bar_cassis_16x9_1K_20260208_153044.webp",
        "/images/lifestyle/lifestyle_07_balcony_cassis_16x9_1K_20260208_153155.webp",
        "/images/web-hero/web_hero_03_steps_cassis_16x9_1K_20260208_155437.webp",
      ],
    },
  },
  {
    slug: "ginger",
    abv: "5.0%",
    color: "var(--color-ginger)",
    textOnColor: "text-offblack",
    images: {
      transparent: "/images/products/transparent/ginger.webp",
      lifestyle: "/images/products/lifestyle/brut_ginger_lifestyle_1x1_1K_20260210_082427.webp",
      gallery: [
        "/images/lifestyle/lifestyle_02_steps_ginger_16x9_1K_20260208_153022.webp",
        "/images/lifestyle/lifestyle_06_cafe_ginger_16x9_1K_20260208_153138.webp",
        "/images/lifestyle/lifestyle_10_picnic_ginger_16x9_1K_20260208_153248.webp",
        "/images/web-hero/web_hero_02_bar_ginger_16x9_1K_20260208_155419.webp",
        "/images/web-hero/web_hero_06_picnic_ginger_16x9_1K_20260208_155531.webp",
      ],
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
