import { FaqList } from "@/components/pages/faq-list";
import { Container } from "@/components/system/container";
import { Section, SectionHead } from "@/components/system/section";
import { faqFor } from "@/content/faq";

export function FaqHome() {
  return (
    <Section id="faq" tone="tint">
      <Container>
        <SectionHead index="06" label="Pytania i odpowiedzi" title="Zanim zapytasz —" accent="odpowiadam" align="center" />
        <FaqList items={faqFor("home")} className="mx-auto mt-16 max-w-[44rem] lg:mt-20" />
      </Container>
    </Section>
  );
}
