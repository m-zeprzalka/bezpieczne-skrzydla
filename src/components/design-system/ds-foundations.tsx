import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Coffee,
  Compass,
  FileDown,
  GraduationCap,
  MapPin,
  Phone,
} from "lucide-react";

import { MotionDemo } from "@/components/design-system/ds-motion-demo";
import {
  Code,
  DoDont,
  DsSection,
  DsSub,
  PrincipleCard,
  SpecTable,
  Specimen,
} from "@/components/design-system/ds-primitives";
import {
  brandScale,
  breakpoints,
  inkMuted,
  motion,
  radii,
  sandScale,
  semanticTokens,
  shadows,
  spacingScale,
  typeScale,
  white,
  type ColorToken,
} from "@/components/design-system/tokens";
import { IconTile } from "@/components/system/icon-tile";
import { WingArcs } from "@/components/system/wing-arcs";
import { contrast, oklchToRgb, toHex, wcagLevel } from "@/lib/color";
import { cn } from "@/lib/utils";

/* ————— 01 · Wstęp ————— */

export function DsIntro() {
  return (
    <DsSection
      id="wstep"
      index="01"
      title="Zasady"
      lead="Design system Bezpiecznych Skrzydeł opisuje, jak marka wygląda, mówi i się porusza — po to, żeby każda nowa strona, mail czy prezentacja wyglądały, jakby robiła je ta sama ręka. Czerpie z dojrzałych systemów (Apple Human Interface Guidelines, Material 3, Shopify Polaris, IBM Carbon, Atlassian, Vercel Geist), ale każdą decyzję podporządkowuje jednemu pytaniu: czy osoba w trudnej sytuacji poczuje tu spokój i jasność?"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PrincipleCard
          index="01"
          title="Spokój przed efektem"
          text="Dużo światła, jedna rodzina błękitów, ruch tylko tam, gdzie prowadzi wzrok. Żadnych krzykliwych odliczań, pop-upów i migających plakietek — temat strony jest poważny."
        />
        <PrincipleCard
          index="02"
          title="Jasność ponad ozdobę"
          text="Każda sekcja odpowiada na jedno pytanie odbiorcy. Nagłówek mówi, o czym jest blok; lead mówi, dlaczego to ważne; jedna akcja mówi, co zrobić dalej."
        />
        <PrincipleCard
          index="03"
          title="Treść klientki jest nienaruszalna"
          text="Teksty z dokumentu i maila Małgorzaty Just są jedynym źródłem prawdy. Projekt skraca układ, nigdy treść — pełne wersje żyją na podstronach."
        />
        <PrincipleCard
          index="04"
          title="Dostępność to nie warstwa"
          text="Kontrast 4,5:1, cele dotyku 44 px, widoczny fokus, sensowna kolejność nagłówków i pełne poszanowanie ograniczenia ruchu są warunkiem, nie dodatkiem."
        />
        <PrincipleCard
          index="05"
          title="Każde urządzenie tak samo ważne"
          text="Układ projektuje się od 360 px w górę. Telefon dostaje te same treści, tę samą hierarchię i te same akcje — nie wersję „light”."
        />
        <PrincipleCard
          index="06"
          title="Rzemiosło w detalu"
          text="Polskie cudzysłowy, półpauzy, twarde spacje, optyczne rozmiary kroju, włoskowe linie zamiast ciężkich ramek. Detale, których nikt nie zauważa — dopóki ich nie ma."
        />
      </div>

      <DsSub title="Skąd wynika ten wygląd" text="Cała paleta i podpis graficzny wychodzą z jednego pliku: logo marki.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[14rem_1fr]">
          <div className="overflow-hidden rounded-card border border-brand-200/80">
            <Image src="/logo-bezpieczne-skrzydla.png" alt="Logo Bezpieczne Skrzydła" width={448} height={448} className="size-full" />
          </div>
          <ul className="flex flex-col gap-3 text-body-sm text-brand-900/85">
            <li className="flex gap-3">
              <span className="mt-1.5 size-3 shrink-0 rounded-full" style={{ background: "#1B466E" }} />
              <span>
                <strong className="font-semibold text-ink">Kontur logo</strong> → <Code>brand-700</Code>, kolor przycisku głównego i hover odnośników.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 size-3 shrink-0 rounded-full" style={{ background: "#9EC7DA" }} />
              <span>
                <strong className="font-semibold text-ink">Skrzydła</strong> → <Code>brand-400</Code>, przycisk odwrócony na ciemnym tle i kolor zaznaczenia tekstu.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 size-3 shrink-0 rounded-full" style={{ background: "#0B2540" }} />
              <span>
                <strong className="font-semibold text-ink">Sylwetka</strong> → <Code>brand-950</Code>, atrament nagłówków i tło sekcji ciemnych.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 size-3 shrink-0 rounded-full border border-brand-300 bg-white" />
              <span>
                <strong className="font-semibold text-ink">Lotki</strong> → <Code>WingArcs</Code>, skrzydło rysowane liniami; jedyny ornament systemu, zawsze w tle, nigdy jako treść.
              </span>
            </li>
          </ul>
        </div>
      </DsSub>
    </DsSection>
  );
}

