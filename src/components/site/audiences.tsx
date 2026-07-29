import { Building2, Gavel, UserRound, Users } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { audiences } from "@/lib/content";

const icons = {
  pracownicy: UserRound,
  liderzy: Users,
  pracodawcy: Building2,
  komisje: Gavel,
} as const;

export function Audiences() {
  return (
    <Section id="dla-kogo" tone="muted" className="py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_50%,black,transparent)]"
      />

      <Container>
        <SectionHeading
          eyebrow="Dla kogo"
          title="Cztery perspektywy, jedna wspólna zasada"
          description="Innych informacji potrzebuje pracownik, innych świadek, a jeszcze innych pracodawca czy członek komisji. Zakres, język i materiały dopasowuję do grupy uczestników."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, i) => {
            const Icon = icons[item.id];
            return (
              <RevealItem
                key={item.id}
                className="group border-brand-200/70 relative flex flex-col gap-4 border-t bg-white/60 p-7 transition-colors duration-500 hover:bg-white lg:border-t-0 lg:border-l lg:first:border-l-0"
              >
                <span
                  aria-hidden
                  className="from-brand-500 to-brand-300 absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r transition-transform duration-700 group-hover:scale-x-100 lg:top-0 lg:right-auto lg:bottom-0 lg:left-0 lg:h-auto lg:w-px lg:origin-top lg:scale-x-100 lg:scale-y-0 lg:bg-gradient-to-b lg:group-hover:scale-y-100"
                />

                <span className="text-brand-600 group-hover:text-brand-700 font-mono text-xs transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="border-brand-200 text-brand-700 group-hover:border-brand-300 group-hover:bg-brand-50 grid size-11 place-items-center rounded-2xl border bg-white transition-colors">
                  <Icon className="size-[1.15rem]" aria-hidden />
                </span>

                <h3 className="font-display text-brand-900 text-[1.15rem] leading-snug">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-[0.87rem] leading-relaxed">
                  {item.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
