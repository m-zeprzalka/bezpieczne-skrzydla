"use client";

import * as React from "react";
import Link from "next/link";
import { Tabs as TabsPrimitive } from "radix-ui";
import { ArrowRight, Check, ListChecks, Package, Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_BODY_F,
  T_LABEL_F,
} from "@/components/page-f/frame-f";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trainingsF, type TrainingF } from "@/lib/content-f";

/**
 * Pięć szkoleń z pełną treścią dokumentu, ale w formie zaprojektowanej:
 * pionowy wybierak programów po lewej, po prawej panel z lead-akapitem,
 * tekstem w dwóch łamach, wyróżnionym zamknięciem, siatką „pokazuję”
 * i plakietkami materiałów. Nic nie zostało skrócone — zostało złożone.
 */
export function TrainingsG() {
  const [value, setValue] = React.useState<string>(trainingsF[0].number);
  const reduce = useReducedMotion();

  return (
    <SectionF id="oferta">
      <ContainerF>
        <SectionHeadF
          index="02"
          label="Oferta · Szkolenia"
          title="Pięć szkoleń, każde dla innej"
          accent="roli w organizacji"
          lead="Wybierz program, aby przeczytać pełny opis — dokładnie w takim kształcie, w jakim przygotowała go autorka."
          align="center"
        />

        <TabsPrimitive.Root
          value={value}
          onValueChange={setValue}
          orientation="vertical"
          className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-10"
        >
          {/* — wybierak programów — */}
          <TabsPrimitive.List
            aria-label="Programy szkoleniowe"
            className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {trainingsF.map((training) => {
              const isActive = training.number === value;
              return (
                <TabsPrimitive.Trigger
                  key={training.number}
                  value={training.number}
                  className={cn(
                    "group focus-visible:ring-ring/50 relative w-[76vw] shrink-0 snap-start rounded-2xl p-5 text-left transition-colors duration-300 outline-none focus-visible:ring-3 sm:w-[58vw] lg:w-full",
                    isActive ? "bg-white" : "hover:bg-brand-50/80",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId={reduce ? undefined : "training-surface"}
                      aria-hidden
                      className="border-brand-200 shadow-lift absolute inset-0 -z-10 rounded-2xl border bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 34,
                      }}
                    />
                  ) : null}

                  <span className="flex items-start gap-4">
                    <span
                      className={cn(
                        "font-display text-[1.6rem] leading-none transition-colors",
                        isActive ? "text-brand-700" : "text-brand-300",
                      )}
                    >
                      {training.number}
                    </span>
                    <span className="flex min-w-0 flex-col gap-1.5">
                      <span
                        className={cn(
                          "font-display text-[1.05rem] leading-[1.25] transition-colors",
                          isActive ? "text-brand-950" : "text-brand-800/85",
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

          {/* — panel programu — */}
          <div className="lg:col-span-8">
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
      </ContainerF>
    </SectionF>
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
      className="border-brand-200/80 from-brand-50 rounded-[1.5rem] border bg-gradient-to-br to-white p-7 sm:p-10"
    >
      <p className="text-brand-600 text-[0.8125rem] font-semibold tracking-wide">
        {training.audience}
      </p>

      <h3 className="font-display text-brand-950 mt-3 max-w-[36rem] text-[1.6rem] leading-[1.15] tracking-tight sm:text-[1.95rem]">
        {training.title}
      </h3>

      {/* lead — pierwszy akapit w większym stopniu */}
      <p className="text-brand-800 mt-6 max-w-[42rem] text-[1.02rem] leading-[1.7] text-pretty sm:text-[1.0625rem]">
        {lead}
      </p>

      {/* pozostałe akapity w dwóch łamach — pełny tekst, o połowę niższa ściana */}
      {rest.length > 0 ? (
        <div
          className={`${T_BODY_F} text-muted-foreground mt-5 gap-10 space-y-4 text-pretty md:columns-2 md:space-y-0 [&>p]:break-inside-avoid md:[&>p+p]:mt-0`}
        >
          {rest.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}

      {/* zamknięcie jako wyróżniony cytat */}
      {training.closing?.map((paragraph) => (
        <div
          key={paragraph}
          className="border-brand-200 relative mt-7 rounded-2xl border bg-white p-6 pl-14"
        >
          <Quote
            aria-hidden
            className="text-brand-300 absolute top-6 left-5 size-6"
          />
          <p className="text-brand-800 text-[0.9375rem] leading-[1.7] text-pretty">
            {paragraph}
          </p>
        </div>
      ))}

      {/* siatka „pokazuję” */}
      <div className="border-brand-200/80 mt-8 rounded-2xl border bg-white p-6 sm:p-7">
        <h4 className={`${T_LABEL_F} text-brand-600 flex items-center gap-2.5`}>
          <ListChecks className="size-4" aria-hidden />
          {training.showsLabel}
        </h4>
        <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {training.shows.map((item) => (
            <li
              key={item}
              className="text-brand-800 flex gap-2.5 text-[0.875rem] leading-[1.55]"
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

      {/* mini-mapa 4R (szkolenie 04) */}
      {training.extra4R ? (
        <div className="mt-6">
          <p className="text-brand-800 text-[0.875rem] font-medium">
            {training.extra4R.intro}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {training.extra4R.items.map((item, i) => (
              <div
                key={item.key}
                className="border-brand-200 flex items-start gap-3 rounded-xl border bg-white px-4 py-3"
              >
                <span className="bg-brand-700 font-display grid size-7 shrink-0 place-items-center rounded-full text-[0.72rem] text-white">
                  {i + 1}
                </span>
                <p className="text-muted-foreground text-[0.82rem] leading-snug">
                  <strong className="text-brand-800 font-semibold">
                    {item.key}
                  </strong>{" "}
                  — {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* materiały + CTA */}
      <div className="mt-8 flex flex-col gap-8">
        {training.materials ? (
          <div>
            <h4
              className={`${T_LABEL_F} text-brand-600 flex items-center gap-2.5`}
            >
              <Package className="size-4" aria-hidden />
              Materiały dodatkowe
            </h4>
            <p className="text-muted-foreground mt-2 text-[0.8125rem]">
              {training.materialsLabel}:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
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
          <Link href="#kontakt">
            Zapytaj o to szkolenie
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
