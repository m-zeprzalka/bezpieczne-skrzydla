import * as React from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  /** `plain` = biała, `muted` = delikatny błękit, `deep` = granat z logo. */
  tone?: "plain" | "muted" | "deep";
};

export function Section({
  className,
  tone = "plain",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate scroll-mt-24 overflow-hidden py-20 sm:py-24 lg:py-32",
        tone === "muted" && "bg-brand-50",
        tone === "deep" && "bg-brand-900 text-brand-100",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function Container({
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

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  action?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        centered
          ? "mx-auto max-w-3xl items-center text-center"
          : "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          centered ? "items-center" : "max-w-2xl items-start",
        )}
      >
        {eyebrow ? (
          <Reveal
            className={cn(
              "flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase",
              tone === "light" ? "text-brand-600" : "text-brand-300",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "h-px w-6",
                tone === "light" ? "bg-brand-300" : "bg-brand-400/60",
              )}
            />
            {eyebrow}
          </Reveal>
        ) : null}

        <Reveal
          delay={0.06}
          className={cn(
            "font-display mt-4 text-[clamp(1.85rem,3.6vw,2.9rem)] leading-[1.12] tracking-[-0.02em]",
            tone === "light" ? "text-brand-900" : "text-white",
          )}
          as="div"
        >
          <h2>{title}</h2>
        </Reveal>

        {description ? (
          <Reveal
            delay={0.12}
            className={cn(
              "text-balance-pretty mt-5 text-[1rem] leading-relaxed",
              tone === "light" ? "text-muted-foreground" : "text-brand-200/85",
            )}
            as="div"
          >
            {description}
          </Reveal>
        ) : null}
      </div>

      {action ? (
        <Reveal delay={0.16} className="shrink-0">
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}
