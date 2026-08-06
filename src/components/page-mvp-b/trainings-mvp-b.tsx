"use client";

import * as React from "react";
import Link from "next/link";
import { Tabs as TabsPrimitive } from "radix-ui";
import { ArrowRight, Check, ListChecks, Package } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import {
  ContainerMvpB,
  SectionHeadMvpB,
  SectionMvpB,
  T_BODY_MVPB,
  T_LABEL_MVPB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trainingsF, type TrainingF } from "@/lib/content-f";
import { trainingsMvp } from "@/lib/content-mvp";

/**
 * Pięć szkoleń w opracowaniu z wariantu G: pionowy wybierak po lewej,
 * panel z pełnym opisem po prawej. Nic nie zostało skrócone.
 *
 * Wersja B rezygnuje z kart i łamów na rzecz światła: wybierak to lista
 * rozdzielona włoskowatymi liniami z wędrującym paskiem akcentu, a panel
 * jest otwartą szpaltą czytelniczą za pojedynczą linią — bez pudełek,
 * z tekstem w jednej kolumnie o wygodnej mierze wiersza.
 * Warsztat „przy kawie” celowo NIE jest tu wliczany — ma osobną sekcję.
 */
export function TrainingsMvpB() {
  const [value, setValue] = React.useState<string>(trainingsF[0].number);
  const reduce = useReducedMotion();

  return (
    <SectionMvpB id="oferta">
      <ContainerMvpB>
        <SectionHeadMvpB
          index={trainingsMvp.index}
          label={trainingsMvp.label}
          title="Pięć szkoleń, każde dla innej"
          accent="roli w organizacji"
          lead={trainingsMvp.lead}
          align="center"
        />

        <TabsPrimitive.Root
          value={value}
          onValueChange={setValue}
          orientation="vertical"
          className="mt-16 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-0"
        >
          {/* — wybierak programów — */}
          <TabsPrimitive.List
            aria-label="Szkolenia"
            className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 sm:-mx-10 sm:px-10 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 lg:pr-12"
          >
            {trainingsF.map((training) => {
              const isActive = training.number === value;
              return (
                <TabsPrimitive.Trigger
                  key={training.number}
                  value={training.number}
                  className={cn(
                    "group focus-visible:ring-ring/50 relative w-[78vw] shrink-0 snap-start rounded-2xl border bg-white p-5 text-left transition-colors duration-300 outline-none focus-visible:ring-3",
                    "sm:w-[58vw]",
                    "lg:w-full lg:rounded-none lg:border-0 lg:border-b lg:bg-transparent lg:p-0 lg:py-7 lg:pl-7",
                    /* aktywność na mobile sygnalizuje kolor obwódki — cień
                       zostawiamy w spokoju, bo wygrywałby z lg:shadow-none */
                    isActive
                      ? "border-brand-400 lg:border-brand-200/70"
                      : "border-brand-200/70",
                  )}
                >
                  {/* wędrujący pasek akcentu — tylko w układzie pionowym */}
                  {isActive ? (
                    <motion.span
                      layoutId={reduce ? undefined : "training-accent-mvpb"}
                      aria-hidden
                      className="bg-brand-600 absolute top-6 bottom-6 left-0 hidden w-0.5 rounded-full lg:block"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 34,
                      }}
                    />
                  ) : null}

                  <span className="flex items-start gap-5">
                    <span
                      className={cn(
                        "font-display text-[1.5rem] leading-none transition-colors",
                        isActive ? "text-brand-600" : "text-brand-300",
                      )}
                    >
                      {training.number}
                    </span>
                    <span className="flex min-w-0 flex-col gap-2">
                      <span
                        className={cn(
                          "font-display text-[1.05rem] leading-[1.3] transition-colors",
                          isActive
                            ? "text-brand-950"
                            : "text-brand-800/80 group-hover:text-brand-950",
                        )}
                      >
                        {training.title}
                      </span>
                      <span className="text-brand-600 text-[0.72rem] leading-snug font-medium">
                        {training.audience}
                      </span>
                    </span>
                  </span>
                </TabsPrimitive.Trigger>
              );
            })}
          </TabsPrimitive.List>

          {/* — panel programu: otwarta szpalta za pojedynczą linią — */}
          <div className="lg:border-brand-200/70 lg:col-span-8 lg:border-l lg:pl-14">
            {trainingsF.map((training) => (
              <TabsPrimitive.Content
                key={training.number}
                value={training.number}
                className="outline-none"
              >
                <TrainingPanel training={training} reduce={reduce ?? false} />
              </TabsPrimitive.Content>
            ))}
          </div>
        </TabsPrimitive.Root>
      </ContainerMvpB>
    </SectionMvpB>
  );
}

