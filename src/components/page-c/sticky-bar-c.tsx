"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, List } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sections, stickyBar } from "@/lib/content-c";

/**
 * Nagłówek na tej stronie odjeżdża razem z treścią — czytanie ma być
 * niezakłócone. Rolę stałego punktu zaczepienia przejmuje ten pasek: pojawia
 * się dopiero po opuszczeniu sekcji otwierającej i niesie jedną cenę, jedno
 * wezwanie do działania oraz spis treści dla ekranów bez bocznej nici.
 */
export function StickyBarC() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    return scrollY.on("change", (value) => {
      setVisible(value > 640);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={reduce ? { opacity: 0 } : { y: "110%" }}
          animate={reduce ? { opacity: 1 } : { y: 0 }}
          exit={reduce ? { opacity: 0 } : { y: "110%" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 print:hidden"
        >
          <div className="border-brand-200 bg-paper/95 border-t backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
              <p className="text-brand-800 hidden font-sans text-[0.82rem] sm:block">
                {stickyBar.label}
              </p>

              <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-lg font-sans xl:hidden"
                    >
                      <List data-icon="inline-start" />
                      Spis treści
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="bottom" className="gap-0">
                    <SheetHeader className="border-b">
                      <SheetTitle className="text-brand-950">
                        Spis treści
                      </SheetTitle>
                    </SheetHeader>
                    <ol className="flex flex-col p-2">
                      {sections.map((section, i) => (
                        <SheetClose key={section.id} asChild>
                          <a
                            href={`#${section.id}`}
                            className="text-brand-900 hover:bg-paper-deep border-brand-100 focus-visible:ring-ring/50 flex items-center gap-4 rounded border-b px-3 py-3.5 text-[1.02rem] transition-colors outline-none last:border-b-0 focus-visible:ring-3"
                          >
                            <span className="text-brand-500 font-sans text-[0.72rem] tabular-nums">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {section.label}
                          </a>
                        </SheetClose>
                      ))}
                    </ol>
                  </SheetContent>
                </Sheet>

                <Button
                  asChild
                  variant="brand"
                  size="lg"
                  className="rounded-lg font-sans"
                >
                  <Link href="#napisz">
                    {stickyBar.cta}
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
