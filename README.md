# Bezpieczne Skrzydła — strona główna (demo)

Propozycja strony głównej dla marki **Bezpieczne Skrzydła** (Małgorzata Just) —
szkolenia i praktyczne narzędzia z zakresu przeciwdziałania mobbingowi,
dyskryminacji i przemocy psychicznej w miejscu pracy.

## Osiem koncepcji

| Trasa     | Koncepcja                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`       | **B — strona jako narzędzie.** Grotesk, włoskowate linie, płaskie pola koloru. Treść dopasowuje się do roli odwiedzającego.                          |
| `/page-b` | **A — broszura premium.** Editorialowe szeryfy, miękkie gradienty, karty. Prowadzi narracją: kim jestem → co oferuję.                    |
| `/page-c` | **C — strona jako rozmowa.** Antykwa i papier, jedna szpalta tekstu do przeczytania. Cała strona mówi głosem autorki.                          |
| `/page-d` | **D — światło i głębia.** Sygnet marki rozwinięty do skali kadru, szkło, choreografia przewijania. Biel i błękit, maksimum kunsztu wizualnego. |
| `/page-e` | **E — jasny minimalizm.** Twarda siatka, jednolite kolory, dużo światła. Zero animacji.                                                        |
| `/page-f` | **F — wersja finalna.** Minimalizm i światło z E, uroda A, subtelne animacje — i pełna treść dokumentu klientki, sekcja po sekcji.             |

Pływający przełącznik **A / B / C / D / E / F / G / H** w prawym dolnym rogu służy do porównania
wersji podczas prezentacji — przed publikacją do usunięcia
(`src/components/page-b/variant-switch.tsx`).

### Co wyróżnia wersję B

1. **Kontekst zamiast katalogu.** Odwiedzający wybiera rolę (pracownik / HR /
   pracodawca / komisja), a strona przestawia hero, rekomendację programu,
   podświetlenie w tabeli oferty i etykietę w formularzu kontaktowym.
2. **Rola żyje w adresie** (`/page-b?rola=pracodawca`). Kampania reklamowa albo
   link wysłany konkretnemu rozmówcy prowadzą od razu do właściwej wersji.
3. **Interaktywne samosprawdzenie** „Konflikt czy mobbing?” — cztery pytania
   z materiałów szkoleniowych zamienione w narzędzie. Liczy się wyłącznie
   w przeglądarce; nic nie jest wysyłane ani zapisywane.
4. **Cały Model 4R widoczny naraz** — proces jako mapa, nie zakładki.
5. **Oferta jako lista porównawcza** z filtrem „pokaż tylko dla mojej roli”.

### Co wyróżnia wersję C

1. **Strona pisana w pierwszej osobie.** Struktura to nie „sekcje oferty”,
   tylko zdania, które klientka realnie słyszy — i jej odpowiedzi na nie.
   Treść żyje w `content-c.ts` i została napisana od nowa pod ten format.
2. **Antykwa również w treści.** Newsreader prowadzi całą stronę, wiersz ma
   miarę czytelniczą (62 znaki), a tło jest ciepłym papierem pod chłodny
   granat. Krój bezszeryfowy pojawia się wyłącznie w etykietach.
3. **Nić prowadząca** zamiast paska nawigacji — pionowa oś z węzłami sekcji,
   która pokazuje postęp czytania i pozwala przeskoczyć dalej.
   Na wąskich ekranach zastępuje ją spis treści w pasku dolnym.
4. **Nagłówek odjeżdża, konwersja zostaje.** Czytanie jest niezakłócone, a rolę
   stałego punktu zaczepienia przejmuje pasek dolny z ceną i jednym CTA.
5. **FAQ bez akordeonu** — wszystkie odpowiedzi widoczne od razu, także dla
   wyszukiwarek, bez wymuszania interakcji.

### Co wyróżnia wersję D

1. **Sygnet marki rozwinięty do skali kadru.** `luminous-wing.tsx` generuje
   60 wypełnionych piór w trzech planach. Nasady rozłożone są wzdłuż krótkiego
   łuku, nie w jednym punkcie — pióra wychodzące z jednego miejsca dają
   rozbłysk słońca, a nie skrzydło. Drugie skrzydło to odbicie całej grupy
   transformacją SVG, więc symetria jest dokładna.
2. **Choreografia przewijania.** Model 4R przechodzi w tor poziomy: sekcja
   przypina się do ekranu, a panele przesuwają się razem z przewijaniem.
   Geometria toru jest policzona w `vw`, bez pomiarów w JS — nie ma skoku
   układu przy pierwszym renderze. Na ekranach poniżej 1024 px i przy
   `prefers-reduced-motion` układ wraca do pionowej listy.
3. **Szkło z gradientową ramką.** Utility `.glass` maskuje pseudoelement
   operacją XOR, dzięki czemu włoskowaty obrys ma gradient bez dodatkowego
   elementu w drzewie DOM.
4. **Typografia w skali plakatu.** Manrope w odmianie ExtraLight w stopniu do
   86 px, wyrównanie do środka, gradient na jednym wersie nagłówka.
5. **Liczby dobiegające do wartości** po wejściu w kadr — pełna wartość
   zostaje w `aria-label`, żeby czytnik ekranu nie odczytywał klatek animacji.

### Co wyróżnia wersję E

Wariant przygotowany pod wskazane wytyczne: więcej światła, twardsza siatka,
płynniejsze działanie. Inspiracja układem i rytmem mynetwork.pl — bez
przenoszenia ich znaków, treści ani kolorystyki.

1. **Zero animacji.** Trasa nie importuje biblioteki ruchu i nie zawiera ani
   jednej klasy animacji — jedyne przejście to zmiana koloru pod kursorem
   (120 ms). Nagłówek jest przyklejony, ale nie reaguje na przewijanie, więc
   nie ma przełączania stanu przy każdym ruchu kółka.
2. **Jeden system odstępów.** Cztery liczby w `page-e/frame.tsx` — kontener
   1200 px, siatka 12 kolumn, odstęp kolumn 32 px, skok pionowy sekcji
   80 / 112 / 144 px — opisują całą stronę. Skala typograficzna zmienia się
   skokowo na breakpointach, bez jednostek `vw`.
3. **Wyrównanie podsiatką.** Sekcje „Model 4R” i „Dla kogo” używają
   `grid-rows-subgrid`, dzięki czemu numery, tytuły, opisy i linie
   rozdzielające leżą w każdej kolumnie na tych samych osiach niezależnie od
   długości tekstu.
4. **Zero przepełnienia poziomego** — zmierzone na dziewięciu szerokościach
   od 1920 px do 320 px.
5. **FAQ bez akordeonu**, formularz bez cieni i szkła, jednolite wypełnienia
   zamiast gradientów.

### Co wyróżnia wersję F (finalną)

Rekomendowana wersja dla klientki. Łączy wnioski ze wszystkich rund:

1. **Pełna wierność dokumentowi.** Kolejność sekcji strony odpowiada
   kolejności treści w „Informacje do Strony dla firmy BS.docx”. Opisy pięciu
   szkoleń są przeniesione w całości — akapity, listy „pokazuję” i komplety
   materiałów — jako rozwijane wiersze. Menu i hero mają układ zaproponowany
   przez klientkę (łącznie ze ścieżką „Dla pracowników → liderów i HR →
   pracodawców → komisji antymobbingowych”), a misja zawiera akapity pomijane
   we wcześniejszych wariantach.
2. **System E, język A.** Kontener 1216 px, typografia skokowa bez `vw`,
   0 przepełnienia poziomego od 1920 px do 320 px — przy szeryfowym Fraunces
   z kursywnym akcentem i skrzydle rysowanym liniami.
3. **Zero dodatkowych fontów.** Trasa dziedziczy Fraunces i Inter z layoutu
   głównego.
4. **Subtelne animacje z pełnym zabezpieczeniem** `prefers-reduced-motion`
   (wspólne prymitywy `Reveal`).
5. **Dane strukturalne JSON-LD** z pełnym katalogiem szkoleń i cennikiem.

### Co wyróżnia wersję G (ostateczną)

Odpowiedź na uwagę „F ma ściany tekstu bez opracowania graficznego”.
Treść dokumentu klientki pozostaje w 100% — zmienia się wyłącznie złożenie:

1. **Szkolenia jako panele z zakładkami** (Radix Tabs, strzałki działają):
   lead-akapit w większym stopniu, dalsze akapity w dwóch łamach,
   zamknięcie jako wyróżniony cytat, siatka „pokazuję” w dwóch kolumnach,
   materiały jako plakietki, mini-mapa 4R w szkoleniu 04.
2. **Model 4R jako cztery karty z ikonami** w siatce 2×2 z numerem
   w obrysie i pastylkami R–R–R–R.
3. **Mocne strony jako bento**: pierwszy kafel ciemny na dwie kolumny,
   kafel Modelu 4R z pastylkami etapów, kafel CTA domyka siatkę.
4. **Misja z wyciągniętym zdaniem** — „Najtrudniejsze nie zawsze są słowa…”
   dostaje rangę typograficzną w środku tekstu.
5. **Hero dzielone**: kadr na zdjęcie autorki z pływającymi plakietkami,
   pas czterech liczb z ikonami, przewijany pasek haseł.
6. **„Kilka słów o BS” jako cztery karty z ikonami** (tytuły kart nadane,
   treść akapitów bez zmian); „Dlaczego warto” jako numerowane wiersze.

Sekcje cennika, bazy wiedzy, kontaktu i stopka są współdzielone z F —
poprawka w jednej wersji naprawia obie.

### Co wyróżnia wersję H (strona-plakat)

Świadome zerwanie z językiem A–G: zamiast eleganckiego edytorialu —
odważna, graficzna strona-plakat. Jasna, biało-błękitna, ale zdecydowana:

1. **Płyty koloru.** Sekcje to wielkie zaokrąglone slaby (granat, błękity
   z logo) odsunięte od krawędzi ekranu — rytm budują bloki, nie odstępy.
2. **Komponenty z charakterem:** kontur 2 px + twardy cień offsetowy
   (`.shadow-ink`), uniesienie na hover czystym CSS (`.lift-ink`),
   pastylkowe przyciski, naklejki (rotowane plakietki przy hero).
3. **Masywna typografia:** Bricolage Grotesque ExtraBold w wersalikach
   do 7 rem, fragmenty nagłówków składane konturem
   (`.text-stroke-ink/white`) jako plakatowy kontrapunkt.
4. **Przypinane karty Modelu 4R** — scroll-stack na czystym
   `position: sticky`, bez JavaScriptu; karty nasuwają się na siebie
   w czterech tonach (biel → błękit → sky → granat).
5. **Poziomy pas szkoleń** ze scroll-snap, celowo wychodzący poza kontener.
6. **Treść kompaktowa** — zgodnie z ustaleniem etap projektowy skupia się
   na designie; fakty czytane z `content.ts`.

Uwaga pomiarowa: napisy konturowe mają przezroczyste wypełnienie, więc
automat kontrastu zgłasza je jako 1:1 — faktyczny kontrast obrysu to
8,6:1 (atrament na sky) i wyżej (biel na granacie), a każdy nagłówek
łączy słowa pełne z konturowymi.

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:3000 · /page-b … /page-h
npm run build    # build produkcyjny
```

