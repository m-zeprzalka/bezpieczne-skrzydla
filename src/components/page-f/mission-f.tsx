import Image from "next/image";

import { ContainerF, SectionF, T_LABEL_F } from "@/components/page-f/frame-f";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { WingArcs } from "@/components/site/wing-arcs";
import { mission, site } from "@/lib/content";
import { missionF } from "@/lib/content-f";

/**
 * „Moja misja” w pełnym brzmieniu — łącznie z dwoma akapitami o docieraniu
 * z wiedzą wcześniej i o odpowiedzialnej organizacji, których poprzednie
 * warianty nie przenosiły. Jedyna ciemna sekcja strony.
 */
export function MissionF() {
  return (
    <SectionF id="misja" tone="deep" className="overflow-hidden">
      <WingArcs
        className="absolute -bottom-44 left-1/2 -z-0 w-[1100px] max-w-none -translate-x-1/2 opacity-[0.14]"
        count={10}
      />

      <ContainerF className="relative">
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal className="flex items-baseline gap-4">
              <span
                aria-hidden
                className="font-display text-brand-700 text-[2.4rem] leading-none font-medium select-none"
              >
                {missionF.index}
              </span>
              <span className={`${T_LABEL_F} text-brand-300`}>
                {missionF.label}
              </span>
            </Reveal>

            <Reveal delay={0.06} as="div" className="mt-8">
              <blockquote className="font-display max-w-[44rem] text-[2.1rem] leading-[1.14] tracking-[-0.018em] text-white italic sm:text-[2.7rem] lg:text-[3.1rem]">
                „{mission.quote}”
              </blockquote>
            </Reveal>

            <RevealGroup className="mt-10 flex max-w-[38rem] flex-col gap-5">
              {[...mission.paragraphs, ...missionF.extraParagraphs].map(
                (paragraph) => (
                  <RevealItem
                    as="span"
                    key={paragraph}
                    className="text-brand-200/85 block text-[0.9375rem] leading-[1.75] text-pretty sm:text-[1rem]"
                  >
                    {paragraph}
                  </RevealItem>
                ),
              )}
            </RevealGroup>

            <Reveal
              delay={0.1}
              className="border-brand-400/70 mt-11 max-w-[38rem] border-l-2 py-1 pl-6"
            >
              <p className="font-display text-[1.25rem] leading-[1.45] text-white sm:text-[1.45rem]">
                {mission.closing}
              </p>
              <p className="text-brand-200/85 mt-4 text-[0.9375rem] leading-[1.7]">
                {missionF.foundation}
              </p>
            </Reveal>
          </div>

          {/* — miejsce na portret autorki — */}
          <Reveal delay={0.12} className="md:col-span-5 md:pl-4 lg:pl-12">
            <figure className="md:sticky md:top-28">
              <div className="border-brand-800 bg-brand-900/60 relative aspect-4/5 overflow-hidden rounded-[1.25rem] border backdrop-blur-sm">
                <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <Image
                    src="/logo-bezpieczne-skrzydla.png"
                    alt=""
                    width={320}
                    height={320}
                    className="ring-brand-700 size-40 rounded-full object-cover ring-1 sm:size-44"
                  />
                  <p className={`${T_LABEL_F} text-brand-300`}>
                    miejsce na zdjęcie autorki
                  </p>
                </div>
              </div>

              <figcaption className="border-brand-800 mt-6 border-t pt-6">
                <p className="font-display text-[1.2rem] text-white">
                  {site.owner}
                </p>
                <p className="text-brand-300 mt-1.5 text-[0.8125rem]">
                  Autorka szkoleń i Modelu 4R
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </ContainerF>
    </SectionF>
  );
}
