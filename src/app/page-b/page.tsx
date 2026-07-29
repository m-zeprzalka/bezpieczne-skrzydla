import type { Metadata } from "next";

import { Audiences } from "@/components/site/audiences";
import { Contact } from "@/components/site/contact";
import { Faq } from "@/components/site/faq";
import { Hero } from "@/components/site/hero";
import { Mission } from "@/components/site/mission";
import { Model4R } from "@/components/site/model-4r";
import { Pricing } from "@/components/site/pricing";
import { Programs } from "@/components/site/programs";
import { Resources } from "@/components/site/resources";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Strengths } from "@/components/site/strengths";
import { VariantSwitch } from "@/components/page-b/variant-switch";
import { site } from "@/lib/content";

/**
 * Po zamianie miejscami z koncepcją B ta trasa prezentuje wariant A
 * (broszura premium). Fonty przychodzą z layoutu głównego, dane
 * strukturalne JSON-LD mieszkają na stronie głównej.
 */
export const metadata: Metadata = {
  title: "Wariant A — koncepcja strony",
  description:
    "Koncepcja „broszura premium”: editorialowe szeryfy, miękkie gradienty i karty. Prowadzi narracją: kim jestem → co oferuję.",
  robots: { index: false, follow: false },
  openGraph: {
    title: `Wariant A — ${site.name}`,
    description: "Broszura premium — koncepcja alternatywna.",
  },
};

export default function PageA() {
  return (
    <>
      <a
        href="#tresc"
        className="bg-brand-700 text-brand-50 focus:ring-brand-300 sr-only rounded-lg px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-3"
      >
        Przejdź do treści
      </a>

      <SiteHeader />

      <main id="tresc" className="flex-1">
        <Hero />
        <Audiences />
        <Mission />
        <Model4R />
        <Programs />
        <Strengths />
        <Pricing />
        <Resources />
        <Faq />
        <Contact />
      </main>

      <SiteFooter />
      <VariantSwitch active="a" />
    </>
  );
}
