import Image from "next/image";

import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

type BrandMarkProps = {
  className?: string;
  /** Rozmiar sygnetu w px — obraz jest kwadratowy. */
  size?: number;
  showWordmark?: boolean;
  tone?: "light" | "dark";
  priority?: boolean;
};

/** Sygnet z logo + logotyp tekstowy. Jedno źródło prawdy dla nagłówka i stopki. */
export function BrandMark({
  className,
  size = 44,
  showWordmark = true,
  tone = "light",
  priority = false,
}: BrandMarkProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full ring-1",
          tone === "light" ? "ring-brand-200/80" : "ring-white/25",
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo-bezpieczne-skrzydla.png"
          alt={`${site.name} — logo`}
          width={size * 2}
          height={size * 2}
          priority={priority}
          className="size-full object-cover"
        />
      </span>

      {showWordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={cn(
              "font-display text-[0.98rem] font-semibold tracking-tight",
              tone === "light" ? "text-brand-900" : "text-white",
            )}
          >
            Bezpieczne Skrzydła
          </span>
          <span
            className={cn(
              "mt-1 text-[0.68rem] font-medium tracking-[0.16em] uppercase",
              tone === "light" ? "text-brand-600" : "text-brand-300/90",
            )}
          >
            {site.owner}
          </span>
        </span>
      ) : null}
    </span>
  );
}
