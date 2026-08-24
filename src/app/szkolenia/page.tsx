import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CourseFormat } from "@/components/pages/course-format";
import { FaqList } from "@/components/pages/faq-list";
import { TrainingCard, WorkshopCard } from "@/components/pages/training-card";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { PageHero } from "@/components/system/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { faqFor } from "@/content/faq";
import { audiences } from "@/content/home";
import { trainings, trainingsIntro } from "@/content/trainings";
import { breadcrumbJsonLd, faqJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Szkolenia",
  description:
    "Pięć szkoleń antymobbingowych — dla pracowników, liderów i HR, pracodawców MŚP, osób przyjmujących zgłoszenia i komisji. Nagrane kursy online z testem i certyfikatem, stacjonarnie na życzenie.",
  path: "/szkolenia",
});

export default function TrainingsPage() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Szkolenia", path: "/szkolenia" },
          ]),
          faqJsonLd(faqFor("trainings")),
        ]}
      />

      <PageHero
        crumbs={[{ label: "Strona główna", href: "/" }, { label: "Szkolenia" }]}
        label={trainingsIntro.label}
        title="Pięć szkoleń, każde dla innej"
        accent="roli w organizacji"
        lead={trainingsIntro.lead}
      >
        <Reveal delay={0.2} className="mt-10">
          <p className="t-label text-brand-600">Zacznij od swojej roli</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {audiences.map((audience) => (
              <li key={audience.id}>
                <Link
                  href={audience.href}
                  className="focus-ring group inline-flex min-h-10 items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-[0.875rem] font-medium text-brand-900 transition-[border-color,background-color,color] duration-300 hover:border-brand-500 hover:bg-white hover:text-brand-700"
                >
                  {audience.title}
                  <ArrowRight aria-hidden className="size-3.5 text-brand-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </PageHero>

      <Section id="lista" tone="tint" size="compact">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainings.map((training) => (
              <RevealItem key={training.slug} className="flex">
                <TrainingCard training={training} />
              </RevealItem>
            ))}
            <RevealItem className="flex">
              <WorkshopCard />
            </RevealItem>
          </RevealGroup>
        </Container>
      </Section>

      <Section id="dla-kogo">
        <Container>
          <SectionHead label="Dla kogo" title="Innych informacji potrzebuje pracownik," accent="innych pracodawca" lead="Zakres, język i materiały dopasowuję do grupy uczestników oraz celu szkolenia. Wybierz rolę — poprowadzę Cię do programu napisanego dla niej." />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => {
              const training = trainings.find((t) => t.number === audience.training);
              return (
                <RevealItem key={audience.id} className="flex">
                  <Link
                    href={audience.href}
                    className="card-lift focus-ring group flex w-full flex-col rounded-card border border-brand-200/80 bg-white p-6"
                  >
                    <span className="t-label text-brand-600">Szkolenie {audience.training}</span>
                    <span className="mt-3 font-display text-[1.3rem] leading-[1.2] tracking-tight text-ink transition-colors group-hover:text-brand-700">
                      {audience.title}
                    </span>
                    <span className="mt-3 flex-1 text-body-sm text-pretty text-ink-muted">{audience.description}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-brand-800">
                      <span className="link-underline">{training?.shortTitle}</span>
                      <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </Section>

      <Section id="format" tone="tint">
        <Container>
          <SectionHead label="Jak wygląda kurs" title="Nagrany kurs online —" accent="bez zajęć na żywo przez internet" lead="Moduły z krótkimi lekcjami wideo, test i imienny certyfikat. Jedyną formą na żywo jest szkolenie stacjonarne, na życzenie klienta." align="center" />
          <CourseFormat className="mt-14" />
          <div className="mx-auto mt-16 max-w-[46rem]">
            <Reveal as="p" className="t-label mb-6 text-center text-brand-600">
              Pytania o szkolenia
            </Reveal>
            <FaqList items={faqFor("trainings")} />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
