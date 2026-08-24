import Image from "next/image";

import { WingArcs } from "@/components/system/wing-arcs";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Kadr autorki. Ze zdjęciem: fotografia w proporcji 4:5, miękki granatowy
 * spad u dołu i podpis wewnątrz kadru. Bez zdjęcia (`site.authorPhoto = null`)
 * — kompozycja z sygnetem, żeby układ nigdy nie miał pustego miejsca.
 */
export function AuthorPortrait({
  className,
  caption = true,
  preload = false,
}: {
  className?: string;
  caption?: boolean;
  preload?: boolean;
}) {
  if (site.authorPhoto) {
    return (
      <figure
        className={cn(
          "relative aspect-4/5 overflow-hidden rounded-panel bg-brand-100 shadow-lift ring-1 ring-brand-900/10 ring-inset",
          className,
        )}
      >
        <Image
          src={site.authorPhoto}
          alt={`${site.owner} — ${site.ownerRole}`}
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 768px) 40vw, 90vw"
          preload={preload}
          className="object-cover object-[50%_20%]"
        />
        {caption ? (
          <>
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-950/80 via-brand-950/35 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p className="font-display text-[1.25rem] leading-tight text-white">{site.owner}</p>
              <p className="t-label mt-2 text-brand-200">{site.ownerRole}</p>
            </figcaption>
          </>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={cn(
        "relative aspect-4/5 overflow-hidden rounded-panel border border-brand-200/80 bg-white shadow-lift",
        className,
      )}
    >
      <div aria-hidden className="bg-aurora absolute inset-0 opacity-70" />
      <WingArcs
        animate={false}
        className="absolute -bottom-14 left-1/2 w-[480px] max-w-none -translate-x-1/2 opacity-30"
        count={9}
      />
      <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
        <span className="relative grid place-items-center rounded-full ring-1 ring-brand-200">
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
            <p className="font-display text-[1.2rem] text-ink">{site.owner}</p>
            <p className="t-label mt-2 text-brand-600">{site.ownerRole}</p>
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
