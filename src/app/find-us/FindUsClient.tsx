"use client";

import dynamic from "next/dynamic";
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
  return (
    <section className="pt-32 pb-20 md:pb-32">
      <div className="px-6 max-w-7xl mx-auto mb-12">
        <SectionHeading
          title="Find BRUT."
          subtitle="You'll find us in bars that care. Not in vending machines."
        />
      </div>
      <StockistMap />
      <div className="px-6 max-w-4xl mx-auto mt-16 text-center">
        <p className="text-softgrey">
          Want to stock BRUT.?{" "}
          <a
            href="/contact"
            className="text-offblack font-medium underline hover:text-lime transition-colors duration-0"
          >
            Get in touch.
          </a>
        </p>
      </div>
    </section>
  );
}
