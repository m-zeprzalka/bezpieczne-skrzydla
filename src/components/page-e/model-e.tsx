import {
  ContainerE,
  SectionE,
  SectionHeadE,
  T_BODY,
  T_H3,
} from "@/components/page-e/frame";
import { model4r } from "@/lib/content";
import { modelE } from "@/lib/content-e";

export function ModelE() {
  return (
    <SectionE id="model">
      <ContainerE>
        <SectionHeadE
          label={modelE.label}
          before={modelE.titleBefore}
          marked={modelE.titleMarked}
          lead={modelE.lead}
        />

        {/*
          Cztery kolumny bez kart i cieni. `grid-rows-subgrid` sprawia, że
          numer, tytuł, obietnica, opis i lista leżą w każdej kolumnie na tych
          samych osiach — inaczej linie oddzielające rozjeżdżają się wraz
          z długością tekstu.
        */}
        <ol className="border-brand-200 mt-16 grid grid-cols-1 gap-x-8 gap-y-12 border-t pt-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto_auto_1fr]">
          {model4r.steps.map((step) => (
            <li
              key={step.key}
              className="flex flex-col lg:grid lg:row-span-5 lg:grid-rows-subgrid lg:gap-0"
            >
              <span className="text-brand-300 text-[2.75rem] leading-none font-bold tracking-[-0.03em]">
                {step.index}
              </span>

              <h3 className={`${T_H3} text-brand-950 mt-6 font-semibold`}>
                {step.title}
              </h3>

              <p className="text-brand-700 mt-3 text-[0.9375rem] leading-[1.5] font-medium">
                {step.claim}
              </p>

              <p className={`${T_BODY} text-muted-foreground mt-4`}>
                {step.description}
              </p>

              <ul className="border-brand-100 mt-6 flex flex-col gap-2.5 border-t pt-5">
                {step.points.map((point) => (
                  <li
                    key={point}
                    className="text-brand-800 flex gap-2.5 text-[0.875rem] leading-[1.5]"
                  >
                    <span
                      aria-hidden
                      className="bg-brand-400 mt-[0.55rem] size-1.5 shrink-0 rounded-full"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </ContainerE>
    </SectionE>
  );
}
