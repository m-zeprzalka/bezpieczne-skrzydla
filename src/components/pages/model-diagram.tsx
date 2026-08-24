import { ArrowDown, ArrowRight, ArrowUp, Check, RefreshCw } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { model4r } from "@/content/model-4r";
import { cn } from "@/lib/utils";

/**
 * Schemat Modelu 4R z Fundamentem — jeden komponent dla strony głównej
 * (`compact`) i strony /model-4r (pełne listy punktów).
 *
 * Cztery etapy nad szeroką podstawą. Fundament nie jest piątym etapem:
 * ma inny kolor, inną wysokość i leży POD etapami. Obieg domykają dwie
 * strzałki: „gotowość” ↑ do Rozpoznaj, „wnioski i dane” ↓ z Rozwiązuj.
 */
export function ModelDiagram({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { foundation, steps } = model4r;

  return (
    <div className={cn("", className)}>
      <Reveal as="p" className="t-label text-brand-600">
        {model4r.stepsCaption}
      </Reveal>

      <RevealGroup as="ol" className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, i) => (
          <RevealItem as="li" key={step.key} className="relative flex">
            {i > 0 ? (
              <>
                <ArrowRight
                  aria-hidden
                  className="absolute top-10 -left-[1.4rem] hidden size-5 text-brand-400 lg:block"
                />
                <ArrowDown
                  aria-hidden
                  className="absolute -top-4.5 left-1/2 size-4 -translate-x-1/2 text-brand-400 sm:hidden"
                />
              </>
            ) : null}

            <article className="card-lift relative flex w-full flex-col overflow-hidden rounded-card border border-brand-200/80 bg-white p-6 lg:p-7">
              <span
                aria-hidden
                className="t-outline pointer-events-none absolute top-3 right-4 text-[5.5rem] leading-none opacity-70 select-none"
              >
                R
              </span>

              <span
                aria-hidden
                className="relative grid size-11 place-items-center rounded-full border border-brand-300 bg-white font-display text-[0.95rem] text-brand-700"
              >
                {i + 1}
              </span>

              <h3 className="relative mt-5 font-display text-[1.5rem] leading-none tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="relative mt-2.5 text-[0.9rem] leading-snug font-medium text-brand-700">{step.claim}</p>
              <p className="relative mt-3 text-body-sm text-pretty text-ink-muted">{step.description}</p>

              {!compact ? (
                <ul className="relative mt-5 flex flex-col gap-2 border-t border-brand-100 pt-5">
                  {step.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-small text-brand-900/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* — łączniki obiegu — */}
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
        <Reveal delay={0.05} className="flex h-16 items-center justify-center gap-3">
          <span aria-hidden className="flex h-full flex-col items-center">
            <ArrowUp className="-mb-1 size-4 text-foundation-600" />
            <span className="w-px flex-1 bg-foundation-300" />
          </span>
          <span className="text-[0.8rem] font-semibold text-foundation-900">
            {foundation.arrowUp.label}
            <span className="sr-only"> — z Fundamentu do etapu „{foundation.arrowUp.to}”</span>
          </span>
        </Reveal>

        <Reveal delay={0.1} className="col-start-2 flex h-16 items-center justify-center gap-3 lg:col-start-4">
          <span className="text-[0.8rem] font-semibold text-brand-700">
            {foundation.arrowDown.label}
            <span className="sr-only"> — z etapu „{foundation.arrowDown.from}” do Fundamentu</span>
          </span>
          <span aria-hidden className="flex h-full flex-col items-center">
            <span className="flex-1 border-l border-dashed border-brand-500" />
            <ArrowDown className="-mt-1 size-4 text-brand-600" />
          </span>
        </Reveal>
      </div>

      {/* — FUNDAMENT — */}
      <Reveal delay={0.12}>
        <div className="relative overflow-hidden rounded-panel border border-foundation-200 bg-foundation-50 p-7 sm:p-9">
          <span
            aria-hidden
            className="absolute -top-24 -right-24 size-72 rounded-full bg-foundation-200/60 blur-3xl"
          />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[24rem]">
              <p className="t-label flex items-center gap-2 text-foundation-700">
                <RefreshCw className="size-3.5" aria-hidden />
                {foundation.formerly}
              </p>
              <h3 className="mt-4 font-display text-[2rem] leading-none tracking-tight text-foundation-900">
                {foundation.name}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] font-medium text-foundation-900/90">{foundation.claim}</p>
            </div>

            <ul className="flex max-w-[36rem] flex-wrap content-start gap-2.5">
              {foundation.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-foundation-200 bg-white px-4 py-2 text-[0.85rem] leading-snug font-medium text-foundation-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="relative mt-7 border-t border-foundation-200 pt-5 text-small text-pretty text-foundation-900/80">
            {foundation.note}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
