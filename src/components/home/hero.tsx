import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, GraduationCap, MapPin } from "lucide-react";

import { AuthorPortrait } from "@/components/system/author-portrait";
import { Container } from "@/components/system/container";
import { IconTile } from "@/components/system/icon-tile";
import { Reveal, RevealGroup, RevealItem, RevealWords } from "@/components/system/reveal";
import { Button } from "@/components/ui/button";
import { hero, heroStats } from "@/content/home";

const statIcons = {
  compass: Compass,
  graduation: GraduationCap,
  badge: BadgeCheck,
  map: MapPin,
} as const;

/**
 * Sekcja powitalna — treść klientki 1:1. Akcent i lead bez kursywy
 * (wyróżnia je krój i kolor). Ścieżka odbiorców to cztery odnośniki do
 * szkoleń — na wąskich ekranach zawijają się jak pastylki, bez strzałek.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="bg-aurora absolute inset-x-0 -top-40 -z-10 h-[760px] opacity-55" />
      <div aria-hidden className="bg-grid mask-radial absolute inset-x-0 top-0 -z-10 h-[760px] opacity-35" />

      <Container className="grid grid-cols-1 items-center gap-x-8 gap-y-14 pt-12 pb-16 sm:pt-16 md:grid-cols-12 lg:pt-20 lg:pb-20">
        <div className="md:col-span-7 lg:pr-6">
          <h1 className="text-display text-ink">
            <RevealWords text={hero.titleA} /> <RevealWords text={hero.titleB} delay={0.24} />{" "}
            <span className="text-brand-600">
              <RevealWords text={hero.titleAccent} delay={0.3} />
            </span>{" "}
            <RevealWords text={hero.titleC} delay={0.42} />
          </h1>

          <Reveal
            delay={0.5}
            as="p"
            className="mt-7 max-w-[34rem] font-display text-[1.3rem] leading-[1.4] text-brand-700 sm:text-[1.45rem]"
          >
            {hero.lead}
          </Reveal>

          <Reveal delay={0.6} as="p" className="text-lead mt-5 max-w-[36rem] text-pretty text-ink-muted">
            {hero.body}
          </Reveal>

          <Reveal delay={0.7} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button asChild variant="brand" size="xl" className="w-full sm:w-auto">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </Link>
            </Button>
            <Link
              href={hero.secondaryCta.href}
              className="focus-ring link-underline rounded-sm text-[0.9375rem] font-semibold text-brand-800 transition-colors hover:text-brand-600"
            >
              {hero.secondaryCta.label}
            </Link>
          </Reveal>

          <Reveal delay={0.8} className="mt-10">
            <p className="t-label text-brand-600">{hero.audiencePrefix} kogo?</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {hero.audiencePath.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring group inline-flex min-h-10 items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-[0.875rem] font-medium text-brand-900 transition-[border-color,background-color,color] duration-300 hover:border-brand-500 hover:bg-white hover:text-brand-700"
                  >
                    {hero.audiencePrefix} {item.label}
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 text-brand-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-600"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative md:col-span-5">
          <Reveal delay={0.3} y={24} className="relative mx-auto max-w-[24rem] lg:max-w-[26rem]">
            <AuthorPortrait preload />

            {hero.chips.map((chip, i) => (
              <Reveal
                key={chip.title}
                delay={0.9 + i * 0.12}
                className={
                  [
                    "absolute -top-5 -left-3 hidden sm:block lg:-left-10",
                    "absolute top-[46%] -right-3 hidden sm:block lg:-right-10",
                    "absolute -bottom-5 left-4 hidden sm:block lg:-left-4",
                  ][i]
                }
              >
                <span className="flex flex-col rounded-2xl border border-brand-200/80 bg-white/95 px-4 py-2.5 shadow-lift backdrop-blur-md">
                  <span className="t-label text-[0.6rem] text-brand-600">{chip.title}</span>
                  <span className="mt-1 text-[0.82rem] font-semibold text-brand-900">{chip.text}</span>
                </span>
              </Reveal>
            ))}
          </Reveal>

          {/* na telefonie plakietki układają się pod kadrem, nie na nim */}
          <ul className="mt-5 flex flex-wrap justify-center gap-2 sm:hidden">
            {hero.chips.map((chip) => (
              <li key={chip.title} className="flex flex-col rounded-2xl border border-brand-200/80 bg-white px-3.5 py-2">
                <span className="t-label text-[0.58rem] text-brand-600">{chip.title}</span>
                <span className="mt-0.5 text-[0.78rem] font-semibold text-brand-900">{chip.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* — pas liczb — */}
      <Container className="pb-14 lg:pb-16">
        <RevealGroup
          as="ul"
          className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-brand-200/80 bg-brand-200/70 min-[480px]:grid-cols-2 lg:grid-cols-4"
        >
          {heroStats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <RevealItem as="li" key={stat.label} className="flex items-center gap-4 bg-white p-5 sm:p-6">
                <IconTile tone="tint">
                  <Icon aria-hidden />
                </IconTile>
                <span className="flex min-w-0 flex-col">
                  <span className="font-display text-[1.3rem] leading-tight tracking-tight text-ink">{stat.value}</span>
                  <span className="mt-0.5 text-caption leading-snug text-ink-muted">{stat.label}</span>
                </span>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
