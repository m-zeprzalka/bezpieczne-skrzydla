"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { ContainerB, LabelB } from "@/components/page-b/frame";
import { useActiveRole, useRole } from "@/components/page-b/role-store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { programs } from "@/lib/content";
import { heroB, roles } from "@/lib/content-b";

export function HeroB() {
  const reduce = useReducedMotion();
  const { role, setRole, chosen } = useRole();
  const active = useActiveRole();
  const program = programs.find((p) => p.number === active.program);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Rusztowanie kolumnowe — widoczna siatka zamiast miękkich gradientów */}
      <div
        aria-hidden
        className="rule-columns absolute inset-0 hidden opacity-60 lg:block"
      />

      <ContainerB className="relative pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* — deklaracja — */}
          <div className="flex flex-col lg:col-span-7 lg:pr-8">
            <motion.div
              data-reveal=""
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <LabelB className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="bg-brand-600 size-1.5 rounded-sm"
                />
                {heroB.kicker}
              </LabelB>
            </motion.div>

            <motion.h1
              data-reveal=""
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-grotesk text-brand-950 mt-6 text-[clamp(2.2rem,4.6vw,3.9rem)] leading-[0.98] font-semibold tracking-[-0.035em]"
            >
              {heroB.titleLead}{" "}
              <span className="marker-accent">{heroB.titleAccent}</span>{" "}
              {heroB.titleTail}
            </motion.h1>

            <motion.p
              data-reveal=""
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-muted-foreground text-balance-pretty mt-7 max-w-xl text-[1.02rem] leading-relaxed"
            >
              {heroB.description}
            </motion.p>

            <motion.dl
              data-reveal=""
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              /* `mt-auto` dosuwa liczby do dołu kolumny — wysokość sekcji
                 wyznacza panel po prawej, więc inaczej zostaje pusta luka. */
              className="border-brand-200 mt-10 grid max-w-xl grid-cols-2 border-t sm:grid-cols-4 lg:mt-auto lg:pt-12"
            >
              {heroB.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-brand-200 flex flex-col gap-1 border-r border-b py-4 pr-3 last:border-r-0 sm:border-b-0"
                >
                  <dt className="font-grotesk text-brand-950 text-[1.25rem] leading-none font-semibold tracking-tight">
                    {fact.value}
                  </dt>
                  <dd className="text-muted-foreground text-[0.72rem] leading-snug">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* — panel wyboru roli: strona zachowuje się jak narzędzie — */}
          <motion.div
            data-reveal=""
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="border-brand-300 overflow-hidden rounded-md border bg-white">
              <div className="border-brand-200 bg-brand-50 flex items-center justify-between gap-3 border-b px-4 py-3">
                <LabelB>{heroB.rolePrompt}</LabelB>
                {chosen ? (
                  <span className="text-brand-600 font-mono text-[0.65rem] tracking-wider uppercase">
                    dopasowano
                  </span>
                ) : null}
              </div>

              {/* Radiogroup, nie taby: to wybór kontekstu dla całej strony */}
              <div
                role="radiogroup"
                aria-label={heroB.rolePrompt}
                className="flex flex-col"
              >
                {roles.map((item) => {
                  const isActive = item.id === role;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => setRole(item.id)}
                      className={cn(
                        "group border-brand-200 focus-visible:ring-ring/50 flex items-center gap-3 border-b px-4 py-3.5 text-left transition-colors outline-none focus-visible:ring-3 focus-visible:ring-inset",
                        isActive
                          ? "bg-brand-950 text-white"
                          : "hover:bg-brand-50 text-brand-800",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "grid size-4 shrink-0 place-items-center rounded-full border transition-colors",
                          isActive
                            ? "border-brand-400 bg-brand-400"
                            : "border-brand-300 group-hover:border-brand-500",
                        )}
                      >
                        {isActive ? (
                          <span className="bg-brand-950 size-1.5 rounded-full" />
                        ) : null}
                      </span>
                      <span className="text-[0.92rem] font-medium">
                        {item.tab}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* — odpowiedź dopasowana do wyboru — */}
              <motion.div
                data-reveal=""
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-6"
              >
                <p className="font-grotesk text-brand-950 text-[1.05rem] leading-snug font-medium">
                  {active.situation}
                </p>

                <p className="text-muted-foreground mt-3 text-[0.88rem] leading-relaxed">
                  {active.answer}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {active.gains.map((gain) => (
                    <li
                      key={gain}
                      className="text-brand-800 flex items-start gap-2.5 text-[0.85rem] leading-snug"
                    >
                      <Check
                        className="text-brand-600 mt-0.5 size-3.5 shrink-0"
                        aria-hidden
                      />
                      {gain}
                    </li>
                  ))}
                </ul>

                {program ? (
                  <div className="border-brand-200 mt-6 border-t pt-5">
                    <LabelB>Polecam zacząć od</LabelB>
                    <p className="font-grotesk text-brand-950 mt-2 text-[0.98rem] leading-snug font-medium">
                      {program.title}
                    </p>
                    <Button
                      asChild
                      variant="brand"
                      size="lg"
                      className="mt-4 w-full rounded-md"
                    >
                      <Link href="#oferta">
                        {active.cta}
                        <ArrowRight data-icon="inline-end" />
                      </Link>
                    </Button>
                  </div>
                ) : null}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ContainerB>
    </section>
  );
}
