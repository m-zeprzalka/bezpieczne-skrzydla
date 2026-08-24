import { Code, DoDont, DsSection, DsSub, SpecTable } from "@/components/design-system/ds-primitives";

/* ————— 09 · Wzorce ————— */

export function DsPatterns() {
  return (
    <DsSection
      id="wzorce"
      index="09"
      title="Wzorce stron"
      lead="Komponenty składają się w powtarzalne układy. Nowa podstrona nie wymaga projektowania od zera — wystarczy wybrać wzorzec i wypełnić go treścią."
    >
      <DsSub title="Anatomia podstrony" text="Każda podstrona ma ten sam szkielet. Różni się tylko liczbą sekcji środkowych i tonem nagłówka (jasny, ciemny albo ciepły dla warsztatu).">
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-5">
          {[
            ["PageHero", "okruszki · etykieta · H1 z akcentem · lead · opcjonalna karta boczna"],
            ["Sekcje", "naprzemienne tony white / tint; jedna ciemna najwyżej"],
            ["Powiązane", "karty pozostałych szkoleń, podobne wpisy"],
            ["CtaBand", "jeden przycisk główny + telefon, zawsze na ciemnym tle"],
            ["Stopka", "trzy kolumny: marka, nawigacja, kontakt; pasek z dokumentami"],
          ].map(([name, text], i) => (
            <li key={name} className="flex flex-col rounded-card border border-brand-200/80 bg-white p-4">
              <span className="t-outline text-[1.4rem] leading-none">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-3 font-display text-[1.05rem] text-ink">{name}</span>
              <span className="mt-1.5 text-caption text-ink-muted">{text}</span>
            </li>
          ))}
        </ol>
      </DsSub>

      <DsSub title="Strona główna — kolejność sprzedażowa" text="Kolejność ustalona z klientką i uzasadniona lejkiem: najpierw obietnica i metoda, potem oferta, obiekcje, cena, zaufanie, pytania, materiały, formularz.">
        <SpecTable
          columns={["#", "Sekcja", "Zadanie w lejku", "Ton"]}
          rows={[
            ["—", "Hero + pas liczb", "obietnica, dla kogo, pierwsza akcja", "white"],
            ["—", "Pasek haseł", "skanowalne dowody w 3 sekundy", "deep (wstęga)"],
            ["01", "Model 4R z Fundamentem", "metoda — dlaczego to działa", "tint"],
            ["02", "Pięć szkoleń + warsztat", "oferta — co dokładnie kupujesz", "white"],
            ["03", "Co słyszę najczęściej", "obiekcje — odpowiedź na wątpliwości", "tint"],
            ["04", "Cennik", "cena — bez gwiazdek, jeden flagowy", "deep"],
            ["05", "Mocne strony + misja", "zaufanie — kto za tym stoi", "white"],
            ["06", "FAQ", "ostatnie pytania przed decyzją", "tint"],
            ["07", "Baza wiedzy", "wartość dla niezdecydowanych, zapis", "white"],
            ["08", "Formularz wyceny", "konwersja — pytania zamknięte, potem dane", "tint"],
          ]}
        />
      </DsSub>

      <DsSub title="Hierarchia wezwań do działania" text="Jedno główne w polu widzenia. Wszystkie prowadzą do formularza wyceny — nie do koszyka, nie do kalendarza, nie do czatu.">
        <DoDont
          good={
            <ul className="flex flex-col gap-2">
              <li><strong className="font-semibold text-ink">Główne:</strong> <Code>Button variant=&quot;brand&quot;</Code> „Poproś o wycenę”, pastylka, 48 px.</li>
              <li><strong className="font-semibold text-ink">Drugie:</strong> <Code>ArrowLink</Code> „Poznaj cały Model 4R” — obok głównego, nigdy jako drugi przycisk pełny.</li>
              <li><strong className="font-semibold text-ink">Na ciemnym tle:</strong> <Code>inverse</Code> + <Code>outline-inverse</Code> z telefonem.</li>
              <li>Parametr <Code>?temat=</Code> w adresie formularza wstępnie zaznacza, czego dotyczy wycena.</li>
            </ul>
          }
          bad={
            <ul className="flex flex-col gap-2">
              <li>Dwa przyciski pełne obok siebie („Kup teraz” i „Zapytaj”) — użytkownik nie wie, który jest ważniejszy.</li>
              <li>CTA zmieniające treść w każdej sekcji („Zamów”, „Sprawdź”, „Kliknij”).</li>
              <li>Przyciski w kolorze akcentu czerwonego lub zielonego.</li>
              <li>Pływające przyciski i paski przyklejone na dole zasłaniające treść na telefonie.</li>
            </ul>
          }
        />
      </DsSub>

      <DsSub title="Formularz wyceny" text="Najpierw pytania zamknięte jako chipsy (niski koszt odpowiedzi), potem dwa pola wymagane, na końcu opcjonalna wiadomość. Walidacja po stronie serwera, błędy pod polami, sukces w miejscu formularza.">
        <SpecTable
          columns={["Krok", "Element", "Reguła"]}
          rows={[
            ["1", "Czego ma dotyczyć wycena?", "7 chipsów, domyślnie „Jeszcze nie wiem” — nikt nie musi znać cennika, żeby napisać"],
            ["2", "Ile osób? · Czy jest procedura?", "chipsy bez wartości domyślnej — brak odpowiedzi jest informacją"],
            ["3", "Imię / nazwa · e-mail", "jedyne pola wymagane; autocomplete organization / email"],
            ["4", "Wiadomość", "opcjonalna, oznaczona w etykiecie, bez licznika znaków"],
            ["5", "Wyślij", "przycisk główny; podczas wysyłki spinner i „Wysyłam…”; obok nota o danych"],
            ["6", "Sukces", "karta z ikoną, tytułem, obietnicą czasu odpowiedzi i telefonem; fokus przenosi się na nią"],
          ]}
        />
      </DsSub>

      <DsSub title="Stany puste i błędy" text="Strona 404 prowadzi do czterech głównych tras. Pusta kategoria bloga mówi wprost „Brak wpisów w tej kategorii”. Nie ma stanów bez wyjścia.">
        <DoDont
          good={<p>„Ten adres nie prowadzi nigdzie. Ale każdy z poniższych — tak.” + przyciski do głównych tras.</p>}
          bad={<p>„Błąd 404. Strona nie została odnaleziona.” bez żadnej akcji.</p>}
        />
      </DsSub>
    </DsSection>
  );
}

