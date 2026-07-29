"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Info, RotateCcw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ContainerB, LabelB, SectionB } from "@/components/page-b/frame";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { selfCheck } from "@/lib/content-b";

type Answer = "tak" | "nie" | "niewiem";

const OPTIONS: { value: Answer; label: string }[] = [
  { value: "tak", label: selfCheck.yes },
  { value: "nie", label: selfCheck.no },
  { value: "niewiem", label: selfCheck.unsure },
];

export function SelfCheck() {
  const reduce = useReducedMotion();
  const [answers, setAnswers] = React.useState<Record<string, Answer>>({});

  const answered = Object.keys(answers).length;
  const total = selfCheck.questions.length;
  const complete = answered === total;

  const yesCount = Object.values(answers).filter((a) => a === "tak").length;
  const unsureCount = Object.values(answers).filter(
    (a) => a === "niewiem",
  ).length;

  const result = React.useMemo(
    () =>
      selfCheck.results.find((r) => yesCount <= r.max) ?? selfCheck.results[0],
    [yesCount],
  );

  function answer(id: string, value: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function reset() {
    setAnswers({});
  }

  return (
    <SectionB id="sprawdz" tone="tint">
      <ContainerB>
        <div className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
          <Reveal className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.18em] text-brand-600 uppercase">
            <span>02</span>
            <span aria-hidden className="bg-brand-300 h-px w-8" />
            <span>{selfCheck.eyebrow}</span>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* — wprowadzenie — */}
            <div className="lg:col-span-4">
              <Reveal delay={0.05} as="div">
                <h2 className="font-grotesk text-brand-950 text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.05] font-medium tracking-[-0.03em]">
                  {selfCheck.title}
                </h2>
              </Reveal>

              <Reveal
                delay={0.1}
                className="text-muted-foreground mt-6 text-[0.95rem] leading-relaxed"
              >
                {selfCheck.intro}
              </Reveal>

              <Reveal
                delay={0.14}
                className="border-brand-300 text-muted-foreground mt-8 flex gap-3 border-l-2 pl-4 text-[0.8rem] leading-relaxed"
              >
                <Info
                  className="text-brand-600 mt-0.5 size-4 shrink-0"
                  aria-hidden
                />
                <span>{selfCheck.disclaimer}</span>
              </Reveal>
            </div>

            {/* — kwestionariusz — */}
            <div className="lg:col-span-8">
              <Reveal delay={0.08}>
                <div className="border-brand-300 overflow-hidden rounded-md border bg-white">
                  <div className="border-brand-200 flex items-center justify-between gap-4 border-b px-5 py-3.5">
                    <LabelB>
                      Pytanie {Math.min(answered + 1, total)} z {total}
                    </LabelB>
                    <div className="flex items-center gap-3">
                      <Progress
                        value={(answered / total) * 100}
                        className="h-1 w-24"
                        aria-label="Postęp samosprawdzenia"
                      />
                      {answered > 0 ? (
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={reset}
                          className="text-brand-600 hover:bg-brand-50"
                        >
                          <RotateCcw data-icon="inline-start" />
                          Od nowa
                        </Button>
                      ) : null}
                    </div>
                  </div>

                  <ol className="flex flex-col">
                    {selfCheck.questions.map((question, i) => {
                      const value = answers[question.id];
                      return (
                        <li
                          key={question.id}
                          className="border-brand-200 flex flex-col gap-4 border-b bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                        >
                          <span className="flex gap-3">
                            <span
                              aria-hidden
                              className={cn(
                                "font-mono text-[0.7rem] leading-6 transition-colors",
                                value ? "text-brand-600" : "text-brand-400",
                              )}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-brand-900 text-[0.93rem] leading-relaxed">
                              {question.text}
                            </span>
                          </span>

                          <ToggleGroup
                            type="single"
                            variant="outline"
                            size="sm"
                            spacing={0}
                            value={value ?? ""}
                            onValueChange={(v) =>
                              v && answer(question.id, v as Answer)
                            }
                            aria-label={question.text}
                            className="shrink-0 self-start sm:self-center"
                          >
                            {OPTIONS.map((option) => (
                              <ToggleGroupItem
                                key={option.value}
                                value={option.value}
                                className="data-[state=on]:bg-brand-950 data-[state=on]:text-white"
                              >
                                {option.label}
                              </ToggleGroupItem>
                            ))}
                          </ToggleGroup>
                        </li>
                      );
                    })}
                  </ol>

                  {/* — wynik — */}
                  <div className="bg-brand-50/60">
                    {complete ? (
                      <motion.div
                        data-reveal=""
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="p-5 sm:p-7"
                        role="status"
                      >
                        <span className="bg-brand-950 inline-flex rounded-sm px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.14em] text-white uppercase">
                          {result.badge}
                        </span>

                        <h3 className="font-grotesk text-brand-950 mt-4 text-[1.35rem] leading-snug font-medium">
                          {result.title}
                        </h3>

                        <p className="text-muted-foreground text-balance-pretty mt-3 max-w-2xl text-[0.92rem] leading-relaxed">
                          {result.body}
                        </p>

                        {unsureCount >= 2 ? (
                          <p className="text-brand-800 bg-brand-100/70 mt-4 max-w-2xl rounded-sm px-4 py-3 text-[0.85rem] leading-relaxed">
                            Kilka odpowiedzi brzmi „nie wiem” — to naturalne na
                            tym etapie. Zapisywanie faktów zwykle zamienia „nie
                            wiem” w konkret szybciej niż kolejne rozmyślanie.
                          </p>
                        ) : null}

                        <div className="border-brand-200 mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
                          <span className="text-muted-foreground text-[0.85rem]">
                            Materiał, który tu pomaga:{" "}
                            <span className="text-brand-900 font-medium">
                              {result.next}
                            </span>
                          </span>
                          <Button
                            asChild
                            variant="brand"
                            size="lg"
                            className="rounded-md"
                          >
                            <Link href="#kontakt">
                              Poproś o ten materiał
                              <ArrowRight data-icon="inline-end" />
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <p className="text-muted-foreground px-5 py-6 text-[0.85rem]">
                        Odpowiedz na wszystkie cztery pytania, żeby zobaczyć
                        podsumowanie. Nic nie jest wysyłane.
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </ContainerB>
    </SectionB>
  );
}
