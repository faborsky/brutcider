import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AgeGate from "@/components/layout/AgeGate";
import DemoNotice from "@/components/layout/DemoNotice";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brutcider.com"),
  title: {
    default: "BRUT. — Dry Craft Cider from Ghent",
    template: "%s | BRUT.",
  },
  description:
    "Nothing added. Nothing to hide. Dry craft cider made from Flemish apples. Zero sugar. Full flavor.",
  keywords: [
    "craft cider",
    "dry cider",
    "Belgian cider",
    "Flemish apples",
    "zero sugar cider",
    "Ghent cider",
    "artisan cider",
    "BRUT cider",
  ],
  authors: [{ name: "BRUT." }],
  creator: "BRUT.",
  publisher: "BRUT.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.brutcider.com",
    siteName: "BRUT.",
    title: "BRUT. — Dry Craft Cider from Ghent",
    description:
      "Nothing added. Nothing to hide. Dry craft cider made from Flemish apples. Zero sugar. Full flavor.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "BRUT. Dry Craft Cider - Four flavors in ice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRUT. — Dry Craft Cider from Ghent",
    description:
      "Nothing added. Nothing to hide. Dry craft cider made from Flemish apples. Zero sugar. Full flavor.",
    images: ["/opengraph-image.jpg"],
    creator: "@brutcider",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ukhqn5xYBB78omBf1GeoQrLB-7G5yhRF2n1xOH4JueY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AgeGate />
        <DemoNotice />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
