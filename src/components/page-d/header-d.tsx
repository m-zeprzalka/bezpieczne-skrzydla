"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

const navD = [
  { label: "Dla kogo", href: "#dla-kogo" },
  { label: "Model 4R", href: "#model-4r" },
  { label: "Oferta", href: "#oferta" },
  { label: "Cennik", href: "#cennik" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export function HeaderD() {
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <motion.div
        className={cn(
          "pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full py-2 pr-2 pl-3 transition-[box-shadow,background-color] duration-500 sm:pl-5",
          scrolled ? "glass shadow-lux" : "bg-transparent",
        )}
      >
        <Link
          href="/page-d"
          className="focus-visible:ring-ring/50 flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-3"
        >
          <Image
            src="/logo-bezpieczne-skrzydla.png"
            alt=""
            width={80}
            height={80}
            priority
            className="ring-brand-200/80 size-9 rounded-full object-cover ring-1"
          />
          <span className="font-lux text-brand-950 text-[0.95rem] font-medium tracking-tight">
            Bezpieczne Skrzydła
          </span>
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navD.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-800/85 hover:text-brand-950 hover:bg-white/70 focus-visible:ring-ring/50 rounded-full px-4 py-2 text-[0.85rem] transition-colors outline-none focus-visible:ring-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="brand"
            size="lg"
            className="hidden rounded-full px-5 sm:inline-flex"
          >
            <Link href="#kontakt">
              Umów rozmowę
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform duration-300 group-hover/button:translate-x-0.5"
              />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                aria-label="Otwórz menu"
                className="rounded-full border-0 bg-white/70 lg:hidden"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetHeader className="border-b">
                <SheetTitle className="font-lux text-brand-950 font-light">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav aria-label="Nawigacja mobilna" className="flex flex-col p-3">
                {navD.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-brand-900 hover:bg-brand-50 focus-visible:ring-ring/50 rounded-xl px-4 py-4 text-lg transition-colors outline-none focus-visible:ring-3"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 p-4">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="brand"
                    size="xl"
                    className="rounded-full"
                  >
                    <Link href="#kontakt">
                      Umów rozmowę
                      <ArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </SheetClose>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="rounded-full"
                >
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
