import {
  ContainerC,
  EyebrowC,
  HeadingC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { promises } from "@/lib/content-c";

export function PromisesC() {
  return (
    <SectionC id="mapa">
      <ContainerC>
        <Reveal>
          <EyebrowC>{promises.eyebrow}</EyebrowC>
        </Reveal>

        <HeadingC className="mt-6">{promises.title}</HeadingC>

        <Reveal delay={0.1} className="mt-6">
          <ProseC>{promises.intro}</ProseC>
        </Reveal>

        {/* Cztery zobowiązania, nie cztery ikony — 4R wypowiedziane, nie narysowane */}
        <RevealGroup as="ol" className="border-brand-200 mt-16 border-t">
          {promises.items.map((item) => (
            <RevealItem
              as="li"
              key={item.key}
              className="border-brand-200 grid grid-cols-1 gap-4 border-b py-10 lg:grid-cols-12 lg:gap-10"
            >
              <div className="flex items-baseline gap-5 lg:col-span-4">
                <span className="text-brand-400 font-sans text-[0.78rem] tracking-widest tabular-nums">
                  {item.index}
                </span>
                <h3 className="text-brand-950 text-[1.5rem] leading-none sm:text-[1.75rem]">
                  {item.title}
                </h3>
              </div>

              <div className="lg:col-span-8">
                <p className="text-brand-800 text-[1.15rem] leading-[1.35] italic sm:text-[1.3rem]">
                  {item.promise}
                </p>
                <ProseC className="mt-4">{item.body}</ProseC>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerC>
    </SectionC>
  );
}
