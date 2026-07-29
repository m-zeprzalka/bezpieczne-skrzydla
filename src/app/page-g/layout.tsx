import type { Metadata } from "next";

import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wariant G — wersja ostateczna",
  description:
    "Ostateczna koncepcja strony głównej Bezpiecznych Skrzydeł: pełna treść dokumentu klientki w bogatym opracowaniu graficznym — bento, ikony, panele programów i rytm typograficzny.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wariant G — ${site.name}`,
    description:
      "Pełna treść klientki, zero ścian tekstu — każda sekcja zaprojektowana.",
  },
};

/** G współdzieli system wizualny F (motyw, fonty z layoutu głównego). */
export default function PageGLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-f text-brand-950 flex min-h-full flex-1 flex-col bg-white antialiased">
      {children}
    </div>
  );
}
