"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Menu, Phone } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Reveal, RevealWords } from "@/components/site/reveal";
import { site } from "@/lib/content";
import { heroH, navH, tickerH } from "@/lib/content-h";

/* Chunky przycisk — wspólny wygląd wszystkich CTA wariantu H */
export function ButtonH({
  href,
  children,
  tone = "sky",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "sky" | "white" | "ink";
  className?: string;
}) {
  const tones = {
    sky: "bg-brand-400 text-brand-950 border-brand-950",
    white: "bg-white text-brand-950 border-brand-950",
    ink: "bg-brand-950 text-white border-brand-950",
  } as const;

  return (
    <Link
      href={href}
      className={`lift-ink shadow-ink-sm focus-visible:ring-ring/50 inline-flex h-14 items-center gap-2.5 rounded-full border-2 px-7 text-[0.95rem] font-bold outline-none focus-visible:ring-3 ${tones[tone]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function HeaderH() {
  return (
    <header className="border-brand-950 sticky top-0 z-50 border-b-2 bg-white">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[88rem] items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          href="/page-h"
          className="focus-visible:ring-ring/50 flex shrink-0 items-center gap-3 rounded-full outline-none focus-visible:ring-3"
        >
          <Image
            src="/logo-bezpieczne-skrzydla.png"
            alt=""
            width={88}
            height={88}
            priority
            className="border-brand-950 size-11 rounded-full border-2 object-cover"
          />
          <span className="font-grotesk text-brand-950 hidden text-[1.05rem] leading-none font-extrabold tracking-tight sm:block">
            Bezpieczne
            <br />
            Skrzydła
          </span>
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navH.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-950 hover:bg-brand-100 focus-visible:ring-ring/50 rounded-full px-5 py-2.5 text-[0.9rem] font-bold outline-none focus-visible:ring-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="text-brand-950 hover:bg-brand-100 hidden items-center gap-2 rounded-full px-4 py-2.5 text-[0.9rem] font-bold outline-none focus-visible:ring-3 xl:flex"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>

          <ButtonH
            href="#kontakt"
            tone="sky"
            className="hidden h-12 px-6 sm:inline-flex"
          >
            Umów rozmowę
            <ArrowRight className="size-4" aria-hidden />
          </ButtonH>

          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Otwórz menu"
                className="lift-ink shadow-ink-sm border-brand-950 focus-visible:ring-ring/50 grid size-12 place-items-center rounded-full border-2 bg-white outline-none focus-visible:ring-3 lg:hidden"
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetHeader className="border-b">
                <SheetTitle className="font-grotesk text-brand-950 font-extrabold">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav aria-label="Nawigacja mobilna" className="flex flex-col p-4">
                {navH.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-brand-950 hover:bg-brand-50 border-brand-100 focus-visible:ring-ring/50 border-b px-2 py-4 text-lg font-bold outline-none last:border-b-0 focus-visible:ring-3"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 p-4">
                <SheetClose asChild>
                  <ButtonH
                    href="#kontakt"
                    tone="sky"
                    className="justify-center"
                  >
                    Umów rozmowę
                    <ArrowRight className="size-4" aria-hidden />
                  </ButtonH>
                </SheetClose>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="border-brand-950 text-brand-950 inline-flex h-14 items-center justify-center rounded-full border-2 bg-white text-[0.95rem] font-bold"
                >
                  {site.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/**
 * Hero-płyta: granatowy slab z masywnym groteskiem, naklejkami
 * i tickerem wzdłuż dolnej krawędzi.
 */
export function HeroH() {
  return (
    <section className="p-3 sm:p-4">
      <div className="bg-brand-950 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        {/* siatka plakatowa w tle */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px]"
        />

        <div className="relative mx-auto w-full max-w-[84rem] px-5 pt-16 pb-0 sm:px-10 sm:pt-24">
          <Reveal className="border-brand-400 text-brand-300 inline-flex items-center gap-2.5 rounded-full border-2 px-4 py-2 text-[0.72rem] font-bold tracking-[0.16em] uppercase">
            <span aria-hidden className="bg-brand-400 size-2 rounded-full" />
            {heroH.kicker}
          </Reveal>

          <h1 className="font-grotesk mt-8 text-[clamp(2.6rem,8.2vw,7rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-white uppercase">
            <span className="block">
              <RevealWords text={heroH.lineA} />
            </span>
            <span className="text-stroke-white block">
              <RevealWords text={heroH.lineB} delay={0.2} />
            </span>
            <span className="text-brand-400 block">
              <RevealWords text={heroH.lineC} delay={0.4} />
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-10 pb-14 lg:flex-row lg:items-end lg:justify-between sm:pb-20">
            <Reveal
              delay={0.55}
              className="text-brand-200 max-w-[34rem] text-[1.02rem] leading-[1.7] text-pretty sm:text-[1.1rem]"
            >
              {heroH.lead}
            </Reveal>

            <Reveal delay={0.65} className="flex flex-wrap items-center gap-4">
              <ButtonH href={heroH.primary.href} tone="sky">
                {heroH.primary.label}
                <ArrowDownRight className="size-5" aria-hidden />
              </ButtonH>
              <Link
                href={heroH.secondary.href}
                className="text-white underline decoration-[var(--brand-400)] decoration-2 underline-offset-[10px] hover:decoration-white focus-visible:ring-ring/50 rounded text-[0.95rem] font-bold outline-none focus-visible:ring-3"
              >
                {heroH.secondary.label}
              </Link>
            </Reveal>
          </div>

          {/* naklejka z logo — rogiem wychodzi poza rytm tekstu */}
          <Reveal
            delay={0.8}
            className="absolute top-24 right-6 hidden rotate-6 lg:block xl:right-16"
          >
            <div className="shadow-sky border-brand-950 grid size-36 place-items-center rounded-full border-2 bg-white xl:size-44">
              <Image
                src="/logo-bezpieczne-skrzydla.png"
                alt=""
                width={160}
                height={160}
                className="size-[86%] rounded-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal
            delay={0.95}
            className="absolute top-[17.5rem] right-24 hidden -rotate-3 xl:block"
          >
            <span className="shadow-ink-sm border-brand-950 bg-brand-400 text-brand-950 inline-block rounded-full border-2 px-5 py-2.5 text-[0.85rem] font-extrabold">
              kursy od 229 zł
            </span>
          </Reveal>
        </div>

        {/* ticker wzdłuż dolnej krawędzi płyty */}
        <div className="relative overflow-hidden border-t-2 border-white/15 py-4">
          <div
            aria-hidden
            className="animate-marquee flex w-max items-center gap-8 motion-reduce:animate-none"
          >
            {[...tickerH, ...tickerH].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-8">
                <span className="font-grotesk text-[0.95rem] font-bold tracking-wide whitespace-nowrap text-white/85 uppercase">
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
            {tickerH.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
