import {
  ContainerC,
  EyebrowC,
  HeadingC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { deliverables } from "@/lib/content-c";

export function DeliverablesC() {
  return (
    <SectionC id="zostaje" className="bg-paper-deep">
      <ContainerC>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <EyebrowC>{deliverables.eyebrow}</EyebrowC>
            </Reveal>
            <HeadingC className="mt-6">{deliverables.title}</HeadingC>
            <Reveal delay={0.1} className="mt-6">
              <ProseC>{deliverables.intro}</ProseC>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <RevealGroup className="flex flex-col gap-10">
              {deliverables.groups.map((group) => (
                <RevealItem key={group.label}>
                  <h3 className="text-brand-700 border-brand-300 border-b pb-3 font-sans text-[0.72rem] font-medium tracking-[0.18em] uppercase">
                    {group.label}
                  </h3>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-brand-900 flex gap-3 text-[1.02rem] leading-relaxed"
                      >
                        <span
                          aria-hidden
                          className="bg-brand-400 mt-[0.7rem] size-1 shrink-0 rounded-full"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </ContainerC>
    </SectionC>
  );
}
