"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/content";

const navB = [
  { label: "Sprawdź sytuację", href: "#sprawdz" },
  { label: "Model 4R", href: "#model" },
  { label: "24 h — 72 h — 7 dni", href: "#schemat" },
  { label: "Oferta", href: "#oferta" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export function HeaderB() {
  const [open, setOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <header className="border-brand-200 bg-white/90 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[86rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="focus-visible:ring-ring/50 flex items-center gap-2.5 rounded outline-none focus-visible:ring-3"
        >
          <Image
            src="/logo-bezpieczne-skrzydla.png"
            alt=""
            width={72}
            height={72}
            priority
            className="ring-brand-200 size-9 rounded-full object-cover ring-1"
          />
          <span className="font-grotesk text-brand-950 text-[0.95rem] leading-none font-semibold tracking-tight">
            Bezpieczne Skrzydła
          </span>
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {navB.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-800 hover:text-brand-950 focus-visible:ring-ring/50 decoration-brand-300 rounded text-[0.85rem] underline-offset-[6px] transition-colors outline-none hover:underline focus-visible:ring-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneHref}`}
            className="text-brand-800 hover:text-brand-950 focus-visible:ring-ring/50 hidden items-center gap-2 rounded px-2 py-1 text-[0.85rem] font-medium transition-colors outline-none focus-visible:ring-3 lg:flex"
          >
            <Phone className="size-3.5" aria-hidden />
            {site.phone}
          </a>

          <Button asChild variant="brand" size="lg" className="rounded-md">
            <Link href="#kontakt">Umów rozmowę</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="rounded-md xl:hidden"
                aria-label="Otwórz menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetHeader className="border-b">
                <SheetTitle className="font-grotesk text-brand-950">
                  Nawigacja
                </SheetTitle>
              </SheetHeader>

              <nav aria-label="Nawigacja mobilna" className="flex flex-col p-2">
                {navB.map((item, i) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-brand-900 hover:bg-brand-50 focus-visible:ring-ring/50 border-brand-100 flex items-center gap-4 border-b px-3 py-4 text-base font-medium transition-colors outline-none last:border-b-0 focus-visible:ring-3"
                    >
                      <span className="text-brand-600 font-mono text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Pasek postępu czytania — orientuje w długiej stronie jednoekranowej */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="bg-brand-600 absolute inset-x-0 bottom-0 h-px origin-left"
      />
    </header>
  );
}
