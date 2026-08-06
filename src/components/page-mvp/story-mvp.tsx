import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Feather,
  MessagesSquare,
  Route,
} from "lucide-react";

import {
  ContainerMvp,
  SectionHeadMvp,
  SectionMvp,
  T_BODY_MVP,
  T_LABEL_MVP,
  T_LEAD_MVP,
} from "@/components/page-mvp/frame-mvp";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { mission, site } from "@/lib/content";
import { aboutF, missionF, strengthsF, whyF } from "@/lib/content-f";
import { aboutCardTitlesG } from "@/lib/content-g";

/* ————— 06 · Misja — układ z G, wyróżnienia bez kursywy ————— */

export function MissionMvp() {
  /* Trzeci akapit („Najtrudniejsze nie zawsze są słowa…”) dostaje rangę
     typograficzną — to serce tej historii. Treść bez zmian. */
  const pulled = mission.paragraphs[2];
  const regular = [...mission.paragraphs, ...missionF.extraParagraphs].filter(
    (p) => p !== pulled,
  );

  return (
    <SectionMvp id="misja" tone="deep" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-aurora-deep absolute inset-0 -z-0 opacity-60"
      />
      <WingArcs
        className="absolute -bottom-44 left-1/2 z-0 w-[1100px] max-w-none -translate-x-1/2 opacity-[0.14]"
        count={10}
      />

      <ContainerMvp className="relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="flex items-baseline gap-4">
              <span
                aria-hidden
                className="font-display text-brand-700 text-[2.4rem] leading-none font-medium select-none"
              >
                06
              </span>
              <span className={`${T_LABEL_MVP} text-brand-300`}>
                Moja misja
              </span>
            </Reveal>

            <Reveal delay={0.06} as="div" className="mt-8">
              <blockquote className="font-display max-w-[44rem] text-[2rem] leading-[1.14] tracking-[-0.018em] text-white sm:text-[2.6rem] lg:text-[2.95rem]">
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

              {/* wyciągnięte zdanie — wyróżnia je krój i stopień, nie kursywa */}
              <RevealItem
                as="span"
                className="font-display text-brand-200 border-brand-400/60 block border-l-2 py-1 pl-6 text-[1.25rem] leading-[1.5] sm:text-[1.4rem]"
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
                  <p className={`${T_LABEL_MVP} text-brand-300`}>
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
      </ContainerMvp>
    </SectionMvp>
  );
}

/* ————— 07 · Kilka słów o BS — cztery karty z ikonami (układ G) ————— */

const aboutIcons = [Feather, BookOpen, MessagesSquare, Route] as const;

export function AboutMvp() {
  return (
    <SectionMvp id="o-nas">
      <ContainerMvp>
        <SectionHeadMvp
          index="07"
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
                  className={`${T_BODY_MVP} text-muted-foreground mt-3 text-pretty`}
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
          <p className="font-display text-brand-800 text-[1.25rem] leading-[1.45] sm:text-[1.45rem]">
            {aboutF.closing}
          </p>
        </Reveal>
      </ContainerMvp>
    </SectionMvp>
  );
}

/* ————— 08 · Mocne strony — edytorialne wiersze z wariantu F ————— */

export function StrengthsMvp() {
  return (
    <SectionMvp id="mocne-strony" tone="tint">
      <ContainerMvp>
        <SectionHeadMvp
          index="08"
          label={strengthsF.label}
          title="Co wyróżnia"
          accent="Bezpieczne Skrzydła"
        />

        <RevealGroup
          as="ol"
          className="border-brand-200 mt-14 border-t lg:mt-16"
        >
          {strengthsF.items.map((item, i) => (
            <RevealItem
              as="li"
              key={item.title}
              className="border-brand-200 grid grid-cols-1 gap-x-8 gap-y-3 border-b py-8 md:grid-cols-12 lg:py-9"
            >
              <div className="flex items-baseline gap-5 md:col-span-5">
                <span
                  aria-hidden
                  className="text-outline-f font-display shrink-0 text-[1.7rem] leading-none font-medium select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-brand-950 text-[1.3rem] leading-[1.25] tracking-tight sm:text-[1.45rem]">
                  {item.title}
                </h3>
              </div>
              <p
                className={`${T_BODY_MVP} text-muted-foreground text-pretty md:col-span-7 md:pl-4 lg:pl-8`}
              >
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerMvp>
    </SectionMvp>
  );
}

/* ————— 09 · Dlaczego warto — układ G ————— */

export function WhyMvp() {
  return (
    <SectionMvp id="dlaczego">
      <ContainerMvp>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeadMvp
              index="09"
              label={whyF.label}
              title="Więcej niż prezentacja"
              accent="pełna definicji"
            />

            <Reveal
              delay={0.1}
              className={`${T_LEAD_MVP} text-muted-foreground mt-7 max-w-[28rem] text-pretty`}
            >
              {whyF.intro}
            </Reveal>

            {whyF.closing.map((paragraph) => (
              <Reveal
                key={paragraph}
                delay={0.14}
                className={`${T_BODY_MVP} text-muted-foreground mt-6 max-w-[28rem] text-pretty`}
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

        <Reveal className="mt-16 lg:mt-20">
          <div className="bg-brand-700 relative flex flex-col items-start gap-6 overflow-hidden rounded-[1.5rem] p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <WingArcs
              animate={false}
              className="absolute -right-24 -bottom-28 w-[380px] opacity-25"
              count={7}
            />
            <p className="font-display relative max-w-[36rem] text-[1.5rem] leading-[1.3] text-balance sm:text-[1.8rem]">
              {whyF.pull}
            </p>
            <Button
              asChild
              size="xl"
              className="bg-brand-400 text-brand-950 hover:bg-brand-300 relative shrink-0 rounded-full font-semibold"
            >
              <Link href="#wycena">
                Poproś o wycenę
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </ContainerMvp>
    </SectionMvp>
  );
}
