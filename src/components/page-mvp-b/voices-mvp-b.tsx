import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ContainerMvpB,
  SectionMvpB,
  T_LABEL_MVPB,
} from "@/components/page-mvp-b/frame-mvp-b";
import { Reveal } from "@/components/site/reveal";
import { voices } from "@/lib/content-c";
import { trainingsF } from "@/lib/content-f";

/**
 * „Co słyszę najczęściej” — blok przeniesiony z wariantu C w formacie,
 * który klientka chce zachować dokładnie takim, jaki jest w C: wąska
 * szpalta marginaliów, cytat odbiorcy, odpowiedź „jak przy stole”
 * i odnośnik do programu. Cytaty wyróżnia krój Fraunces i stopień pisma,
 * nie kursywa. Wersja B zwiększa jedynie odstępy między rozmowami.
 */
export function VoicesMvpB() {
  return (
    <SectionMvpB id="slysze">
      <ContainerMvpB>
        <Reveal className="flex items-baseline gap-4">
          <span
            aria-hidden
            className="text-outline-f font-display text-[2.3rem] leading-none font-medium select-none"
          >
            04
          </span>
          <span className={`${T_LABEL_MVPB} text-brand-600`}>
            {voices.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.05} as="div" className="mt-8">
          <h2 className="font-display text-brand-950 measure-tight text-[clamp(1.75rem,3.2vw,2.65rem)] leading-[1.14] tracking-[-0.015em]">
            {voices.intro}
          </h2>
        </Reveal>

        <div className="mt-24 flex flex-col gap-24 sm:mt-28 sm:gap-28">
          {voices.items.map((item) => {
            const program = trainingsF.find(
              (training) => training.number === item.program,
            );

            return (
              <Reveal
                key={item.id}
                as="article"
                /* Wąska szpalta marginaliów jak w C — etykieta jest przypisem,
                   nie osobną sekcją. */
                className="grid grid-cols-1 gap-5 lg:grid-cols-[8rem_1fr] lg:gap-12"
              >
                <div className="lg:pt-2">
                  <p className={`${T_LABEL_MVPB} text-brand-600`}>{item.who}</p>
                  <span
                    aria-hidden
                    className="bg-brand-300 mt-3 hidden h-px w-full lg:block"
                  />
                </div>

                <div>
                  {/* Cytat jest wypowiedzią odbiorcy — wyróżnia go krój i stopień */}
                  <blockquote className="border-brand-400 text-brand-950 font-display border-l-2 pl-6 text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.3]">
                    „{item.quote}”
                  </blockquote>

                  <div className="mt-8 flex flex-col gap-5 pl-6">
                    {item.answer.map((paragraph, i) => (
                      <p
                        key={paragraph}
                        className={`measure text-brand-900/85 text-[1.06rem] leading-[1.8] ${i === 0 ? "drop-cap" : ""}`}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {program ? (
                      <p className="text-brand-700 mt-2 text-[0.85rem]">
                        Rozwijam to w szkoleniu{" "}
                        <Link
                          href="#oferta"
                          className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 rounded underline decoration-1 underline-offset-4 transition-colors outline-none focus-visible:ring-3"
                        >
                          „{program.title}”
                        </Link>
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="border-brand-200 mt-24 border-t pt-12 sm:mt-28">
          <p className="text-brand-800 measure font-display text-[1.1rem] leading-[1.6]">
            Jeśli Twoje zdanie brzmi inaczej — napisz je własnymi słowami.
            Odpowiem tak samo konkretnie.
          </p>
          <Link
            href="#wycena"
            className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 mt-5 inline-flex items-center gap-2 rounded text-[0.9rem] underline decoration-1 underline-offset-[6px] transition-colors outline-none focus-visible:ring-3"
          >
            Napisz do mnie
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </Reveal>
      </ContainerMvpB>
    </SectionMvpB>
  );
}
