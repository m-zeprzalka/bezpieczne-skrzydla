import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Coffee,
  Mail,
  Phone,
} from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { model4r, pricing, programs, site, workshop } from "@/lib/content";
import { audiencesH, ctaH, missionH } from "@/lib/content-h";

/* — wspólny nagłówek sekcji: pastylka + masywny tytuł — */
function HeadH({
  label,
  title,
  outline,
  tone = "light",
  className,
}: {
  label: string;
  title: string;
  /** Fragment złożony konturem — plakatowy kontrapunkt. */
  outline?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-start gap-6", className)}>
      <Reveal>
        <span
          className={cn(
            "inline-block rounded-full border-2 px-4 py-2 text-[0.72rem] font-bold tracking-[0.16em] uppercase",
            tone === "light"
              ? "border-brand-950 text-brand-950 bg-white"
              : "border-brand-400 text-brand-300",
          )}
        >
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.06} as="div">
        <h2
          className={cn(
            "font-grotesk max-w-[56rem] text-[clamp(2rem,5.2vw,4rem)] leading-[0.98] font-extrabold tracking-[-0.025em] uppercase",
            tone === "light" ? "text-brand-950" : "text-white",
          )}
        >
          {title}{" "}
          {outline ? (
            <span
              className={
                tone === "light" ? "text-stroke-ink" : "text-stroke-white"
              }
            >
              {outline}
            </span>
          ) : null}
        </h2>
      </Reveal>
    </div>
  );
}

/* ————— Dla kogo: cztery chunky karty ————— */