/* ————— 02 · Kolor ————— */

function Swatch({ token, dark = false }: { token: ColorToken; dark?: boolean }) {
  const rgb = oklchToRgb(token.value);
  const hex = toHex(rgb);
  const onWhite = contrast(token.value, white);
  return (
    <li className="flex flex-col overflow-hidden rounded-card border border-brand-200/80 bg-white">
      <div className="h-16" style={{ background: hex }} />
      <div className="flex flex-col gap-1 p-3.5">
        <span className="font-mono text-[0.78rem] font-semibold text-ink">{token.name}</span>
        <span className="font-mono text-[0.7rem] text-ink-muted">
          {hex} · L {token.value.l} · {onWhite.toFixed(1)}:1
        </span>
        <span className={cn("mt-1 text-caption text-brand-900/80", dark && "text-brand-900/80")}>{token.usage}</span>
      </div>
    </li>
  );
}

const contrastPairs = [
  { label: "Tekst główny na bieli", fg: brandScale[10].value, bg: white, sample: "text-ink na surface" },
  { label: "Tekst opisów na bieli", fg: inkMuted, bg: white, sample: "text-ink-muted" },
  { label: "Akcent nagłówka na bieli", fg: brandScale[6].value, bg: white, sample: "brand-600" },
  { label: "Etykiety i odnośniki", fg: brandScale[7].value, bg: white, sample: "brand-700 / 800" },
  { label: "Biel na przycisku głównym", fg: white, bg: brandScale[7].value, sample: "brand-50 na brand-700" },
  { label: "Jasny tekst na sekcji ciemnej", fg: brandScale[1].value, bg: brandScale[10].value, sample: "brand-100 na brand-950" },
  { label: "Akcent na sekcji ciemnej", fg: brandScale[3].value, bg: brandScale[10].value, sample: "brand-300 na brand-950" },
  { label: "Granat na przycisku odwróconym", fg: brandScale[10].value, bg: brandScale[4].value, sample: "brand-950 na brand-400" },
  { label: "Etykiety warsztatu", fg: sandScale[3].value, bg: sandScale[0].value, sample: "sand-700 na sand-50" },
];

