"use client";

import { motion, useReducedMotion } from "motion/react";

import { ContainerB, SectionB, SectionHeadB } from "@/components/page-b/frame";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { model4r } from "@/lib/content";

export function ModelMap() {
  const reduce = useReducedMotion();

  return (
    <SectionB id="model" tone="plain">
      <ContainerB>
        <SectionHeadB
          index="03"
          eyebrow="Autorski Model 4R"
          title={model4r.title}
          description={model4r.description}
        />

        <div className="pt-14 pb-16 sm:pb-20 lg:pt-16 lg:pb-24">
          {/* Kontener osi musi obejmować samą listę — offset liczony jest od
              jej krawędzi, nie od sekcji z paddingiem. */}
          <div className="relative">
            {/* Oś procesu — rysowana przy wejściu w kadr, nie w pętli.
                4rem = wysokość cyfry (2.6rem) + odstęp (1rem) + promień węzła.

                Wyzwalacz `whileInView` siedzi na kontenerze, a skalowana jest
                dopiero kreska w środku. Gdyby obserwowany był sam element ze
                `scaleX: 0`, miałby zerową powierzchnię — IntersectionObserver
                nigdy nie uznałby go za widoczny i animacja by nie ruszyła. */}
            <motion.div
              aria-hidden
              className="absolute top-[4rem] right-0 left-0 hidden h-px lg:block"
              initial={reduce ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span
                className="bg-brand-300 block h-full w-full origin-left"
                variants={{
                  hidden: { scaleX: 0 },
                  show: {
                    scaleX: 1,
                    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              />
            </motion.div>

            <RevealGroup
              as="ol"
              className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0"
            >
              {model4r.steps.map((step) => (
                <RevealItem
                  as="li"
                  key={step.key}
                  className="border-brand-200 relative flex flex-col lg:border-r lg:pr-6 lg:last:border-r-0 lg:[&:not(:first-child)]:pl-6"
                >
                  <span className="font-grotesk text-brand-950 text-[2.6rem] leading-none font-semibold tracking-tight">
                    {step.index}
                  </span>

                  {/* węzeł na osi */}
                  <span
                    aria-hidden
                    className="border-brand-400 mt-4 hidden size-3 rounded-full border-2 bg-white lg:block"
                  />

                  <h3 className="font-grotesk text-brand-950 mt-5 text-[1.4rem] leading-none font-semibold tracking-tight lg:mt-6">
                    {step.title}
                  </h3>

                  <p className="text-brand-700 mt-3 text-[0.92rem] leading-snug font-medium">
                    {step.claim}
                  </p>

                  <p className="text-muted-foreground mt-4 text-[0.87rem] leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="border-brand-200 mt-5 flex flex-col gap-2 border-t pt-4">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="text-brand-800 flex gap-2.5 text-[0.82rem] leading-snug"
                      >
                        <span
                          aria-hidden
                          className="bg-brand-400 mt-[0.42rem] size-1 shrink-0 rounded-full"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <p className="text-muted-foreground border-brand-200 mt-12 border-t pt-5 text-[0.85rem] lg:mt-14">
            Cały proces widzisz naraz — bez klikania i bez ukrywania trzech
            czwartych schematu. Każdy program szkoleniowy opieram na tych samych
            czterech etapach.
          </p>
        </div>
      </ContainerB>
    </SectionB>
  );
}
