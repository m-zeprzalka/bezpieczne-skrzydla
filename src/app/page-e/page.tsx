import { AboutE } from "@/components/page-e/about-e";
import { AudiencesE } from "@/components/page-e/audiences-e";
import { ContactE } from "@/components/page-e/contact-e";
import { FaqE } from "@/components/page-e/faq-e";
import { FooterE } from "@/components/page-e/footer-e";
import { HeaderE } from "@/components/page-e/header-e";
import { HeroE } from "@/components/page-e/hero-e";
import { ModelE } from "@/components/page-e/model-e";
import { PricingE } from "@/components/page-e/pricing-e";
import { ProgramsE } from "@/components/page-e/programs-e";
import { ServicesE } from "@/components/page-e/services-e";
import { VariantSwitch } from "@/components/page-b/variant-switch";

export default function PageE() {
  return (
    <>
      <a
        href="#tresc"
        className="bg-brand-600 focus:ring-brand-300 sr-only rounded-xl px-5 py-2.5 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3"
      >
        Przejdź do treści
      </a>

      <HeaderE />

      <main id="tresc" className="flex-1">
        <HeroE />
        <ServicesE />
        <ModelE />
        <ProgramsE />
        <AudiencesE />
        <AboutE />
        <PricingE />
        <FaqE />
        <ContactE />
      </main>

      <FooterE />
      <VariantSwitch active="e" />
    </>
  );
}
