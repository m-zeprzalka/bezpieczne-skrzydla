import Link from "next/link";
import { ArrowRight, Coffee } from "lucide-react";

import { Pill } from "@/components/system/pill";
import type { Training } from "@/content/trainings";
import { workshop } from "@/content/workshop";
import { cn } from "@/lib/utils";

/** Karta szkolenia — cała powierzchnia jest odnośnikiem do strony szkolenia. */
export function TrainingCard({ training, className }: { training: Training; className?: string }) {
  return (
    <Link
      href={`/szkolenia/${training.slug}`}
      className={cn(
        "card-lift focus-ring group relative flex h-full flex-col rounded-card border border-brand-200/80 bg-white p-7 sm:p-8",
        className,
      )}
    >
      <span className="t-label text-brand-600">Szkolenie {training.number}</span>
      <h3 className="mt-5 font-display text-[1.25rem] leading-[1.25] tracking-tight text-ink transition-colors group-hover:text-brand-700 sm:text-[1.35rem]">
        {training.title}
      </h3>
      <p className="mt-3 text-caption font-medium text-brand-700/90">{training.audience}</p>
      <p className="mt-5 flex-1 text-small text-pretty text-ink-muted">{training.summary}</p>

      <span className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-brand-100 pt-5">
        <span className="font-display text-[1.1rem] whitespace-nowrap text-ink">{training.priceFrom}</span>
        <span className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-brand-800">
          <span className="link-underline">Zobacz program</span>
          <ArrowRight aria-hidden className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}

/** Karta warsztatu — ciepły ton, plakietka „To warsztat, nie szkolenie”. */
export function WorkshopCard({ className }: { className?: string }) {
  return (
    <Link
      href="/warsztat"
      className={cn(
        "card-lift focus-ring group relative flex h-full min-w-0 flex-col rounded-card border border-sand-200 bg-sand-50 p-7 sm:p-8",
        className,
      )}
    >
      <Pill variant="label-outline" className="w-fit border-sand-200 bg-white/80 text-center text-sand-700">
        <Coffee />
        {workshop.badge}
      </Pill>
      <h3 className="mt-6 font-display text-[1.25rem] leading-[1.25] tracking-tight text-ink transition-colors group-hover:text-sand-700 sm:text-[1.35rem]">
        {workshop.title}
      </h3>
      <p className="mt-3 text-caption font-medium text-sand-700">{workshop.label}</p>
      <p className="mt-5 flex-1 text-small text-pretty text-ink-muted">{workshop.subtitle}</p>
      <span className="mt-8 flex items-center justify-between border-t border-sand-200 pt-5">
        <span className="text-caption text-ink-muted">bez testu i certyfikatu</span>
        <span className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-brand-800">
          <span className="link-underline">O warsztacie</span>
          <ArrowRight aria-hidden className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}
