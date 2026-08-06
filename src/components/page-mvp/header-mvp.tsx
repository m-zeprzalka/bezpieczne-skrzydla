"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, Phone } from "lucide-react";

import { CONTAINER_MVP } from "@/components/page-mvp/frame-mvp";
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
import { navMvp } from "@/lib/content-mvp";

/** Nagłówek jak w G (akceptowany przez klientkę); CTA prowadzi do wyceny. */
export function HeaderMvp() {
  return (
    <header className="border-brand-100 sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm">
      <div
        className={`${CONTAINER_MVP} flex h-20 items-center justify-between gap-6`}
      >
        <Link
          href="/page-mvp"
          className="focus-visible:ring-ring/50 flex shrink-0 items-center gap-3 rounded outline-none focus-visible:ring-3"
        >
          <Image
            src="/logo-bezpieczne-skrzydla.png"
            alt=""
            width={88}
            height={88}
            priority
            className="ring-brand-100 size-10 rounded-full object-cover ring-1"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-brand-950 text-[1.02rem] font-medium tracking-tight">
              Bezpieczne Skrzydła
            </span>
            <span className="text-brand-600 mt-1 text-[0.66rem] font-semibold tracking-[0.18em] uppercase">
              {site.owner}
            </span>
          </span>
        </Link>

        <nav aria-label="Nawigacja główna" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navMvp.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-brand-800 hover:text-brand-600 focus-visible:ring-ring/50 rounded text-[0.875rem] font-medium outline-none focus-visible:ring-3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`tel:${site.phoneHref}`}
            className="text-brand-800 hover:text-brand-600 hidden items-center gap-2 rounded text-[0.875rem] font-medium outline-none focus-visible:ring-3 min-[1450px]:flex"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>

          <Button
            asChild
            variant="brand"
            size="lg"
            className="hidden h-11 rounded-full px-6 text-[0.875rem] font-semibold sm:inline-flex"
          >
            <Link href="#wycena">
              Poproś o wycenę
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                aria-label="Otwórz menu"
                className="border-brand-200 h-11 w-11 rounded-full xl:hidden"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full gap-0 sm:max-w-sm">
              <SheetHeader className="border-b">
                <SheetTitle className="font-display text-brand-950 font-medium">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav aria-label="Nawigacja mobilna" className="flex flex-col p-4">
                {navMvp.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="text-brand-900 hover:bg-brand-50 focus-visible:ring-ring/50 border-brand-100 border-b px-2 py-4 text-base font-medium outline-none last:border-b-0 focus-visible:ring-3"
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
                    <Link href="#wycena">
                      Poproś o wycenę
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
      </div>
    </header>
  );
}