/* ————— 10 · Treść ————— */

export function DsContent() {
  return (
    <DsSection
      id="tresc"
      index="10"
      title="Głos, ton i reguły redakcyjne"
      lead="Strona mówi w pierwszej osobie liczby pojedynczej — głosem Małgorzaty Just. Spokojnie, konkretnie, bez straszenia i moralizowania. Poniższe reguły pochodzą z maila klientki z 3 sierpnia 2026 i są nienegocjowalne."
    >
      <DsSub title="Reguły nienegocjowalne">
        <SpecTable
          columns={["Reguła", "Tak", "Nie"]}
          rows={[
            ["„Szkolenie online” = nagrany kurs e-learningowy", "moduły, lekcje wideo, test 10–20 pytań, imienny certyfikat, dostęp 60 dni", "webinar, spotkanie na żywo przez internet, „szkolenia online i stacjonarne” bez wyjaśnienia"],
            ["Pięć szkoleń + jeden warsztat", "„5 + 1”, „pięć szkoleń i jeden warsztat wspierający”", "„sześć szkoleń”, „sześć programów”"],
            ["Warsztat to nie szkolenie i nie terapia", "plakietka „To warsztat, nie szkolenie”, zastrzeżenie o psychoterapii", "karta warsztatu w tym samym tonie co szkolenia"],
            ["Ceny bez „netto”", "„od 299 zł”, „10 900 zł — kwota do zapłaty”", "„od 299 zł netto”, gwiazdki, „+ VAT”"],
            ["Aktualne ceny", "299 · 2 390 · 2 900 · 6 900 · 10 900", "229 · 890 · 2 490 (stare, z wariantów A–H)"],
            ["Fundament to warstwa, nie etap", "„warstwa prewencyjna”, leży POD czterema etapami, inny kolor", "„piąty etap”, „5R”, Fundament w rzędzie z etapami"],
            ["Strzałki obiegu", "„wnioski i dane” ↓ z Rozwiązuj, „gotowość” ↑ do Rozpoznaj", "strzałki w inną stronę lub bez podpisów"],
            ["Bez kursywy", "kolor akcentu, krój Fraunces, stopień pisma", "<em>, italic"],
            ["Pierwsza osoba", "„tworzę”, „pokazuję”, „odpowiem”", "„firma oferuje”, „nasz zespół”, „Bezpieczne Skrzydła zapewniają”"],
          ]}
        />
      </DsSub>

      <DsSub title="Ton" text="Sześć słów, które opisują, jak brzmi ta strona — i sześć, których unika.">
        <DoDont
          goodLabel="Brzmimy"
          badLabel="Nie brzmimy"
          good={<p className="font-display text-[1.2rem] leading-[1.5]">spokojnie · konkretnie · z szacunkiem · prosto · odpowiedzialnie · po ludzku</p>}
          bad={<p className="font-display text-[1.2rem] leading-[1.5]">alarmująco · korporacyjnie · moralizatorsko · ofertowo · żargonowo · protekcjonalnie</p>}
        />
      </DsSub>

      <DsSub title="Mikrocopy" text="Etykiety przycisków to czasownik + przedmiot. Zawsze te same słowa dla tej samej akcji.">
        <SpecTable
          columns={["Akcja", "Etykieta", "Uwagi"]}
          rows={[
            ["wycena", "Poproś o wycenę", "jedyna etykieta CTA głównego; w kontekście szkolenia: „Poproś o wycenę tego szkolenia”"],
            ["termin warsztatu", "Zapytaj o najbliższy termin", "warsztat nie ma cennika — pytamy o termin, nie o cenę"],
            ["przejście do treści", "Poznaj cały Model 4R · Zobacz program · Czytaj dalej", "odnośnik ze strzałką, nie przycisk"],
            ["zapis na materiały", "Zapisz mnie", "obietnica pod polem: bez spamu, wypisanie jednym kliknięciem"],
            ["kontakt telefoniczny", "789 61 61 31", "sam numer, z ikoną; bez „zadzwoń teraz”"],
            ["sukces formularza", "Dziękuję — zapytanie dotarło.", "myślnik, nie wykrzyknik"],
          ]}
        />
      </DsSub>

      <DsSub title="Skąd pochodzi treść" text="Mapa źródeł — żeby zmiana tekstu trafiała w jedno miejsce i propagowała się wszędzie.">
        <SpecTable
          columns={["Plik", "Zawartość"]}
          rows={[
            [<Code key="1">content/site.ts</Code>, "dane firmy, nawigacja, stopka, CTA główne"],
            [<Code key="2">content/home.ts</Code>, "hero, pas liczb, pasek haseł, odbiorcy"],
            [<Code key="3">content/trainings.ts</Code>, "pięć szkoleń w całości + format kursu"],
            [<Code key="4">content/workshop.ts</Code>, "warsztat „przy kawie”"],
            [<Code key="5">content/model-4r.ts</Code>, "podejście, cztery etapy, Fundament"],
            [<Code key="6">content/pricing.ts</Code>, "cennik i zasady dopasowania"],
            [<Code key="7">content/about.ts</Code>, "misja, o marce, mocne strony, dlaczego warto"],
            [<Code key="8">content/voices.ts · faq.ts · knowledge.ts · contact.ts</Code>, "obiekcje, FAQ, materiały, formularz"],
            [<Code key="9">content/blog.ts</Code>, "wpisy bazy wiedzy (obecnie przykładowe — do zastąpienia tekstami klientki)"],
            [<Code key="10">content/legal.ts</Code>, "szkielety polityki prywatności i regulaminu — do weryfikacji prawnej"],
          ]}
        />
      </DsSub>
    </DsSection>
  );
}

