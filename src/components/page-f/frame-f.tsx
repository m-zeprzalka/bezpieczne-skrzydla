import * as React from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

/*
 * System wariantu F — dyscyplina E, uroda A:
 *   kontener 1216 px · siatka 12 kolumn · odstęp 32 px
 *   pion sekcji 96 → 128 → 160 px (więcej światła niż gdziekolwiek wcześniej)
 *   typografia skokowa na breakpointach, bez jednostek vw
 */

export const CONTAINER_F = "mx-auto w-full max-w-[76rem] px-5 sm:px-8 lg:px-10";
export const SECTION_Y_F = "py-24 md:py-32 lg:py-40";
export const GRID_12_F = "grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12";

export const T_DISPLAY_F =
  "font-display text-[2.6rem] leading-[1.08] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4.15rem]";
export const T_H2_F =
  "font-display text-[2.1rem] leading-[1.12] tracking-[-0.018em] sm:text-[2.6rem] lg:text-[3rem]";
export const T_H3_F =
  "font-display text-[1.45rem] leading-[1.25] tracking-[-0.01em]";
export const T_LEAD_F = "text-[1.0625rem] leading-[1.75] sm:text-[1.125rem]";
export const T_BODY_F = "text-[0.9375rem] leading-[1.75] sm:text-[1rem]";
export const T_LABEL_F =
  "text-[0.72rem] font-semibold uppercase tracking-[0.2em]";

export function ContainerF({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(CONTAINER_F, className)} {...props} />;
}

export function SectionF({
  className,
  tone = "white",
  ...props
}: React.ComponentProps<"section"> & { tone?: "white" | "tint" | "deep" }) {
  return (
    <section
      className={cn(
        "relative scroll-mt-24",
        SECTION_Y_F,
        tone === "tint" && "bg-brand-50/70",
        tone === "deep" && "bg-brand-950 text-brand-100",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Nagłówek sekcji: numer w obrysie, etykieta, tytuł szeryfowy z akcentem
 * w kursywie. Podpis marki wariantu F — powtarza się w każdej sekcji
 * w identycznym rytmie.
 */
export function SectionHeadF({
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
  /** Słowo lub fraza składana kursywą Fraunces w kolorze akcentu. */
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
          className="text-outline-f font-display text-[2.4rem] leading-none font-medium select-none"
        >
          {index}
        </span>
        <span
          className={cn(
            T_LABEL_F,
            tone === "light" ? "text-brand-600" : "text-brand-300",
          )}
        >
          {label}
        </span>
      </Reveal>

      <Reveal delay={0.06} as="div" className="mt-6">
        <h2
          className={cn(
            T_H2_F,
            tone === "light" ? "text-brand-950" : "text-white",
          )}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <em
                className={cn(
                  "italic",
                  tone === "light" ? "text-brand-600" : "text-brand-300",
                )}
              >
                {accent}
              </em>
            </>
          ) : null}
          {after ? ` ${after}` : ""}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal
          delay={0.12}
          className={cn(
            T_LEAD_F,
            "mt-6 text-pretty",
            tone === "light" ? "text-muted-foreground" : "text-brand-200/85",
          )}
        >
          {lead}
        </Reveal>
      ) : null}
    </div>
  );
}
