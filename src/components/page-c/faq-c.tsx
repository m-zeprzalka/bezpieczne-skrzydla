import {
  ContainerC,
  EyebrowC,
  HeadingC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { faq } from "@/lib/content";

export function FaqC() {
  return (
    <SectionC id="pytania">
      <ContainerC>
        <Reveal>
          <EyebrowC>Pytania</EyebrowC>
        </Reveal>

        <HeadingC className="measure-tight mt-6">
          Odpowiedzi, o które i tak zapytasz w rozmowie
        </HeadingC>

        {/* Bez akordeonu: odpowiedzi są od razu widoczne. To sekcja do
            przeczytania, a nie do klikania — i przy okazji cała treść
            jest dostępna dla wyszukiwarek bez interakcji. */}
        <RevealGroup as="dl" className="border-brand-200 mt-14 border-t">
          {faq.map((item, i) => (
            <RevealItem
              key={item.q}
              className="border-brand-200 grid grid-cols-1 gap-4 border-b py-9 lg:grid-cols-12 lg:gap-10"
            >
              <dt className="flex gap-5 lg:col-span-5">
                <span className="text-brand-400 font-sans text-[0.78rem] tracking-widest tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-brand-950 text-[1.18rem] leading-[1.3]">
                  {item.q}
                </span>
              </dt>
              <dd className="lg:col-span-7">
                <ProseC className="text-[1.02rem]">{item.a}</ProseC>
              </dd>
            </RevealItem>
          ))}
        </RevealGroup>
      </ContainerC>
    </SectionC>
  );
}
