import type { Metadata } from "next";
import { Newsreader } from "next/font/google";

import { site } from "@/lib/content";

/**
 * Newsreader — antykwa zaprojektowana do czytania na ekranie, z osią `opsz`
 * i mocną kursywą. W wariancie C prowadzi całą stronę, także treść, bo strona
 * ma się czytać jak rozmowa, a nie skanować jak katalog.
 */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wariant C — koncepcja strony",
  description:
    "Trzecia koncepcja strony głównej Bezpiecznych Skrzydeł: strona prowadzona głosem autorki, czytana jak rozmowa, z ofertą stale w zasięgu ręki.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wariant C — ${site.name}`,
    description: "Strona jako rozmowa, nie katalog. Koncepcja alternatywna.",
  },
};

export default function PageCLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${newsreader.variable} theme-c font-read bg-paper text-brand-950 flex min-h-full flex-1 flex-col`}
    >
      {children}
    </div>
  );
}
