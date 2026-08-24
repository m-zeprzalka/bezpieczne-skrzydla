import * as React from "react";

import { Breadcrumbs, type Crumb } from "@/components/system/breadcrumbs";
import { Container } from "@/components/system/container";
import { Reveal } from "@/components/system/reveal";
import { cn } from "@/lib/utils";

/**
 * Nagłówek podstrony: okruszki, etykieta, tytuł H1 z akcentem, lead
 * i opcjonalna kolumna boczna (kadr, fakty). Jeden wzorzec dla wszystkich tras.
 * Tło: sama poświata — bez siatek i ornamentów.
 */
export function PageHero({
  crumbs,
  label,
  title,
  accent,
  after,
  lead,
  tone = "light",
  aside,
  children,
  className,
  compact = false,
}: {
  crumbs?: Crumb[];
  label?: string;
  title: string;
  accent?: string;
  after?: string;
  lead?: string;
  tone?: "light" | "dark" | "warm";
  aside?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  const dark = tone === "dark";
  const warm = tone === "warm";

  return (
    <header
      className={cn(
        "relative overflow-hidden",
        dark ? "bg-surface-deep text-brand-100" : warm ? "bg-sand-50" : "bg-white",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 -z-0 h-[520px]",
          dark && "bg-aurora-deep opacity-40",
          warm &&
            "bg-[radial-gradient(60%_55%_at_15%_10%,var(--sand-200)_0%,transparent_65%),radial-gradient(45%_45%_at_90%_5%,var(--brand-100)_0%,transparent_60%)] opacity-70",
          !dark && !warm && "bg-aurora opacity-30",
        )}
      />

      <Container
        className={cn(
          "relative grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12 lg:items-end",
          compact ? "pt-12 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20" : "pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28",
        )}
      >
        <div className={cn(aside ? "lg:col-span-7" : "lg:col-span-8")}>
          {crumbs ? (
            <Reveal>
              <Breadcrumbs items={crumbs} tone={dark ? "dark" : "light"} />
            </Reveal>
          ) : null}

          {label ? (
            <Reveal delay={0.04} as="p" className={cn("t-label mt-10", dark ? "text-brand-300" : "text-brand-600")}>
              {label}
            </Reveal>
          ) : null}

          <Reveal delay={0.08} as="div" className="mt-5">
            <h1 className={cn("text-h1 max-w-[16ch] text-balance", dark ? "text-white" : "text-ink")}>
              {title}
              {accent ? (
                <>
                  {" "}
                  <span className={dark ? "text-brand-300" : "text-brand-600"}>{accent}</span>
                </>
              ) : null}
              {after ? ` ${after}` : ""}
            </h1>
          </Reveal>

          {lead ? (
            <Reveal
              delay={0.14}
              as="p"
              className={cn("text-lead mt-6 max-w-[34rem] text-pretty", dark ? "text-brand-200/85" : "text-ink-muted")}
            >
              {lead}
            </Reveal>
          ) : null}

          {children}
        </div>

        {aside ? <div className="lg:col-span-5">{aside}</div> : null}
      </Container>
    </header>
  );
}
