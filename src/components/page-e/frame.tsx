import * as React from "react";

import { cn } from "@/lib/utils";

/*
 * Jedno źródło prawdy dla siatki i rytmu. Każda sekcja wariantu E używa
 * wyłącznie tych stałych — dzięki temu odstępy nie rozjeżdżają się między
 * ekranami i nie trzeba ich za każdym razem dobierać na oko.
 */

/** Kontener 1200 px z marginesami rosnącymi skokowo, nie płynnie. */
export const CONTAINER = "mx-auto w-full max-w-[75rem] px-5 sm:px-8 lg:px-10";

/** Pion sekcji: 80 → 112 → 144 px. */
export const SECTION_Y = "py-20 md:py-28 lg:py-36";

/** Siatka 12 kolumn, odstęp kolumn 32 px, odstęp wierszy 48 px. */
export const GRID_12 = "grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-12";

/* — skala typograficzna: skoki na breakpointach, bez jednostek vw — */
export const T_DISPLAY =
  "text-[2.5rem] leading-[1.14] tracking-[-0.025em] sm:text-[3.25rem] lg:text-[3.5rem]";
export const T_H2 =
  "text-[2rem] leading-[1.18] tracking-[-0.022em] sm:text-[2.5rem] lg:text-[2.875rem]";
export const T_H3 = "text-[1.25rem] leading-[1.35] tracking-[-0.012em]";
export const T_LEAD = "text-[1.0625rem] leading-[1.7] sm:text-[1.125rem]";
export const T_BODY = "text-[0.9375rem] leading-[1.7]";
export const T_LABEL =
  "text-[0.75rem] font-semibold uppercase tracking-[0.14em]";

export function ContainerE({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(CONTAINER, className)} {...props} />;
}

export function SectionE({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("scroll-mt-20", SECTION_Y, className)} {...props} />
  );
}

export function LabelE({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn(T_LABEL, "text-brand-600", className)} {...props} />;
}

/** Włoskowata linia rozdzielająca — jedyny rodzaj separatora w tym wariancie. */
export function RuleE({ className }: { className?: string }) {
  return <hr className={cn("border-brand-200 border-t", className)} />;
}

/**
 * Nagłówek z jednym podkreślonym słowem. Podkreślenie jest rysowane
 * gradientem tła, więc nie dokłada elementu do drzewa DOM i nie przesuwa
 * linii bazowej.
 */
export function MarkedTitle({
  before,
  marked,
  after,
  className,
  as: Tag = "h2",
}: {
  before: string;
  marked: string;
  after?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "text-brand-950 font-semibold",
        Tag === "h1" ? T_DISPLAY : T_H2,
        className,
      )}
    >
      {before} <span className="underline-mark">{marked}</span>
      {after ? ` ${after}` : ""}
    </Tag>
  );
}

type SectionHeadEProps = {
  label: string;
  before: string;
  marked: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeadE({
  label,
  before,
  marked,
  lead,
  align = "center",
  className,
}: SectionHeadEProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center"
          ? "mx-auto max-w-[46rem] text-center"
          : "max-w-[40rem]",
        className,
      )}
    >
      <LabelE>{label}</LabelE>
      <MarkedTitle before={before} marked={marked} className="mt-4" />
      {lead ? (
        <p className={cn(T_LEAD, "text-muted-foreground mt-5")}>{lead}</p>
      ) : null}
    </div>
  );
}
