import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BRUT Cider",
  description:
    "Get in touch with BRUT. We read every message. We don't always reply fast, but we reply honest.",
  openGraph: {
    title: "Contact BRUT Cider",
    description:
      "Get in touch with BRUT. We read every message. We don't always reply fast, but we reply honest.",
    url: "/contact",
  },
  twitter: {
    title: "Contact BRUT Cider",
    description:
      "Get in touch with BRUT. We read every message. We don't always reply fast, but we reply honest.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
