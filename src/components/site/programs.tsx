"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Coffee, Package } from "lucide-react";

import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { WingArcs } from "@/components/site/wing-arcs";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { cn, pluralPl } from "@/lib/utils";
import { programs, workshop } from "@/lib/content";

/** Asymetryczny rytm siatki: 3+3, potem 2+2+2 — unika efektu „tabelki”. */
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
] as const;

export function Programs() {
  return (
    <Section id="oferta" tone="muted">
      <div
        aria-hidden
        className="bg-grid absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <Container>
        <SectionHeading
          eyebrow="Oferta"
          title="Pięć programów szkoleniowych i jeden warsztat wspierający"
          description="Każde szkolenie odpowiada na inny moment w organizacji — od pierwszego niepokojącego sygnału po pracę komisji antymobbingowej. Zakres, długość i materiały dopasowuję do zespołu."
          action={
            <Button asChild variant="outline" size="xl" className="bg-white">
              <Link href="#kontakt">
                Poproś o dopasowaną ofertę
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          }
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {programs.map((program, i) => (
            <RevealItem key={program.number} className={cn(spans[i], "flex")}>
              <ProgramCard program={program} />
            </RevealItem>
          ))}
        </RevealGroup>

        <WorkshopPanel />
      </Container>
    </Section>
  );
}

function ProgramCard({ program }: { program: (typeof programs)[number] }) {
  return (
    <Card className="group/program hover:ring-brand-300 relative flex w-full flex-col rounded-3xl bg-white/90 ring-foreground/8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_-28px_rgba(11,37,64,0.35)] [--card-spacing:--spacing(7)]">
      <span
        aria-hidden
        className="from-brand-400/0 via-brand-400 to-brand-400/0 absolute inset-x-7 top-0 h-px scale-x-0 bg-gradient-to-r opacity-0 transition-all duration-700 group-hover/program:scale-x-100 group-hover/program:opacity-100"
      />

      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <span className="text-brand-600 group-hover/program:text-brand-700 font-mono text-xs transition-colors">
            {program.number}
          </span>
          <Badge
            variant="secondary"
            className="bg-brand-100 text-brand-700 h-auto max-w-[65%] rounded-full px-3 py-1 text-[0.68rem] leading-tight whitespace-normal"
          >
            {program.audience}
          </Badge>
        </div>

        <CardTitle className="font-display text-brand-900 mt-4 text-[1.3rem] leading-[1.25] font-normal">
          {program.title}
        </CardTitle>

        <CardDescription className="text-balance-pretty mt-2.5 leading-relaxed">
          {program.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="flex flex-col gap-2.5">
          {program.highlights.map((highlight) => (
            <li
              key={highlight}
              className="text-brand-800 flex items-start gap-2.5 text-[0.85rem] leading-snug"
            >
              <span className="bg-brand-100 text-brand-700 mt-px grid size-4.5 shrink-0 place-items-center rounded-full">
                <Check className="size-2.5" aria-hidden />
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="border-brand-100 bg-brand-50/60 justify-between gap-3">
        <span className="text-muted-foreground flex items-center gap-2 text-[0.78rem]">
          <Package className="size-3.5" aria-hidden />
          {program.materials.length}{" "}
          {pluralPl(
            program.materials.length,
            "materiał dodatkowy",
            "materiały dodatkowe",
            "materiałów dodatkowych",
          )}
        </span>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-brand-700 hover:bg-brand-100"
            >
              Program
              <ArrowUpRight
                data-icon="inline-end"
                className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
              />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-h-[85vh] gap-0 overflow-y-auto sm:max-w-lg">
            <DialogHeader className="text-left">
              <Badge
                variant="secondary"
                className="bg-brand-100 text-brand-700 mb-3 h-auto w-fit rounded-full px-3 py-1 text-[0.68rem] leading-tight whitespace-normal"
              >
                {program.audience}
              </Badge>
              <DialogTitle className="font-display text-brand-900 text-[1.4rem] leading-snug font-normal">
                {program.title}
              </DialogTitle>
              <DialogDescription className="text-balance-pretty pt-1 leading-relaxed">
                {program.summary}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-6 py-6">
              <div className="flex flex-col gap-3">
                <h4 className="text-brand-600 text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                  Podczas szkolenia pokazuję
                </h4>
                <ul className="flex flex-col gap-2">
                  {program.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-brand-800 flex items-start gap-2.5 text-[0.88rem]"
                    >
                      <span className="bg-brand-100 text-brand-700 mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full">
                        <Check className="size-2.5" aria-hidden />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              <div className="flex flex-col gap-3">
                <h4 className="text-brand-600 text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                  Materiały dodatkowe
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {program.materials.map((material) => (
                    <li key={material}>
                      <Badge
                        variant="outline"
                        className="border-brand-200 text-brand-700 h-auto rounded-full px-3 py-1 text-[0.72rem] font-normal"
                      >
                        {material}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <DialogFooter className="flex-col gap-2 sm:flex-row">
              <DialogClose asChild>
                <Button variant="outline" size="lg">
                  Zamknij
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button asChild variant="brand" size="lg">
                  <Link href="#kontakt">
                    Zapytaj o to szkolenie
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

function WorkshopPanel() {
  return (
    <Reveal className="mt-6">
      <div className="border-brand-200/70 relative overflow-hidden rounded-3xl border bg-white">
        <span
          aria-hidden
          className="from-sand pointer-events-none absolute inset-0 bg-gradient-to-br via-white to-white"
        />
        <WingArcs
          animate={false}
          className="pointer-events-none absolute -right-40 -bottom-56 w-[620px] max-w-none rotate-180 opacity-[0.07]"
          count={8}
        />

        <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Badge
              variant="outline"
              className="border-brand-300 text-brand-700 h-auto gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.72rem] font-medium"
            >
              <Coffee className="size-3.5" aria-hidden />
              {workshop.badge}
            </Badge>

            <h3 className="font-display text-brand-900 mt-5 text-[clamp(1.6rem,3vw,2.35rem)] leading-tight">
              {workshop.title}
            </h3>

            <p className="font-display text-brand-700 mt-2 text-lg italic">
              {workshop.subtitle}
            </p>

            <p className="text-muted-foreground text-balance-pretty mt-5 max-w-xl leading-relaxed">
              {workshop.body}
            </p>

            <p className="border-brand-200 text-muted-foreground mt-6 max-w-xl border-l-2 pl-4 text-[0.82rem] leading-relaxed italic">
              {workshop.disclaimer}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border-brand-200/80 bg-brand-50/70 rounded-2xl border p-6 backdrop-blur-sm sm:p-7">
              <h4 className="text-brand-600 text-[0.7rem] font-semibold tracking-[0.16em] uppercase">
                Podczas spotkania
              </h4>

              <ul className="mt-5 flex flex-col gap-4">
                {workshop.points.map((point) => (
                  <li
                    key={point}
                    className="text-brand-800 flex items-start gap-3 text-[0.9rem] leading-snug"
                  >
                    <span className="bg-brand-700 text-brand-50 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                      <Check className="size-3" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <Button asChild variant="brand" size="xl" className="mt-7 w-full">
                <Link href="#kontakt">
                  Zapytaj o najbliższy termin
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
