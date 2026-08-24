import { PriceCards } from "@/components/pages/price-cards";
import { ArrowLink } from "@/components/system/arrow-link";
import { Container } from "@/components/system/container";
import { Reveal } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { pricing } from "@/content/pricing";

/** Cennik — ciemna sekcja; produkt flagowy jako biała karta. */
export function PricingHome() {
  return (
    <Section id="cennik" tone="deep" className="overflow-hidden">
      <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-40" />

      <Container className="relative">
        <SectionHead
          index="04"
          label={pricing.label}
          title="Cennik —"
          accent="prosty i przejrzysty"
          lead={pricing.lead}
          tone="dark"
          align="center"
        />

        <PriceCards className="mt-16 lg:mt-20" />

        <Reveal delay={0.1} className="mt-16 flex flex-col items-center text-center lg:mt-20">
          <p className="max-w-[40rem] font-display text-[1.35rem] leading-[1.35] text-balance text-white sm:text-[1.6rem]">
            {pricing.emphasis}
          </p>
          <p className="mt-4 max-w-[36rem] text-body-sm text-brand-200/85">{pricing.emphasisNote}</p>
          <ArrowLink href="/cennik" tone="dark" className="mt-8">
            Pełny cennik i zasady dopasowania
          </ArrowLink>
        </Reveal>
      </Container>
    </Section>
  );
}