export function DsColor() {
  return (
    <DsSection
      id="kolor"
      index="02"
      title="Kolor"
      lead="Jedna skala błękitów wyprowadzona z logo, dwie barwy towarzyszące o ściśle określonej roli i biel. Wszystkie wartości zapisane są w OKLCH — dzięki temu stopnie skali mają równą percepcyjną jasność, a przejścia gradientów nie szarzeją."
    >
      <DsSub title="Skala marki" text="Jedenaście stopni. Trzy z nich (400, 700, 950) są wprost z logo; pozostałe wypełniają skalę w równych krokach jasności.">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {brandScale.map((token) => (
            <Swatch key={token.name} token={token} />
          ))}
        </ul>
      </DsSub>

      <DsSub
        title="Barwa towarzysząca"
        text="Jedna: ciepły piasek warsztatu „przy kawie”. Ma jedno zadanie i nie pojawia się nigdzie indziej — dlatego działa jako sygnał. Poza nim cała strona żyje w błękitach; żadnej zieleni, pomarańczu ani czerwieni (poza komunikatem błędu)."
      >
        <div>
          <p className="t-label mb-3 text-sand-700">Warsztat — jedyne ciepło na stronie</p>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sandScale.map((token) => (
              <Swatch key={token.name} token={token} />
            ))}
          </ul>
        </div>
      </DsSub>

      <DsSub title="Tokeny semantyczne" text="Komponenty nie używają nazw stopni skali wprost. Odwołują się do roli — dzięki temu zmiana odcienia w jednym miejscu przenosi się wszędzie.">
        <SpecTable
          columns={["Token", "Wartość", "Zastosowanie"]}
          rows={semanticTokens.map(([token, value, usage]) => [<Code key={token}>{token}</Code>, value, usage])}
        />
      </DsSub>

      <DsSub title="Kontrast" text="Wyliczony z tokenów, nie z oka. Progi WCAG 2.2: 4,5:1 dla tekstu, 3:1 dla dużego tekstu (≥ 24 px lub ≥ 19 px pogrubionego) i elementów interfejsu.">
        <SpecTable
          columns={["Para", "Tokeny", "Kontrast", "Poziom"]}
          rows={contrastPairs.map((pair) => {
            const ratio = contrast(pair.fg, pair.bg);
            return [
              <span key="l" className="flex items-center gap-3">
                <span
                  className="grid h-8 w-12 shrink-0 place-items-center rounded-md border border-brand-200/80 font-display text-[0.9rem]"
                  style={{ background: toHex(oklchToRgb(pair.bg)), color: toHex(oklchToRgb(pair.fg)) }}
                >
                  Aa
                </span>
                {pair.label}
              </span>,
              <Code key="t">{pair.sample}</Code>,
              <span key="r" className="font-mono">{ratio.toFixed(2)}:1</span>,
              <span key="w" className={cn("font-semibold", ratio >= 4.5 ? "text-brand-700" : ratio >= 3 ? "text-sand-700" : "text-destructive")}>
                {wcagLevel(ratio, ratio < 4.5)}
              </span>,
            ];
          })}
        />
      </DsSub>

      <DsSub title="Reguły użycia">
        <DoDont
          good={
            <ul className="flex flex-col gap-2">
              <li>Jedna sekcja ciemna między dwiema jasnymi. Rytm: biel → tint → biel → deep → biel.</li>
              <li>Akcent koloru w nagłówku podkreśla jedno wyrażenie — to, które sprzedaje sekcję.</li>
              <li>Fundament pod etapami Modelu 4R wyróżnia granat (brand-900) — inna wysokość i ton, ten sam błękit.</li>
              <li>Tło to powietrze: jedna miękka poświata u góry po prawej i spad do bieli, krycie 30–40 %.</li>
            </ul>
          }
          bad={
            <ul className="flex flex-col gap-2">
              <li>Dwie sekcje ciemne obok siebie — strona „gaśnie”, a CTA traci siłę.</li>
              <li>Zieleń, czerwień, pomarańcz, żółć jako kolory akcentu. Jedyna czerwień to komunikat błędu formularza.</li>
              <li>Kolorowe plamy i „blur-gradienty” w tle — czytają się jak tania grafika.</li>
              <li>Kolor jako jedyny nośnik informacji (np. „zielone = dobrze”) bez etykiety lub ikony.</li>
              <li>Tekst na gradiencie bez sprawdzenia kontrastu w najjaśniejszym punkcie.</li>
            </ul>
          }
        />
      </DsSub>
    </DsSection>
  );
}

/* ————— 03 · Typografia ————— */

