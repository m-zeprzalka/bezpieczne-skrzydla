import type { Metadata } from "next";

import { DsComponents } from "@/components/design-system/ds-components";
import {
  DsColor,
  DsIcons,
  DsIntro,
  DsLayout,
  DsMotion,
  DsShape,
  DsTypography,
} from "@/components/design-system/ds-foundations";
import { DsNav, type DsNavItem } from "@/components/design-system/ds-nav";
import { DsAccessibility, DsContent, DsEngineering, DsPatterns } from "@/components/design-system/ds-patterns";
import { Container } from "@/components/system/container";
import { Pill } from "@/components/system/pill";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Design system",
  description:
    "Zasady, tokeny, komponenty i wzorce witryny Bezpieczne Skrzydła — dokumentacja komunikacji wizualnej.",
  robots: { index: false, follow: false },
};

const sections: DsNavItem[] = [
  { id: "wstep", index: "01", label: "Zasady" },
  { id: "kolor", index: "02", label: "Kolor" },
  { id: "typografia", index: "03", label: "Typografia" },
  { id: "uklad", index: "04", label: "Układ i odstępy" },
  { id: "ksztalt", index: "05", label: "Kształt i elewacja" },
  { id: "ruch", index: "06", label: "Ruch" },
  { id: "ikony", index: "07", label: "Ikony i znaki" },
  { id: "komponenty", index: "08", label: "Komponenty" },
  { id: "wzorce", index: "09", label: "Wzorce stron" },
  { id: "tresc", index: "10", label: "Głos i treść" },
  { id: "dostepnosc", index: "11", label: "Dostępność" },
  { id: "wdrozenie", index: "12", label: "Dla wdrażających" },
];

/**
 * Design system — jedno miejsce, w którym planujemy komunikację wizualną
 * i zasady projektowe. Wszystkie próbki to żywe komponenty z kodu witryny.
 */
export default function DesignSystemPage() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-brand-100 bg-white">
        <div aria-hidden className="bg-aurora absolute inset-x-0 top-0 h-[420px] opacity-40" />
        <Container className="relative py-14 sm:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <Pill variant="solid">Design system</Pill>
            <Pill variant="outline">wersja 1.0 · sierpień 2026</Pill>
            <Pill variant="outline">niepubliczna</Pill>
          </div>
          <h1 className="text-h1 mt-8 max-w-[18ch] text-balance text-ink">
            Jak wyglądają, mówią i poruszają się <span className="text-brand-600">Bezpieczne Skrzydła</span>
          </h1>
          <p className="text-lead mt-6 max-w-[44rem] text-pretty text-ink-muted">
            Dokumentacja komunikacji wizualnej marki {site.name}: zasady, tokeny, typografia, komponenty, wzorce stron,
            reguły redakcyjne i dostępność. Źródło prawdy dla każdej kolejnej strony, prezentacji i materiału.
          </p>
        </Container>
      </header>

      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <aside className="min-w-0 lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <DsNav items={sections} />
            </div>
          </aside>

          <div className="flex min-w-0 flex-col gap-20 lg:col-span-9">
            <DsIntro />
            <DsColor />
            <DsTypography />
            <DsLayout />
            <DsShape />
            <DsMotion />
            <DsIcons />
            <DsComponents />
            <DsPatterns />
            <DsContent />
            <DsAccessibility />
            <DsEngineering />
          </div>
        </div>
      </Container>
    </>
  );
}
