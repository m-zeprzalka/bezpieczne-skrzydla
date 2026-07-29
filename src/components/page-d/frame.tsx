import * as React from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function ContainerD({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}

export function SectionD({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative isolate scroll-mt-24 py-24 sm:py-28 lg:py-36",
        className,
      )}
      {...props}
    />
  );
}

export function EyebrowD({
  className,
  tone = "light",
  ...props
}: React.ComponentProps<"span"> & { tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.72rem] font-medium tracking-[0.22em] uppercase",
        tone === "light" ? "text-brand-600" : "text-brand-300",
        className,
      )}
      {...props}
    />
  );
}

type HeadingDProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Nagłówek sekcji: lekki grotesk w dużym stopniu, dużo powietrza. */
export function HeadingD({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: HeadingDProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center"
          ? "mx-auto max-w-3xl items-center text-center"
          : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <EyebrowD tone={tone}>
            <span
              aria-hidden
              className={cn(
                "size-1.5 rounded-full",
                tone === "light" ? "bg-brand-500" : "bg-brand-400",
              )}
            />
            {eyebrow}
          </EyebrowD>
        </Reveal>
      ) : null}

      <Reveal delay={0.06} as="div">
        <h2
          className={cn(
            "font-lux mt-5 text-[clamp(2rem,4vw,3.35rem)] leading-[1.06] font-extralight tracking-[-0.035em]",
            tone === "light" ? "text-brand-950" : "text-white",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal
          delay={0.12}
          className={cn(
            "text-balance-pretty mt-6 text-[1.02rem] leading-relaxed",
            tone === "light" ? "text-brand-800/75" : "text-brand-200/80",
          )}
        >
          {description}
        </Reveal>
      ) : null}
    </div>
  );
}
