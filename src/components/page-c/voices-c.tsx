import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  ContainerC,
  EyebrowC,
  HeadingC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
import { Reveal } from "@/components/site/reveal";
import { programs } from "@/lib/content";
import { voices } from "@/lib/content-c";

export function VoicesC() {
  return (
    <SectionC id="slysze" className="border-brand-200 border-t">
      <ContainerC>
        <Reveal>
          <EyebrowC>{voices.eyebrow}</EyebrowC>
        </Reveal>

        <HeadingC className="measure-tight mt-6">{voices.intro}</HeadingC>

        <div className="mt-20 flex flex-col gap-20 sm:mt-24 sm:gap-24">
          {voices.items.map((item) => {
            const program = programs.find((p) => p.number === item.program);

            return (
              <Reveal
                key={item.id}
                as="article"
                /* Wąska szpalta marginaliów zamiast trzech kolumn siatki —
                   etykieta jest przypisem, nie osobną sekcją, więc nie może
                   zostawiać pod sobą pustego pola na pół ekranu. */
                className="grid grid-cols-1 gap-4 lg:grid-cols-[8rem_1fr] lg:gap-10"
              >
                <div className="lg:pt-2">
                  <EyebrowC>{item.who}</EyebrowC>
                  <span
                    aria-hidden
                    className="bg-brand-300 mt-3 hidden h-px w-full lg:block"
                  />
                </div>

                <div>
                  {/* Cytat jest wypowiedzią odbiorcy — stąd kursywa i cudzysłów */}
                  <blockquote className="border-brand-400 text-brand-950 border-l-2 pl-6 text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.25] italic">
                    „{item.quote}”
                  </blockquote>

                  <div className="mt-7 flex flex-col gap-4 pl-6">
                    {item.answer.map((paragraph, i) => (
                      <ProseC
                        key={paragraph}
                        className={i === 0 ? "drop-cap" : undefined}
                      >
                        {paragraph}
                      </ProseC>
                    ))}

                    {program ? (
                      <p className="text-brand-700 mt-2 font-sans text-[0.85rem]">
                        Rozwijam to w programie{" "}
                        <Link
                          href="#programy"
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

        <Reveal className="border-brand-200 mt-20 border-t pt-10 sm:mt-24">
          <p className="text-brand-800 measure text-[1.06rem] leading-[1.72] italic">
            Jeśli Twoje zdanie brzmi inaczej — napisz je własnymi słowami.
            Odpowiem tak samo konkretnie.
          </p>
          <Link
            href="#napisz"
            className="text-brand-800 hover:text-brand-600 decoration-brand-300 focus-visible:ring-ring/50 mt-4 inline-flex items-center gap-2 rounded font-sans text-[0.9rem] underline decoration-1 underline-offset-[6px] transition-colors outline-none focus-visible:ring-3"
          >
            Napisz do mnie
            <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </Reveal>
      </ContainerC>
    </SectionC>
  );
}
