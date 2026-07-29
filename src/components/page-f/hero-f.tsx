import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ContainerF, T_DISPLAY_F, T_LEAD_F } from "@/components/page-f/frame-f";
import { Reveal, RevealWords } from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { Button } from "@/components/ui/button";
import { heroF } from "@/lib/content-f";

/**
 * Hero w całości z tekstów klientki: tytuł, lead, akapit, dwa przyciski
 * i ścieżka odbiorców „Dla pracowników → liderów i HR → …”.
 * Kompozycja centralna, dużo światła, skrzydło rysowane liniami w tle.
 */
export function HeroF() {
  return (
    <section className="relative overflow-hidden bg-white">
      <WingArcs
        className="absolute top-16 left-1/2 -z-10 w-[1180px] max-w-none -translate-x-1/2 opacity-[0.16] sm:top-10"
        count={11}
      />

      <ContainerF className="flex flex-col items-center pt-20 pb-24 text-center sm:pt-28 md:pb-32 lg:pt-32 lg:pb-36">
        <h1 className={`${T_DISPLAY_F} text-brand-950 max-w-[62rem]`}>
          <RevealWords text={heroF.titleA} />{" "}
          <RevealWords text={heroF.titleB} delay={0.3} />{" "}
          <em className="text-brand-600 italic">
            <RevealWords text={heroF.titleAccent} delay={0.38} />
          </em>{" "}
          <RevealWords text={heroF.titleC} delay={0.5} />
        </h1>

        <Reveal
          delay={0.55}
          className="font-display text-brand-700 mt-9 max-w-[38rem] text-[1.25rem] leading-[1.45] italic sm:text-[1.45rem]"
        >
          {heroF.lead}
        </Reveal>

        <Reveal
          delay={0.65}
          className={`${T_LEAD_F} text-muted-foreground mt-6 max-w-[42rem] text-pretty`}
        >
          {heroF.body}
        </Reveal>

        <Reveal
          delay={0.75}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            variant="brand"
            size="xl"
            className="rounded-full px-8 font-semibold"
          >
            <Link href={heroF.primaryCta.href}>
              {heroF.primaryCta.label}
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform duration-300 group-hover/button:translate-x-0.5"
              />
            </Link>
          </Button>

          <Link
            href={heroF.secondaryCta.href}
            className="text-brand-800 hover:text-brand-600 decoration-brand-300 hover:decoration-brand-500 focus-visible:ring-ring/50 rounded text-[0.9375rem] font-semibold underline decoration-2 underline-offset-[10px] outline-none focus-visible:ring-3"
          >
            {heroF.secondaryCta.label}
          </Link>
        </Reveal>

        {/* — ścieżka odbiorców zapisana przez klientkę strzałkami — */}
        <Reveal
          delay={0.9}
          className="border-brand-100 mt-20 w-full border-t pt-9 sm:mt-24"
        >
          <p className="text-brand-800 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 text-[0.9375rem]">
            <span className="text-brand-600 font-semibold">
              {heroF.audiencePrefix}
            </span>
            {heroF.audiencePath.map((item, i) => (
              <span key={item} className="flex items-center gap-3 font-medium">
                {i > 0 ? (
                  <ArrowRight
                    className="text-brand-400 size-4 shrink-0"
                    aria-hidden
                  />
                ) : null}
                {item}
              </span>
            ))}
          </p>
        </Reveal>
      </ContainerF>
    </section>
  );
}
