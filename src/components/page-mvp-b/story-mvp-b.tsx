import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ContainerMvpB,
  SectionHeadMvpB,
  SectionMvpB,
  T_BODY_MVPB,
  T_LABEL_MVPB,
  T_LEAD_MVPB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { mission, site } from "@/lib/content";
import { aboutF, missionF, strengthsF, whyF } from "@/lib/content-f";
import { aboutCardTitlesG } from "@/lib/content-g";

/* ————— 06 · Misja — granatowa pauza w jasnej kompozycji ————— */

export function MissionMvpB() {
  /* Trzeci akapit („Najtrudniejsze nie zawsze są słowa…”) dostaje rangę
     typograficzną — to serce tej historii. Treść bez zmian. */
  const pulled = mission.paragraphs[2];
  const regular = [...mission.paragraphs, ...missionF.extraParagraphs].filter(
    (p) => p !== pulled,
  );

  return (
    <SectionMvpB id="misja" tone="deep" className="overflow-hidden">
      <div
        aria-hidden
        className="bg-aurora-deep absolute inset-0 -z-0 opacity-60"
      />
      <WingArcs
        className="absolute -bottom-44 left-1/2 z-0 w-[1100px] max-w-none -translate-x-1/2 opacity-[0.14]"
        count={10}
      />

      <ContainerMvpB className="relative">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="flex items-baseline gap-4">
              <span
                aria-hidden
                className="font-display text-brand-700 text-[2.3rem] leading-none font-medium select-none"
              >
                06
              </span>
              <span className={`${T_LABEL_MVPB} text-brand-300`}>
                Moja misja
              </span>
            </Reveal>

            <Reveal delay={0.06} as="div" className="mt-9">
              <blockquote className="font-display max-w-[44rem] text-[2rem] leading-[1.16] tracking-[-0.018em] text-white sm:text-[2.6rem] lg:text-[2.9rem]">
                „{mission.quote}”
              </blockquote>
            </Reveal>

            <RevealGroup className="mt-12 flex max-w-[38rem] flex-col gap-6">
              {regular.slice(0, 2).map((paragraph) => (
                <RevealItem
                  as="span"
                  key={paragraph}
                  className="text-brand-200/85 block text-[0.9375rem] leading-[1.8] text-pretty sm:text-[1rem]"
                >
                  {paragraph}
                </RevealItem>
              ))}

              {/* wyciągnięte zdanie — wyróżnia je krój i stopień, nie kursywa */}
              <RevealItem
                as="span"
                className="font-display text-brand-200 border-brand-400/60 block border-l-2 py-1 pl-7 text-[1.25rem] leading-[1.55] sm:text-[1.4rem]"
              >
                {pulled}
              </RevealItem>

              {regular.slice(2).map((paragraph) => (
                <RevealItem
                  as="span"
                  key={paragraph}
                  className="text-brand-200/85 block text-[0.9375rem] leading-[1.8] text-pretty sm:text-[1rem]"
                >
                  {paragraph}
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal
              delay={0.1}
              className="border-brand-700/70 mt-14 max-w-[40rem] border-t pt-9"
            >
              <p className="font-display text-[1.25rem] leading-[1.5] text-white sm:text-[1.4rem]">
                {mission.closing}
              </p>
              <p className="text-brand-200/85 mt-5 text-[0.9375rem] leading-[1.8]">
                {missionF.foundation}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="md:col-span-5 md:pl-4 lg:pl-14">
            <figure className="md:sticky md:top-32">
              <div className="border-brand-800 bg-brand-900/60 relative aspect-4/5 overflow-hidden rounded-[1.5rem] border backdrop-blur-sm">
                <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <Image
                    src="/logo-bezpieczne-skrzydla.png"
                    alt=""
                    width={320}
                    height={320}
                    className="ring-brand-700 size-40 rounded-full object-cover ring-1 sm:size-44"
                  />
                  <p className={`${T_LABEL_MVPB} text-brand-300`}>
                    miejsce na zdjęcie autorki
                  </p>
                </div>
              </div>

              <figcaption className="border-brand-800 mt-7 border-t pt-7">
                <p className="font-display text-[1.2rem] text-white">
                  {site.owner}
                </p>
                <p className="text-brand-300 mt-2 text-[0.8125rem]">
                  Autorka szkoleń i Modelu 4R
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </ContainerMvpB>
    </SectionMvpB>
  );
}

/* ————— 07 · Kilka słów o BS — kolumny nad liniami zamiast kart ————— */

export function AboutMvpB() {
  return (
    <SectionMvpB id="o-nas">
      <ContainerMvpB>
        <SectionHeadMvpB
          index="07"
          label="O Bezpiecznych Skrzydłach"
          title="Kilka słów o"
          accent="Bezpiecznych Skrzydłach"
          align="center"
        />

        <RevealGroup className="mx-auto mt-16 grid max-w-[62rem] grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:mt-20">
          {aboutF.paragraphs.map((paragraph, i) => (
            <RevealItem
              key={paragraph}
              className="border-brand-300/70 flex flex-col border-t pt-7"
            >
              <h3 className="font-display text-brand-950 text-[1.25rem] tracking-tight">
                {aboutCardTitlesG[i]}
              </h3>
              <p
                className={`${T_BODY_MVPB} text-muted-foreground mt-4 text-pretty`}
              >
                {paragraph}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal
          delay={0.14}
          className="mx-auto mt-16 max-w-[42rem] text-center lg:mt-20"
        >
          <p className="font-display text-brand-800 text-[1.25rem] leading-[1.5] sm:text-[1.45rem]">
            {aboutF.closing}
          </p>
        </Reveal>
      </ContainerMvpB>
    </SectionMvpB>
  );
}

/* ————— 08 · Mocne strony — edytorialne wiersze z wariantu F ————— */

export function StrengthsMvpB() {
  return (
    <SectionMvpB id="mocne-strony" tone="tint">
      <ContainerMvpB>
        <SectionHeadMvpB
          index="08"
          label={strengthsF.label}
          title="Co wyróżnia"
          accent="Bezpieczne Skrzydła"
        />

        <RevealGroup
          as="ol"
          className="border-brand-200 mt-16 border-t lg:mt-20"
        >
          {strengthsF.items.map((item, i) => (
            <RevealItem
              as="li"
              key={item.title}
              className="border-brand-200 grid grid-cols-1 gap-x-10 gap-y-4 border-b py-10 md:grid-cols-12 lg:py-12"
            >
              <div className="flex items-baseline gap-6 md:col-span-5">
                <span
                  aria-hidden
                  className="text-outline-f font-display shrink-0 text-[1.7rem] leading-none font-medium select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-brand-950 text-[1.3rem] leading-[1.3] tracking-tight sm:text-[1.45rem]">
                  {item.title}
                </h3>
              </div>
              <p
                className={`${T_BODY_MVPB} text-muted-foreground max-w-[36rem] text-pretty md:col-span-7 md:pl-4 lg:pl-10`}
              >
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerMvpB>
    </SectionMvpB>
  );
}

/* ————— 09 · Dlaczego warto — punkty nad liniami i pas CTA ————— */

export function WhyMvpB() {
  return (
    <SectionMvpB id="dlaczego">
      <ContainerMvpB>
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeadMvpB
              index="09"
              label={whyF.label}
              title="Więcej niż prezentacja"
              accent="pełna definicji"
            />

            <Reveal
              delay={0.1}
              className={`${T_LEAD_MVPB} text-muted-foreground mt-8 max-w-[28rem] text-pretty`}
            >
              {whyF.intro}
            </Reveal>

            {whyF.closing.map((paragraph) => (
              <Reveal
                key={paragraph}
                delay={0.14}
                className={`${T_BODY_MVPB} text-muted-foreground mt-7 max-w-[28rem] text-pretty`}
              >
                {paragraph}
              </Reveal>
            ))}
          </div>

          <div className="md:col-span-7 md:pt-20 lg:pl-14">
            <RevealGroup as="ol" className="border-brand-200/80 flex flex-col border-t">
              {whyF.points.map((point, i) => (
                <RevealItem
                  as="li"
                  key={point}
                  className="border-brand-200/80 flex items-baseline gap-6 border-b py-5"
                >
                  <span
                    aria-hidden
                    className="font-display text-brand-600 shrink-0 text-[1rem]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-brand-900 text-[0.9375rem] leading-[1.6] sm:text-[1rem]">
                    {point}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>

        <Reveal className="mt-20 lg:mt-24">
          <div className="bg-brand-700 relative flex flex-col items-start gap-8 overflow-hidden rounded-[1.75rem] p-9 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <WingArcs
              animate={false}
              className="absolute -right-24 -bottom-28 w-[380px] opacity-25"
              count={7}
            />
            <p className="font-display relative max-w-[36rem] text-[1.5rem] leading-[1.35] text-balance sm:text-[1.8rem]">
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
      </ContainerMvpB>
    </SectionMvpB>
  );
}
