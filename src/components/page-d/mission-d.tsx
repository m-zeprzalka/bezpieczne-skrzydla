import Image from "next/image";

import { ContainerD, EyebrowD, SectionD } from "@/components/page-d/frame";
import { LuminousWing } from "@/components/page-d/luminous-wing";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { mission, site } from "@/lib/content";
import { sectionsD } from "@/lib/content-d";

export function MissionD() {
  return (
    <SectionD id="o-mnie" className="bg-brand-950 overflow-hidden text-white">
      <div
        aria-hidden
        className="bg-aurora-deep absolute inset-0 -z-10 opacity-70"
      />

      {/* Ten sam sygnet co w hero, tu jako źródło światła w ciemności */}
      <LuminousWing className="absolute inset-x-0 -bottom-32 -z-10 mx-auto h-auto w-[min(1100px,170vw)] opacity-30 [mask-image:linear-gradient(to_top,black_40%,transparent)]" />

      <ContainerD>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <EyebrowD tone="dark">
                <span
                  aria-hidden
                  className="bg-brand-400 size-1.5 rounded-full"
                />
                {sectionsD.mission.eyebrow}
              </EyebrowD>
            </Reveal>

            <Reveal delay={0.06} as="div">
              <blockquote className="font-lux mt-8 text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.08] font-extralight tracking-[-0.035em] text-white">
                „{sectionsD.mission.quote}”
              </blockquote>
            </Reveal>

            <RevealGroup className="mt-10 flex max-w-2xl flex-col gap-5">
              {mission.paragraphs.map((paragraph) => (
                <RevealItem
                  as="span"
                  key={paragraph}
                  className="text-brand-200/80 text-balance-pretty block leading-relaxed"
                >
                  {paragraph}
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal
              delay={0.1}
              className="border-brand-400/60 mt-10 max-w-2xl border-l-2 py-2 pl-6"
            >
              <p className="font-lux text-[1.2rem] leading-snug font-light text-white sm:text-[1.4rem]">
                {mission.closing}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <figure className="lg:sticky lg:top-28">
              <div className="border-brand-800/80 bg-brand-900/50 relative aspect-4/5 overflow-hidden rounded-3xl border backdrop-blur-sm">
                <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <Image
                    src="/logo-bezpieczne-skrzydla.png"
                    alt=""
                    width={320}
                    height={320}
                    className="ring-brand-700/60 size-40 rounded-full object-cover ring-1 sm:size-48"
                  />
                  <EyebrowD tone="dark" className="tracking-[0.18em]">
                    miejsce na zdjęcie autorki
                  </EyebrowD>
                </div>
              </div>

              <figcaption className="border-brand-800 mt-5 border-t pt-5">
                <p className="font-lux text-[1.15rem] font-light text-white">
                  {site.owner}
                </p>
                <p className="text-brand-300/80 mt-1 text-[0.78rem]">
                  Autorka szkoleń i Modelu 4R
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </ContainerD>
    </SectionD>
  );
}