/* ————— 11 · Dostępność ————— */

export function DsAccessibility() {
  return (
    <DsSection
      id="dostepnosc"
      index="11"
      title="Dostępność"
      lead="Cel: WCAG 2.2 na poziomie AA w całości, AAA tam, gdzie nic nie kosztuje. Osoba, która trafia na tę stronę po trudnym doświadczeniu, nie powinna walczyć z interfejsem."
    >
      <SpecTable
        columns={["Obszar", "Zasada", "Jak to jest zrobione"]}
        rows={[
          ["Kontrast", "tekst ≥ 4,5:1, duży tekst i UI ≥ 3:1", "tabela w sekcji Kolor liczona z tokenów; ink-muted skalibrowany na 4,5:1"],
          ["Fokus", "widoczny na każdym elemencie interaktywnym", "pierścień 3 px brand-600/40, odsunięty o 2 px; wersja dla ciemnego tła (focus-ring-dark)"],
          ["Cele dotyku", "≥ 44 × 44 px", "przyciski lg/xl, chipsy min-h 40 + odstęp 8, ikony społecznościowe 44 px"],
          ["Ruch", "prefers-reduced-motion respektowane w 100 %", "MotionConfig reducedMotion=user + CSS [data-reveal]{opacity:1} + brak animacji zapętlonych"],
          ["Struktura", "jeden H1 na stronę, kolejność nagłówków bez przeskoków", "PageHero renderuje H1; SectionHead H2; karty H3"],
          ["Landmarki", "header / nav / main / footer + skip link", "„Przejdź do treści” jako pierwszy element fokusu"],
          ["Nawigacja", "aria-current=page, aria-expanded na menu, okruszki z aria-label", "SiteHeader, Breadcrumbs"],
          ["Formularze", "etykiety powiązane, błędy z role=alert i aria-describedby, sukces z fokusem", "QuoteForm, NewsletterForm; walidacja także po stronie serwera"],
          ["Treść ruchoma", "pasek haseł ma statyczny odpowiednik", "lista sr-only w Marquee"],
          ["Obrazy dekoracyjne", "aria-hidden, alt pusty", "WingArcs, okładki wpisów, sygnet w nagłówku"],
          ["Język", "lang=pl, polskie cudzysłowy i typografia", "html lang, treść z dokumentu klientki"],
          ["Zoom", "układ działa do 200 % / 320 px", "brak jednostek vw w tekście poza clamp z limitem; kontener płynny"],
        ]}
      />
    </DsSection>
  );
}

