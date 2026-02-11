import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors duration-0";

  const variants = {
    primary:
      "bg-lime text-offblack hover:bg-offblack hover:text-warmwhite",
    outline:
      "border border-softgrey text-offblack hover:bg-offblack hover:text-warmwhite hover:border-offblack",
    dark:
      "bg-offblack text-warmwhite hover:bg-lime hover:text-offblack",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
