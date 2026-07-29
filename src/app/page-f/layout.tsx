import type { Metadata } from "next";

import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wariant F — finalna koncepcja strony",
  description:
    "Finalna koncepcja strony głównej Bezpiecznych Skrzydeł: minimalizm i światło połączone z pełną treścią przygotowaną przez klientkę — kompletne opisy szkoleń, mocne strony i misja.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wariant F — ${site.name}`,
    description:
      "Minimalizm, światło i pełna treść dokumentu klientki w jednej stronie.",
  },
};

/**
 * Wariant F nie ładuje własnych fontów — Fraunces i Inter przychodzą
 * z layoutu głównego. Mniej żądań sieciowych, szybszy start, a para krojów
 * i tak jest docelową parą marki.
 */
export default function PageFLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-f text-brand-950 flex min-h-full flex-1 flex-col bg-white antialiased">
      {children}
    </div>
  );
}
