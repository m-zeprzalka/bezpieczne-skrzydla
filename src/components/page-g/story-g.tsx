import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  Coffee,
  Feather,
  HeartHandshake,
  MessagesSquare,
  Route,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_BODY_F,
  T_LABEL_F,
  T_LEAD_F,
} from "@/components/page-f/frame-f";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mission, site } from "@/lib/content";
import { aboutF, missionF, strengthsF, whyF, workshopF } from "@/lib/content-f";
import { aboutCardTitlesG } from "@/lib/content-g";

/* ————— 04 · Warsztat ————— */

export function WorkshopG() {
  return (
    <SectionF id="warsztat">
      <ContainerF>
        <div className="from-sand border-brand-200 relative overflow-hidden rounded-[1.5rem] border bg-gradient-to-br via-white to-white p-7 sm:p-12 lg:p-14">
          <span
            aria-hidden
            className="bg-brand-100/60 absolute -top-24 -right-24 size-72 rounded-full blur-2xl"
          />

          <div className="relative grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeadF
                index={workshopF.index}
                label={workshopF.label}
                title="Bezpieczne Skrzydła"
                accent="przy kawie"
                lead={workshopF.subtitle}
              />

              {/* lead-akapit większy, reszta w łamach */}
              <Reveal
                delay={0.08}
                className="text-brand-800 mt-8 max-w-[38rem] text-[1.02rem] leading-[1.7] text-pretty"
              >
                {workshopF.paragraphs[0]}
              </Reveal>

              <div
                className={`${T_BODY_F} text-muted-foreground mt-5 max-w-[40rem] gap-10 space-y-4 text-pretty md:columns-2 md:space-y-0`}
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
                className="border-brand-300 text-brand-800 mt-6 max-w-[38rem] border-l-2 pl-5 text-[0.875rem] leading-[1.7] italic"
              >
                {workshopF.disclaimer}
              </Reveal>
            </div>

            <div className="flex flex-col lg:col-span-5 lg:pl-6">
              <Reveal
                delay={0.1}
                className="border-brand-200 shadow-lift rounded-2xl border bg-white p-7 sm:p-8"
              >
                <h3
                  className={`${T_LABEL_F} text-brand-600 flex items-center gap-2.5`}
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

/* ————— 05 · Misja ————— */

export function MissionG() {
  /* Trzeci akapit („Najtrudniejsze nie zawsze są słowa…”) dostaje rangę
     typograficzną — to serce tej historii. Treść bez zmian. */
  const pulled = mission.paragraphs[2];
  const regular = [...mission.paragraphs, ...missionF.extraParagraphs].filter(
    (p) => p !== pulled,
  );

  return (
    <SectionF id="misja" tone="deep" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-aurora-deep absolute inset-0 -z-0 opacity-60"
      />
      <WingArcs
        className="absolute -bottom-44 left-1/2 z-0 w-[1100px] max-w-none -translate-x-1/2 opacity-[0.14]"
        count={10}
      />

      <ContainerF className="relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="flex items-baseline gap-4">
              <span
                aria-hidden
                className="font-display text-brand-700 text-[2.4rem] leading-none font-medium select-none"
              >
                {missionF.index}
              </span>
              <span className={`${T_LABEL_F} text-brand-300`}>
                {missionF.label}
              </span>
            </Reveal>

            <Reveal delay={0.06} as="div" className="mt-8">
              <blockquote className="font-display max-w-[44rem] text-[2rem] leading-[1.14] tracking-[-0.018em] text-white italic sm:text-[2.6rem] lg:text-[2.95rem]">
                „{mission.quote}”
              </blockquote>
            </Reveal>

            <RevealGroup className="mt-10 flex max-w-[38rem] flex-col gap-5">
              {regular.slice(0, 2).map((paragraph) => (
                <RevealItem
                  as="span"
                  key={paragraph}
                  className="text-brand-200/85 block text-[0.9375rem] leading-[1.75] text-pretty sm:text-[1rem]"
                >
                  {paragraph}
                </RevealItem>
              ))}

              {/* wyciągnięte zdanie — rytm w środku tekstu */}
              <RevealItem
                as="span"
                className="font-display text-brand-200 border-brand-400/60 block border-l-2 py-1 pl-6 text-[1.25rem] leading-[1.5] italic sm:text-[1.4rem]"
              >
                {pulled}
              </RevealItem>

              {regular.slice(2).map((paragraph) => (
                <RevealItem
                  as="span"
                  key={paragraph}
                  className="text-brand-200/85 block text-[0.9375rem] leading-[1.75] text-pretty sm:text-[1rem]"
                >
                  {paragraph}
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal
              delay={0.1}
              className="bg-brand-900/60 border-brand-800 mt-11 max-w-[40rem] rounded-2xl border p-7 backdrop-blur-sm"
            >
              <p className="font-display text-[1.25rem] leading-[1.45] text-white sm:text-[1.4rem]">
                {mission.closing}
              </p>
              <p className="text-brand-200/85 mt-4 text-[0.9375rem] leading-[1.7]">
                {missionF.foundation}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="md:col-span-5 md:pl-4 lg:pl-12">
            <figure className="md:sticky md:top-28">
              <div className="border-brand-800 bg-brand-900/60 relative aspect-4/5 overflow-hidden rounded-[1.25rem] border backdrop-blur-sm">
                <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <Image
                    src="/logo-bezpieczne-skrzydla.png"
                    alt=""
                    width={320}
                    height={320}
                    className="ring-brand-700 size-40 rounded-full object-cover ring-1 sm:size-44"
                  />
                  <p className={`${T_LABEL_F} text-brand-300`}>
                    miejsce na zdjęcie autorki
                  </p>
                </div>
              </div>

              <figcaption className="border-brand-800 mt-6 border-t pt-6">
                <p className="font-display text-[1.2rem] text-white">
                  {site.owner}
                </p>
                <p className="text-brand-300 mt-1.5 text-[0.8125rem]">
                  Autorka szkoleń i Modelu 4R
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </ContainerF>
    </SectionF>
  );
}

/* ————— 06 · Kilka słów o BS — cztery karty z ikonami ————— */

const aboutIcons = [Feather, BookOpen, MessagesSquare, Route] as const;

export function AboutG() {
  return (
    <SectionF id="o-nas">
      <ContainerF>
        <SectionHeadF
          index={aboutF.index}
          label="O Bezpiecznych Skrzydłach"
          title="Kilka słów o"
          accent="Bezpiecznych Skrzydłach"
          align="center"
        />

        <RevealGroup className="mx-auto mt-14 grid max-w-[62rem] grid-cols-1 gap-5 sm:grid-cols-2">
          {aboutF.paragraphs.map((paragraph, i) => {
            const Icon = aboutIcons[i];
            return (
              <RevealItem
                key={paragraph}
                className="border-brand-200/80 flex flex-col rounded-2xl border bg-white p-7 transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-[0_20px_48px_-24px_rgba(11,37,64,0.3)]"
              >
                <span className="bg-brand-50 text-brand-700 grid size-12 place-items-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-display text-brand-950 mt-5 text-[1.15rem] tracking-tight">
                  {aboutCardTitlesG[i]}
                </h3>
                <p
                  className={`${T_BODY_F} text-muted-foreground mt-3 text-pretty`}
                >
                  {paragraph}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal
          delay={0.14}
          className="mx-auto mt-12 max-w-[42rem] text-center"
        >
          <p className="font-display text-brand-800 text-[1.25rem] leading-[1.45] italic sm:text-[1.45rem]">
            {aboutF.closing}
          </p>
        </Reveal>
      </ContainerF>
    </SectionF>
  );
}

/* ————— 07 · Mocne strony — siatka bento ————— */

const strengthIcons = [
  HeartHandshake,
  Route,
  MessagesSquare,
  Wrench,
  Scale,
  ShieldCheck,
  SlidersHorizontal,
] as const;

export function StrengthsG() {
  return (
    <SectionF id="mocne-strony" tone="tint" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />

      <ContainerF>
        <SectionHeadF
          index={strengthsF.index}
          label={strengthsF.label}
          title="Co wyróżnia"
          accent="Bezpieczne Skrzydła"
          align="center"
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {strengthsF.items.map((item, i) => {
            const Icon = strengthIcons[i];
            const isLead = i === 0;
            return (
              <RevealItem
                key={item.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-[transform,box-shadow] duration-400 hover:-translate-y-1 sm:p-8",
                  isLead
                    ? "bg-brand-950 text-white hover:shadow-[0_24px_56px_-24px_rgba(11,37,64,0.55)] sm:col-span-2"
                    : "border-brand-200/80 border bg-white hover:shadow-[0_20px_48px_-24px_rgba(11,37,64,0.3)]",
                )}
              >
                {isLead ? (
                  <span
                    aria-hidden
                    className="bg-aurora-deep pointer-events-none absolute inset-0 opacity-60"
                  />
                ) : null}

                <span
                  className={cn(
                    "relative grid size-12 place-items-center rounded-xl",
                    isLead
                      ? "bg-brand-400 text-brand-950"
                      : "bg-brand-50 text-brand-700",
                  )}
                >
                  <Icon className="size-5" aria-hidden />
                </span>

                <h3
                  className={cn(
                    "font-display relative mt-5 tracking-tight",
                    isLead
                      ? "max-w-[26rem] text-[1.5rem] leading-[1.2]"
                      : "text-brand-950 text-[1.2rem] leading-[1.25]",
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={cn(
                    "relative mt-3 text-[0.9rem] leading-[1.7] text-pretty",
                    isLead
                      ? "text-brand-200/90 max-w-[36rem]"
                      : "text-muted-foreground",
                  )}
                >
                  {item.body}
                </p>

                {i === 1 ? (
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {["Rozpoznaj", "Reaguj", "Raportuj", "Rozwiązuj"].map(
                      (step) => (
                        <span
                          key={step}
                          className="border-brand-200 text-brand-700 rounded-full border bg-white px-3 py-1 text-[0.72rem] font-semibold"
                        >
                          {step}
                        </span>
                      ),
                    )}
                  </div>
                ) : null}
              </RevealItem>
            );
          })}

          {/* kafel CTA domykający siatkę */}
          <RevealItem className="bg-brand-700 relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 text-white sm:p-8">
            <WingArcs
              animate={false}
              className="absolute -right-24 -bottom-28 w-[380px] opacity-25"
              count={7}
            />
            <p className="font-display relative text-[1.35rem] leading-[1.3]">
              Chcesz sprawdzić, które szkolenie pasuje do Twojego zespołu?
            </p>
            <Button
              asChild
              size="xl"
              className="bg-brand-400 text-brand-950 hover:bg-brand-300 relative mt-8 self-start rounded-full font-semibold"
            >
              <Link href="#kontakt">
                Porozmawiajmy
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </RevealItem>
        </RevealGroup>
      </ContainerF>
    </SectionF>
  );
}

/* ————— 08 · Dlaczego warto ————— */

export function WhyG() {
  return (
    <SectionF id="dlaczego">
      <ContainerF>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeadF
              index={whyF.index}
              label={whyF.label}
              title="Więcej niż prezentacja"
              accent="pełna definicji"
            />

            <Reveal
              delay={0.1}
              className={`${T_LEAD_F} text-muted-foreground mt-7 max-w-[28rem] text-pretty`}
            >
              {whyF.intro}
            </Reveal>

            {whyF.closing.map((paragraph) => (
              <Reveal
                key={paragraph}
                delay={0.14}
                className={`${T_BODY_F} text-muted-foreground mt-6 max-w-[28rem] text-pretty`}
              >
                {paragraph}
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-7 md:pt-16 lg:pl-12">
            <RevealGroup as="ol" className="flex flex-col gap-3">
              {whyF.points.map((point, i) => (
                <RevealItem
                  as="li"
                  key={point}
                  className="border-brand-200/80 hover:border-brand-300 flex items-center gap-4 rounded-2xl border bg-white px-5 py-4 transition-colors"
                >
                  <span className="bg-brand-50 text-brand-700 font-display grid size-9 shrink-0 place-items-center rounded-full text-[0.85rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-brand-900 text-[0.9375rem] leading-[1.55] sm:text-[1rem]">
                    {point}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        <Reveal className="mt-20 text-center lg:mt-24">
          <p className="font-display text-brand-950 mx-auto max-w-[52rem] text-[1.7rem] leading-[1.25] tracking-[-0.015em] text-balance italic sm:text-[2.1rem]">
            {whyF.pull}
          </p>
        </Reveal>
      </ContainerF>
    </SectionF>
  );
}
