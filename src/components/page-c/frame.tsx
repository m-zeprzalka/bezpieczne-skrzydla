import * as React from "react";

import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function ContainerC({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}
      {...props}
    />
  );
}

type SectionCProps = React.ComponentProps<"section"> & {
  tone?: "paper" | "deep";
};

export function SectionC({
  className,
  tone = "paper",
  ...props
}: SectionCProps) {
  return (
    <section
      className={cn(
        "relative scroll-mt-24 py-20 sm:py-24 lg:py-32",
        tone === "deep" && "bg-brand-950 text-brand-100",
        className,
      )}
      {...props}
    />
  );
}

/** Nadtytuł — jedyny element strony złożony bezszeryfowo. */
export function EyebrowC({
  className,
  tone = "light",
  ...props
}: React.ComponentProps<"p"> & { tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase",
        tone === "light" ? "text-brand-600" : "text-brand-300",
        className,
      )}
      {...props}
    />
  );
}

type HeadingCProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
  as?: "h2" | "h3";
};

export function HeadingC({
  children,
  className,
  tone = "light",
  as: Tag = "h2",
}: HeadingCProps) {
  return (
    <Reveal delay={0.05} as="div">
      <Tag
        className={cn(
          "text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.14] font-normal tracking-[-0.015em]",
          tone === "light" ? "text-brand-950" : "text-white",
          className,
        )}
      >
        {children}
      </Tag>
    </Reveal>
  );
}

/** Akapit narracyjny — duży stopień pisma i miara czytelnicza. */
export function ProseC({
  className,
  tone = "light",
  ...props
}: React.ComponentProps<"p"> & { tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "measure text-[1.06rem] leading-[1.72] sm:text-[1.12rem]",
        tone === "light" ? "text-brand-900/85" : "text-brand-200/85",
        className,
      )}
      {...props}
    />
  );
}
