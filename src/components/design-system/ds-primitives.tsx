import * as React from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

/** Sekcja design systemu — kotwica w spisie treści po lewej. */
export function DsSection({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-brand-200 pt-14 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <span aria-hidden className="t-outline text-[2.25rem] leading-none select-none">
          {index}
        </span>
        <h2 className="text-h2 text-ink">{title}</h2>
      </div>
      {lead ? <p className="text-lead mt-5 max-w-[44rem] text-pretty text-ink-muted">{lead}</p> : null}
      <div className="mt-10 flex flex-col gap-12">{children}</div>
    </section>
  );
}

export function DsSub({
  title,
  text,
  children,
  id,
}: {
  title: string;
  text?: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <h3 className="font-display text-h4 text-ink">{title}</h3>
      {text ? <p className="mt-2 max-w-[44rem] text-body-sm text-pretty text-ink-muted">{text}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  );
}

/** Ramka prezentacyjna komponentu — jasna, ciemna lub w kratkę. */
export function Specimen({
  children,
  caption,
  tone = "light",
  className,
  align = "start",
}: {
  children: React.ReactNode;
  caption?: string;
  tone?: "light" | "dark" | "tint" | "sand";
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <figure className="overflow-hidden rounded-card border border-brand-200/80">
      <div
        className={cn(
          "flex flex-wrap gap-4 p-6 sm:p-8",
          align === "center" && "items-center justify-center",
          align === "start" && "items-start",
          tone === "light" && "bg-white",
          tone === "tint" && "bg-surface-tint",
          tone === "sand" && "bg-sand-50",
          tone === "dark" && "bg-surface-deep text-brand-100",
          className,
        )}
      >
        {children}
      </div>
      {caption ? (
        <figcaption className="border-t border-brand-100 bg-white px-5 py-3 text-caption text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Code({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={cn("rounded-md bg-brand-50 px-1.5 py-0.5 font-mono text-[0.8em] text-brand-800", className)}>
      {children}
    </code>
  );
}

/** Tabela specyfikacji — nagłówek w kapitalikach, wiersze z włoskową linią. */
export function SpecTable({
  columns,
  rows,
  className,
}: {
  columns: string[];
  rows: React.ReactNode[][];
  className?: string;
}) {
  return (
    <div className={cn("overflow-x-auto rounded-card border border-brand-200/80", className)}>
      <table className="w-full min-w-[36rem] border-collapse text-left text-small">
        <thead>
          <tr className="bg-surface-tint">
            {columns.map((column) => (
              <th key={column} scope="col" className="t-label px-4 py-3 text-[0.62rem] font-semibold text-brand-600">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-brand-100 align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-brand-900/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Zasada „tak / nie” — para przykładów. */
export function DoDont({
  good,
  bad,
  goodLabel = "Tak",
  badLabel = "Nie",
}: {
  good: React.ReactNode;
  bad: React.ReactNode;
  goodLabel?: string;
  badLabel?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="rounded-card border border-foundation-200 bg-foundation-50/60 p-5">
        <p className="t-label flex items-center gap-2 text-foundation-700">
          <Check className="size-3.5" aria-hidden />
          {goodLabel}
        </p>
        <div className="mt-3 text-body-sm text-brand-900/90">{good}</div>
      </div>
      <div className="rounded-card border border-destructive/20 bg-destructive/[0.04] p-5">
        <p className="t-label flex items-center gap-2 text-destructive">
          <X className="size-3.5" aria-hidden />
          {badLabel}
        </p>
        <div className="mt-3 text-body-sm text-brand-900/90">{bad}</div>
      </div>
    </div>
  );
}

export function PrincipleCard({ index, title, text }: { index: string; title: string; text: string }) {
  return (
    <div className="flex flex-col rounded-card border border-brand-200/80 bg-white p-6">
      <span aria-hidden className="t-outline text-[1.6rem] leading-none select-none">
        {index}
      </span>
      <h3 className="mt-4 font-display text-[1.2rem] tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-body-sm text-pretty text-ink-muted">{text}</p>
    </div>
  );
}
