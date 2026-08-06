import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContainerMvpB, T_LEAD_MVPB } from "@/components/page-mvp-b/frame-mvp-b";
import {
  Reveal,
  RevealGroup,
  RevealItem,
  RevealWords,
} from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";
import { heroF } from "@/lib/content-f";
import { heroChipsMvp, heroStatsMvp, marqueeMvp } from "@/lib/content-mvp";

/**
 * Sekcja powitalna wersji B — treści dokładnie jak w G/MVP, kompozycja
 * z większą ilością światła: ścieżka odbiorców bez plakietek, informacje
 * z pływających chipsów jako spokojne wiersze pod kadrem, pas liczb bez
 * pudełka — tylko wartości nad włoskowatymi liniami. Pasek haseł zostaje
 * ciemną, dobrze widoczną wstęgą (prośba klientki).
 */
export function HeroMvpB() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="bg-aurora absolute inset-x-0 -top-40 -z-10 h-[760px] opacity-40 blur-[2px]"
      />

      <ContainerMvpB className="grid grid-cols-1 items-start gap-x-10 gap-y-20 pt-20 pb-24 sm:pt-24 md:grid-cols-12 lg:pt-32 lg:pb-28">
        {/* — kolumna tekstowa: dokładnie treści klientki — */}
        <div className="md:col-span-7 lg:pr-10">
          <h1 className="font-display text-brand-950 text-[2.5rem] leading-[1.1] tracking-[-0.02em] sm:text-[3.1rem] lg:text-[3.6rem]">
            <RevealWords text={heroF.titleA} />{" "}
            <RevealWords text={heroF.titleB} delay={0.28} />{" "}
            <span className="text-brand-600">
              <RevealWords text={heroF.titleAccent} delay={0.36} />
            </span>{" "}
            <RevealWords text={heroF.titleC} delay={0.48} />
          </h1>

          {/* lead bez kursywy — wyróżnia go krój Fraunces i kolor */}
          <Reveal
            delay={0.55}
            className="font-display text-brand-700 mt-8 max-w-[32rem] text-[1.3rem] leading-[1.5] sm:text-[1.45rem]"
          >
            {heroF.lead}
          </Reveal>

          <Reveal
            delay={0.65}
            className={`${T_LEAD_MVPB} text-muted-foreground mt-6 max-w-[34rem] text-pretty`}
          >
            {heroF.body}
          </Reveal>

          <Reveal
            delay={0.75}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Button
              asChild
              variant="brand"
              size="xl"
              className="rounded-full px-8 font-semibold"
            >
              <Link href={heroF.primaryCta.href}>
                {heroF.primaryCta.label}
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </Link>
            </Button>

            <Link
              href={heroF.secondaryCta.href}
              className="text-brand-800 hover:text-brand-600 decoration-brand-300 hover:decoration-brand-500 focus-visible:ring-ring/50 rounded text-[0.9375rem] font-semibold underline decoration-2 underline-offset-[10px] outline-none focus-visible:ring-3"
            >
              {heroF.secondaryCta.label}
            </Link>
          </Reveal>

          {/* — ścieżka odbiorców zapisana przez klientkę strzałkami —
              bez obwódek: sam tekst i strzałki, dużo lżejszy zapis */}
          <Reveal delay={0.85} className="mt-14">
            <p className="text-brand-800 flex flex-wrap items-center gap-x-3.5 gap-y-2.5 text-[0.9375rem]">
              <span className="text-brand-600 font-semibold">
                {heroF.audiencePrefix}
              </span>
              {heroF.audiencePath.map((item, i) => (
                <span
                  key={item}
                  className="flex items-center gap-3.5 font-medium"
                >
                  {i > 0 ? (
                    <ArrowRight
                      className="text-brand-400 size-4 shrink-0"
                      aria-hidden
                    />
                  ) : null}
                  {item}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        {/* — kadr na zdjęcie autorki + spokojne wiersze zamiast plakietek — */}
        <div className="md:col-span-5">
          <Reveal delay={0.35} className="mx-auto max-w-[24rem]">
            <div className="border-brand-200/70 shadow-lift-lg relative aspect-4/5 overflow-hidden rounded-[1.75rem] border bg-white">
              <div
                aria-hidden
                className="bg-aurora absolute inset-0 opacity-60"
              />
              <WingArcs
                animate={false}
                className="absolute -bottom-14 left-1/2 w-[480px] max-w-none -translate-x-1/2 opacity-30"
                count={9}
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                <Image
                  src="/logo-bezpieczne-skrzydla.png"
                  alt=""
                  width={320}
                  height={320}
                  className="ring-brand-200 size-36 rounded-full object-cover shadow-xl ring-1 sm:size-40"
                />
                <div>
                  <p className="font-display text-brand-950 text-[1.2rem]">
                    {site.owner}
                  </p>
                  <p className="text-brand-600 mt-1.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase">
                    miejsce na zdjęcie autorki
                  </p>
                </div>
              </div>
            </div>

            {/* informacje z dawnych plakietek — wiersze nad włoskowatymi liniami */}
            <dl className="mt-8 flex flex-col">
              {heroChipsMvp.map((chip) => (
                <div
                  key={chip.title}
                  className="border-brand-200/80 flex items-baseline justify-between gap-6 border-t py-3.5"
                >
                  <dt className="text-brand-600 text-[0.66rem] font-semibold tracking-[0.18em] uppercase">
                    {chip.title}
                  </dt>
                  <dd className="text-brand-900 text-right text-[0.875rem] font-semibold">
                    {chip.text}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </ContainerMvpB>

      {/* — pas liczb: bez pudełka, wartości nad włoskowatymi liniami — */}
      <ContainerMvpB className="pb-24 lg:pb-28">
        <RevealGroup className="grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-4">
          {heroStatsMvp.map((stat) => (
            <RevealItem
              key={stat.label}
              className="border-brand-300/70 flex flex-col border-t pt-6"
            >
              <span className="font-display text-brand-950 text-[1.7rem] leading-none tracking-tight sm:text-[2rem]">
                {stat.value}
              </span>
              <span className="text-muted-foreground mt-3 max-w-[13rem] text-[0.8125rem] leading-[1.6] sm:text-[0.875rem]">
                {stat.label}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerMvpB>

      {/*
       * — przewijany pasek haseł —
       * Klientka: „może warto go bardziej pokazać, uwidocznić” — ciemna,
       * wyraźna wstęga zostaje także w wersji B, odrobinę wyższa.
       */}
      <div className="bg-brand-950 relative overflow-hidden py-6">
        <div
          aria-hidden
          className="bg-aurora-deep absolute inset-0 opacity-50"
        />
        <div
          aria-hidden
          className="mask-fade-edges animate-marquee relative flex w-max items-center gap-12 motion-reduce:animate-none"
        >
          {[...marqueeMvp, ...marqueeMvp].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-12">
              <span className="text-brand-100 text-[1rem] font-medium tracking-wide whitespace-nowrap">
                {item}
              </span>
              <span
                aria-hidden
                className="bg-brand-400 size-2 shrink-0 rounded-full"
              />
            </span>
          ))}
        </div>
        <ul className="sr-only">
          {marqueeMvp.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
