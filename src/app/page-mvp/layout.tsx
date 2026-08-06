import type { Metadata } from "next";

import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wersja MVP — strona gotowa według uwag klientki",
  description:
    "Ostateczna strona Bezpiecznych Skrzydeł: baza wariantu G, blok „Co słyszę najczęściej” z C, mocne strony i etapy Modelu 4R z F, nowy Fundament, nowy cennik z pakietem „Bezpieczna Firma” i formularz „Poproś o wycenę”.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wersja MVP — ${site.name}`,
    description:
      "G + C + F połączone według maila klientki: Model 4R z Fundamentem, pięć szkoleń i jeden warsztat, cennik celowo prosty.",
  },
};

/** MVP współdzieli system wizualny F (motyw, fonty z layoutu głównego). */
export default function PageMvpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-f text-brand-950 flex min-h-full flex-1 flex-col bg-white antialiased">
      {children}
    </div>
  );
}