function TrainingPanel({
  training,
  reduce,
}: {
  training: TrainingF;
  reduce: boolean;
}) {
  const [lead, ...rest] = training.paragraphs;

  return (
    <motion.article
      data-reveal=""
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-brand-600 text-[0.8125rem] font-semibold tracking-wide">
        {training.audience}
      </p>

      <h3 className="font-display text-brand-950 mt-4 max-w-[36rem] text-[1.7rem] leading-[1.15] tracking-tight sm:text-[2rem]">
        {training.title}
      </h3>

      {/* lead — pierwszy akapit w większym stopniu */}
      <p className="text-brand-800 mt-8 max-w-[40rem] text-[1.0625rem] leading-[1.8] text-pretty">
        {lead}
      </p>

      {/* pozostałe akapity w jednej szpalcie — pełny tekst, wygodna miara */}
      {rest.length > 0 ? (
        <div className="mt-6 flex max-w-[40rem] flex-col gap-6">
          {rest.map((paragraph) => (
            <p
              key={paragraph}
              className={`${T_BODY_MVPB} text-muted-foreground text-pretty`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {/* zamknięcie — wyróżnia je krój Fraunces, nie kursywa */}
      {training.closing?.map((paragraph) => (
        <p
          key={paragraph}
          className="font-display text-brand-800 border-brand-300 mt-10 max-w-[38rem] border-l-2 pl-6 text-[1.1rem] leading-[1.65] text-pretty"
        >
          {paragraph}
        </p>
      ))}

      {/* lista „pokazuję” — bez pudełka, za linią */}
      <div className="border-brand-200/70 mt-12 border-t pt-8">
        <h4
          className={`${T_LABEL_MVPB} text-brand-600 flex items-center gap-2.5`}
        >
          <ListChecks className="size-4" aria-hidden />
          {training.showsLabel}
        </h4>
        <ul className="mt-6 grid max-w-[42rem] grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2">
          {training.shows.map((item) => (
            <li
              key={item}
              className="text-brand-800 flex gap-2.5 text-[0.875rem] leading-[1.6]"
            >
              <Check
                className="text-brand-500 mt-0.5 size-4 shrink-0"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* mini-mapa 4R (szkolenie 04) — wiersze nad liniami zamiast kafelków */}
      {training.extra4R ? (
        <div className="mt-10 max-w-[40rem]">
          <p className="text-brand-800 text-[0.875rem] font-medium">
            {training.extra4R.intro}
          </p>
          <ol className="mt-4 flex flex-col">
            {training.extra4R.items.map((item, i) => (
              <li
                key={item.key}
                className="border-brand-200/70 flex items-start gap-4 border-t py-4"
              >
                <span className="border-brand-300 text-brand-700 font-display grid size-7 shrink-0 place-items-center rounded-full border bg-white text-[0.72rem]">
                  {i + 1}
                </span>
                <p className="text-muted-foreground text-[0.875rem] leading-[1.6]">
                  <strong className="text-brand-800 font-semibold">
                    {item.key}
                  </strong>{" "}
                  — {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {/* materiały + CTA */}
      <div className="mt-12 flex flex-col gap-10">
        {training.materials ? (
          <div className="border-brand-200/70 border-t pt-8">
            <h4
              className={`${T_LABEL_MVPB} text-brand-600 flex items-center gap-2.5`}
            >
              <Package className="size-4" aria-hidden />
              Materiały dodatkowe
            </h4>
            <p className="text-muted-foreground mt-2.5 text-[0.8125rem]">
              {training.materialsLabel}:
            </p>
            <ul className="mt-5 flex max-w-[42rem] flex-wrap gap-2.5">
              {training.materials.map((material) => (
                <li
                  key={material}
                  className="border-brand-200 text-brand-800 rounded-full border bg-white px-3.5 py-1.5 text-[0.78rem] leading-snug"
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <Button
          asChild
          variant="brand"
          size="xl"
          className="self-start rounded-full px-8 font-semibold"
        >
          <Link href="#wycena">
            Poproś o wycenę tego szkolenia
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
