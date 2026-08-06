import * as React from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

/*
 * System wersji MVP B — te same treści i reguły redakcyjne co MVP,
 * ale skomponowane z dużą ilością światła:
 *   kontener 1248 px · marginesy boczne rosną do 56 px
 *   pion sekcji 112 → 144 → 176 px (wyraźnie więcej niż w F/MVP)
 *   zamiast kart i ramek — włoskowate linie i szerokie odstępy
 *   jedna szpalta czytelnicza zamiast ciasnych łamów
 * Reguła z maila klientki obowiązuje bez zmian: teksty dotąd składane
 * kursywą wyróżnia krój (Fraunces) lub stopień pisma — nigdy kursywa.
 * Kolor wyróżnienia zostaje.
 */

export const CONTAINER_MVPB =
  "mx-auto w-full max-w-[78rem] px-6 sm:px-10 lg:px-14";
export const SECTION_Y_MVPB = "py-28 md:py-36 lg:py-44";

export const T_H2_MVPB =
  "font-display text-[2rem] leading-[1.14] tracking-[-0.018em] sm:text-[2.5rem] lg:text-[2.85rem]";
export const T_H3_MVPB =
  "font-display text-[1.4rem] leading-[1.3] tracking-[-0.01em]";
export const T_LEAD_MVPB = "text-[1.0625rem] leading-[1.8] sm:text-[1.125rem]";
export const T_BODY_MVPB = "text-[0.9375rem] leading-[1.8] sm:text-[1rem]";
export const T_LABEL_MVPB =
  "text-[0.72rem] font-semibold uppercase tracking-[0.24em]";

export function ContainerMvpB({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(CONTAINER_MVPB, className)} {...props} />;
}

export function SectionMvpB({
  className,
  tone = "white",
  ...props
}: React.ComponentProps<"section"> & {
  tone?: "white" | "tint" | "warm" | "deep";
}) {
  return (
    <section
      className={cn(
        "relative scroll-mt-24",
        SECTION_Y_MVPB,
        tone === "tint" && "bg-brand-50/60",
        tone === "warm" && "bg-sand/45",
        tone === "deep" && "bg-brand-950 text-brand-100",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Nagłówek sekcji wersji B: numer w obrysie i etykieta, tytuł Fraunces
 * z akcentem wyróżnionym wyłącznie kolorem, lead o szerokim interlinii.
 * Więcej powietrza niż w MVP — odstępy rosną z 6 do 7–8 jednostek.
 */
export function SectionHeadMvpB({
  index,
  label,
  title,
  accent,
  after,
  lead,
  align = "left",
  tone = "light",
  className,
}: {
  index: string;
  label: string;
  title: string;
  /** Słowo lub fraza w kolorze akcentu — prosto, bez kursywy. */
  accent?: string;
  after?: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered
          ? "mx-auto max-w-[46rem] items-center text-center"
          : "max-w-[46rem]",
        className,
      )}
    >
      <Reveal
        className={cn(
          "flex items-baseline gap-4",
          centered && "justify-center",
        )}
      >
        <span
          aria-hidden
          className="text-outline-f font-display text-[2.3rem] leading-none font-medium select-none"
        >
          {index}
        </span>
        <span
          className={cn(
            T_LABEL_MVPB,
            tone === "light" ? "text-brand-600" : "text-brand-300",
          )}
        >
          {label}
        </span>
      </Reveal>

      <Reveal delay={0.06} as="div" className="mt-8">
        <h2
          className={cn(
            T_H2_MVPB,
            tone === "light" ? "text-brand-950" : "text-white",
          )}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <span
                className={
                  tone === "light" ? "text-brand-600" : "text-brand-300"
                }
              >
                {accent}
              </span>
            </>
          ) : null}
          {after ? ` ${after}` : ""}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal
          delay={0.12}
          className={cn(
            T_LEAD_MVPB,
            "mt-7 text-pretty",
            tone === "light" ? "text-muted-foreground" : "text-brand-200/85",
          )}
        >
          {lead}
        </Reveal>
      ) : null}
    </div>
  );
}
