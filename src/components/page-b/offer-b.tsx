"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Coffee } from "lucide-react";

import {
  ContainerB,
  LabelB,
  SectionB,
  SectionHeadB,
} from "@/components/page-b/frame";
import { useRole } from "@/components/page-b/role-store";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn, pluralPl } from "@/lib/utils";
import { programs, workshop } from "@/lib/content";
import { programRoles, roles } from "@/lib/content-b";

export function OfferB() {
  const { role } = useRole();
  const [onlyMine, setOnlyMine] = React.useState(false);
  const roleLabel = roles.find((r) => r.id === role)?.short ?? "";

  const visible = React.useMemo(
    () =>
      onlyMine
        ? programs.filter((p) => programRoles[p.number]?.includes(role))
        : programs,
    [onlyMine, role],
  );

  return (
    <SectionB id="oferta" tone="plain">
      <ContainerB>
        <SectionHeadB
          index="05"
          eyebrow="Oferta"
          title="Pięć programów. Każdy odpowiada na inny moment w organizacji."
          description="Zamiast siatki kart — lista do porównania. Programy dopasowane do Twojej roli są oznaczone; możesz też ukryć resztę."
          action={
            <div className="border-brand-300 flex items-center gap-3 rounded-md border px-4 py-3">
              <Switch
                id="tylko-moje"
                checked={onlyMine}
                onCheckedChange={setOnlyMine}
              />
              <label
                htmlFor="tylko-moje"
                className="text-brand-900 cursor-pointer text-[0.85rem] leading-snug"
              >
                Pokaż tylko dla roli:{" "}
                <span className="font-medium">{roleLabel}</span>
              </label>
            </div>
          }
        />

        <div className="pt-12 pb-16 sm:pb-20 lg:pt-14 lg:pb-24">
          {/* Wiersz nagłówkowy — czytelny dopiero od lg, niżej wiersze są kartami */}
          <div className="border-brand-300 hidden grid-cols-12 gap-6 border-b pb-3 lg:grid">
            <LabelB className="col-span-1">Nr</LabelB>
            <LabelB className="col-span-4">Program</LabelB>
            <LabelB className="col-span-4">Czego uczy</LabelB>
            <LabelB className="col-span-3">Materiały</LabelB>
          </div>

          <RevealGroup as="ul" className="flex flex-col">
            {visible.map((program) => {
              const forMe = programRoles[program.number]?.includes(role);
              return (
                <RevealItem
                  as="li"
                  key={program.number}
                  className={cn(
                    "border-brand-200 group relative border-b transition-colors",
                    forMe ? "bg-brand-50" : "bg-white hover:bg-brand-50/50",
                  )}
                >
                  {forMe ? (
                    <span
                      aria-hidden
                      className="bg-brand-600 absolute inset-y-0 left-0 w-0.5"
                    />
                  ) : null}

                  <div className="grid grid-cols-1 gap-4 px-4 py-7 lg:grid-cols-12 lg:gap-6 lg:px-4">
                    <div className="lg:col-span-1">
                      <span className="font-grotesk text-brand-950 text-[1.6rem] leading-none font-semibold tracking-tight">
                        {program.number}
                      </span>
                    </div>

                    <div className="lg:col-span-4">
                      <h3 className="font-grotesk text-brand-950 text-[1.12rem] leading-snug font-medium">
                        {program.title}
                      </h3>
                      <p className="text-brand-700 mt-2 text-[0.82rem]">
                        {program.audience}
                      </p>
                      {forMe ? (
                        <span className="bg-brand-950 mt-3 inline-flex rounded-sm px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.14em] text-white uppercase">
                          dla Twojej roli
                        </span>
                      ) : null}
                    </div>

                    <div className="lg:col-span-4">
                      <ul className="flex flex-col gap-2">
                        {program.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-brand-800 flex gap-2.5 text-[0.85rem] leading-snug"
                          >
                            <Check
                              className="text-brand-600 mt-0.5 size-3.5 shrink-0"
                              aria-hidden
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col items-start gap-4 lg:col-span-3">
                      <p className="text-muted-foreground text-[0.82rem] leading-relaxed">
                        {program.materials.slice(0, 2).join(", ")}
                        {program.materials.length > 2 ? (
                          <span className="text-brand-600">
                            {" "}
                            + {program.materials.length - 2}{" "}
                            {pluralPl(
                              program.materials.length - 2,
                              "kolejny",
                              "kolejne",
                              "kolejnych",
                            )}
                          </span>
                        ) : null}
                      </p>

                      <Button
                        asChild
                        variant={forMe ? "brand" : "outline"}
                        size="lg"
                        className="rounded-md"
                      >
                        <Link href="#kontakt">
                          Zapytaj o ten program
                          <ArrowRight data-icon="inline-end" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>

          {visible.length === 0 ? (
            <p className="text-muted-foreground border-brand-200 border-b px-4 py-10 text-center text-[0.9rem]">
              Dla tej roli nie mam osobnego programu — wyłącz filtr, żeby
              zobaczyć pełną listę.
            </p>
          ) : null}

          {/* — warsztat wspierający: inna intencja, więc inna forma — */}
          <Reveal className="mt-12">
            <div className="border-brand-950 bg-brand-950 grid grid-cols-1 gap-8 rounded-md border p-7 text-white sm:p-9 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <span className="text-brand-300 inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.16em] uppercase">
                  <Coffee className="size-3.5" aria-hidden />
                  {workshop.badge}
                </span>

                <h3 className="font-grotesk mt-4 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-tight font-semibold tracking-tight">
                  {workshop.title}
                </h3>

                <p className="text-brand-200 mt-2 text-[1rem]">
                  {workshop.subtitle}
                </p>

                <p className="text-brand-200/85 mt-5 max-w-xl text-[0.9rem] leading-relaxed">
                  {workshop.body}
                </p>

                <p className="border-brand-700 text-brand-300 mt-6 max-w-xl border-l-2 pl-4 text-[0.8rem] leading-relaxed">
                  {workshop.disclaimer}
                </p>
              </div>

              <div className="lg:col-span-5">
                <ul className="flex flex-col gap-3.5">
                  {workshop.points.map((point) => (
                    <li
                      key={point}
                      className="text-brand-100 flex gap-3 text-[0.88rem] leading-snug"
                    >
                      <Check
                        className="text-brand-400 mt-0.5 size-3.5 shrink-0"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="xl"
                  className="bg-brand-400 text-brand-950 hover:bg-brand-300 mt-7 w-full rounded-md"
                >
                  <Link href="#kontakt">
                    Zapytaj o najbliższy termin
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </ContainerB>
    </SectionB>
  );
}
