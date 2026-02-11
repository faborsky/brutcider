import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/our-story", label: "Our Story" },
  { href: "/find-us", label: "Find Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-offblack text-warmwhite">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div>
            <Image
              src="/images/logo/brut_white_no_backround.png"
              alt="BRUT."
              width={100}
              height={36}
            />
            <p className="mt-4 text-softgrey text-sm max-w-xs">
              Dry craft cider from Ghent, Belgium. Nothing added. Nothing to hide.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-softgrey hover:text-warmwhite transition-colors duration-0"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-softgrey">
            <p>Brewed in Ghent.</p>
            <p>Not brewed for everyone.</p>
            <p className="mt-4 text-xs">
              &copy; {new Date().getFullYear()} BRUT. All rights reserved.
            </p>
            <p className="mt-1 text-xs">
              Enjoy responsibly. 18+ only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
