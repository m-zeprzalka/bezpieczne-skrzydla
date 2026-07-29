import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { site } from "@/lib/content";

/**
 * Jeden krój na całą stronę. Geometryczny grotesk o dużej wysokości x
 * czyta się dobrze zarówno w nagłówku 60 px, jak i w etykiecie 12 px —
 * a przy minimalizmie mniej krojów znaczy więcej porządku.
 */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wariant E — koncepcja strony",
  description:
    "Piąta koncepcja strony głównej Bezpiecznych Skrzydeł: jasny minimalizm oparty na twardej siatce, bez animacji.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wariant E — ${site.name}`,
    description: "Jasny minimalizm, twarda siatka, zero animacji.",
  },
};

export default function PageELayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className={`${jakarta.variable} theme-e font-jakarta text-brand-950 flex min-h-full flex-1 flex-col bg-white antialiased`}
    >
      {children}
    </div>
  );
}
