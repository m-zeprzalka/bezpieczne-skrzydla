import * as React from "react";

import { Reveal } from "@/components/system/reveal";
import { cn } from "@/lib/utils";

export type SectionTone = "white" | "tint" | "deep" | "sand";

/**
 * Sekcja strony. Rytm pionowy: 96 → 128 → 160 px (`size="default"`),
 * 64 → 96 → 128 px (`size="compact"`). Ton tła zmienia się między sąsiednimi
 * sekcjami — nigdy dwie ciemne obok siebie (zasada z /design-system).
 */
export function Section({
  className,
  tone = "white",
  size = "default",
  ...props
}: React.ComponentProps<"section"> & {
  tone?: SectionTone;
  size?: "default" | "compact" | "flush";
}) {
  return (
    <section
      data-tone={tone}
      className={cn(
        "relative scroll-mt-20",
        size === "default" && "py-24 md:py-32 lg:py-40",
        size === "compact" && "py-16 md:py-24 lg:py-32",
        tone === "tint" && "bg-surface-tint",
        tone === "deep" && "bg-surface-deep text-brand-100",
        tone === "sand" && "bg-sand-50",
        className,
      )}
      {...props}
    />
  );
}

/** Stały odstęp między nagłówkiem sekcji a jej treścią: 64 → 80 px. */
export const HEAD_GAP = "mt-16 lg:mt-20";

/**
 * Nagłówek sekcji — podpis marki: numer w obrysie + etykieta w kapitalikach,
 * tytuł Fraunces z akcentem kolorem (bez kursywy — decyzja klientki), lead.
 */
export function SectionHead({
  index,
  label,
  title,
  accent,
  after,
  lead,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  size = "h2",
  className,
  children,
}: {
  index?: string;
  label?: string;
  title: string;
  accent?: string;
  after?: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  size?: "h1" | "h2" | "h3";
  className?: string;
  children?: React.ReactNode;
}) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "mx-auto max-w-[40rem] items-center text-center" : "max-w-[40rem]",
        className,
      )}
    >
      {label ? (
        <Reveal
          className={cn("flex items-baseline gap-3", centered && "justify-center")}
        >
          {index ? (
            <span
              aria-hidden
              className={cn(
                "text-[1.6rem] leading-none select-none",
                dark ? "t-outline-dark" : "t-outline",
              )}
            >
              {index}
            </span>
          ) : null}
          <span className={cn("t-label", dark ? "text-brand-300" : "text-brand-600")}>
            {label}
          </span>
        </Reveal>
      ) : null}

      <Reveal delay={0.06} as="div" className={cn(label ? "mt-5" : "")}>
        <Heading
          className={cn(
            "text-balance",
            size === "h1" && "text-h1",
            size === "h2" && "text-h2",
            size === "h3" && "text-h3",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
          {accent ? (
            <>
              {" "}
              <span className={dark ? "text-brand-300" : "text-brand-600"}>
                {accent}
              </span>
            </>
          ) : null}
          {after ? ` ${after}` : ""}
        </Heading>
      </Reveal>

      {lead ? (
        <Reveal
          delay={0.12}
          as="p"
          className={cn(
            "text-lead mt-5 max-w-[34rem] text-pretty",
            dark ? "text-brand-200/85" : "text-ink-muted",
          )}
        >
          {lead}
        </Reveal>
      ) : null}

      {children}
    </div>
  );
}
