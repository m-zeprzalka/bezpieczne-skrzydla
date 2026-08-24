import Image from "next/image";

import { WingArcs } from "@/components/system/wing-arcs";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Kadr na zdjęcie autorki. Do czasu dostarczenia fotografii pokazuje
 * kompozycję z sygnetem i skrzydłem — podmiana to jedno pole w `site.ts`.
 */
export function AuthorPortrait({
  className,
  tone = "light",
  caption = true,
  preload = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  caption?: boolean;
  preload?: boolean;
}) {
  const dark = tone === "dark";

  return (
    <figure
      className={cn(
        "relative aspect-4/5 overflow-hidden rounded-panel border",
        dark
          ? "border-white/10 bg-brand-900/60"
          : "border-brand-200/80 bg-white shadow-lift",
        className,
      )}
    >
      {site.authorPhoto ? (
        <Image
          src={site.authorPhoto}
          alt={`${site.owner} — ${site.ownerRole}`}
          fill
          sizes="(min-width: 1024px) 26rem, 90vw"
          preload={preload}
          className="object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden
            className={cn("absolute inset-0", dark ? "bg-aurora-deep opacity-70" : "bg-aurora opacity-70")}
          />
          <WingArcs
            animate={false}
            tone={tone}
            className="absolute -bottom-14 left-1/2 w-[480px] max-w-none -translate-x-1/2 opacity-30"
            count={9}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
            <span
              className={cn(
                "relative grid place-items-center rounded-full",
                dark ? "ring-1 ring-white/15" : "ring-1 ring-brand-200",
              )}
            >
              <Image
                src="/logo-bezpieczne-skrzydla.png"
                alt=""
                width={320}
                height={320}
                preload={preload}
                className="size-36 rounded-full object-cover shadow-xl sm:size-44"
              />
            </span>
            {caption ? (
              <figcaption>
                <p className={cn("font-display text-[1.2rem]", dark ? "text-white" : "text-ink")}>
                  {site.owner}
                </p>
                <p className={cn("t-label mt-2", dark ? "text-brand-300" : "text-brand-600")}>
                  {site.ownerRole}
                </p>
              </figcaption>
            ) : null}
          </div>
        </>
      )}
    </figure>
  );
}
