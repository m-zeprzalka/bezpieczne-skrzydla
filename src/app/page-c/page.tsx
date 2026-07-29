import { ContactC } from "@/components/page-c/contact-c";
import { DeliverablesC } from "@/components/page-c/deliverables-c";
import { FaqC } from "@/components/page-c/faq-c";
import { FooterC } from "@/components/page-c/footer-c";
import { HeroC } from "@/components/page-c/hero-c";
import { PricingC } from "@/components/page-c/pricing-c";
import { ProgramsC } from "@/components/page-c/programs-c";
import { PromisesC } from "@/components/page-c/promises-c";
import { SilenceC } from "@/components/page-c/silence-c";
import { StickyBarC } from "@/components/page-c/sticky-bar-c";
import { ThreadNav } from "@/components/page-c/thread-nav";
import { VoicesC } from "@/components/page-c/voices-c";
import { VariantSwitch } from "@/components/page-b/variant-switch";

export default function PageC() {
  return (
    <>
      <a
        href="#tresc"
        className="bg-brand-700 text-paper focus:ring-brand-300 sr-only rounded-lg px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3"
      >
        Przejdź do treści
      </a>

      <ThreadNav />

      <main id="tresc" className="flex-1">
        <HeroC />
        <VoicesC />
        <SilenceC />
        <PromisesC />
        <DeliverablesC />
        <ProgramsC />
        <PricingC />
        <FaqC />
        <ContactC />
      </main>

      <FooterC />
      <StickyBarC />
      <VariantSwitch active="c" raised />
    </>
  );
}
