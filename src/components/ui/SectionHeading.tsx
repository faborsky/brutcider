"use client";

import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={cn("mb-12 md:mb-16", className)}>
      <h2
        className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight",
          light ? "text-warmwhite" : "text-offblack"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl",
            light ? "text-softgrey" : "text-softgrey"
          )}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
