import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Container } from "@/components/system/container";
import { Reveal } from "@/components/system/reveal";
import { WingArcs } from "@/components/system/wing-arcs";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Pas wezwania do działania — domyka podstrony. Jeden przycisk główny,
 * telefon jako droga alternatywna. Zawsze na ciemnym tle.
 */
export function CtaBand({
  title = "Każdą ofertę przygotowuję indywidualnie, po bezpłatnej rozmowie.",
  text = "Napisz, kogo chcesz przeszkolić i w jakiej sytuacji jest zespół. Odpowiem propozycją zakresu, formy i kwoty — bez zobowiązań.",
  cta = { label: "Poproś o wycenę", href: "/kontakt" },
  className,
}: {
  title?: string;
  text?: string;
  cta?: { label: string; href: string };
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-surface-deep text-brand-100", className)}>
      <div aria-hidden className="bg-aurora-deep absolute inset-0 opacity-40" />
      <WingArcs
        tone="dark"
        className="absolute -bottom-40 left-1/2 w-[1000px] max-w-none -translate-x-1/2 opacity-[0.12]"
        count={10}
      />
      <Container className="relative py-24 md:py-32 lg:py-36">
        <Reveal className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
          <h2 className="text-h2 text-balance text-white">{title}</h2>
          <p className="text-lead mt-6 max-w-[34rem] text-pretty text-brand-200/85">{text}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild variant="inverse" size="xl">
              <Link href={cta.href}>
                {cta.label}
                <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline-inverse" size="xl">
              <a href={`tel:${site.phoneHref}`}>
                <Phone data-icon="inline-start" />
                {site.phone}
              </a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
