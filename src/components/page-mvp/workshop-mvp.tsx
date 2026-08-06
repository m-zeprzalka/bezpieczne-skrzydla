import Link from "next/link";
import { ArrowRight, Check, Coffee } from "lucide-react";

import {
  ContainerMvp,
  SectionHeadMvp,
  SectionMvp,
  T_BODY_MVP,
  T_LABEL_MVP,
} from "@/components/page-mvp/frame-mvp";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { workshopF } from "@/lib/content-f";
import { workshopMvp } from "@/lib/content-mvp";

/**
 * Warsztat wspierający — stanowczo oddzielony od szkoleń: osobna sekcja,
 * cieplejsza stylistyka (piasek zamiast błękitów) i plakietka mówiąca
 * wprost, że to nie jest szkolenie. Nie wlicza się do pięciu programów.
 */
export function WorkshopMvp() {
  return (
    <SectionMvp id="warsztat">
      <ContainerMvp>
        <div className="from-sand border-brand-200 relative overflow-hidden rounded-[1.5rem] border bg-gradient-to-br via-white to-white p-7 sm:p-12 lg:p-14">
          <span
            aria-hidden
            className="bg-brand-100/60 absolute -top-24 -right-24 size-72 rounded-full blur-2xl"
          />

          <div className="relative grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="border-brand-300 text-brand-800 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase">
                  <Coffee className="size-3.5" aria-hidden />
                  {workshopMvp.badge}
                </span>
              </Reveal>

              <SectionHeadMvp
                index={workshopMvp.index}
                label={workshopMvp.label}
                title="Bezpieczne Skrzydła"
                accent="przy kawie"
                lead={workshopF.subtitle}
                className="mt-6"
              />

              {/* lead-akapit większy, reszta w łamach */}
              <Reveal
                delay={0.08}
                className="text-brand-800 mt-8 max-w-[38rem] text-[1.02rem] leading-[1.7] text-pretty"
              >
                {workshopF.paragraphs[0]}
              </Reveal>

              <div
                className={`${T_BODY_MVP} text-muted-foreground mt-5 max-w-[40rem] gap-10 space-y-4 text-pretty md:columns-2 md:space-y-0`}
              >
                {[...workshopF.paragraphs.slice(1), workshopF.format].map(
                  (paragraph) => (
                    <p key={paragraph} className="mb-4 break-inside-avoid">
                      {paragraph}
                    </p>
                  ),
                )}
              </div>

              <Reveal
                delay={0.12}
                className="border-brand-300 text-brand-800 mt-6 max-w-[38rem] border-l-2 pl-5 text-[0.875rem] leading-[1.7]"
              >
                {workshopF.disclaimer}
              </Reveal>

              <Reveal
                delay={0.14}
                className="text-muted-foreground mt-4 max-w-[38rem] text-[0.875rem] leading-[1.7]"
              >
                {workshopMvp.distinction}
              </Reveal>
            </div>

            <div className="flex flex-col lg:col-span-5 lg:pl-6">
              <Reveal
                delay={0.1}
                className="border-brand-200 shadow-lift rounded-2xl border bg-white p-7 sm:p-8"
              >
                <h3
                  className={`${T_LABEL_MVP} text-brand-600 flex items-center gap-2.5`}
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
                      <span className="bg-brand-700 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white">
                        <Check className="size-3" aria-hidden />
                      </span>
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
                  <Link href="#wycena">
                    Zapytaj o najbliższy termin
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </Reveal>

              <Reveal
                delay={0.16}
                className="font-display text-brand-700 mt-8 px-2 text-[1.1rem] leading-[1.5]"
              >
                {workshopF.closing}
              </Reveal>
            </div>
          </div>
        </div>
      </ContainerMvp>
    </SectionMvp>
  );
}
