"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type DsNavItem = { id: string; index: string; label: string };

/**
 * Spis treści design systemu — przyklejony po lewej, śledzi aktywną sekcję
 * (IntersectionObserver). Na wąskich ekranach: poziomy pasek przewijany.
 */
export function DsNav({ items }: { items: DsNavItem[] }) {
  const [active, setActive] = React.useState(items[0]?.id);

  React.useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Spis treści design systemu">
      <p className="t-label hidden text-brand-600 lg:block">Spis treści</p>
      <ol className="scrollbar-none -mx-5 flex max-w-[calc(100%+2.5rem)] gap-1 overflow-x-auto px-5 lg:mx-0 lg:mt-4 lg:max-w-none lg:flex-col lg:gap-0.5 lg:px-0">
        {items.map((item) => {
          const current = item.id === active;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "focus-ring flex items-center gap-3 rounded-full px-3 py-2 text-[0.85rem] font-medium whitespace-nowrap transition-colors lg:rounded-md",
                  current ? "bg-brand-50 text-brand-700" : "text-brand-900/75 hover:bg-brand-50/70 hover:text-brand-900",
                )}
              >
                <span className="font-mono text-[0.7rem] text-brand-400">{item.index}</span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