## Stack

| Warstwa    | Wybór                                                                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, React 19, Turbopack)                                                                                                          |
| Style      | Tailwind CSS v4 (tokeny w `@theme`, kolory w OKLCH)                                                                                                   |
| Komponenty | shadcn/ui (preset `radix-nova`)                                                                                                                       |
| Animacje   | `motion` (Framer Motion), z pełną obsługą `reduced-motion`                                                                                            |
| Typografia | A: Fraunces + Inter · B: Bricolage Grotesque + Geist · C: Newsreader · D: Manrope + Instrument Sans · E: Plus Jakarta Sans — każdy krój z `latin-ext` |

Fonty koncepcji B, C, D i E ładują się wyłącznie na swoich trasach.

## Struktura

```
src/
├── app/
│   ├── globals.css        # tokeny marki, gradienty, siatka, utilities
│   ├── layout.tsx         # fonty A, metadane, Open Graph, MotionConfig
│   ├── page.tsx           # koncepcja A + dane strukturalne JSON-LD
│   ├── page-b/
│   │   ├── layout.tsx     # fonty B (ładowane tylko na tej trasie)
│   │   └── page.tsx       # koncepcja B
│   ├── page-c/
│   │   ├── layout.tsx     # fonty C + zakres motywu `theme-c`
│   │   └── page.tsx       # koncepcja C
│   ├── page-d/
│   │   ├── layout.tsx     # fonty D + zakres motywu `theme-d`
│   │   └── page.tsx       # koncepcja D
│   ├── page-e/
│   │   ├── layout.tsx     # font E + zakres motywu `theme-e`
│   │   └── page.tsx       # koncepcja E
│   ├── page-f/
│   │   ├── layout.tsx     # zakres motywu `theme-f` (fonty z layoutu głównego)
│   │   └── page.tsx       # koncepcja F + dane strukturalne JSON-LD
│   ├── page-g/
│   │   ├── layout.tsx     # współdzieli motyw F
│   │   └── page.tsx       # koncepcja G (sekcje G + współdzielone z F)
│   └── page-h/
│       ├── layout.tsx     # Bricolage + motyw `theme-h`
│       └── page.tsx       # koncepcja H (strona-plakat)
├── lib/
│   ├── content.ts         # ⭐ CAŁA TREŚĆ — fakty wspólne dla wszystkich wersji
│   ├── content-b.ts       # role, samosprawdzenie, oś czasu (tylko wersja B)
│   ├── content-c.ts       # wypowiedzi w pierwszej osobie (tylko wersja C)
│   ├── content-d.ts       # hero, pasek przewijany, podpisy (tylko wersja D)
│   ├── content-e.ts       # hero, usługi, podpisy sekcji (tylko wersja E)
│   ├── content-f.ts       # PEŁNE treści z dokumentu klientki (wersje F i G)
│   ├── content-g.ts       # elementy graficzne G (plakietki, pasek haseł)
│   ├── content-h.ts       # hasła plakatowe H (kompaktowe)
│   └── utils.ts           # cn() + polska odmiana liczebników
└── components/
    ├── site/              # sekcje koncepcji A
    ├── page-b/            # sekcje koncepcji B
    ├── page-c/            # sekcje koncepcji C
    ├── page-d/            # sekcje koncepcji D + generator skrzydła
    ├── page-e/            # sekcje koncepcji E + system siatki
    ├── page-f/            # sekcje koncepcji F (wersja finalna)
    ├── page-g/            # sekcje koncepcji G (wersja ostateczna)
    ├── page-h/            # sekcje koncepcji H (strona-plakat)
    └── ui/                # komponenty shadcn/ui
```