export function DsTypography() {
  return (
    <DsSection
      id="typografia"
      index="03"
      title="Typografia"
      lead="Dwa kroje o wyraźnie różnych rolach. Fraunces — antykwa o zmiennym rozmiarze optycznym — mówi głosem autorki w nagłówkach, cytatach i liczbach. Inter niesie treść, etykiety i interfejs. Skala jest płynna (clamp), więc nagłówki rosną razem z ekranem bez skoków na breakpointach."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Specimen caption="Fraunces · zmienny: opsz 9–144, SOFT 0, WONK 0 · waga 400" className="flex-col items-start gap-3">
          <p className="font-display text-[3.2rem] leading-none text-ink">Aa Ąą Ęę Łł</p>
          <p className="font-display text-[1.4rem] leading-[1.3] text-ink">Znam tę ciszę, w której człowiek zostaje sam</p>
          <p className="text-caption text-ink-muted">
            Rozmiar optyczny ustawia przeglądarka (<Code>font-optical-sizing: auto</Code>): w 64 px kreski są kontrastowe, w 18 px litery otwierają się dla czytelności.
          </p>
        </Specimen>
        <Specimen caption="Inter · 400 / 500 / 600 · cv02 cv03 cv04 cv11" className="flex-col items-start gap-3">
          <p className="text-[3.2rem] leading-none font-medium text-ink">Aa Ąą Ęę Łł</p>
          <p className="text-body text-brand-900/85">
            Tworzę szkolenia, warsztaty i praktyczne materiały dotyczące mobbingu, przemocy psychicznej oraz odpowiedzialnego reagowania.
          </p>
          <p className="text-caption text-ink-muted">Alternatywne glify (jednopiętrowe „a”, otwarte „g”) zbliżają Inter do miękkości Fraunces bez utraty czytelności.</p>
        </Specimen>
      </div>

      <DsSub title="Skala" text="Nazwy tokenów odpowiadają klasom Tailwind (`text-h2`) — jedna klasa ustawia rozmiar, interlinię i światło międzyliterowe naraz.">
        <div className="flex flex-col divide-y divide-brand-100 rounded-card border border-brand-200/80 bg-white">
          {typeScale.map((row) => (
            <div key={row.token} className="grid grid-cols-1 gap-3 p-5 lg:grid-cols-[12rem_1fr]">
              <div className="flex flex-col gap-1 font-mono text-[0.72rem] text-ink-muted">
                <span className="font-semibold text-brand-700">{row.token}</span>
                <span>{row.size}</span>
                <span>
                  lh {row.lh} · ls {row.ls}
                </span>
                <span>{row.font}</span>
                <span className="mt-1 font-sans text-caption text-ink-muted">{row.use}</span>
              </div>
              <p
                className={cn(
                  "min-w-0 text-ink",
                  row.token === "t-label" ? "t-label text-brand-600" : row.token,
                  row.font.startsWith("Fraunces") ? "font-display" : "",
                )}
              >
                {row.token === "t-label" ? "Moje podejście · Model 4R" : "Bezpieczne miejsce pracy zaczyna się od wiedzy"}
              </p>
            </div>
          ))}
        </div>
      </DsSub>

      <DsSub title="Wyróżnienia bez kursywy" text="Decyzja klientki: żadnych kursyw. Wyróżniamy kolorem akcentu, zmianą kroju (Fraunces w tekście Inter) albo stopniem pisma.">
        <DoDont
          good={
            <div className="flex flex-col gap-3">
              <p className="font-display text-[1.6rem] leading-[1.15] text-ink">
                Pięć szkoleń, każde dla innej <span className="text-brand-600">roli w organizacji</span>
              </p>
              <p className="border-l-2 border-brand-400 pl-4 font-display text-[1.15rem] leading-[1.5] text-ink">Najtrudniejsze nie zawsze są słowa.</p>
            </div>
          }
          bad={
            <div className="flex flex-col gap-3">
              <p className="font-display text-[1.6rem] leading-[1.15] text-ink">
                Pięć szkoleń, każde dla innej <em className="text-brand-600 italic">roli w organizacji</em>
              </p>
              <p className="text-body italic">Najtrudniejsze nie zawsze są słowa.</p>
            </div>
          }
        />
      </DsSub>

      <DsSub title="Zasady składu" text="Rzeczy, które robi się raz i potem tylko pilnuje.">
        <SpecTable
          columns={["Zasada", "Jak", "Dlaczego"]}
          rows={[
            ["Miara wiersza", <span key="a"><Code>measure</Code> = 64 ch, leady ≤ 40 rem, karty ≤ 36 rem</span>, "Dłuższy wiersz męczy oko; krótszy rozbija akapit na strzępy."],
            ["Wyrównanie tytułów", <span key="b"><Code>text-balance</Code> na nagłówkach, <Code>text-pretty</Code> na akapitach</span>, "Brak sierot i „schodków” przy zawijaniu."],
            ["Polskie znaki interpunkcyjne", "„cudzysłów”, — półpauza z odstępami, – łącznik zakresów (10–15 osób)", "Tekst wygląda jak z dobrego wydawnictwa, nie z czatu."],
            ["Twarde spacje", "10 900 zł, 24 h, 60 dni, NIP 728 250 06 96", "Kwota ani jednostka nie zostaje sama na końcu wiersza."],
            ["Liczby w kroju szeryfowym", "ceny i statystyki składane Fraunces (od 299 zł, 5 + 1)", "Liczba staje się elementem kompozycji, nie przypisem."],
            ["Etykiety", "0,72 rem, wersaliki, światło 0,18 em, brand-600", "Jeden, zawsze taki sam sposób mówienia „to jest nazwa sekcji”."],
          ]}
        />
      </DsSub>
    </DsSection>
  );
}

