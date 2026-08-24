import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/system/container";
import { Reveal } from "@/components/system/reveal";
import { WingArcs } from "@/components/system/wing-arcs";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="bg-aurora absolute inset-x-0 top-0 h-[520px] opacity-50" />
      <WingArcs className="absolute -bottom-40 left-1/2 w-[900px] max-w-none -translate-x-1/2 opacity-30" count={10} />
      <Container className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <Reveal>
          <p className="t-outline text-[6rem] leading-none select-none sm:text-[8rem]" aria-hidden>
            404
          </p>
          <p className="t-label mt-2 text-brand-600">Nie ma takiej strony</p>
          <h1 className="text-h2 mt-6 max-w-[30ch] text-balance text-ink">
            Ten adres nie prowadzi nigdzie. Ale każdy z poniższych — tak.
          </h1>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="brand" size="xl">
              <Link href="/">
                Strona główna
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            {primaryNav.slice(0, 4).map((item) => (
              <Button key={item.href} asChild variant="outline-brand" size="xl">
                <Link href={item.href}>{item.short}</Link>
              </Button>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
