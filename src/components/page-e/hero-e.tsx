import Link from "next/link";

import { FlatWing } from "@/components/page-e/flat-wing";
import {
  ContainerE,
  GRID_12,
  LabelE,
  MarkedTitle,
  RuleE,
  T_LEAD,
} from "@/components/page-e/frame";
import { Button } from "@/components/ui/button";
import { heroE, trustE } from "@/lib/content-e";

export function HeroE() {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
      <ContainerE>
        <div className={`${GRID_12} items-center`}>
          {/* — deklaracja — */}
          <div className="md:col-span-7">
            <MarkedTitle
              as="h1"
              before={heroE.titleBefore}
              marked={heroE.titleMarked}
            />

            <p className={`${T_LEAD} text-muted-foreground mt-7 max-w-[34rem]`}>
              Prowadzę{" "}
              <strong className="text-brand-950 font-semibold">
                szkolenia i warsztaty
              </strong>{" "}
              z przeciwdziałania mobbingowi oraz przemocy psychicznej w pracy.
              Dla pracowników, HR, pracodawców i komisji antymobbingowych —
              online i stacjonarnie.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button
                asChild
                variant="accent"
                size="xl"
                className="rounded-xl px-7 font-semibold"
              >
                <Link href={heroE.primaryCta.href}>
                  {heroE.primaryCta.label}
                </Link>
              </Button>

              <Link
                href={heroE.secondaryCta.href}
                className="text-brand-800 hover:text-brand-600 decoration-brand-400 hover:decoration-brand-600 focus-visible:ring-ring/50 rounded text-[0.9375rem] font-semibold underline decoration-2 underline-offset-[10px] outline-none focus-visible:ring-3"
              >
                {heroE.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* — panel wizualny; docelowo miejsce na zdjęcie autorki — */}
          <div className="md:col-span-5">
            <div className="bg-brand-50 relative mx-auto flex aspect-4/3 w-full max-w-[28rem] flex-col justify-end sm:aspect-4/5 overflow-hidden rounded-[1.25rem] p-8 md:ml-auto md:mr-0">
              <FlatWing className="absolute inset-x-0 top-[46%] mx-auto w-[88%] -translate-y-1/2" />
              <div className="relative">
                <p className="text-brand-950 text-[1.0625rem] font-bold">
                  {heroE.visualCaption}
                </p>
                <p className="text-brand-700 mt-1.5 text-[0.875rem]">
                  {heroE.visualSub}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* — pasek zaufania — */}
        <RuleE className="mt-20 md:mt-24" />

        <div className="flex flex-col gap-6 pt-8">
          <LabelE>{trustE.label}</LabelE>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {trustE.items.map((item) => (
              <li
                key={item}
                className="text-brand-800 text-[0.9375rem] font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ContainerE>
    </section>
  );
}
