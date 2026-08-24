import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Odnośnik tekstowy ze strzałką — drugi poziom CTA obok przycisku.
 * Linia rośnie od lewej, strzałka przesuwa się o 2 px pod kursorem.
 */
export function ArrowLink({
  href,
  children,
  className,
  tone = "light",
  external = false,
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
  external?: boolean;
  size?: "sm" | "md";
}) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-sm font-semibold transition-colors",
    size === "sm" ? "text-[0.875rem]" : "text-[0.9375rem]",
    tone === "light"
      ? "focus-ring text-brand-800 hover:text-brand-600"
      : "focus-ring-dark text-brand-200 hover:text-white",
    className,
  );

  const content = (
    <>
      <span className="link-underline">{children}</span>
      <Icon
        aria-hidden
        className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
