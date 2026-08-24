import { cn } from "@/lib/utils";

/**
 * Przewijany pasek haseł. Klientka: „warto go bardziej pokazać” — stąd ciemna
 * wstęga. Lista `sr-only` daje czytnikom pełną treść bez ruchu.
 */
export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-deep py-4 text-brand-100",
        className,
      )}
    >
      <div
        aria-hidden
        className="mask-fade-edges animate-marquee relative flex w-max items-center gap-10 motion-reduce:animate-none"
      >
        {[...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="text-[0.875rem] font-medium tracking-wide whitespace-nowrap">
              {item}
            </span>
            <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-brand-400" />
          </span>
        ))}
      </div>
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
