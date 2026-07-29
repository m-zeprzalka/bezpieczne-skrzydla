import type { Metadata } from "next";
import { Instrument_Sans, Manrope } from "next/font/google";

import { site } from "@/lib/content";

/**
 * Manrope w lekkich odmianach czyta się w dużych stopniach jak architektura:
 * dużo światła wewnątrz liter, zero ozdobników. Instrument Sans obsługuje
 * drobny interfejs, gdzie potrzebna jest większa gęstość.
 */
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wariant D — koncepcja strony",
  description:
    "Czwarta koncepcja strony głównej Bezpiecznych Skrzydeł: świetlisty sygnet marki, choreografia przewijania i szklane warstwy w bieli i błękicie.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wariant D — ${site.name}`,
    description: "Światło, głębia i choreografia przewijania.",
  },
};

export default function PageDLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${manrope.variable} ${instrument.variable} theme-d font-ui-d text-brand-950 flex min-h-full flex-1 flex-col bg-white`}
    >
      {children}
    </div>
  );
}
