# Bezpieczne Skrzydła — witryna

Produkcyjna strona marki **Bezpieczne Skrzydła** (Małgorzata Just): szkolenia
i praktyczne narzędzia z zakresu przeciwdziałania mobbingowi, dyskryminacji
i przemocy psychicznej w miejscu pracy. Zbudowana na Next.js 16 (App Router),
React 19, Tailwind CSS 4 i shadcn/ui.

Treść witryny pochodzi 1:1 z zaakceptowanej przez klientkę makiety
(`/page-mvp`, sierpień 2026). Warianty koncepcyjne A–H i obie wersje MVP
zostały usunięte z kodu — są w historii git (commity `b90939a`, `433db4b`).

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkcja — wszystkie trasy prerenderowane statycznie
npm run lint
```

## Mapa witryny

| Trasa                     | Zawartość                                                                 |
| ------------------------- | ------------------------------------------------------------------------- |
| `/`                       | Strona sprzedażowa: hero, Model 4R, szkolenia, obiekcje, cennik, FAQ, formularz |
| `/o-nas`                  | Misja, kilka słów o marce, mocne strony, „dlaczego warto”                |
| `/model-4r`               | Autorski Model 4R z Fundamentem — pełny schemat                          |
| `/szkolenia`              | Pięć szkoleń, warsztat, format kursu, FAQ                                 |
| `/szkolenia/[slug]`       | Pełny opis szkolenia (5 stron)                                            |
| `/warsztat`               | Warsztat wspierający „Bezpieczne Skrzydła przy kawie”                    |
| `/cennik`                 | Cennik, zasady dopasowania, FAQ                                           |
| `/blog`, `/blog/[slug]`   | Baza wiedzy — wpisy (obecnie przykładowe) i bezpłatne materiały          |
| `/kontakt`                | Formularz „Poproś o wycenę” (`?temat=` wstępnie zaznacza zakres)        |
| `/design-system`          | Dokumentacja komunikacji wizualnej (wyłączona z indeksowania)            |
| `/polityka-prywatnosci`, `/regulamin` | Szkielety dokumentów do weryfikacji prawnej                  |

Do tego: własna strona 404, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`,
generowany obraz Open Graph i dane strukturalne JSON-LD na każdej trasie.

## Struktura kodu

```
src/
  app/                      trasy (App Router), globals.css z tokenami
  content/                  cała treść witryny — bez JSX, gotowa do CMS
  components/
    system/                 prymitywy: Container, Section, SectionHead, Reveal,
                            Pill, ArrowLink, IconTile, PageHero, CtaBand, WingArcs,
                            AuthorPortrait, Marquee, Breadcrumbs, BrandMark
    ui/                     shadcn/ui — tylko używane: Button (warianty marki),
                            Input, Textarea, Accordion, Sheet, Spinner
    pages/                  bloki współdzielone między trasami
    home/                   sekcje strony głównej
    forms/                  formularze (klient) + akcje serwerowe
    layout/                 nagłówek, stopka, skip link
    design-system/          strona /design-system
  lib/                      utils (cn z rozszerzonym tailwind-merge), seo, format, color
```

## Zasady projektowe (skrót — pełne w `/design-system`)

- Jedna rodzina błękitów z logo + piasek warsztatu. **Zero zieleni**, zero
  kolorowych plam w tle (`bg-aurora` = jedna poświata i spad do bieli).
- Skala typografii płynna (`text-display` … `text-caption`), etykiety `t-label`.
- Rytm: sekcje 96 / 128 / 160 px, nagłówek → treść `HEAD_GAP` (64 / 80 px),
  siatki 24–32 px, karty p-7/8, panele lg:p-12.
- Karty: włoskowa ramka, bez cienia w spoczynku, uniesienie 2 px pod kursorem.
- Jeden przycisk główny na widok („Poproś o wycenę”), drugi poziom to `ArrowLink`.
- Mobile-first, sprawdzane na 320 / 360 / 390 / 768 / 1440 px; zero poziomego
  przepełnienia.

## Zasady, których łatwo nie dopilnować

Pełna lista w `/design-system` → „Głos i treść”. Najważniejsze (z maila
klientki z 3.08.2026):

- „szkolenie online” = **nagrany kurs e-learningowy** (moduły, test 10–20 pytań,
  imienny certyfikat, dostęp 60 dni). Żadnych webinarów ani zajęć na żywo online.
- **Pięć szkoleń + jeden warsztat.** Warsztat nigdy nie jest liczony jako szkolenie.
- Przy kwotach **nie piszemy „netto”**. Aktualne ceny: 299 · 2 390 · 2 900 · 6 900 · 10 900 zł.
- **Bez kursywy** — wyróżnienia kolorem akcentu lub krojem Fraunces.
- **Fundament to warstwa prewencyjna**, nie piąty etap Modelu 4R.

## Przed publikacją

1. Zdjęcie autorki (`public/mj.jpg`) i okładki bloga (`public/blog/`, stock
   Lorem Picsum) — placeholdery do podmiany; ścieżki w `src/content/site.ts`
   i `src/content/blog.ts`.
2. Dostarczanie formularzy — `deliver()` w `src/components/forms/actions.ts`
   (obecnie zgłoszenia trafiają do logów serwera). Do podpięcia: dostawca poczty
   lub CRM.
3. Wpisy bazy wiedzy — zastąpić przykładowe teksty w `src/content/blog.ts`.
4. Polityka prywatności i regulamin — uzupełnić punkty oznaczone w `src/content/legal.ts`.
5. Integracja z platformą kursową (WebToLearn) — temat odłożony przez klientkę.
