import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/** Okruszki — na podstronach, nad tytułem. Ostatni element to bieżąca strona. */
export function Breadcrumbs({
  items,
  className,
  tone = "light",
}: {
  items: Crumb[];
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Okruszki" className={cn("text-[0.8125rem]", className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 ? (
                <ChevronRight
                  aria-hidden
                  className={cn("size-3.5", tone === "light" ? "text-brand-300" : "text-brand-500")}
                />
              ) : null}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-sm transition-colors",
                    tone === "light"
                      ? "focus-ring text-ink-muted hover:text-brand-700"
                      : "focus-ring-dark text-brand-300 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn("font-medium", tone === "light" ? "text-brand-800" : "text-brand-100")}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
