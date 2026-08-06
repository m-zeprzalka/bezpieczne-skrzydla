import type { Metadata } from "next";

import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Wersja MVP B — przestronna odsłona strony",
  description:
    "Druga wersja MVP Bezpiecznych Skrzydeł: te same treści i wytyczne klientki co w MVP (Model 4R z Fundamentem, pięć szkoleń i warsztat, nowy cennik), skomponowane z dużą ilością światła — linie zamiast ramek, szersze odstępy, jedna szpalta czytelnicza.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wersja MVP B — ${site.name}`,
    description:
      "G + C + F według maila klientki w przestronnej, edytorialnej kompozycji: więcej white space, mniej pudełek.",
  },
};

/** MVP B współdzieli system wizualny F (motyw, fonty z layoutu głównego). */
export default function PageMvpBLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-f text-brand-950 flex min-h-full flex-1 flex-col bg-white antialiased">
      {children}
    </div>
  );
}
