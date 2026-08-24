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
 * szkoleń; pod nimi cztery fakty 2×2. Kadr autorki zaczyna się od górnej
 * krawędzi sekcji i na desktopie jest przyklejony przez całą wysokość obu
 * wierszy siatki (żaden przodek nie ma overflow-hidden — to warunek sticky).
 */
export function Hero() {
  return (
    <section className="relative bg-white">
      <div aria-hidden className="bg-aurora absolute inset-x-0 top-0 -z-10 h-[640px] opacity-60" />

      <Container className="grid grid-cols-1 items-start gap-x-12 gap-y-16 pt-16 pb-24 sm:pt-20 md:grid-cols-12 lg:pt-24 lg:pb-32">
        <div className="order-1 md:order-none md:col-span-7 lg:pr-10">
          <h1 className="text-display text-ink">
            <span className="sr-only">
              {hero.titleA} {hero.titleB} {hero.titleAccent} {hero.titleC}
            </span>
            <span aria-hidden>
              <RevealWords text={hero.titleA} /> <RevealWords text={hero.titleB} delay={0.24} />{" "}
              <span className="text-brand-600">
                <RevealWords text={hero.titleAccent} delay={0.3} />
              </span>{" "}
              <RevealWords text={hero.titleC} delay={0.42} />
            </span>
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

          <Reveal delay={0.7} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="brand" size="xl" className="w-full sm:w-auto">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </Link>
            </Button>
            <Button asChild variant="outline-brand" size="xl" className="w-full sm:w-auto">
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
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

        {/*
         * Kadr od górnej krawędzi sekcji, rozpięty na oba wiersze siatki (tekst
         * i fakty), więc na desktopie ma po czym się przykleić. Sticky działa
         * tylko wtedy, gdy żaden przodek nie ma overflow-hidden — dlatego
         * sekcja hero go nie ma. Na mobile kolejność: tekst → kadr → fakty.
         */}
        <div className="order-2 md:order-none md:col-span-5 md:col-start-8 md:row-span-2 md:self-stretch">
          <div className="md:sticky md:top-24">
            <Reveal delay={0.3} y={24} className="mx-auto max-w-[22rem] lg:ml-auto lg:max-w-[24rem]">
              <AuthorPortrait preload />
            </Reveal>
          </div>
        </div>

        {/* — cztery fakty 2×2 pod tekstem (desktop) / pod kadrem (mobile) — */}
        <RevealGroup
          as="ul"
          className="order-3 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-brand-200/80 pt-10 min-[480px]:grid-cols-2 md:order-none md:col-span-7"
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