/* ————— 04 · Układ ————— */

export function DsLayout() {
  return (
    <DsSection
      id="uklad"
      index="04"
      title="Układ i odstępy"
      lead="Cztery liczby opisują całą stronę: kontener 1216 px, siatka 12 kolumn, odstęp między kolumnami 32 px, skok pionowy 8 px. Wszystko inne jest ich wielokrotnością."
    >
      <DsSub title="Kontener i siatka" text="Marginesy boczne rosną skokowo (20 → 32 → 40 px). Treść czytelnicza (artykuły, dokumenty) ma własny, węższy kontener 704 px.">
        <div className="overflow-hidden rounded-card border border-brand-200/80 bg-white p-4 sm:p-6">
          <div className="grid grid-cols-12 gap-2 sm:gap-4">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="flex h-16 items-end justify-center rounded-md bg-brand-100 pb-1 font-mono text-[0.6rem] text-brand-600">
                {i + 1}
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-12 gap-2 sm:gap-4">
            <div className="col-span-12 rounded-md bg-brand-700 p-3 text-center font-mono text-[0.7rem] text-white lg:col-span-7">7 — kolumna tekstu w hero</div>
            <div className="col-span-12 rounded-md bg-brand-400 p-3 text-center font-mono text-[0.7rem] text-brand-950 lg:col-span-5">5 — kadr / karta boczna</div>
            <div className="col-span-12 rounded-md bg-brand-200 p-3 text-center font-mono text-[0.7rem] text-brand-900 lg:col-span-4">4 — sticky nagłówek</div>
            <div className="col-span-12 rounded-md bg-brand-100 p-3 text-center font-mono text-[0.7rem] text-brand-900 lg:col-span-8">8 — treść</div>
          </div>
          <p className="mt-4 text-caption text-ink-muted">
            <Code>max-w-site</Code> = 76 rem · <Code>max-w-prose</Code> = 44 rem · <Code>gap-x-8</Code> = 32 px
          </p>
        </div>
      </DsSub>

      <DsSub title="Skala odstępów" text="Podstawa 4 px. Wewnątrz komponentów 8–24 px, wewnątrz kart 28–40 px, między nagłówkiem sekcji a treścią 64–80 px, między sekcjami 96–160 px.">
        <div className="flex flex-wrap items-end gap-3 rounded-card border border-brand-200/80 bg-white p-6">
          {spacingScale.map((step) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className="w-3 rounded-sm bg-brand-600" style={{ height: Math.max(step / 2, 4) }} />
              <span className="font-mono text-[0.65rem] text-ink-muted">{step}</span>
            </div>
          ))}
        </div>
      </DsSub>

      <DsSub title="Rytm sekcji" text="Sekcja domyślna: 96 / 128 / 160 px pionu (telefon / tablet / desktop). Sekcja zwarta: 64 / 96 / 128 px. Nagłówek sekcji od treści dzieli stałe 64 / 80 px (HEAD_GAP). Ton tła zmienia się między sąsiednimi sekcjami.">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
          {[
            ["Hero", "white"],
            ["Model 4R", "tint"],
            ["Szkolenia", "white"],
            ["Co słyszę", "tint"],
            ["Cennik", "deep"],
          ].map(([name, tone]) => (
            <div
              key={name}
              className={cn(
                "flex h-24 flex-col justify-between rounded-card border p-3 font-mono text-[0.7rem]",
                tone === "white" && "border-brand-200 bg-white text-brand-900",
                tone === "tint" && "border-brand-200 bg-surface-tint text-brand-900",
                tone === "deep" && "border-brand-800 bg-surface-deep text-brand-100",
              )}
            >
              <span>{name}</span>
              <span className="opacity-70">tone=&quot;{tone}&quot;</span>
            </div>
          ))}
        </div>
      </DsSub>

      <DsSub title="Punkty przełamania" text="Mobile-first. Klasy bez prefiksu opisują telefon; każdy prefiks dodaje, nie odbiera.">
        <SpecTable columns={["Prefiks", "Od", "Co się zmienia"]} rows={breakpoints.map(([bp, px, what]) => [<Code key={bp}>{bp}</Code>, px, what])} />
      </DsSub>
    </DsSection>
  );
}

