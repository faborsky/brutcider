import FoundersSection from "@/components/story/FoundersSection";
import Timeline from "@/components/story/Timeline";
import ValuesSection from "@/components/story/ValuesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Cider Story",
  description:
    "Three friends from Ghent. Background in design and hospitality, zero experience in brewing. Started in a garage. Still no sugar.",
  openGraph: {
    title: "Our Cider Story — BRUT.",
    description:
      "Three friends from Ghent. Background in design and hospitality, zero experience in brewing. Started in a garage. Still no sugar.",
    url: "/our-story",
  },
  twitter: {
    title: "Our Cider Story — BRUT.",
    description:
      "Three friends from Ghent. Background in design and hospitality, zero experience in brewing. Started in a garage. Still no sugar.",
  },
};

export default function OurStoryPage() {
  return (
    <>
      <FoundersSection />
      <Timeline />
      <ValuesSection />
    </>
  );
}
