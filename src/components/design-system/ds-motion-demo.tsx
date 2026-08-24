"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";

import { Reveal, RevealGroup, RevealItem, RevealWords } from "@/components/system/reveal";
import { Button } from "@/components/ui/button";

/** Odtwarzalny pokaz trzech prymitywów ruchu — klucz React wymusza ponowne wejście. */
export function MotionDemo() {
  const [run, setRun] = React.useState(0);

  return (
    <div className="flex flex-col gap-6">
      <div key={run} className="flex flex-col gap-8 rounded-card border border-brand-200/80 bg-white p-6 sm:p-8">
        <div>
          <p className="t-label text-brand-600">RevealWords · słowo po słowie</p>
          <p className="mt-3 font-display text-[2rem] leading-[1.1] text-ink">
            <RevealWords text="Bezpieczne miejsce pracy zaczyna się od wiedzy" />
          </p>
        </div>
        <div>
          <p className="t-label text-brand-600">Reveal · 16 px w górę + krycie, 700 ms</p>
          <Reveal className="mt-3 rounded-card border border-brand-200/80 bg-surface-tint p-5 text-body-sm text-brand-900/85">
            Pojedynczy blok treści wchodzi, gdy znajdzie się 64 px nad dolną krawędzią okna. Raz — nie powtarza się przy przewijaniu w górę.
          </Reveal>
        </div>
        <div>
          <p className="t-label text-brand-600">RevealGroup · kaskada 80 ms</p>
          <RevealGroup className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["Rozpoznaj", "Reaguj", "Raportuj", "Rozwiązuj"].map((step, i) => (
              <RevealItem key={step} className="rounded-card border border-brand-200/80 bg-white p-4">
                <span className="t-outline text-[1.4rem] leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-display text-[1.05rem] text-ink">{step}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
      <div>
        <Button variant="outline-brand" size="md" onClick={() => setRun((n) => n + 1)}>
          <RotateCcw data-icon="inline-start" />
          Odtwórz ponownie
        </Button>
      </div>
    </div>
  );
}
