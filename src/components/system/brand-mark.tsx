import Image from "next/image";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  tone?: "light" | "dark";
  preload?: boolean;
};

/** Sygnet z logo + logotyp tekstowy. Jedno źródło prawdy dla nagłówka i stopki. */
export function BrandMark({
  className,
  size = 40,
  showWordmark = true,
  tone = "light",
  preload = false,
}: BrandMarkProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full ring-1",
          tone === "light" ? "ring-brand-200/80" : "ring-white/20",
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo-bezpieczne-skrzydla.png"
          alt=""
          width={size * 2}
          height={size * 2}
          preload={preload}
          className="size-full object-cover"
        />
      </span>

      {showWordmark ? (
        <span className="flex min-w-0 flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.02rem] font-medium tracking-tight",
              tone === "light" ? "text-ink" : "text-white",
            )}
          >
            {site.name}
          </span>
          <span
            className={cn(
              "mt-1 text-[0.64rem] font-semibold tracking-[0.18em] uppercase",
              tone === "light" ? "text-brand-600" : "text-brand-300",
            )}
          >
            {site.owner}
          </span>
        </span>
      ) : null}
    </span>
  );
}
