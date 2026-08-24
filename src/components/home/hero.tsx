import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, GraduationCap, MapPin } from "lucide-react";

import { AuthorPortrait } from "@/components/system/author-portrait";
import { Container } from "@/components/system/container";
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
 * szkoleń. Pod spodem cztery fakty w jednej cichej linii — bez ramek.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="bg-aurora absolute inset-x-0 -top-40 -z-10 h-[720px] opacity-35" />

      <Container className="grid grid-cols-1 items-center gap-x-12 gap-y-16 pt-16 pb-20 sm:pt-20 md:grid-cols-12 lg:pt-28 lg:pb-28">
        <div className="md:col-span-7 lg:pr-10">
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
            className="mt-8 max-w-[30rem] font-display text-[1.2rem] leading-[1.45] text-brand-700 sm:text-[1.3rem]"
          >
            {hero.lead}
          </Reveal>

          <Reveal delay={0.6} as="p" className="mt-5 max-w-[32rem] text-body text-pretty text-ink-muted">
            {hero.body}
          </Reveal>

          <Reveal delay={0.7} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
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
              className="focus-ring link-underline rounded-sm text-[0.9rem] font-semibold text-brand-800 transition-colors hover:text-brand-600"
            >
              {hero.secondaryCta.label}
            </Link>
          </Reveal>

          <Reveal delay={0.8} className="mt-12">
            <p className="t-label text-brand-600">{hero.audiencePrefix} kogo?</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {hero.audiencePath.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring group inline-flex min-h-10 items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-[0.85rem] font-medium text-brand-900 transition-[border-color,background-color,color] duration-300 hover:border-brand-500 hover:bg-white hover:text-brand-700"
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

        <div className="md:col-span-5">
          <Reveal delay={0.3} y={24} className="mx-auto max-w-[22rem] lg:ml-auto lg:max-w-[24rem]">
            <AuthorPortrait preload />
          </Reveal>
        </div>
      </Container>

      {/* — cztery fakty w jednej linii — */}
      <Container className="pb-20 lg:pb-24">
        <RevealGroup
          as="ul"
          className="grid grid-cols-1 gap-y-8 border-t border-brand-200/80 pt-10 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-x-10"
        >
          {heroStats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <RevealItem as="li" key={stat.label} className="flex flex-col gap-3">
                <Icon className="size-5 text-brand-500" aria-hidden />
                <span className="flex flex-col">
                  <span className="font-display text-[1.35rem] leading-tight tracking-tight text-ink">{stat.value}</span>
                  <span className="mt-1 max-w-[16rem] text-small leading-snug text-ink-muted">{stat.label}</span>
                </span>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
