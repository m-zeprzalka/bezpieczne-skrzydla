import { ArrowDown, ArrowUp, Check, RefreshCw } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { model4r } from "@/content/model-4r";
import { cn } from "@/lib/utils";

/**
 * Schemat Modelu 4R z Fundamentem — jeden komponent dla strony głównej
 * (`compact`) i strony /model-4r (pełne listy punktów).
 *
 * Cztery etapy jako proces: numerowane węzły na jednej linii, pod nimi karty.
 * Fundament NIE jest piątym etapem: to granatowa podstawa pod całym rzędem,
 * o innej wysokości i tonie. Obieg domykają dwie strzałki: „gotowość” ↑ do
 * Rozpoznaj i „wnioski i dane” ↓ z Rozwiązuj. Cała paleta w błękitach.
 */
export function ModelDiagram({ compact = false, className }: { compact?: boolean; className?: string }) {
  const { foundation, steps } = model4r;

  return (
    <div className={cn("", className)}>
      <Reveal as="p" className="t-label text-center text-brand-600 sm:text-left">
        {model4r.stepsCaption}
      </Reveal>

      <div className="relative mt-8">
        {/* linia procesu — łączy węzły czterech etapów (od lg) */}
        <div aria-hidden className="absolute top-5 right-[12.5%] left-[12.5%] hidden h-px bg-brand-300 lg:block" />

        <RevealGroup as="ol" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <RevealItem as="li" key={step.key} className="flex flex-col">
              <span
                aria-hidden
                className="relative z-10 mx-auto grid size-10 place-items-center rounded-full border border-brand-300 bg-white font-display text-[0.9rem] text-brand-700"
              >
                {i + 1}
              </span>

              <article className="mt-5 flex flex-1 flex-col rounded-card border border-brand-200/80 bg-white p-7 lg:p-8">
                <h3 className="font-display text-[1.35rem] leading-none tracking-tight text-ink">{step.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-snug font-medium text-brand-700">{step.claim}</p>
                <p className="mt-4 text-small text-pretty text-ink-muted">{step.description}</p>

                {!compact ? (
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-brand-100 pt-6">
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
      </div>

      {/* — łączniki obiegu — */}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        <Reveal delay={0.05} className="flex h-16 items-center justify-center gap-3">
          <span aria-hidden className="flex h-full flex-col items-center">
            <ArrowUp className="-mb-1 size-4 text-brand-600" />
            <span className="flex-1 border-l border-dashed border-brand-400" />
          </span>
          <span className="text-[0.8rem] font-semibold text-brand-800">
            {foundation.arrowUp.label}
            <span className="sr-only"> — z Fundamentu do etapu „{foundation.arrowUp.to}”</span>
          </span>
        </Reveal>

        <Reveal delay={0.1} className="col-start-2 flex h-16 items-center justify-center gap-3 lg:col-start-4">
          <span className="text-[0.8rem] font-semibold text-brand-800">
            {foundation.arrowDown.label}
            <span className="sr-only"> — z etapu „{foundation.arrowDown.from}” do Fundamentu</span>
          </span>
          <span aria-hidden className="flex h-full flex-col items-center">
            <span className="flex-1 border-l border-dashed border-brand-400" />
            <ArrowDown className="-mt-1 size-4 text-brand-600" />
          </span>
        </Reveal>
      </div>

      {/* — FUNDAMENT: granatowa podstawa pod całym rzędem — */}
      <Reveal delay={0.12}>
        <div className="relative overflow-hidden rounded-panel bg-brand-900 p-8 text-brand-100 sm:p-10">
          <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-70" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-[22rem]">
              <p className="t-label flex items-center gap-2 text-brand-300">
                <RefreshCw className="size-3.5" aria-hidden />
                {foundation.formerly}
              </p>
              <h3 className="mt-5 font-display text-[1.75rem] leading-none tracking-tight text-white">{foundation.name}</h3>
              <p className="mt-4 text-[0.9375rem] leading-[1.6] font-medium text-brand-100">{foundation.claim}</p>
            </div>

            <ul className="flex max-w-[34rem] flex-wrap content-start gap-2.5">
              {foundation.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.85rem] leading-snug font-medium text-brand-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="relative mt-8 border-t border-white/10 pt-6 text-small text-pretty text-brand-200/80">{foundation.note}</p>
        </div>
      </Reveal>
    </div>
  );
}
