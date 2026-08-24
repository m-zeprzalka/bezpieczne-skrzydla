import { Suspense } from "react";

import { QuoteForm } from "@/components/forms/quote-form";
import { ContactDetails } from "@/components/pages/contact-details";
import { Container } from "@/components/system/container";
import { Reveal } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { contact } from "@/content/contact";

export function ContactHome() {
  return (
    <Section id="kontakt" tone="tint">
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHead index="08" label={contact.label} title="Poproś o" accent="wycenę" lead={contact.lead} />
            <Reveal delay={0.1} className="mt-10">
              <ContactDetails />
            </Reveal>
          </div>

          <div id="wycena" className="scroll-mt-28 md:col-span-7 md:pl-4 lg:pl-12">
            <Reveal delay={0.08}>
              <Suspense fallback={<div className="min-h-[36rem] rounded-panel bg-white/60" aria-hidden />}>
                <QuoteForm className="bg-white shadow-lift" />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
