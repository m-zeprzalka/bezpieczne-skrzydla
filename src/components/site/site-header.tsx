"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className={cn(
          "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500",
          scrolled
            ? "bg-background/80 border-border/70 border-b shadow-[0_1px_24px_-12px_rgba(11,37,64,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            href="/page-b"
            className="focus-visible:ring-ring/50 rounded-lg outline-none focus-visible:ring-3"
            aria-label={`${site.name} — koncepcja A`}
          >
            <BrandMark size={scrolled ? 38 : 44} priority />
          </Link>

          <nav aria-label="Nawigacja główna" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-800/85 hover:text-brand-900 hover:bg-brand-100/70 focus-visible:ring-ring/50 relative rounded-lg px-3 py-2 text-[0.86rem] font-medium transition-colors outline-none focus-visible:ring-3"
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
              variant="ghost"
              size="lg"
              className="text-brand-800 hover:bg-brand-100/70 hidden xl:inline-flex"
            >
              <a href={`tel:${site.phoneHref}`}>
                <Phone data-icon="inline-start" />
                {site.phone}
              </a>
            </Button>

            <Button
              asChild
              variant="brand"
              size="lg"
              className="hidden sm:inline-flex"
            >
              <Link href="#oferta">
                Sprawdź ofertę
                <ArrowRight
                  data-icon="inline-end"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="lg:hidden"
                  aria-label="Otwórz menu"
                >
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
                <SheetHeader className="border-b">
                  <SheetTitle className="sr-only">Menu nawigacji</SheetTitle>
                  <BrandMark size={40} />
                </SheetHeader>

                <nav
                  aria-label="Nawigacja mobilna"
                  className="flex flex-col gap-1 p-4"
                >
                  {nav.map((item, i) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="text-brand-900 hover:bg-brand-100 focus-visible:ring-ring/50 flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-medium transition-colors outline-none focus-visible:ring-3"
                      >
                        {item.label}
                        <span className="text-brand-600 font-mono text-xs">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <Separator />

                <div className="flex flex-col gap-3 p-4">
                  <SheetClose asChild>
                    <Button asChild variant="brand" size="xl">
                      <Link href="#oferta">
                        Sprawdź ofertę
                        <ArrowRight data-icon="inline-end" />
                      </Link>
                    </Button>
                  </SheetClose>
                  <Button asChild variant="outline" size="xl">
                    <a href={`tel:${site.phoneHref}`}>
                      <Phone data-icon="inline-start" />
                      {site.phone}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
