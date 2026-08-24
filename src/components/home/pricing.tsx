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
      <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-50" />
      <div aria-hidden className="bg-grid-dark mask-radial absolute inset-0 opacity-60" />

      <Container className="relative">
        <SectionHead
          index="04"
          label={pricing.label}
          title="Cennik —"
          accent="celowo prosty"
          lead={pricing.lead}
          tone="dark"
          align="center"
        />

        <PriceCards className="mt-14 lg:mt-16" />

        <Reveal delay={0.1} className="mt-14 flex flex-col items-center text-center lg:mt-16">
          <p className="max-w-[44rem] font-display text-[1.5rem] leading-[1.3] text-balance text-white sm:text-[1.85rem]">
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
