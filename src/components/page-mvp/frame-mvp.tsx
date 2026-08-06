import * as React from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

/*
 * System wersji MVP = system wariantu F (kontener, pion, typografia)
 * z jedną zmianą redakcyjną z maila klientki: teksty dotąd składane
 * kursywą wyróżniamy inaczej — innym krojem (Fraunces kontra Inter)
 * lub stopniem pisma. Kolor wyróżnienia zostaje. Kursywa znika.
 */

export {
  CONTAINER_F as CONTAINER_MVP,
  T_BODY_F as T_BODY_MVP,
  T_H2_F as T_H2_MVP,
  T_LABEL_F as T_LABEL_MVP,
  T_LEAD_F as T_LEAD_MVP,
  ContainerF as ContainerMvp,
  SectionF as SectionMvp,
} from "@/components/page-f/frame-f";

import {
  T_H2_F,
  T_LABEL_F,
  T_LEAD_F,
} from "@/components/page-f/frame-f";

/**
 * Nagłówek sekcji jak w F, ale akcent bez kursywy — wyróżnia go wyłącznie
 * kolor (ten zostaje na prośbę klientki) w tym samym kroju Fraunces.
 */
export function SectionHeadMvp({
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
