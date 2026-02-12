import ProductsOverview from "./ProductsOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cider Products",
  description: "Four dry ciders. No filler. No sugar. Nothing added.",
  openGraph: {
    title: "Cider Products — BRUT.",
    description: "Four dry ciders. No filler. No sugar. Nothing added.",
    url: "/products",
  },
  twitter: {
    title: "Cider Products — BRUT.",
    description: "Four dry ciders. No filler. No sugar. Nothing added.",
  },
};

export default function ProductsPage() {
  return <ProductsOverview />;
}
