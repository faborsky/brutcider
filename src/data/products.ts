export interface FlavorSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  abv: string;
  sweetness: string;
  carbonation: string;
  body: string;
  character: string;
  bestFor: string;
  personality: string;
  color: string;
  textOnColor: string;
  images: {
    transparent: string;
    lifestyle: string;
    gallery: string[];
  };
  flavorProfile: {
    base: string;
    tasteJourney: string;
    sweetnessLevel: string;
    mouthfeel: string;
    notLike: string;
    moreLike: string;
  };
  copyBlocks: {
    whatItIs: string;
    whyItMatters: string;
    howWeMakeIt: string;
    whoItsFor: string;
  };
  heroMessage: string;
  heroSub: string;
}

export const products: Product[] = [
  {
    slug: "original",
    name: "Original",
    fullName: "BRUT. Original",
    tagline: "Zero sugar. Full flavor.",
    abv: "5.4%",
    sweetness: "Bone dry",
    carbonation: "High",
    body: "Light",
    character: "Clean, precise",
    bestFor: "All evening",
    personality: "The foundation",
    color: "var(--color-original)",
    textOnColor: "text-offblack",
    images: {
      transparent: "/images/products/transparent/original.png",
      lifestyle: "/images/products/lifestyle/brut_original_lifestyle_1x1_1K_20260210_082337.webp",
      gallery: [
        "/images/lifestyle/lifestyle_01_rooftop_original_16x9_1K_20260208_153003.png",
        "/images/lifestyle/lifestyle_05_firepit_original_16x9_1K_20260208_153121.png",
        "/images/lifestyle/lifestyle_09_skate_original_16x9_1K_20260208_153231.png",
        "/images/web-hero/web_hero_01_rooftop_original_16x9_1K_20260208_155401.png",
        "/images/web-hero/web_hero_05_cafe_original_16x9_1K_20260208_155513.png",
      ],
    },
    flavorProfile: {
      base: "Single-variety Flemish apples (primarily Jonagold), fermented bone dry",
      tasteJourney: "Crisp apple upfront — mineral middle — bone-dry finish with subtle tannin",
      sweetnessLevel: "Zero residual sugar — completely dry, almost champagne-like",
      mouthfeel: "High carbonation, light body, refreshing acidity",
      notLike: "Sweet commercial ciders, flat scrumpy, apple juice with alcohol",
      moreLike: "Dry champagne meets tart apple. Clean, unapologetic, precise.",
    },
    copyBlocks: {
      whatItIs:
        "Flemish apples fermented completely dry. High carbonation. Zero residual sugar. The way cider should taste when you stop trying to make it something else.",
      whyItMatters:
        "Most ciders add sugar back after fermentation. We don't. Dry means you taste the apples, not the sweetener. Dry means you can drink three without feeling heavy. Dry means honest.",
      howWeMakeIt:
        "Press apples. Ferment until there's no sugar left. Carbonate high. Can it cold. Four ingredients. One philosophy. Nothing added. Nothing to hide.",
      whoItsFor:
        "For people who drink dry wine, not moscato. Espresso, not frappuccino. The ones who already know what they like.",
    },
    heroMessage: "Zero sugar. Full flavor.",
    heroSub: "The one that started it. Still the one that matters.",
  },
  {
    slug: "haze",
    name: "Haze",
    fullName: "BRUT. Haze",
    tagline: "Cloudy with zero compromise.",
    abv: "4.8%",
    sweetness: "Semi-dry",
    carbonation: "Medium",
    body: "Medium",
    character: "Textured, full",
    bestFor: "With food",
    personality: "The rebel",
    color: "var(--color-haze)",
    textOnColor: "text-offblack",
    images: {
      transparent: "/images/products/transparent/haze.png",
      lifestyle: "/images/products/lifestyle/brut_haze_lifestyle_1x1_1K_20260210_082354.webp",
      gallery: [
        "/images/lifestyle/lifestyle_04_park_haze_16x9_1K_20260208_153102.png",
        "/images/lifestyle/lifestyle_08_festival_haze_16x9_1K_20260208_153213.png",
        "/images/web-hero/web_hero_04_balcony_haze_16x9_1K_20260208_155456.png",
        "/images/web-hero/web_hero_08_firepit_haze_16x9_1K_20260208_155607.png",
      ],
    },
    flavorProfile: {
      base: "Blend of tart Flemish apples (Boskoop-forward), unfiltered",
      tasteJourney: "Fuller apple flavor upfront — creamy mid-palate from suspended solids — semi-dry finish with apple skin tannins",
      sweetnessLevel: "Semi-dry (minimal residual sugar) — the cloudiness adds perceived body, not sweetness",
      mouthfeel: "Medium carbonation, fuller body, slight creaminess from yeast in suspension",
      notLike: "Cloudy apple juice, sweet unfiltered ciders, hazy IPAs",
      moreLike: "Natural wine with sediment. Unpasteurized sake. Intentional cloudiness that adds character.",
    },
    copyBlocks: {
      whatItIs:
        "Unfiltered cider from tart Flemish apples. We leave the solids in. They add body, texture, and a fuller apple flavor. The cloudiness isn't a mistake. It's the whole point.",
      whyItMatters:
        "Filtering makes cider clear. It also strips out flavor, texture, and character. We'd rather have cloudy cider that tastes like apples than crystal-clear liquid that tastes like nothing. Clarity is overrated.",
      howWeMakeIt:
        "Press tart apples. Ferment semi-dry. Skip the filtration step everyone else does. Can it cloudy. What you lose in Instagram aesthetics, you gain in flavor.",
      whoItsFor:
        "For natural wine drinkers. For people who order the murky beer. For anyone who values substance over shine.",
    },
    heroMessage: "Cloudy with zero compromise.",
    heroSub: "Unfiltered. Semi-dry. Full character.",
  },
  {
    slug: "cassis",
    name: "Cassis",
    fullName: "BRUT. Cassis",
    tagline: "Dark fruit. Dry finish.",
    abv: "4.5%",
    sweetness: "Bone dry",
    carbonation: "Medium",
    body: "Medium",
    character: "Deep, complex",
    bestFor: "Aperitif",
    personality: "The sophisticated",
    color: "var(--color-cassis)",
    textOnColor: "text-warmwhite",
    images: {
      transparent: "/images/products/transparent/cassis.png",
      lifestyle: "/images/products/lifestyle/brut_cassis_lifestyle_1x1_1K_20260210_082410.webp",
      gallery: [
        "/images/lifestyle/lifestyle_03_bar_cassis_16x9_1K_20260208_153044.png",
        "/images/lifestyle/lifestyle_07_balcony_cassis_16x9_1K_20260208_153155.png",
        "/images/web-hero/web_hero_03_steps_cassis_16x9_1K_20260208_155437.png",
      ],
    },
    flavorProfile: {
      base: "Dry-fermented Flemish apples with blackcurrant juice added post-fermentation",
      tasteJourney: "Dark berry upfront — tart apple middle — bone-dry finish with blackcurrant tannins",
      sweetnessLevel: "Bone dry — blackcurrant adds tartness and color, not sugar",
      mouthfeel: "Medium carbonation, slight tannic grip from currants",
      notLike: "Sweet berry ciders, fruit beers, rosé, sangria",
      moreLike: "Dry vermouth meets tart berries. Crème de cassis without the sugar. Concentrated but not sweet.",
    },
    copyBlocks: {
      whatItIs:
        "Dry cider infused with Belgian blackcurrant juice. Not sweet berry cider. Not rosé. Tart dark fruit on a bone-dry apple base. Complex flavor without added sugar.",
      whyItMatters:
        "Blackcurrants are naturally tart, not sweet. They add depth, color, and tannic structure without needing sugar to balance them. We pair them with dry apple because both can stand on their own. Together, they're better.",
      howWeMakeIt:
        "Ferment the apples completely dry. Add blackcurrant juice post-fermentation. Let the tartness of both ingredients speak for themselves. Can it cold. No sugar added at any stage.",
      whoItsFor:
        "For people who drink Campari, not Aperol. Dry vermouth, not sweet. The ones who want complexity, not comfort.",
    },
    heroMessage: "Dark fruit. Dry finish.",
    heroSub: "Blackcurrant meets dry apple. No sugar in between.",
  },
  {
    slug: "ginger",
    name: "Ginger",
    fullName: "BRUT. Ginger",
    tagline: "Burns a little. In a good way.",
    abv: "5.0%",
    sweetness: "Bone dry",
    carbonation: "Medium",
    body: "Light",
    character: "Warming, bold",
    bestFor: "Wake-up call",
    personality: "The provocateur",
    color: "var(--color-ginger)",
    textOnColor: "text-offblack",
    images: {
      transparent: "/images/products/transparent/ginger.png",
      lifestyle: "/images/products/lifestyle/brut_ginger_lifestyle_1x1_1K_20260210_082427.webp",
      gallery: [
        "/images/lifestyle/lifestyle_02_steps_ginger_16x9_1K_20260208_153022.png",
        "/images/lifestyle/lifestyle_06_cafe_ginger_16x9_1K_20260208_153138.png",
        "/images/lifestyle/lifestyle_10_picnic_ginger_16x9_1K_20260208_153248.png",
        "/images/web-hero/web_hero_02_bar_ginger_16x9_1K_20260208_155419.png",
        "/images/web-hero/web_hero_06_picnic_ginger_16x9_1K_20260208_155531.png",
      ],
    },
    flavorProfile: {
      base: "Dry-fermented Flemish apples (Jonagold, Boskoop blend)",
      tasteJourney: "Clean apple upfront — ginger warmth builds mid-palate — crisp, dry finish with lingering spice",
      sweetnessLevel: "Bone dry (0g residual sugar) — the ginger adds heat, not sweetness",
      mouthfeel: "Medium carbonation, slightly warming from ginger oils",
      notLike: "Ginger beer (too sweet), Moscow Mule (too sugary), ginger shot (too aggressive)",
      moreLike: "The ginger you actually taste in good sushi. The burn that makes you pay attention.",
    },
    copyBlocks: {
      whatItIs:
        "Dry cider with fresh ginger juice. Not extract. Not syrup. The kind of ginger you feel in your chest, not your teeth.",
      whyItMatters:
        "Most ginger drinks hide the heat behind sugar. We let it do its thing. Bone dry base. Real ginger burn. Nothing holding it back.",
      howWeMakeIt:
        "Ferment the apples completely dry. Add fresh ginger juice post-fermentation. Can it cold. That's the recipe. That's also the only way to do this right.",
      whoItsFor:
        "Not a gateway cider. Not a safe choice. For people who want their drinks to have opinions.",
    },
    heroMessage: "Burns a little. In a good way.",
    heroSub: "Dry apple cider. Real ginger. Zero apologies.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
