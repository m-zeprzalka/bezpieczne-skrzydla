import Link from "next/link";
import { ArrowRight, Check, Coffee } from "lucide-react";

import {
  ContainerMvpB,
  SectionHeadMvpB,
  SectionMvpB,
  T_BODY_MVPB,
  T_LABEL_MVPB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { workshopF } from "@/lib/content-f";
import { workshopMvp } from "@/lib/content-mvp";

/**
 * Warsztat wspierający — stanowczo oddzielony od szkoleń: osobna sekcja
 * na całej szerokości w ciepłej, piaskowej tonacji (zamiast błękitów)
 * i plakietka mówiąca wprost, że to nie jest szkolenie. Nie wlicza się
 * do pięciu programów. W wersji B ciepło niesie tło całej sekcji,
 * a tekst płynie jedną szpaltą — bez łamów i bez pudełka wokół całości.
 */
export function WorkshopMvpB() {
  return (
    <SectionMvpB id="warsztat" tone="warm" className="overflow-hidden">
      <span
        aria-hidden
        className="bg-brand-100/50 absolute -top-32 -right-32 size-96 rounded-full blur-3xl"
      />

      <ContainerMvpB className="relative">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="border-brand-300 text-brand-800 inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase">
                <Coffee className="size-3.5" aria-hidden />
                {workshopMvp.badge}
              </span>
            </Reveal>

            <SectionHeadMvpB
              index={workshopMvp.index}
              label={workshopMvp.label}
              title="Bezpieczne Skrzydła"
              accent="przy kawie"
              lead={workshopF.subtitle}
              className="mt-8"
            />

            {/* lead-akapit większy, reszta jedną szpaltą */}
            <Reveal
              delay={0.08}
              className="text-brand-800 mt-10 max-w-[38rem] text-[1.0625rem] leading-[1.8] text-pretty"
            >
              {workshopF.paragraphs[0]}
            </Reveal>

            <div className="mt-6 flex max-w-[38rem] flex-col gap-6">
              {[...workshopF.paragraphs.slice(1), workshopF.format].map(
                (paragraph) => (
                  <p
                    key={paragraph}
                    className={`${T_BODY_MVPB} text-muted-foreground text-pretty`}
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>

            <Reveal
              delay={0.12}
              className="border-brand-300 text-brand-800 mt-9 max-w-[38rem] border-l-2 pl-6 text-[0.875rem] leading-[1.8]"
            >
              {workshopF.disclaimer}
            </Reveal>

            <Reveal
              delay={0.14}
              className="text-muted-foreground mt-5 max-w-[38rem] text-[0.875rem] leading-[1.8]"
            >
              {workshopMvp.distinction}
            </Reveal>
          </div>

          <div className="flex flex-col lg:col-span-5 lg:pt-24 lg:pl-10">
            <Reveal
              delay={0.1}
              className="border-brand-200/80 shadow-lift rounded-[1.5rem] border bg-white p-8 sm:p-9"
            >
              <h3
                className={`${T_LABEL_MVPB} text-brand-600 flex items-center gap-2.5`}
              >
                <Coffee className="size-4" aria-hidden />
                {workshopF.wantsLabel}
              </h3>

              <ul className="mt-7 flex flex-col gap-4">
                {workshopF.wants.map((item) => (
                  <li
                    key={item}
                    className="text-brand-800 flex gap-3 text-[0.9rem] leading-[1.6]"
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
                className="mt-9 w-full rounded-full font-semibold"
              >
                <Link href="#wycena">
                  Zapytaj o najbliższy termin
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </Reveal>

            <Reveal
              delay={0.16}
              className="font-display text-brand-700 mt-9 px-2 text-[1.15rem] leading-[1.55]"
            >
              {workshopF.closing}
            </Reveal>
          </div>
        </div>
      </ContainerMvpB>
    </SectionMvpB>
  );
}
