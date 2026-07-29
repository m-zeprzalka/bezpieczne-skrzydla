import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_BODY_F,
  T_LEAD_F,
} from "@/components/page-f/frame-f";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { model4r } from "@/lib/content";
import { approachF } from "@/lib/content-f";

/**
 * Sekcja łączy dwa akapity „W swoich szkoleniach łączę…” (przeniesione
 * z dokumentu w całości) z minimalną mapą czterech kroków Modelu 4R.
 */
export function ModelF() {
  return (
    <SectionF id="model-4r" tone="tint">
      <ContainerF>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeadF
              index={approachF.index}
              label={approachF.label}
              title="Autorski"
              accent="Model 4R"
            />

            <div className="mt-8 flex max-w-[34rem] flex-col gap-5">
              {approachF.paragraphs.map((paragraph, i) => (
                <Reveal
                  key={paragraph}
                  delay={0.1 + i * 0.05}
                  className={`${T_LEAD_F} text-muted-foreground text-pretty`}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>

          {/* — cztery kroki: czysta lista z linią prowadzącą — */}
          <div className="md:col-span-7 md:pl-6 lg:pl-14">
            <RevealGroup as="ol" className="flex flex-col">
              {model4r.steps.map((step, i) => (
                <RevealItem
                  as="li"
                  key={step.key}
                  className="group border-brand-200 relative border-t py-8 pl-16 last:border-b sm:pl-20 lg:py-9"
                >
                  {/* oś pionowa łącząca kroki */}
                  {i < model4r.steps.length - 1 ? (
                    <span
                      aria-hidden
                      className="bg-brand-200 absolute top-[4.4rem] bottom-0 left-[1.19rem] w-px sm:left-[1.44rem]"
                    />
                  ) : null}

                  <span
                    aria-hidden
                    className="border-brand-300 text-brand-700 font-display absolute top-8 left-0 grid size-10 place-items-center rounded-full border bg-white text-[0.95rem] font-medium sm:size-12 lg:top-9"
                  >
                    {i + 1}
                  </span>

                  <h3 className="font-display text-brand-950 text-[1.5rem] leading-none tracking-tight sm:text-[1.75rem]">
                    {step.title}
                  </h3>

                  <p className="text-brand-700 mt-2.5 text-[1rem] font-medium">
                    {step.claim}
                  </p>

                  <p
                    className={`${T_BODY_F} text-muted-foreground mt-3 max-w-[36rem]`}
                  >
                    {step.description}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </ContainerF>
    </SectionF>
  );
}