/* ————— 05 · Kształt i elewacja ————— */

export function DsShape() {
  return (
    <DsSection
      id="ksztalt"
      index="05"
      title="Kształt, linie i elewacja"
      lead="Miękkie narożniki i włoskowe linie zamiast ciężkich ramek. Karty w spoczynku nie mają cienia — cień pojawia się dopiero pod kursorem i przy kadrze autorki. Żadnych siatek, znaków wodnych ani ozdobników w tle treści."
    >
      <DsSub title="Promienie">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {radii.map(([name, value, use]) => (
            <div key={name} className="flex flex-col gap-3">
              <div
                className={cn(
                  "h-20 border border-brand-300 bg-brand-50",
                  name === "rounded-md" && "rounded-md",
                  name === "rounded-field" && "rounded-field",
                  name === "rounded-card" && "rounded-card",
                  name === "rounded-panel" && "rounded-panel",
                  name === "rounded-full" && "rounded-full",
                )}
              />
              <div>
                <Code>{name}</Code>
                <p className="mt-1 font-mono text-[0.68rem] text-ink-muted">{value}</p>
                <p className="mt-1 text-caption text-brand-900/80">{use}</p>
              </div>
            </div>
          ))}
        </div>
      </DsSub>

      <DsSub title="Elewacja" text="Cienie są barwione granatem marki (nie czernią), więc na błękitnych tłach nie brudzą.">
        <div className="grid grid-cols-1 gap-6 rounded-card bg-surface-tint p-6 sm:grid-cols-2">
          {shadows.map(([name, value, use]) => (
            <div key={name} className="flex flex-col gap-4">
              <div className={cn("h-24 rounded-card bg-white", name)} />
              <div>
                <Code>{name}</Code>
                <p className="mt-1 font-mono text-[0.68rem] text-ink-muted">{value}</p>
                <p className="mt-1 text-caption text-brand-900/80">{use}</p>
              </div>
            </div>
          ))}
        </div>
      </DsSub>

      <DsSub title="Linie i tła pomocnicze">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Specimen caption="border-line · 1 px, brand-200 z kryciem 80 %" className="flex-col items-stretch">
            <div className="h-16 rounded-card border border-brand-200/80 bg-white" />
          </Specimen>
          <Specimen caption="bg-aurora · jedna poświata u góry po prawej + spad do bieli" className="flex-col items-stretch">
            <div className="bg-aurora h-16 rounded-card" />
          </Specimen>
        </div>
      </DsSub>
    </DsSection>
  );
}

/* ————— 06 · Ruch ————— */

export function DsMotion() {
  return (
    <DsSection
      id="ruch"
      index="06"
      title="Ruch"
      lead="Ruch ma jedno zadanie: prowadzić wzrok w kolejności czytania. Wszystko wchodzi z dołu do góry, raz, z krzywą ease-out-expo — szybki start, długie wyhamowanie. Przy „ogranicz ruch” w systemie zostają wyłącznie zmiany krycia."
    >
      <MotionDemo />

      <DsSub title="Czasy i krzywe">
        <SpecTable columns={["Czas", "Krzywa", "Zastosowanie"]} rows={motion.map(([t, e, u]) => [<span key="t" className="font-mono">{t}</span>, <Code key="e">{e}</Code>, u])} />
      </DsSub>

      <DsSub title="Reguły">
        <DoDont
          good={
            <ul className="flex flex-col gap-2">
              <li>Wejścia sekcji z <Code>Reveal</Code> — jednokrotne, wyzwalane 48 px zanim blok wejdzie w kadr (600 ms).</li>
              <li>Mikrointerakcje: strzałka przesuwa się o 2 px, karta unosi o 4 px, linia pod odnośnikiem rośnie od lewej.</li>
              <li>Nagłówek chowa się przy przewijaniu w dół i wraca przy ruchu w górę — więcej miejsca na treść na telefonie.</li>
              <li>Identyczne drzewo DOM po stronie serwera i klienta; preferencja ruchu obsługiwana w CSS i <Code>MotionConfig</Code>.</li>
            </ul>
          }
          bad={
            <ul className="flex flex-col gap-2">
              <li>Animacje zapętlone w polu widzenia treści (poza paskiem haseł, który ma statyczny odpowiednik dla czytników).</li>
              <li>Parallax, przypinanie sekcji, ruch sterowany przewijaniem — kosztowne i męczące przy poważnym temacie.</li>
              <li>Elementy, które zaczynają niewidoczne i czekają na JavaScript — treść musi być czytelna bez skryptów.</li>
              <li>Czas wejścia powyżej 900 ms lub opóźnienia sumujące się do sekund.</li>
            </ul>
          }
        />
      </DsSub>
    </DsSection>
  );
}

