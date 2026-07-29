import { HeaderH, HeroH } from "@/components/page-h/hero-h";
import {
  AudiencesH,
  ContactH,
  MissionH,
  ModelStackH,
  PricingH,
  TrainingsH,
} from "@/components/page-h/sections-h";
import { VariantSwitch } from "@/components/page-b/variant-switch";

export default function PageH() {
  return (
    <>
      <a
        href="#tresc"
        className="bg-brand-950 focus:ring-brand-300 sr-only rounded-full px-5 py-2.5 text-sm font-bold text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3"
      >
        Przejdź do treści
      </a>

      <HeaderH />

      <main id="tresc" className="flex-1">
        <HeroH />
        <AudiencesH />
        <ModelStackH />
        <TrainingsH />
        <MissionH />
        <PricingH />
        <ContactH />
      </main>

      <VariantSwitch active="h" />
    </>
  );
}
