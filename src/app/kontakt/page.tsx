import { Suspense } from "react";
import { MessageSquareText, PhoneCall, Send } from "lucide-react";

import { QuoteForm } from "@/components/forms/quote-form";
import { ContactDetails } from "@/components/pages/contact-details";
import { Container } from "@/components/system/container";
import { IconTile } from "@/components/system/icon-tile";
import { PageHero } from "@/components/system/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/system/reveal";
import { Section, SectionHead } from "@/components/system/section";
import { contact } from "@/content/contact";
import { breadcrumbJsonLd, JsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt i wycena",
  description:
    "Poproś o wycenę szkolenia, pakietu dla firmy lub wdrożenia procedury antymobbingowej. Odpowiadam propozycją zakresu, formy i kwoty — zwykle w ciągu jednego dnia roboczego.",
  path: "/kontakt",
});

const steps = [
  {
    icon: Send,
    title: "Piszesz",
    text: "Kilka odpowiedzi w formularzu wystarczy. Wiadomość jest opcjonalna — ale każdy szczegół pomaga.",
  },
  {
    icon: PhoneCall,
    title: "Rozmawiamy",
    text: "Bezpłatna, niezobowiązująca rozmowa wstępna o sytuacji firmy i o tym, kogo chcesz przeszkolić.",
  },
  {
    icon: MessageSquareText,
    title: "Dostajesz propozycję",
    text: "Zakres, forma i kwota do zapłaty — bez gwiazdek. Zwykle w ciągu jednego dnia roboczego.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <JsonLd
        graph={[
          breadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Kontakt", path: "/kontakt" },
          ]),
        ]}
      />

      <PageHero
        compact
        crumbs={[{ label: "Strona główna", href: "/" }, { label: "Kontakt" }]}
        label={contact.label}
        title="Poproś o"
        accent="wycenę"
        lead={contact.lead}
      />

      <Section id="wycena" size="compact">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <ContactDetails />
              </Reveal>
            </div>
            <div className="md:col-span-7 md:pl-4 lg:pl-12">
              <Reveal delay={0.08}>
                <Suspense fallback={<div className="min-h-[36rem] rounded-panel bg-brand-50/70" aria-hidden />}>
                  <QuoteForm />
                </Suspense>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="co-dalej" tone="tint">
        <Container>
          <SectionHead label="Co dalej" title="Trzy kroki" accent="do propozycji" align="center" />
          <RevealGroup as="ol" className="mx-auto mt-14 grid max-w-[60rem] grid-cols-1 gap-5 md:grid-cols-3">
            {steps.map((step, i) => (
              <RevealItem as="li" key={step.title} className="relative flex flex-col rounded-card border border-brand-200/80 bg-white p-7">
                <span aria-hidden className="t-outline absolute top-5 right-6 text-[2.4rem] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <IconTile tone="tint" size="lg">
                  <step.icon aria-hidden />
                </IconTile>
                <h3 className="mt-5 font-display text-[1.25rem] tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2.5 text-body-sm text-pretty text-ink-muted">{step.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>
    </>
  );
}