**Zmiana treści = edycja wyłącznie `src/lib/content.ts`** (oraz `content-b.ts` /
`content-c.ts` dla elementów wyłącznych dla danej koncepcji). Komponenty nie
zawierają tekstów poza pojedynczymi zdaniami łączącymi sekcje. Wszystkie trzy
koncepcje czytają te same fakty — dane firmy, programy, cennik i FAQ istnieją
w jednym egzemplarzu. Dzięki temu przeniesienie na WordPressa sprowadza się do
zmapowania tych struktur na pola ACF lub bloki.

## System wizualny

Paleta została wyprowadzona **bezpośrednio z pliku logo** (dekodowanie pikseli,
konwersja sRGB → OKLCH):

| Token       | HEX       | Rola                                   |
| ----------- | --------- | -------------------------------------- |
| `brand-700` | `#1b466e` | granat z konturu logo — kolor główny   |
| `brand-600` | `#286b9a` | etykiety, akcenty tekstowe             |
| `brand-400` | `#9ec7da` | błękit skrzydeł — akcent na ciemnym    |
| `brand-900` | `#0b2540` | tło sekcji „Misja” i „Kontakt”         |
| `paper`     | `#fcfbf7` | ciepły papier — tło koncepcji C        |
| `brand-300` | `#bbd9e8` | światło i pióra skrzydła w koncepcji D |

