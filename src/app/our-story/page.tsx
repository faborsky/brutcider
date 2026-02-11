import FoundersSection from "@/components/story/FoundersSection";
import Timeline from "@/components/story/Timeline";
import ValuesSection from "@/components/story/ValuesSection";

export const metadata = {
  title: "Our Story — BRUT.",
  description:
    "Three friends from Ghent. Background in design and hospitality, zero experience in brewing. Started in a garage. Still no sugar.",
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
