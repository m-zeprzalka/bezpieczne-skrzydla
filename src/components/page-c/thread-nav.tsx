"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { sections } from "@/lib/content-c";

/**
 * Nić prowadząca — pionowa oś z węzłami odpowiadającymi sekcjom.
 * Pełni trzy role naraz: pokazuje postęp czytania, nazywa miejsce, w którym
 * jesteś, i pozwala przeskoczyć dalej. Zastępuje klasyczne menu, bo strona
 * jest jednym ciągiem tekstu, a nie zbiorem zakładek.
 */
export function ThreadNav() {
  const [active, setActive] = React.useState<string>(sections[0].id);

  React.useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => n !== null);

    // Wąskie okno w połowie ekranu — sekcja jest „aktywna”, gdy przez nie przechodzi
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Spis treści"
      className="pointer-events-none fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto flex flex-col gap-2.5">
        {sections.map((section) => {
          const isActive = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group focus-visible:ring-ring/50 flex items-center gap-3 rounded py-1.5 outline-none focus-visible:ring-3"
              >
                <span
                  aria-hidden
                  className={cn(
                    "h-px transition-all duration-500",
                    isActive
                      ? "bg-brand-700 w-8"
                      : "bg-brand-300 group-hover:bg-brand-500 w-4 group-hover:w-7",
                  )}
                />
                <span
                  className={cn(
                    "font-sans text-[0.7rem] tracking-wide transition-all duration-500",
                    isActive
                      ? "text-brand-800 opacity-100"
                      : "text-brand-600 opacity-0 group-hover:opacity-100",
                  )}
                >
                  {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
