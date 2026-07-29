import Link from "next/link";
import { ArrowRight, Check, Coffee } from "lucide-react";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_BODY_F,
  T_LABEL_F,
} from "@/components/page-f/frame-f";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { workshopF } from "@/lib/content-f";

/** Warsztat wspierający — pełny opis z dokumentu, w cieplejszej tonacji. */
export function WorkshopF() {
  return (
    <SectionF id="warsztat">
      <ContainerF>
        <div className="from-sand border-brand-200 relative overflow-hidden rounded-[1.5rem] border bg-gradient-to-br via-white to-white p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeadF
                index={workshopF.index}
                label={workshopF.label}
                title="Bezpieczne Skrzydła"
                accent="przy kawie"
                lead={workshopF.subtitle}
              />

              <div className="mt-8 flex max-w-[36rem] flex-col gap-5">
                {workshopF.paragraphs.map((paragraph) => (
                  <Reveal
                    key={paragraph}
                    className={`${T_BODY_F} text-muted-foreground text-pretty`}
                  >
                    {paragraph}
                  </Reveal>
                ))}

                <Reveal
                  className={`${T_BODY_F} text-muted-foreground text-pretty`}
                >
                  {workshopF.format}
                </Reveal>

                <Reveal className="border-brand-300 text-brand-800 border-l-2 pl-5 text-[0.875rem] leading-[1.7] italic">
                  {workshopF.disclaimer}
                </Reveal>
              </div>
            </div>

            <div className="flex flex-col md:col-span-5 md:pl-4 lg:pl-10">
              <Reveal
                delay={0.1}
                className="border-brand-200 rounded-2xl border bg-white/80 p-7 backdrop-blur-sm sm:p-8"
              >
                <h3
                  className={`${T_LABEL_F} text-brand-600 flex items-center gap-2`}
                >
                  <Coffee className="size-4" aria-hidden />
                  {workshopF.wantsLabel}
                </h3>

                <ul className="mt-6 flex flex-col gap-3.5">
                  {workshopF.wants.map((item) => (
                    <li
                      key={item}
                      className="text-brand-800 flex gap-3 text-[0.9rem] leading-[1.55]"
                    >
                      <Check
                        className="text-brand-500 mt-0.5 size-4 shrink-0"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="brand"
                  size="xl"
                  className="mt-8 w-full rounded-full font-semibold"
                >
                  <Link href="#kontakt">
                    Zapytaj o najbliższy termin
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </Reveal>

              <Reveal
                delay={0.16}
                className="font-display text-brand-700 mt-8 px-2 text-[1.1rem] leading-[1.5] italic"
              >
                {workshopF.closing}
              </Reveal>
            </div>
          </div>
        </div>
      </ContainerF>
    </SectionF>
  );
}
