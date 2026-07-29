import { AlertTriangle, Check } from "lucide-react";

import { ContainerB, SectionB, SectionHeadB } from "@/components/page-b/frame";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { timeline } from "@/lib/content-b";

export function TimelineB() {
  return (
    <SectionB id="schemat" tone="deep">
      <ContainerB>
        <SectionHeadB
          index="04"
          eyebrow={timeline.eyebrow}
          title={timeline.title}
          description={timeline.intro}
          tone="dark"
        />

        <RevealGroup
          as="ol"
          className="mt-14 grid grid-cols-1 gap-px lg:mt-16 lg:grid-cols-3"
        >
          {timeline.phases.map((phase, i) => (
            <RevealItem
              as="li"
              key={phase.key}
              className="border-brand-800 relative flex flex-col border-t p-7 lg:border-t-0 lg:border-l lg:first:border-l-0 lg:p-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-grotesk text-[2.4rem] leading-none font-semibold tracking-tight text-white">
                  {phase.label}
                </span>
                <span className="text-brand-400 font-mono text-[0.7rem] tracking-[0.16em] uppercase">
                  etap {i + 1}
                </span>
              </div>

              <h3 className="font-grotesk text-brand-200 mt-4 text-[1.15rem] font-medium">
                {phase.title}
              </h3>

              <ul className="border-brand-800 mt-6 flex flex-col gap-3.5 border-t pt-6">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="text-brand-100 flex gap-3 text-[0.88rem] leading-snug"
                  >
                    <Check
                      className="text-brand-400 mt-0.5 size-3.5 shrink-0"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="border-brand-800 text-brand-300 mt-12 flex max-w-3xl gap-3 border-t pt-6 pb-16 text-[0.82rem] leading-relaxed sm:pb-20 lg:pb-24">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>{timeline.note}</p>
        </div>
      </ContainerB>
    </SectionB>
  );
}
