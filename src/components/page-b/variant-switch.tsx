import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

const VARIANTS: { id: Variant; href: string; title: string }[] = [
  { id: "a", href: "/page-b", title: "Koncepcja A — broszura premium" },
  { id: "b", href: "/", title: "Koncepcja B — strona jako narzędzie" },
  { id: "c", href: "/page-c", title: "Koncepcja C — strona jako rozmowa" },
  { id: "d", href: "/page-d", title: "Koncepcja D — światło i głębia" },
  {
    id: "e",
    href: "/page-e",
    title: "Koncepcja E — jasny minimalizm bez animacji",
  },
  { id: "f", href: "/page-f", title: "Koncepcja F — wersja finalna" },
  { id: "g", href: "/page-g", title: "Koncepcja G — wersja ostateczna" },
  { id: "h", href: "/page-h", title: "Koncepcja H — strona-plakat" },
];

/**
 * Pływający przełącznik koncepcji — element prezentacji ofertowej,
 * do usunięcia przed publikacją.
 *
 * Róg zamiast środka: na wąskich ekranach pasek na dole zasłaniałby
 * przyciski formularza i stopkę z wezwaniem do działania.
 */
export function VariantSwitch({
  active,
  raised = false,
}: {
  active: Variant;
  /** Podnosi przełącznik nad stały pasek dolny (koncepcja C). */
  raised?: boolean;
}) {
  return (
    <div
      className={cn(
        "fixed right-3 z-50 sm:right-5 print:hidden",
        raised ? "bottom-20 sm:bottom-24" : "bottom-3 sm:bottom-5",
      )}
    >
      <nav
        aria-label="Przełącz koncepcję projektu"
        className="border-brand-300 flex items-center gap-1 rounded-full border bg-white/90 p-1 shadow-[0_8px_28px_-14px_rgba(11,37,64,0.5)] backdrop-blur-md"
      >
        <span className="text-brand-600 px-2 font-mono text-[0.62rem] tracking-[0.14em] uppercase">
          koncepcja
        </span>
        {VARIANTS.map((variant) => (
          <Link
            key={variant.id}
            href={variant.href}
            title={variant.title}
            aria-current={variant.id === active ? "page" : undefined}
            className={cn(
              "focus-visible:ring-ring/50 flex h-8 items-center rounded-full px-3.5 font-sans text-[0.75rem] font-medium uppercase transition-colors outline-none focus-visible:ring-3",
              variant.id === active
                ? "bg-brand-950 text-white"
                : "text-brand-800 hover:bg-brand-100",
            )}
          >
            {variant.id}
          </Link>
        ))}
      </nav>
    </div>
  );
}
