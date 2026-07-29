import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import { site } from "@/lib/content";

/**
 * Bricolage w ciężkich odmianach niesie cały plakatowy charakter H.
 * Zmienna nazywa się tak samo jak w wariancie B, więc token `font-grotesk`
 * z globals.css działa bez zmian.
 */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wariant H — strona-plakat",
  description:
    "Ósma koncepcja strony Bezpiecznych Skrzydeł: zmiana paradygmatu. Płyty koloru, masywna typografia, komponenty z twardym cieniem i przypinane karty Modelu 4R.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wariant H — ${site.name}`,
    description: "Strona-plakat: odważny design w błękitach z logo.",
  },
};

export default function PageHLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${bricolage.variable} theme-h text-brand-950 flex min-h-full flex-1 flex-col bg-white antialiased`}
    >
      {children}
    </div>
  );
}
