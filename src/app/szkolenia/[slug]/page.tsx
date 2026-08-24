import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ListChecks, Package, Quote } from "lucide-react";

import { CourseFormat } from "@/components/pages/course-format";
import { TrainingCard } from "@/components/pages/training-card";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { PageHero } from "@/components/system/page-hero";
import { Pill } from "@/components/system/pill";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { getTraining, trainings } from "@/content/trainings";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return trainings.map((training) => ({ slug: training.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const training = getTraining(slug);
  if (!training) return {};
  return pageMetadata({
    title: training.title,
    description: `${training.audience}. ${training.summary}`,
    path: `/szkolenia/${training.slug}`,
  });
}

/** Parametr formularza wyceny dopasowany do szkolenia. */
function quoteTopic(slug: string) {
  return slug === "msp-bez-chaosu" ? "msp-bez-chaosu" : "kurs-online";
}

export default async function TrainingPage({ params }: Props) {
  const { slug } = await params;
  const training = getTraining(slug);
  if (!training) notFound();

  const [lead, ...rest] = training.paragraphs;
  const others = trainings.filter((t) => t.slug !== training.slug);

  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Szkolenia", path: "/szkolenia" },
            { name: training.shortTitle, path: `/szkolenia/${training.slug}` },
          ]),
          {
            "@type": "Course",
            name: training.title,
            description: training.summary,
            provider: { "@type": "Organization", name: site.name, url: site.url },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: "PT2H",
            },
          },
        ]}
      />

      <PageHero
        crumbs={[
          { label: "Strona główna", href: "/" },
          { label: "Szkolenia", href: "/szkolenia" },
          { label: training.shortTitle },
        ]}
        label={`Szkolenie ${training.number}`}
        title={training.title}
        lead={lead}
        aside={
          <Reveal delay={0.2} className="lg:pl-6">
            <div className="rounded-panel border border-brand-200/80 bg-white p-6 shadow-lift sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="t-label text-brand-600">Kurs online</span>
                <span className="font-display text-[1.6rem] leading-none text-ink">{training.priceFrom}</span>
              </div>
              <CourseFormat variant="list" limit={4} className="mt-6" />
              <Button asChild variant="brand" size="xl" className="mt-7 w-full">
                <Link href={`/kontakt?temat=${quoteTopic(training.slug)}`}>
                  Poproś o wycenę tego szkolenia
                  <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                </Link>
              </Button>
              <p className="mt-4 text-center text-caption text-ink-muted">
                Stacjonarnie na życzenie — grupa 10–15 osób, w całej Polsce.
              </p>
            </div>
          </Reveal>
        }
      >
        <Reveal delay={0.2} className="mt-8">
          <Pill variant="soft">{training.audience}</Pill>
        </Reveal>
      </PageHero>

      <Section id="program" size="compact">
        <Container>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-col gap-6">
                {rest.map((paragraph) => (
                  <Reveal key={paragraph} as="p" className="measure text-[1.0625rem] leading-[1.75] text-brand-900/85">
                    {paragraph}
                  </Reveal>
                ))}
              </div>

              {/* — pokazuję — */}
              <Reveal className="mt-10 rounded-panel border border-brand-200/80 bg-brand-50/70 p-6 sm:p-8">
                <h2 className="t-label flex items-center gap-2.5 text-brand-600">
                  <ListChecks className="size-4" aria-hidden />
                  {training.showsLabel}
                </h2>
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                  {training.shows.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-[1.55] text-brand-900/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* — mini-mapa 4R — */}
              {training.extra4R ? (
                <Reveal className="mt-8">
                  <p className="text-[0.9375rem] font-medium text-brand-900">{training.extra4R.intro}</p>
                  <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {training.extra4R.items.map((item, i) => (
                      <li key={item.key} className="flex items-start gap-3 rounded-card border border-brand-200/80 bg-white px-4 py-3.5">
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-700 font-display text-[0.72rem] text-white">
                          {i + 1}
                        </span>
                        <p className="text-small text-ink-muted">
                          <strong className="font-semibold text-brand-900">{item.key}</strong> — {item.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              ) : null}

              {/* — zamknięcie — */}
              {training.closing?.map((paragraph) => (
                <Reveal key={paragraph} className="relative mt-8 rounded-card border border-brand-200 bg-white p-6 pl-14 sm:p-7 sm:pl-16">
                  <Quote aria-hidden className="absolute top-6 left-5 size-6 text-brand-300 sm:top-7 sm:left-6" />
                  <p className="font-display text-[1.1rem] leading-[1.6] text-brand-900 sm:text-[1.2rem]">{paragraph}</p>
                </Reveal>
              ))}

              {/* — materiały — */}
              {training.materials ? (
                <Reveal className="mt-10">
                  <h2 className="t-label flex items-center gap-2.5 text-brand-600">
                    <Package className="size-4" aria-hidden />
                    Materiały dodatkowe
                  </h2>
                  <p className="mt-2 text-small text-ink-muted">{training.materialsLabel}:</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {training.materials.map((material) => (
                      <li key={material}>
                        <Pill variant="outline">{material}</Pill>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ) : null}
            </div>

            <aside className="lg:col-span-4">
              <Reveal delay={0.1} className="lg:sticky lg:top-28">
                <div className="rounded-panel bg-surface-deep p-6 text-brand-100 sm:p-7">
                  <p className="t-label text-brand-300">Format</p>
                  <ul className="mt-5 flex flex-col gap-3 text-[0.9375rem]">
                    {[
                      "nagrane lekcje wideo w modułach",
                      "test 10–20 pytań",
                      "imienny certyfikat",
                      "dostęp 60 dni",
                      "materiały do pobrania",
                    ].map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-white/10 pt-5 text-caption text-brand-200/80">
                    Nie prowadzę zajęć na żywo przez internet. Wersja stacjonarna — na życzenie klienta.
                  </p>
                </div>
                <div className="mt-5 rounded-panel border border-brand-200/80 bg-white p-6">
                  <p className="t-label text-brand-600">Pakiet dla firmy</p>
                  <p className="mt-3 text-small text-ink-muted">
                    Dostępy dla zespołu, certyfikaty, raport z realizacji i imienna lista przeszkolonych — od 2 390 zł.
                  </p>
                  <Link href="/cennik#pakiet-firma" className="focus-ring link-underline mt-4 inline-flex items-center gap-2 rounded-sm text-[0.875rem] font-semibold text-brand-800 hover:text-brand-600">
                    Zobacz w cenniku
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      <Section id="pozostale" tone="tint">
        <Container>
          <SectionHead label="Pozostałe szkolenia" title="Cztery programy dla" accent="innych ról" align="center" />
          <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <RevealItem key={other.slug} className="flex">
                <TrainingCard training={other} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
