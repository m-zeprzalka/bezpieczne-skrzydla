import * as React from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function ContainerB({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[86rem] px-5 sm:px-8", className)}
      {...props}
    />
  );
}

type SectionBProps = React.ComponentProps<"section"> & {
  tone?: "plain" | "tint" | "deep";
};

/**
 * Sekcja wariantu B: rozdzielana włoskowatą linią, nie zmianą tła.
 * Bloki kolorystyczne pojawiają się rzadko i wtedy niosą znaczenie.
 */
export function SectionB({
  className,
  tone = "plain",
  ...props
}: SectionBProps) {
  return (
    <section
      className={cn(
        "relative scroll-mt-20 border-t",
        tone === "plain" && "border-brand-200 bg-white",
        tone === "tint" && "border-brand-200 bg-brand-50",
        tone === "deep" && "bg-brand-950 border-brand-800 text-brand-100",
        className,
      )}
      {...props}
    />
  );
}

type SectionHeadBProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  action?: React.ReactNode;
  className?: string;
};

/** Nagłówek dwukolumnowy — tytuł po lewej, opis po prawej. */
export function SectionHeadB({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  action,
  className,
}: SectionHeadBProps) {
  return (
    <div className={cn("pt-16 sm:pt-20 lg:pt-24", className)}>
      <Reveal
        className={cn(
          "flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.18em] uppercase",
          tone === "light" ? "text-brand-600" : "text-brand-300",
        )}
      >
        <span>{index}</span>
        <span
          aria-hidden
          className={cn(
            "h-px w-8",
            tone === "light" ? "bg-brand-300" : "bg-brand-400/50",
          )}
        />
        <span>{eyebrow}</span>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
        <Reveal delay={0.05} as="div" className="lg:col-span-7">
          <h2
            className={cn(
              "font-grotesk text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.05] font-medium tracking-[-0.03em]",
              tone === "light" ? "text-brand-950" : "text-white",
            )}
          >
            {title}
          </h2>
        </Reveal>

        {description || action ? (
          <Reveal
            delay={0.1}
            className="flex flex-col items-start gap-6 lg:col-span-5 lg:pt-2"
          >
            {description ? (
              <p
                className={cn(
                  "text-balance-pretty text-[0.97rem] leading-relaxed",
                  tone === "light"
                    ? "text-muted-foreground"
                    : "text-brand-200/85",
                )}
              >
                {description}
              </p>
            ) : null}
            {action}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}

/** Etykieta pola/kolumny — monospace, wersaliki, stały rytm. */
export function LabelB({
  className,
  tone = "light",
  ...props
}: React.ComponentProps<"span"> & { tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "font-mono text-[0.68rem] tracking-[0.16em] uppercase",
        tone === "light" ? "text-brand-600" : "text-brand-300",
        className,
      )}
      {...props}
    />
  );
}