export function AudiencesH() {
  return (
    <section className="mx-auto w-full max-w-[88rem] px-4 py-16 sm:px-6 sm:py-20">
      <HeadH label="Dla kogo" title="Cztery role," outline="jedna zasada" />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {audiencesH.map((item, i) => (
          <RevealItem
            key={item.title}
            className={cn(
              "lift-ink shadow-ink border-brand-950 flex min-h-[13rem] flex-col justify-between rounded-3xl border-2 p-7",
              ["bg-white", "bg-brand-200", "bg-brand-400", "bg-white"][i],
            )}
          >
            <span className="font-grotesk text-brand-950 text-[2.6rem] leading-none font-extrabold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-grotesk text-brand-950 text-[1.35rem] leading-[1.1] font-extrabold uppercase">
                {item.title}
              </h3>
              <p className="text-brand-950/70 mt-2 text-[0.9rem] leading-snug font-medium">
                {item.note}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

/* ————— Model 4R: przypinane karty (scroll-stack, czysty CSS) ————— */

const stackTones = [
  "bg-white",
  "bg-brand-200",
  "bg-brand-400",
  "bg-brand-950 text-white",
] as const;

export function ModelStackH() {
  return (
    <section id="model-4r" className="scroll-mt-24 p-3 sm:p-4">
      <div className="bg-brand-100 rounded-[2rem] px-4 py-16 sm:rounded-[2.5rem] sm:px-8 sm:py-24">
        <div className="mx-auto w-full max-w-[76rem]">
          <HeadH
            label="Autorski Model 4R"
            title="Cztery kroki."
            outline="Zero chaosu."
          />
          <Reveal
            delay={0.1}
            className="text-brand-800 mt-6 max-w-[36rem] text-[1.02rem] leading-[1.7]"
          >
            Praktyczna mapa działania, na której opieram każdy program.
            Przewijaj — karty układają się w stos, krok po kroku.
          </Reveal>

          {/* Stos: każda karta przykleja się nieco niżej niż poprzednia,
              następna nasuwa się na nią. Czysty position: sticky. */}
          <div className="mt-14 flex flex-col gap-6">
            {model4r.steps.map((step, i) => (
              <article
                key={step.key}
                style={{ top: `calc(6rem + ${i * 2.25}rem)` }}
                className={cn(
                  "shadow-ink border-brand-950 sticky rounded-3xl border-2 p-7 sm:p-10",
                  stackTones[i],
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="max-w-[38rem]">
                    <p
                      className={cn(
                        "text-[0.72rem] font-bold tracking-[0.18em] uppercase",
                        i === 3 ? "text-brand-300" : "text-brand-700",
                      )}
                    >
                      Krok {i + 1} / 4
                    </p>
                    <h3
                      className={cn(
                        "font-grotesk mt-3 text-[clamp(1.9rem,4vw,3.1rem)] leading-none font-extrabold uppercase",
                        i === 3 ? "text-white" : "text-brand-950",
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-4 text-[1.02rem] leading-snug font-bold",
                        i === 3 ? "text-brand-200" : "text-brand-900",
                      )}
                    >
                      {step.claim}
                    </p>
                    <p
                      className={cn(
                        "mt-3 max-w-[32rem] text-[0.92rem] leading-[1.65]",
                        i === 3 ? "text-brand-200/80" : "text-brand-950/70",
                      )}
                    >
                      {step.description}
                    </p>
                  </div>

                  <span
                    aria-hidden
                    className={cn(
                      "font-grotesk hidden text-[7rem] leading-none font-extrabold sm:block",
                      i === 3 ? "text-stroke-white" : "text-stroke-ink",
                    )}
                  >
                    {step.index}
                  </span>
                </div>

                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className={cn(
                        "rounded-full border-2 px-4 py-2 text-[0.8rem] leading-snug font-bold",
                        i === 3
                          ? "border-brand-400 text-brand-100"
                          : "border-brand-950 text-brand-950 bg-white/60",
                      )}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Szkolenia: poziomy pas kart ————— */

export function TrainingsH() {
  return (
    <section id="oferta" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <HeadH label="Oferta" title="Sześć programów" outline="do wyboru" />
          <Reveal
            delay={0.1}
            className="text-brand-950/70 flex items-center gap-2 pb-2 text-[0.9rem] font-bold"
          >
            Przewiń pas w bok
            <ArrowRight className="size-4" aria-hidden />
          </Reveal>
        </div>
      </div>

      {/* pełnoekranowy pas z przyciąganiem — celowo wychodzi poza kontener */}
      <div className="scrollbar-none mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(1.5rem,calc((100vw-88rem)/2+1.5rem))]">
        {programs.map((program, i) => (
          <article
            key={program.number}
            className={cn(
              "lift-ink shadow-ink border-brand-950 flex w-[86vw] shrink-0 snap-start flex-col rounded-3xl border-2 p-7 sm:w-[26rem]",
              i % 3 === 1 ? "bg-brand-200" : "bg-white",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="border-brand-950 text-brand-950 rounded-full border-2 px-3.5 py-1.5 text-[0.7rem] font-bold tracking-wide uppercase">
                {program.audience}
              </span>
              <span className="font-grotesk text-stroke-ink text-[2.4rem] leading-none font-extrabold">
                {program.number}
              </span>
            </div>

            <h3 className="font-grotesk text-brand-950 mt-6 text-[1.5rem] leading-[1.1] font-extrabold">
              {program.title}
            </h3>

            <p className="text-brand-950/70 mt-3 flex-none text-[0.9rem] leading-[1.6]">
              {program.summary}
            </p>

            <ul className="mt-5 flex flex-1 flex-col gap-2.5">
              {program.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-brand-950 flex gap-2.5 text-[0.875rem] leading-snug font-medium"
                >
                  <Check
                    className="text-brand-600 mt-0.5 size-4 shrink-0"
                    strokeWidth={3}
                    aria-hidden
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="border-brand-950 text-brand-950 hover:bg-brand-950 focus-visible:ring-ring/50 mt-7 inline-flex items-center justify-between rounded-full border-2 px-5 py-3 text-[0.9rem] font-bold outline-none hover:text-white focus-visible:ring-3"
            >
              Zapytaj o program
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </article>
        ))}

        {/* warsztat jako karta zamykająca pas */}
        <article className="lift-ink shadow-ink border-brand-950 bg-brand-950 flex w-[86vw] shrink-0 snap-start flex-col rounded-3xl border-2 p-7 text-white sm:w-[26rem]">
          <div className="flex items-start justify-between gap-4">
            <span className="border-brand-400 text-brand-300 inline-flex items-center gap-2 rounded-full border-2 px-3.5 py-1.5 text-[0.7rem] font-bold tracking-wide uppercase">
              <Coffee className="size-3.5" aria-hidden />
              {workshop.badge}
            </span>
            <span className="font-grotesk text-stroke-white text-[2.4rem] leading-none font-extrabold">
              06
            </span>
          </div>

          <h3 className="font-grotesk mt-6 text-[1.5rem] leading-[1.1] font-extrabold">
            {workshop.title}
          </h3>

          <p className="text-brand-200/85 mt-3 text-[0.9rem] leading-[1.6]">
            {workshop.subtitle}
          </p>

          <ul className="mt-5 flex flex-1 flex-col gap-2.5">
            {workshop.points.slice(0, 4).map((point) => (
              <li
                key={point}
                className="text-brand-100 flex gap-2.5 text-[0.875rem] leading-snug font-medium"
              >
                <Check
                  className="text-brand-400 mt-0.5 size-4 shrink-0"
                  strokeWidth={3}
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="border-brand-400 text-brand-950 bg-brand-400 hover:bg-brand-300 focus-visible:ring-brand-400/50 mt-7 inline-flex items-center justify-between rounded-full border-2 px-5 py-3 text-[0.9rem] font-bold outline-none focus-visible:ring-3"
          >
            Zapytaj o termin
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </article>
      </div>
    </section>
  );
}

/* ————— Misja: płyta błękitna z wielkim cytatem ————— */

export function MissionH() {
  return (
    <section id="misja" className="scroll-mt-24 p-3 sm:p-4">
      <div className="bg-brand-200 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        <div className="mx-auto grid w-full max-w-[84rem] grid-cols-1 gap-12 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <HeadH label="Misja" title="Dlaczego to" outline="robię" />

            <Reveal delay={0.08} as="div" className="mt-10">
              <blockquote className="font-grotesk text-brand-950 max-w-[46rem] text-[clamp(1.7rem,4vw,3rem)] leading-[1.08] font-extrabold">
                „{missionH.quote}”
              </blockquote>
            </Reveal>

            <Reveal
              delay={0.14}
              className="text-brand-950/75 mt-7 max-w-[36rem] text-[1rem] leading-[1.7]"
            >
              {missionH.body}
            </Reveal>

            <Reveal
              delay={0.18}
              className="shadow-ink border-brand-950 mt-9 max-w-[38rem] rounded-3xl border-2 bg-white p-7"
            >
              <p className="font-grotesk text-brand-950 text-[1.15rem] leading-[1.35] font-bold">
                {missionH.closing}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-4">
            <figure className="mx-auto max-w-[20rem] rotate-2 lg:mt-10">
              <div className="shadow-ink border-brand-950 flex aspect-4/5 flex-col items-center justify-center gap-5 rounded-3xl border-2 bg-white p-6 text-center">
                <Image
                  src="/logo-bezpieczne-skrzydla.png"
                  alt=""
                  width={220}
                  height={220}
                  className="border-brand-950 size-32 rounded-full border-2 object-cover"
                />
                <figcaption>
                  <p className="font-grotesk text-brand-950 text-[1.1rem] font-extrabold">
                    {site.owner}
                  </p>
                  <p className="text-brand-950/60 mt-1 text-[0.72rem] font-bold tracking-[0.14em] uppercase">
                    miejsce na zdjęcie
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ————— Cennik: trzy chunky karty ————— */

export function PricingH() {
  return (
    <section
      id="cennik"
      className="mx-auto w-full max-w-[88rem] scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <HeadH label="Cennik" title="Widełki" outline="bez gwiazdek" />

      <RevealGroup className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
        {pricing.map((plan) => (
          <RevealItem key={plan.name} className="flex">
            <article
              className={cn(
                "lift-ink shadow-ink border-brand-950 flex w-full flex-col rounded-3xl border-2 p-8",
                plan.featured ? "bg-brand-950 text-white" : "bg-white",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "text-[0.72rem] font-bold tracking-[0.16em] uppercase",
                    plan.featured ? "text-brand-300" : "text-brand-700",
                  )}
                >
                  {plan.name}
                </span>
                {plan.featured ? (
                  <span className="bg-brand-400 text-brand-950 rounded-full px-3.5 py-1.5 text-[0.68rem] font-extrabold uppercase">
                    Bestseller
                  </span>
                ) : null}
              </div>

              <p
                className={cn(
                  "font-grotesk mt-7 text-[3rem] leading-none font-extrabold tracking-tight",
                  plan.featured ? "text-white" : "text-brand-950",
                )}
              >
                {plan.price}
              </p>
              <p
                className={cn(
                  "mt-2 text-[0.85rem] font-bold",
                  plan.featured ? "text-brand-300" : "text-brand-950/60",
                )}
              >
                {plan.unit}
              </p>

              <ul
                className={cn(
                  "mt-7 flex flex-1 flex-col gap-3 border-t-2 pt-6",
                  plan.featured ? "border-white/15" : "border-brand-100",
                )}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex gap-2.5 text-[0.9rem] leading-snug font-medium",
                      plan.featured ? "text-brand-100" : "text-brand-950",
                    )}
                  >
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        plan.featured ? "text-brand-400" : "text-brand-600",
                      )}
                      strokeWidth={3}
                      aria-hidden
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={cn(
                  "focus-visible:ring-ring/50 mt-8 inline-flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3.5 text-[0.9rem] font-bold outline-none focus-visible:ring-3",
                  plan.featured
                    ? "border-brand-400 bg-brand-400 text-brand-950 hover:bg-brand-300"
                    : "border-brand-950 text-brand-950 hover:bg-brand-950 hover:text-white",
                )}
              >
                {plan.cta}
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal
        delay={0.1}
        className="text-brand-950/60 mt-8 max-w-[52rem] text-[0.85rem] leading-[1.65] font-medium"
      >
        Przy szkoleniu stacjonarnym do ceny mogą dojść wcześniej uzgodnione
        koszty dojazdu, noclegu, sali i organizacji spotkania — wszystko
        ustalane przed podpisaniem umowy.
      </Reveal>
    </section>
  );
}

/* ————— Finałowa płyta CTA + stopka ————— */

export function ContactH() {
  return (
    <section id="kontakt" className="scroll-mt-24 p-3 sm:p-4">
      <div className="bg-brand-400 relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        <div className="mx-auto flex w-full max-w-[84rem] flex-col items-start gap-10 px-5 py-16 sm:px-10 sm:py-24">
          <Reveal as="div">
            <h2 className="font-grotesk text-brand-950 text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95] font-extrabold tracking-[-0.03em] uppercase">
              {ctaH.titleTop}
              <span className="text-stroke-ink block">{ctaH.titleBottom}</span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.1}
            className="text-brand-950/75 max-w-[34rem] text-[1rem] leading-[1.7] font-medium"
          >
            {ctaH.note}
          </Reveal>

          <Reveal
            delay={0.16}
            className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center"
          >
            <a
              href={`mailto:${site.email}`}
              className="lift-ink shadow-ink border-brand-950 bg-brand-950 focus-visible:ring-ring/50 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 px-5 py-3 text-[0.85rem] font-bold break-all text-white outline-none focus-visible:ring-3 sm:h-16 sm:px-8 sm:text-[1rem]"
            >
              <Mail className="size-5 shrink-0" aria-hidden />
              {site.email}
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="lift-ink shadow-ink border-brand-950 focus-visible:ring-ring/50 inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 bg-white px-5 py-3 text-[0.95rem] font-bold outline-none focus-visible:ring-3 sm:h-16 sm:px-8 sm:text-[1rem]"
            >
              <Phone className="size-5 shrink-0" aria-hidden />
              {site.phone}
            </a>
          </Reveal>
        </div>
      </div>

      <footer className="mx-auto flex w-full max-w-[88rem] flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-brand-950/60 text-[0.82rem] font-medium">
          © {new Date().getFullYear()} {site.name} · {site.owner} · NIP{" "}
          {site.nip}
        </p>
        <div className="flex items-center gap-5 text-[0.82rem] font-bold">
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="text-brand-950 hover:text-brand-600"
          >
            Facebook
          </a>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-brand-950 hover:text-brand-600"
          >
            Instagram
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-brand-950 hover:text-brand-600"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </section>
  );
}