/* ————— 07 · Ikony i znaki ————— */

export function DsIcons() {
  const icons = [
    { Icon: Compass, name: "compass" },
    { Icon: GraduationCap, name: "graduation-cap" },
    { Icon: BadgeCheck, name: "badge-check" },
    { Icon: MapPin, name: "map-pin" },
    { Icon: Coffee, name: "coffee" },
    { Icon: FileDown, name: "file-down" },
    { Icon: Phone, name: "phone" },
    { Icon: Check, name: "check" },
    { Icon: ArrowRight, name: "arrow-right" },
  ];

  return (
    <DsSection
      id="ikony"
      index="07"
      title="Ikony i znaki marki"
      lead="Ikony to Lucide — jednolita kreska 2 px, narożniki zaokrąglone, siatka 24 px. Zawsze w kafelku lub w rzędzie z tekstem, nigdy jako samotna ozdoba. Znaki marki (sygnet, skrzydło z linii, ornament) mają osobne reguły."
    >
      <DsSub title="Zestaw i rozmiary" text="16 px w tekście i przyciskach, 20 px w kafelkach, 24 px w dużych kafelkach. Ikona nigdy nie zastępuje etykiety tekstowej.">
        <Specimen>
          {icons.map(({ Icon, name }) => (
            <div key={name} className="flex w-24 flex-col items-center gap-2 text-center">
              <IconTile tone="tint">
                <Icon aria-hidden />
              </IconTile>
              <span className="font-mono text-[0.62rem] text-ink-muted">{name}</span>
            </div>
          ))}
        </Specimen>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {(["tint", "outline", "solid", "inverse", "sand"] as const).map((tone) => (
            <div key={tone} className={cn("flex flex-col items-center gap-2 rounded-card border border-brand-200/80 p-5", tone === "inverse" && "bg-surface-deep")}>
              <IconTile tone={tone}>
                <Compass aria-hidden />
              </IconTile>
              <span className={cn("font-mono text-[0.62rem]", tone === "inverse" ? "text-brand-200" : "text-ink-muted")}>tone=&quot;{tone}&quot;</span>
            </div>
          ))}
        </div>
      </DsSub>

      <DsSub title="Znaki marki" text="Sygnet zawsze w kole z włoskowym pierścieniem. Skrzydło z linii wyłącznie jako tło z kryciem 15–40 %. Separatory to włoskowe linie — bez ornamentów.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Specimen caption="BrandMark · sygnet 40 px + logotyp Fraunces + podpis" align="center">
            <span className="flex items-center gap-3">
              <span className="relative size-11 overflow-hidden rounded-full ring-1 ring-brand-200/80">
                <Image src="/logo-bezpieczne-skrzydla.png" alt="" width={88} height={88} className="size-full object-cover" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.02rem] font-medium tracking-tight text-ink">Bezpieczne Skrzydła</span>
                <span className="mt-1 text-[0.64rem] font-semibold tracking-[0.18em] text-brand-600 uppercase">Małgorzata Just</span>
              </span>
            </span>
          </Specimen>
          <Specimen caption="WingArcs · 2 × 9 łuków, gradient kreski, tylko w tle" tone="dark" align="center" className="relative min-h-40 overflow-hidden">
            <WingArcs tone="dark" animate={false} className="absolute -bottom-10 left-1/2 w-[120%] -translate-x-1/2 opacity-60" />
          </Specimen>
        </div>
      </DsSub>
    </DsSection>
  );
}