Motywem przewodnim jest **abstrakcyjne skrzydło zbudowane z linii**
(`components/site/wing-arcs.tsx`) — generowane proceduralnie z krzywych
Béziera, rysowane animacją `pathLength`. Pojawia się jako tło hero, misji,
Modelu 4R i kontaktu, budując rozpoznawalność bez powielania logo.

## Dostępność

Zweryfikowane pomiarowo w Chromium na wszystkich ośmiu trasach
(skrypty pomiarowe, nie deklaracje):

- **Kontrast:** 0 elementów tekstowych poniżej progu WCAG 2.1 AA — pomiar na
  zrasteryzowanych pikselach, z uwzględnieniem przezroczystości warstw.
  Jedyny wynik, którego skrypt nie potrafi zmierzyć, to nagłówek wersji D
  wypełniony gradientem (`text-transparent` + `bg-clip-text`); jego przystanki
  wynoszą 9,78:1 i 5,74:1 na bieli, czyli z zapasem powyżej progu 3:1
  wymaganego dla dużego tekstu.
- **`prefers-reduced-motion`:** 0 elementów pozostających niewidocznych, także
  przed przewinięciem strony. Zabezpieczenie jest dwuwarstwowe: stan docelowy
  animacji podajemy zawsze, a reguła `[data-reveal]` w `globals.css` zdejmuje
  ewentualne `opacity: 0` niezależnie od czasu wykonania JavaScriptu.
  Dodatkowo `MotionConfig reducedMotion="user"` wyłącza animacje przekształceń
  na poziomie całej aplikacji.
