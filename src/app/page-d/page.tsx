import { AudiencesD } from "@/components/page-d/audiences-d";
import { ContactD } from "@/components/page-d/contact-d";
import { FaqD } from "@/components/page-d/faq-d";
import { FooterD } from "@/components/page-d/footer-d";
import { HeaderD } from "@/components/page-d/header-d";
import { HeroD } from "@/components/page-d/hero-d";
import { MarqueeD } from "@/components/page-d/marquee-d";
import { MissionD } from "@/components/page-d/mission-d";
import { ModelScroll } from "@/components/page-d/model-scroll";
import { PricingD } from "@/components/page-d/pricing-d";
import { ProgramsD } from "@/components/page-d/programs-d";
import { VariantSwitch } from "@/components/page-b/variant-switch";

export default function PageD() {
  return (
    <>
      <a
        href="#tresc"
        className="bg-brand-700 text-brand-50 focus:ring-brand-300 sr-only rounded-full px-5 py-2.5 text-sm font-medium focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3"
      >
        Przejdź do treści
      </a>

      <HeaderD />

      <main id="tresc" className="flex-1">
        <HeroD />
        <MarqueeD />
        <AudiencesD />
        <ModelScroll />
        <ProgramsD />
        <MissionD />
        <PricingD />
        <FaqD />
        <ContactD />
      </main>

      <FooterD />
      <VariantSwitch active="d" />
    </>
  );
}
