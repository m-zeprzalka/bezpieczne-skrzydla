import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <Section id="cennik" tone="muted">
      <div
        aria-hidden
        className="bg-aurora absolute -top-40 left-1/2 -z-10 h-[560px] w-[1100px] -translate-x-1/2 opacity-35 blur-2xl"
      />

      <Container>
        <SectionHeading
          align="center"
          eyebrow="Formy współpracy"
          title="Przejrzyste widełki, wycena po rozmowie"
          description="Podstawową formą są szkolenia online — dzięki temu oferta pozostaje dostępna również dla mikro, małych i średnich firm. Nie płacisz za elementy, których nie potrzebujesz."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <RevealItem key={plan.name} className="flex h-full">
              <Card
                className={cn(
                  "relative flex w-full flex-col rounded-3xl transition-all duration-500 [--card-spacing:--spacing(7)]",
                  plan.featured
                    ? "bg-brand-900 text-brand-100 shadow-lift-lg ring-brand-800 lg:-translate-y-3"
                    : "hover:ring-brand-300 bg-white ring-foreground/8 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(11,37,64,0.3)]",
                )}
              >
                {plan.featured ? (
                  <span
                    aria-hidden
                    className="bg-aurora-deep pointer-events-none absolute inset-0 opacity-70"
                  />
                ) : null}

                <CardHeader className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle
                      className={cn(
                        "font-display text-[1.15rem] font-normal",
                        plan.featured ? "text-white" : "text-brand-900",
                      )}
                    >
                      {plan.name}
                    </CardTitle>

                    {plan.featured ? (
                      <Badge className="bg-brand-400 text-brand-950 h-auto gap-1.5 rounded-full px-3 py-1 text-[0.68rem] font-semibold">
                        <Sparkles className="size-3" aria-hidden />
                        Najczęściej wybierane
                      </Badge>
                    ) : null}
                  </div>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span
                      className={cn(
                        "font-display text-[2.1rem] leading-none tracking-tight",
                        plan.featured ? "text-white" : "text-brand-900",
                      )}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={cn(
                        "text-[0.8rem]",
                        plan.featured
                          ? "text-brand-300/85"
                          : "text-muted-foreground",
                      )}
                    >
                      {plan.unit}
                    </span>
                  </div>

                  <CardDescription
                    className={cn(
                      "text-balance-pretty mt-4 leading-relaxed",
                      plan.featured && "text-brand-200/85",
                    )}
                  >
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative flex-1">
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex items-start gap-3 text-[0.88rem] leading-snug",
                          plan.featured ? "text-brand-100" : "text-brand-800",
                        )}
                      >
                        <span
                          className={cn(
                            "mt-px grid size-4.5 shrink-0 place-items-center rounded-full",
                            plan.featured
                              ? "bg-brand-400 text-brand-950"
                              : "bg-brand-100 text-brand-700",
                          )}
                        >
                          <Check className="size-2.5" aria-hidden />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter
                  className={cn(
                    "relative",
                    plan.featured
                      ? "border-brand-800 bg-brand-950/40"
                      : "border-brand-100 bg-brand-50/60",
                  )}
                >
                  <Button
                    asChild
                    variant={plan.featured ? "default" : "outline"}
                    size="xl"
                    className={cn(
                      "w-full",
                      plan.featured
                        ? "bg-brand-400 text-brand-950 hover:bg-brand-300"
                        : "border-brand-200 text-brand-800 bg-white",
                    )}
                  >
                    <Link href="#kontakt">
                      {plan.cta}
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal
          delay={0.1}
          className="border-brand-200/70 mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border bg-white/70 px-7 py-6 text-center backdrop-blur-sm"
        >
          <h3 className="font-display text-brand-900 text-lg">
            Indywidualne dopasowanie
          </h3>
          <p className="text-muted-foreground text-balance-pretty text-[0.9rem] leading-relaxed">
            Do ceny szkolenia stacjonarnego mogą zostać doliczone wcześniej
            uzgodnione koszty dojazdu, noclegu, wynajęcia sali i organizacji
            spotkania. Wszystko ustalam przed podpisaniem umowy — bez ukrytych
            pozycji.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