- **Klawiatura:** Model 4R w wersji A obsługiwany strzałkami (Radix Tabs),
  wybór roli i samosprawdzenie w wersji B jako grupy radio, nić prowadząca
  i spis treści w wersji C jako zwykłe odnośniki, w wersji D cała treść
  dostępna bez przewijania poziomego (układ pionowy poniżej 1024 px oraz przy
  ograniczonym ruchu), dialogi zamykane Escape, „Przejdź do treści” jako
  pierwszy element w tabindexie.
- **Semantyka:** jeden `h1` na trasę, poprawna hierarchia nagłówków, landmarki
  `header`/`main`/`footer`/`nav` z etykietami, wszystkie obrazy z `alt`.
- **Siatka:** zero przepełnienia poziomego na dziewięciu szerokościach od
  1920 px do 320 px (mierzone na wariancie E, który tego wymaga wprost).

## Co wymaga uzupełnienia przed publikacją

1. **Zdjęcie autorki** — każda koncepcja ma przygotowany kadr 4:5; obecnie
   wypełnia go logo. Dobre zdjęcie portretowe jest tu najmocniejszym
   pojedynczym usprawnieniem, a w koncepcji C wręcz warunkiem — cała strona
   opiera się na obecności konkretnej osoby.
2. **Formularz kontaktowy** — waliduje dane i pokazuje potwierdzenie, ale
   **nie wysyła jeszcze wiadomości**. Do podpięcia: server action + dostawca
   poczty (np. Resend) lub CRM. Miejsce oznaczone komentarzem w
   `components/site/contact.tsx`.
3. **Podstrony prawne** — `/polityka-prywatnosci` i `/regulamin` są linkowane
   w stopce, ale jeszcze nie istnieją. Wymagane przy zbieraniu danych z
   formularza (RODO).
4. **Pliki do pobrania** — sekcja „Baza wiedzy” prezentuje materiały; brakuje
   samych plików PDF i mechanizmu zapisu.
5. **Open Graph** — warto dodać `opengraph-image.png` (1200×630) dla podglądu
   linków w mediach społecznościowych.
