import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AgeGate from "@/components/layout/AgeGate";

export const metadata: Metadata = {
  title: "BRUT. — Dry Craft Cider from Ghent",
  description:
    "Nothing added. Nothing to hide. Dry craft cider made from Flemish apples. Zero sugar. Full flavor.",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
