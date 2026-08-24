import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ModelDiagram } from "@/components/pages/model-diagram";
import { Container } from "@/components/system/container";
import { CtaBand } from "@/components/system/cta-band";
import { PageHero } from "@/components/system/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { HEAD_GAP, Section, SectionHead } from "@/components/system/section";
import { approach, model4r } from "@/content/model-4r";
import { trainings } from "@/content/trainings";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Model 4R z Fundamentem",
  description:
    "Rozpoznaj – Reaguj – Raportuj – Rozwiązuj plus warstwa Fundament: autorska mapa działania w trudnej sytuacji w pracy, na której opieram każde szkolenie.",
  path: "/model-4r",
});

export default function ModelPage() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Model 4R", path: "/model-4r" },
          ]),
        ]}
      />

      <PageHero
        crumbs={[{ label: "Strona główna", href: "/" }, { label: "Model 4R" }]}
        label="Autorski Model 4R z Fundamentem"
        title="Od chaosu do spokojnej,"
        accent="świadomej decyzji"
        lead={model4r.description}
        aside={
          <Reveal delay={0.2} className="flex h-full flex-col justify-end">
            <ol className="grid grid-cols-2 gap-3">
              {model4r.steps.map((step, i) => (
                <li key={step.key} className="flex items-center gap-3 rounded-card border border-brand-200/80 bg-white p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-brand-300 font-display text-[0.9rem] text-brand-700">
                    {i + 1}
                  </span>
                  <span className="font-display text-[1.1rem] text-ink">{step.title}</span>
                </li>
              ))}
              <li className="t-label col-span-2 grid h-11 place-items-center rounded-card border border-foundation-200 bg-foundation-50 text-foundation-900">
                Fundament — warstwa prewencyjna
              </li>
            </ol>
          </Reveal>
        }
      />

      <Section id="podejscie" size="compact">
        <Container>
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHead label={approach.label} title="Wiedza, doświadczenie" accent="i ludzka perspektywa" size="h3" as="h2" />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-8">
              {approach.paragraphs.map((paragraph, i) => (
                <Reveal key={paragraph} delay={0.05 * i} as="p" className="max-w-[38rem] text-body text-pretty text-ink-muted">
                  {paragraph}
                </Reveal>
              ))}
              <Reveal delay={0.15} as="p" className="max-w-[38rem] border-l-2 border-foundation-300 pl-5 text-small text-pretty text-brand-900/90">
                {approach.foundationIntro}
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="schemat" tone="tint">
        <Container>
          <SectionHead label="Schemat" title="Cztery etapy" accent="nad jedną podstawą" align="center" />
          <ModelDiagram className={HEAD_GAP} />
        </Container>
      </Section>

      <Section id="w-szkoleniach">
        <Container>
          <SectionHead label="Model w praktyce" title="Każde szkolenie prowadzi" accent="przez te same cztery etapy" align="center" />
          <RevealGroup as="ul" className={`${HEAD_GAP} mx-auto flex max-w-[52rem] flex-col divide-y divide-brand-200/80 border-y border-brand-200/80`}>
            {trainings.map((training) => (
              <RevealItem as="li" key={training.slug}>
                <Link
                  href={`/szkolenia/${training.slug}`}
                  className="focus-ring group flex items-center gap-6 rounded-sm py-6 transition-colors hover:text-brand-700"
                >
                  <span aria-hidden className="t-outline shrink-0 text-[1.4rem] leading-none select-none">
                    {training.number}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="font-display text-[1.1rem] leading-[1.3] tracking-tight text-ink transition-colors group-hover:text-brand-700 sm:text-[1.2rem]">
                      {training.title}
                    </span>
                    <span className="mt-1 text-caption text-ink-muted">{training.audience}</span>
                  </span>
                  <ArrowRight aria-hidden className="size-5 shrink-0 text-brand-300 transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-brand-600" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CtaBand
        title="Chcesz wdrożyć Model 4R w swojej organizacji?"
        text="Napisz, w jakiej sytuacji jest firma i kogo chcesz przeszkolić. Zaproponuję zakres i formę — od pojedynczego kursu po pakiet „Bezpieczna Firma”."
      />
    </>
  );
}
