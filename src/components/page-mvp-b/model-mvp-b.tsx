import { ArrowDown, ArrowRight, ArrowUp, RefreshCw } from "lucide-react";

import {
  ContainerMvpB,
  SectionHeadMvpB,
  SectionMvpB,
  T_BODY_MVPB,
  T_LABEL_MVPB,
  T_LEAD_MVPB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { model4r } from "@/lib/content";
import { approachF } from "@/lib/content-f";
import { modelMvp } from "@/lib/content-mvp";

/**
 * Model 4R z Fundamentem — drugi blok strony, zgodnie ze schematem klientki.
 *
 * Cztery etapy w prezentacji z wariantu F (numer w kółku, tytuł, obietnica,
 * opis) ułożone na szerokości jak na roboczym schemacie. Pod nimi FUNDAMENT:
 * wizualnie odrębna, zielona, szeroka podstawa pod całym modelem — nie piąty
 * etap, lecz stale obecna warstwa prewencyjna. Obieg domykają strzałki
 * „wnioski i dane” (w dół z „Rozwiązuj”) i „gotowość” (w górę do „Rozpoznaj”).
 *
 * Wersja B: wprowadzenie w jednej, wyśrodkowanej szpalcie czytelniczej,
 * szersze odstępy diagramu i spokojniejsze karty bez efektów uniesienia.
 */
export function ModelMvpB() {
  const { foundation } = modelMvp;

  return (
    <SectionMvpB id="model-4r" tone="tint" className="overflow-hidden">
      <ContainerMvpB>
        {/* — wprowadzenie: nagłówek i akapity podejścia w jednej szpalcie — */}
        <SectionHeadMvpB
          index={modelMvp.index}
          label={modelMvp.label}
          title="Autorski"
          accent="Model 4R"
          after="z Fundamentem"
          align="center"
        />

        <div className="mx-auto mt-12 flex max-w-[44rem] flex-col gap-7">
          {approachF.paragraphs.map((paragraph, i) => (
            <Reveal
              key={paragraph}
              delay={0.1 + i * 0.05}
              className={`${T_LEAD_MVPB} text-muted-foreground text-pretty`}
            >
              {paragraph}
            </Reveal>
          ))}

          {/* nowy akapit o Fundamencie — w barwie warstwy, którą zapowiada */}
          <Reveal
            delay={0.2}
            className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-7 sm:p-8"
          >
            <p className="flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.24em] text-emerald-700 uppercase">
              <RefreshCw className="size-3.5" aria-hidden />
              Nowa warstwa modelu
            </p>
            <p className="text-brand-800 mt-4 text-[0.9375rem] leading-[1.8] text-pretty sm:text-[1rem]">
              {modelMvp.foundationIntro}
            </p>
          </Reveal>
        </div>

        {/* — schemat: cztery etapy nad szeroką podstawą — */}
        <div className="mt-24 lg:mt-28">
          <Reveal className={`${T_LABEL_MVPB} text-brand-600 text-center`}>
            {modelMvp.stepsCaption}
          </Reveal>

          <RevealGroup
            as="ol"
            className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-4 lg:gap-8"
          >
            {model4r.steps.map((step, i) => (
              <RevealItem as="li" key={step.key} className="relative flex">
                {i > 0 ? (
                  <>
                    <ArrowRight
                      aria-hidden
                      className="text-brand-400 absolute top-10 -left-6 hidden size-5 lg:block"
                    />
                    <ArrowDown
                      aria-hidden
                      className="text-brand-400 absolute -top-5.5 left-1/2 size-4 -translate-x-1/2 lg:hidden"
                    />
                  </>
                ) : null}

                <article className="border-brand-200/70 flex w-full flex-col rounded-[1.5rem] border bg-white p-8">
                  <span
                    aria-hidden
                    className="border-brand-300 text-brand-700 font-display grid size-11 place-items-center rounded-full border bg-white text-[0.95rem] font-medium"
                  >
                    {i + 1}
                  </span>

                  <h3 className="font-display text-brand-950 mt-6 text-[1.45rem] leading-none tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-brand-700 mt-3 text-[0.9rem] leading-snug font-medium">
                    {step.claim}
                  </p>

                  <p
                    className={`${T_BODY_MVPB} text-muted-foreground mt-4 text-pretty`}
                  >
                    {step.description}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* — łączniki obiegu: gotowość ↑ pod „Rozpoznaj”, wnioski i dane ↓ pod „Rozwiązuj” — */}
          <div className="grid grid-cols-2 gap-7 lg:grid-cols-4 lg:gap-8">
            <Reveal
              delay={0.05}
              className="flex h-20 items-center justify-center gap-3"
            >
              <span aria-hidden className="flex h-full flex-col items-center">
                <ArrowUp className="text-emerald-600 -mb-1 size-4" />
                <span className="bg-emerald-500 w-px flex-1" />
              </span>
              <span className="text-[0.8125rem] font-semibold text-emerald-800">
                {foundation.arrowUp.label}
                <span className="sr-only">
                  {" "}
                  — z Fundamentu do etapu „{foundation.arrowUp.to}”
                </span>
              </span>
            </Reveal>

            <Reveal
              delay={0.1}
              className="col-start-2 flex h-20 items-center justify-center gap-3 lg:col-start-4"
            >
              <span className="text-brand-700 text-[0.8125rem] font-semibold">
                {foundation.arrowDown.label}
                <span className="sr-only">
                  {" "}
                  — z etapu „{foundation.arrowDown.from}” do Fundamentu
                </span>
              </span>
              <span aria-hidden className="flex h-full flex-col items-center">
                <span className="border-brand-500 flex-1 border-l border-dashed" />
                <ArrowDown className="text-brand-600 -mt-1 size-4" />
              </span>
            </Reveal>
          </div>

          {/* — FUNDAMENT: szeroka, odrębna kolorystycznie podstawa — */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-emerald-300 bg-emerald-50 p-8 sm:p-11 lg:p-12">
              <span
                aria-hidden
                className="absolute -top-24 -right-24 size-72 rounded-full bg-emerald-200/50 blur-3xl"
              />

              <div className="relative flex flex-col gap-9 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
                <div className="max-w-[24rem]">
                  <p
                    className={`${T_LABEL_MVPB} flex items-center gap-2 text-emerald-700`}
                  >
                    <RefreshCw className="size-3.5" aria-hidden />
                    {foundation.formerly}
                  </p>
                  <h3 className="font-display mt-5 text-[2rem] leading-none tracking-tight text-emerald-950">
                    {foundation.name}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-[1.65] font-medium text-emerald-900">
                    {foundation.claim}
                  </p>
                </div>

                <ul className="flex max-w-[36rem] flex-wrap content-start gap-3">
                  {foundation.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-emerald-300 bg-white px-4.5 py-2.5 text-[0.85rem] leading-snug font-medium text-emerald-900"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="relative mt-9 border-t border-emerald-300/80 pt-6 text-[0.875rem] leading-[1.8] text-pretty text-emerald-900/80">
                {foundation.note}
              </p>
            </div>
          </Reveal>
        </div>
      </ContainerMvpB>
    </SectionMvpB>
  );
}
