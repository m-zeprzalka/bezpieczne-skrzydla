import { ArrowDown, ArrowRight, ArrowUp, RefreshCw } from "lucide-react";

import {
  ContainerMvp,
  SectionHeadMvp,
  SectionMvp,
  T_BODY_MVP,
  T_LABEL_MVP,
  T_LEAD_MVP,
} from "@/components/page-mvp/frame-mvp";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { model4r } from "@/lib/content";
import { approachF } from "@/lib/content-f";
import { modelMvp } from "@/lib/content-mvp";

/**
 * Model 4R z Fundamentem — drugi blok strony, zgodnie ze schematem klientki.
 *
 * Cztery etapy w prezentacji z wariantu F (numer w kółku, tytuł, obietnica,
 * opis), na szerokości — jak na roboczym schemacie. Pod nimi FUNDAMENT:
 * wizualnie odrębna, zielona, szeroka podstawa pod całym modelem. Nie jest
 * piątym etapem — to warstwa prewencyjna, która trwa cały czas. Obieg
 * domykają dwie strzałki: „wnioski i dane” w dół (z „Rozwiązuj”) oraz
 * „gotowość” w górę (do „Rozpoznaj”).
 */
export function ModelMvp() {
  const { foundation } = modelMvp;

  return (
    <SectionMvp id="model-4r" tone="tint" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]"
      />

      <ContainerMvp>
        {/* — wprowadzenie: akapity podejścia + nowy akapit o Fundamencie — */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeadMvp
              index={modelMvp.index}
              label={modelMvp.label}
              title="Autorski"
              accent="Model 4R"
              after="z Fundamentem"
            />

            {/* sygnatura: cztery R i fundament pod nimi */}
            <Reveal delay={0.2} className="mt-9 inline-flex flex-col gap-2.5">
              <span className="flex items-center gap-2.5">
                {model4r.steps.map((step, i) => (
                  <span key={step.key} className="flex items-center gap-2.5">
                    <span className="border-brand-300 text-brand-700 font-display grid size-10 place-items-center rounded-full border bg-white text-[1rem]">
                      R
                    </span>
                    {i < model4r.steps.length - 1 ? (
                      <span aria-hidden className="bg-brand-300 h-px w-4" />
                    ) : null}
                  </span>
                ))}
              </span>
              <span
                aria-hidden
                className="border-emerald-300 bg-emerald-50 text-emerald-800 grid h-7 place-items-center rounded-lg border text-[0.66rem] font-semibold tracking-[0.18em] uppercase"
              >
                Fundament
              </span>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5 md:col-span-7 md:pt-20 lg:pl-14">
            {approachF.paragraphs.map((paragraph, i) => (
              <Reveal
                key={paragraph}
                delay={0.1 + i * 0.05}
                className={`${T_LEAD_MVP} text-muted-foreground max-w-[36rem] text-pretty`}
              >
                {paragraph}
              </Reveal>
            ))}
            <Reveal
              delay={0.2}
              className="border-emerald-400 text-brand-800 max-w-[36rem] border-l-2 pl-5 text-[0.9375rem] leading-[1.75] text-pretty sm:text-[1rem]"
            >
              {modelMvp.foundationIntro}
            </Reveal>
          </div>
        </div>

        {/* — schemat: cztery etapy nad szeroką podstawą — */}
        <div className="mt-16 lg:mt-20">
          <Reveal className={`${T_LABEL_MVP} text-brand-600`}>
            {modelMvp.stepsCaption}
          </Reveal>

          <RevealGroup
            as="ol"
            className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-7"
          >
            {model4r.steps.map((step, i) => (
              <RevealItem as="li" key={step.key} className="relative flex">
                {i > 0 ? (
                  <>
                    <ArrowRight
                      aria-hidden
                      className="text-brand-400 absolute top-9 -left-6 hidden size-5 lg:block"
                    />
                    <ArrowDown
                      aria-hidden
                      className="text-brand-400 absolute -top-5 left-1/2 size-4 -translate-x-1/2 lg:hidden"
                    />
                  </>
                ) : null}

                <article className="border-brand-200/80 flex w-full flex-col rounded-2xl border bg-white p-6 transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-[0_20px_48px_-24px_rgba(11,37,64,0.3)] lg:p-7">
                  <span
                    aria-hidden
                    className="border-brand-300 text-brand-700 font-display grid size-11 place-items-center rounded-full border bg-white text-[0.95rem] font-medium"
                  >
                    {i + 1}
                  </span>

                  <h3 className="font-display text-brand-950 mt-5 text-[1.45rem] leading-none tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-brand-700 mt-2.5 text-[0.9rem] leading-snug font-medium">
                    {step.claim}
                  </p>

                  <p
                    className={`${T_BODY_MVP} text-muted-foreground mt-3 text-pretty`}
                  >
                    {step.description}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* — łączniki obiegu: gotowość ↑ pod „Rozpoznaj”, wnioski i dane ↓ pod „Rozwiązuj” — */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-7">
            <Reveal
              delay={0.05}
              className="flex h-16 items-center justify-center gap-3"
            >
              <span aria-hidden className="flex h-full flex-col items-center">
                <ArrowUp className="text-emerald-600 -mb-1 size-4" />
                <span className="bg-emerald-500 w-px flex-1" />
              </span>
              <span className="text-emerald-800 text-[0.8rem] font-semibold">
                {foundation.arrowUp.label}
                <span className="sr-only">
                  {" "}
                  — z Fundamentu do etapu „{foundation.arrowUp.to}”
                </span>
              </span>
            </Reveal>

            <Reveal
              delay={0.1}
              className="col-start-2 flex h-16 items-center justify-center gap-3 lg:col-start-4"
            >
              <span className="text-brand-700 text-[0.8rem] font-semibold">
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
            <div className="border-emerald-300 bg-emerald-50 relative overflow-hidden rounded-[1.25rem] border p-7 sm:p-9">
              <span
                aria-hidden
                className="bg-emerald-200/50 absolute -top-20 -right-20 size-64 rounded-full blur-3xl"
              />

              <div className="relative flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-[24rem]">
                  <p
                    className={`${T_LABEL_MVP} text-emerald-700 flex items-center gap-2`}
                  >
                    <RefreshCw className="size-3.5" aria-hidden />
                    {foundation.formerly}
                  </p>
                  <h3 className="font-display text-emerald-950 mt-4 text-[1.9rem] leading-none tracking-tight">
                    {foundation.name}
                  </h3>
                  <p className="text-emerald-900 mt-3 text-[0.9375rem] leading-[1.6] font-medium">
                    {foundation.claim}
                  </p>
                </div>

                <ul className="flex max-w-[36rem] flex-wrap content-start gap-2.5">
                  {foundation.items.map((item) => (
                    <li
                      key={item}
                      className="border-emerald-300 text-emerald-900 rounded-full border bg-white px-4 py-2 text-[0.85rem] leading-snug font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="border-emerald-300/80 text-emerald-900/80 relative mt-7 border-t pt-5 text-[0.875rem] leading-[1.7] text-pretty">
                {foundation.note}
              </p>
            </div>
          </Reveal>
        </div>
      </ContainerMvp>
    </SectionMvp>
  );
}
