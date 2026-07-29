import { Compass, FileText, HeartHandshake, ShieldCheck } from "lucide-react";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_LEAD_F,
} from "@/components/page-f/frame-f";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { model4r } from "@/lib/content";
import { approachF } from "@/lib/content-f";

const stepIcons = [Compass, HeartHandshake, FileText, ShieldCheck] as const;

/**
 * Model 4R jako grafika: cztery karty z ikonami w siatce 2×2, znak wodny
 * numeru i lista punktów. Akapity podejścia klientki — bez zmian — jako intro.
 */
export function ModelG() {
  return (
    <SectionF id="model-4r" tone="tint" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]"
      />

      <ContainerF>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeadF
              index={approachF.index}
              label={approachF.label}
              title="Autorski"
              accent="Model 4R"
            />

            <div className="mt-8 flex max-w-[32rem] flex-col gap-5">
              {approachF.paragraphs.map((paragraph, i) => (
                <Reveal
                  key={paragraph}
                  delay={0.1 + i * 0.05}
                  className={`${T_LEAD_F} text-muted-foreground text-pretty`}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

            {/* pasek 4R — cztery litery jako sygnatura */}
            <Reveal delay={0.2} className="mt-9 flex items-center gap-2.5">
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
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <RevealGroup
              as="ol"
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {model4r.steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <RevealItem
                    as="li"
                    key={step.key}
                    className="group border-brand-200/80 relative flex flex-col overflow-hidden rounded-2xl border bg-white p-7 transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-[0_20px_48px_-24px_rgba(11,37,64,0.3)]"
                  >
                    <span
                      aria-hidden
                      className="text-outline-f font-display absolute -top-3 -right-1 text-[4.6rem] leading-none font-medium select-none"
                    >
                      {step.index}
                    </span>

                    <span className="bg-brand-700 grid size-12 place-items-center rounded-xl text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>

                    <h3 className="font-display text-brand-950 mt-6 text-[1.45rem] leading-none tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-brand-700 mt-3 text-[0.9rem] leading-snug font-medium">
                      {step.claim}
                    </p>

                    <ul className="border-brand-100 mt-5 flex flex-col gap-2 border-t pt-4">
                      {step.points.map((point) => (
                        <li
                          key={point}
                          className="text-muted-foreground flex gap-2.5 text-[0.82rem] leading-snug"
                        >
                          <span
                            aria-hidden
                            className="bg-brand-400 mt-[0.5rem] size-1.5 shrink-0 rounded-full"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </ContainerF>
    </SectionF>
  );
}
