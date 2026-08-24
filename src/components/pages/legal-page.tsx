import { AlertTriangle } from "lucide-react";

import { Breadcrumbs } from "@/components/system/breadcrumbs";
import { Container } from "@/components/system/container";
import { Reveal } from "@/components/system/reveal";
import { Section } from "@/components/system/section";
import type { LegalDoc } from "@/content/legal";
import { formatDate } from "@/lib/format";

/** Układ dokumentu prawnego: tytuł, data aktualizacji, spis treści, sekcje. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <header className="border-b border-brand-100 bg-surface-tint">
        <Container className="py-12 sm:py-16">
          <Breadcrumbs items={[{ label: "Strona główna", href: "/" }, { label: doc.title }]} />
          <p className="t-label mt-8 text-brand-600">Dokument</p>
          <h1 className="text-h1 mt-4 text-ink">{doc.title}</h1>
          <p className="text-lead mt-5 max-w-[40rem] text-ink-muted">{doc.lead}</p>
          <p className="mt-5 text-caption text-ink-muted">Ostatnia aktualizacja: {formatDate(doc.updated)}</p>
        </Container>
      </header>

      <Section size="compact">
        <Container>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
            <nav aria-label="Spis treści" className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="t-label text-brand-600">Spis treści</p>
                <ol className="mt-4 flex flex-col gap-2 text-small">
                  {doc.sections.map((section, i) => (
                    <li key={section.title}>
                      <a href={`#sekcja-${i + 1}`} className="focus-ring link-underline rounded-sm text-brand-800 hover:text-brand-600">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="lg:col-span-8">
              <Reveal className="mb-10 flex gap-4 rounded-panel border border-sand-200 bg-sand-50 p-6">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-sand-700" aria-hidden />
                <p className="text-body-sm text-brand-900/85">
                  Dokument w przygotowaniu. Struktura jest gotowa, a punkty oznaczone jako wymagające uzupełnienia
                  powinny zostać zweryfikowane przez obsługę prawną przed publikacją produkcyjną.
                </p>
              </Reveal>
              <div className="flex flex-col gap-10">
                {doc.sections.map((section, i) => (
                  <section key={section.title} id={`sekcja-${i + 1}`} className="scroll-mt-28">
                    <h2 className="font-display text-h4 text-ink">{section.title}</h2>
                    <div className="mt-3 flex flex-col gap-3">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="measure text-body text-brand-900/85">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
