import FindUsClient from "./FindUsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find BRUT. dry craft cider at bars, restaurants, and bottle shops across Belgium, Netherlands, Germany, and France.",
  openGraph: {
    title: "Find Us — BRUT.",
    description:
      "Find BRUT. dry craft cider at bars, restaurants, and bottle shops across Belgium, Netherlands, Germany, and France.",
    url: "/find-us",
  },
  twitter: {
    title: "Find Us — BRUT.",
    description:
      "Find BRUT. dry craft cider at bars, restaurants, and bottle shops across Belgium, Netherlands, Germany, and France.",
  },
};

export default function FindUsPage() {
  return <FindUsClient />;
}