/* ————— 12 · Dla wdrażających ————— */

export function DsEngineering() {
  return (
    <DsSection
      id="wdrozenie"
      index="12"
      title="Dla wdrażających"
      lead="Gdzie mieszkają tokeny, jak dodać komponent, co zrobić przed publikacją."
    >
      <DsSub title="Struktura kodu">
        <SpecTable
          columns={["Ścieżka", "Rola"]}
          rows={[
            [<Code key="1">src/app/globals.css</Code>, "wszystkie tokeny (@theme), warstwy base / components / utilities — jedno źródło prawdy dla przeglądarki"],
            [<Code key="2">src/components/design-system/tokens.ts</Code>, "lustro tokenów dla tej dokumentacji (tabele, kontrast)"],
            [<Code key="3">src/components/system/</Code>, "prymitywy: Container, Section, SectionHead, Reveal, Pill, ArrowLink, IconTile, PageHero, CtaBand, WingArcs, BrandMark, AuthorPortrait, Marquee"],
            [<Code key="4">src/components/ui/</Code>, "shadcn — tylko to, co w użyciu: Button z wariantami marki, Input, Textarea, Accordion, Sheet, Spinner"],
            [<Code key="5">src/components/pages/</Code>, "bloki współdzielone między trasami: ModelDiagram, TrainingCard, PriceCards, FaqList, PostCard"],
            [<Code key="6">src/components/home/</Code>, "sekcje strony głównej w kolejności lejka"],
            [<Code key="7">src/components/forms/</Code>, "formularze (klient) i akcje serwerowe z walidacją"],
            [<Code key="8">src/content/</Code>, "cała treść — bez JSX, gotowa do przeniesienia do CMS"],
            [<Code key="9">src/app/(trasy)</Code>, "strony: /, /o-nas, /model-4r, /szkolenia, /szkolenia/[slug], /warsztat, /cennik, /blog, /blog/[slug], /kontakt, dokumenty, 404, sitemap, robots, manifest, obraz OG"],
          ]}
        />
      </DsSub>

      <DsSub title="Jak dodać nowy blok" text="Pięć kroków, które utrzymują spójność.">
        <ol className="grid grid-cols-1 gap-3 md:grid-cols-5">
          {[
            ["Treść", "dopisz do właściwego pliku w content/ — bez formatowania"],
            ["Sekcja", "użyj Section z tonem innym niż sąsiedzi i SectionHead"],
            ["Prymitywy", "składaj z system/ i ui/; nowe klasy tylko z tokenów"],
            ["Ruch", "opakuj w Reveal / RevealGroup — nic więcej"],
            ["Sprawdź", "lint, build, zrzuty 390 / 768 / 1440 px, klawiatura, reduced motion"],
          ].map(([name, text], i) => (
            <li key={name} className="flex flex-col rounded-card border border-brand-200/80 bg-white p-4">
              <span className="t-outline text-[1.4rem] leading-none">{String(i + 1).padStart(2, "0")}</span>
              <span className="mt-3 font-display text-[1.05rem] text-ink">{name}</span>
              <span className="mt-1.5 text-caption text-ink-muted">{text}</span>
            </li>
          ))}
        </ol>
      </DsSub>

      <DsSub title="Przed publikacją" text="Rzeczy, które celowo zostały do decyzji klientki lub wdrożenia.">
        <ul className="flex flex-col gap-2 text-body-sm text-brand-900/85">
          <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" /><span className="min-w-0 [overflow-wrap:anywhere]">Zdjęcie autorki: wystarczy podać ścieżkę w <Code>site.authorPhoto</Code> — kadr, plakietki i sekcja „O nas” podmienią się same.</span></li>
          <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" /><span className="min-w-0 [overflow-wrap:anywhere]">Dostarczanie formularzy: funkcja <Code>deliver()</Code> w <Code>forms/actions.ts</Code> — podpięcie poczty lub CRM; obecnie zgłoszenia trafiają do logów serwera.</span></li>
          <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" /><span className="min-w-0 [overflow-wrap:anywhere]">Wpisy bazy wiedzy są przykładowe — zastąpić tekstami klientki w <Code>content/blog.ts</Code> (lub podpiąć CMS).</span></li>
          <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" /><span className="min-w-0 [overflow-wrap:anywhere]">Polityka prywatności i regulamin: szkielety do weryfikacji prawnej; punkty oznaczone jako wymagające uzupełnienia.</span></li>
          <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" /><span className="min-w-0 [overflow-wrap:anywhere]">Integracja z platformą WebToLearn (kursy) — temat odłożony przez klientkę; miejsce na odnośniki: karty szkoleń i cennik.</span></li>
          <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600" /><span className="min-w-0 [overflow-wrap:anywhere]">Ta strona (<Code>/design-system</Code>) jest wyłączona z indeksowania w <Code>robots.ts</Code>.</span></li>
        </ul>
      </DsSub>
    </DsSection>
  );
}
