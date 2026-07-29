import Image from "next/image";

import {
  ContainerC,
  EyebrowC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { site } from "@/lib/content";
import { silence } from "@/lib/content-c";

export function SilenceC() {
  return (
    <SectionC id="cisza" tone="deep" className="overflow-hidden">
      <ContainerC>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <EyebrowC tone="dark">{silence.eyebrow}</EyebrowC>
            </Reveal>

            <Reveal delay={0.05} as="div">
              <p className="mt-7 text-[clamp(1.5rem,2.8vw,2.15rem)] leading-[1.2] text-white">
                {silence.lead}
              </p>
            </Reveal>

            <RevealGroup className="mt-9 flex flex-col gap-5">
              {silence.paragraphs.map((paragraph) => (
                <RevealItem as="span" key={paragraph} className="block">
                  <ProseC tone="dark">{paragraph}</ProseC>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* — miejsce na portret autorki — */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <figure className="lg:sticky lg:top-24">
              <div className="border-brand-800 bg-brand-900 relative aspect-4/5 overflow-hidden rounded-lg border">
                <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
                  <Image
                    src="/logo-bezpieczne-skrzydla.png"
                    alt=""
                    width={300}
                    height={300}
                    className="ring-brand-700 size-36 rounded-full object-cover ring-1 sm:size-44"
                  />
                  <EyebrowC tone="dark">miejsce na zdjęcie autorki</EyebrowC>
                </div>
              </div>

              <figcaption className="border-brand-800 mt-5 border-t pt-5">
                <p className="text-[1.05rem] text-white">{site.owner}</p>
                <p className="text-brand-300/80 mt-1 font-sans text-[0.78rem]">
                  Autorka szkoleń i Modelu 4R
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* — zdanie, wokół którego zbudowana jest cała marka — */}
        <Reveal className="border-brand-800 mt-20 border-t pt-14 sm:mt-24">
          <blockquote className="max-w-4xl text-[clamp(1.85rem,4.4vw,3.2rem)] leading-[1.12] tracking-[-0.015em] text-white italic">
            „{silence.pull}”
          </blockquote>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <ProseC tone="dark" className="text-brand-100/90">
            {silence.closing}
          </ProseC>
        </Reveal>
      </ContainerC>
    </SectionC>
  );
}
