import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { cn } from "@/lib/utils";
import { strengths } from "@/lib/content";

export function Strengths() {
  return (
    <Section id="dlaczego">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Dlaczego Bezpieczne Skrzydła"
          title="Więcej niż prezentacja pełna definicji"
          description="Nie obiecuję prostych odpowiedzi na każdą sytuację. Daję wiedzę, język i uporządkowany kierunek, od którego można zacząć."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <RevealItem
              key={item.title}
              className={cn(
                "group border-brand-200/70 relative flex flex-col gap-4 border-t p-8 transition-colors duration-500 first:border-t md:border-l md:odd:border-l-0 lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(-n+3)]:border-t-0",
                item.wide && "lg:col-span-1",
              )}
            >
              <span
                aria-hidden
                className="from-brand-50/0 via-brand-50/70 to-brand-50/0 absolute inset-0 -z-10 bg-gradient-to-b opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex items-center gap-3">
                <span className="text-brand-600 group-hover:text-brand-700 font-mono text-xs transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="bg-brand-200 group-hover:bg-brand-400 h-px w-8 transition-colors duration-500 group-hover:w-12"
                />
              </div>

              <h3 className="font-display text-brand-900 text-[1.2rem] leading-snug">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-balance-pretty text-[0.9rem] leading-relaxed">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
