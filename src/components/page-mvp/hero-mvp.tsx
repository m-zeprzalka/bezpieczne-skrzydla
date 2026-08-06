import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { ContainerMvp, T_LEAD_MVP } from "@/components/page-mvp/frame-mvp";
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

const statIcons = {
  compass: Compass,
  graduation: GraduationCap,
  badge: BadgeCheck,
  map: MapPin,
} as const;

/**
 * Hero jak w G — z poprawkami z maila klientki: akcent i lead bez kursywy
 * (wyróżnia je krój Fraunces i kolor), statystyki mówią o pięciu szkoleniach
 * i jednym warsztacie, a pasek haseł dostał własną, ciemną wstęgę — ma być
 * widoczny, nie dyskretny.
 */
export function HeroMvp() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="bg-aurora absolute inset-x-0 -top-32 -z-10 h-[720px] opacity-50 blur-[2px]"
      />

      <ContainerMvp className="grid grid-cols-1 items-center gap-x-8 gap-y-16 pt-16 pb-20 sm:pt-20 md:grid-cols-12 lg:pt-24 lg:pb-24">
        {/* — kolumna tekstowa: dokładnie treści klientki — */}
        <div className="md:col-span-7 lg:pr-6">
          <h1 className="font-display text-brand-950 text-[2.4rem] leading-[1.08] tracking-[-0.02em] sm:text-[3rem] lg:text-[3.55rem]">
            <RevealWords text={heroF.titleA} />{" "}
            <RevealWords text={heroF.titleB} delay={0.28} />{" "}
            <span className="text-brand-600">
              <RevealWords text={heroF.titleAccent} delay={0.36} />
            </span>{" "}
            <RevealWords text={heroF.titleC} delay={0.48} />
          </h1>

          <Reveal
            delay={0.55}
            className="font-display text-brand-700 mt-7 max-w-[34rem] text-[1.25rem] leading-[1.45] sm:text-[1.4rem]"
          >
            {heroF.lead}
          </Reveal>

          <Reveal
            delay={0.65}
            className={`${T_LEAD_MVP} text-muted-foreground mt-5 max-w-[36rem] text-pretty`}
          >
            {heroF.body}
          </Reveal>

          <Reveal
            delay={0.75}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
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

          {/* — ścieżka odbiorców zapisana przez klientkę strzałkami — */}
          <Reveal delay={0.85} className="mt-10">
            <p className="text-brand-800 flex flex-wrap items-center gap-x-3 gap-y-2.5 text-[0.9rem]">
              <span className="text-brand-600 font-semibold">
                {heroF.audiencePrefix}
              </span>
              {heroF.audiencePath.map((item, i) => (
                <span
                  key={item}
                  className="flex items-center gap-3 font-medium"
                >
                  {i > 0 ? (
                    <ArrowRight
                      className="text-brand-400 size-4 shrink-0"
                      aria-hidden
                    />
                  ) : null}
                  <span className="border-brand-200 rounded-full border bg-white/80 px-3.5 py-1.5">
                    {item}
                  </span>
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        {/* — kadr na zdjęcie autorki + pływające plakietki — */}
        <div className="relative md:col-span-5">
          <Reveal delay={0.35} className="relative mx-auto max-w-[26rem]">
            <div className="border-brand-200/80 shadow-lift-lg relative aspect-4/5 overflow-hidden rounded-[1.5rem] border bg-white">
              <div
                aria-hidden
                className="bg-aurora absolute inset-0 opacity-70"
              />
              <WingArcs
                animate={false}
                className="absolute -bottom-14 left-1/2 w-[480px] max-w-none -translate-x-1/2 opacity-35"
                count={9}
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                <Image
                  src="/logo-bezpieczne-skrzydla.png"
                  alt=""
                  width={320}
                  height={320}
                  className="ring-brand-200 size-36 rounded-full object-cover shadow-xl ring-1 sm:size-44"
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

            {/* plakietki na krawędziach kadru */}
            {heroChipsMvp.map((chip, i) => (
              <Reveal
                key={chip.title}
                delay={0.9 + i * 0.12}
                className={
                  [
                    "absolute -top-5 -left-4 sm:-left-8",
                    "absolute top-1/2 -right-4 sm:-right-10",
                    "absolute -bottom-5 -left-2 sm:-left-6",
                  ][i]
                }
              >
                <span className="border-brand-200/80 shadow-lift flex flex-col rounded-2xl border bg-white/95 px-4 py-2.5 backdrop-blur-md">
                  <span className="text-brand-600 text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
                    {chip.title}
                  </span>
                  <span className="text-brand-900 text-[0.82rem] font-semibold">
                    {chip.text}
                  </span>
                </span>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </ContainerMvp>

      {/* — pas liczb — */}
      <ContainerMvp className="pb-16">
        <RevealGroup className="border-brand-200/80 grid grid-cols-2 overflow-hidden rounded-2xl border bg-white/80 backdrop-blur-sm lg:grid-cols-4">
          {heroStatsMvp.map((stat, i) => {
            const Icon = statIcons[stat.icon];
            return (
              <RevealItem
                key={stat.label}
                className={`border-brand-200/80 flex items-center gap-4 p-6 ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i > 0 ? "lg:border-l" : ""}`}
              >
                <span className="bg-brand-50 text-brand-700 grid size-11 shrink-0 place-items-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-display text-brand-950 text-[1.25rem] leading-tight tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-[0.75rem] leading-snug">
                    {stat.label}
                  </span>
                </span>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </ContainerMvp>

      {/*
       * — przewijany pasek haseł —
       * Klientka: „może warto go bardziej pokazać, uwidocznić” — stąd ciemna
       * wstęga zamiast dyskretnej linii: większy stopień, mocniejszy kontrast.
       */}
      <div className="bg-brand-950 relative overflow-hidden py-5">
        <div
          aria-hidden
          className="bg-aurora-deep absolute inset-0 opacity-50"
        />
        <div
          aria-hidden
          className="mask-fade-edges animate-marquee relative flex w-max items-center gap-10 motion-reduce:animate-none"
        >
          {[...marqueeMvp, ...marqueeMvp].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="text-brand-100 text-[0.95rem] font-medium tracking-wide whitespace-nowrap">
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
