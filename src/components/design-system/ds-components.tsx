import Link from "next/link";
import { ArrowRight, Coffee, Send } from "lucide-react";

import { Code, DsSection, DsSub, Specimen } from "@/components/design-system/ds-primitives";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { FaqList } from "@/components/pages/faq-list";
import { PostCard } from "@/components/pages/post-card";
import { TrainingCard, WorkshopCard } from "@/components/pages/training-card";
import { ArrowLink } from "@/components/system/arrow-link";
import { Breadcrumbs } from "@/components/system/breadcrumbs";
import { IconTile } from "@/components/system/icon-tile";
import { Marquee } from "@/components/system/marquee";
import { Pill } from "@/components/system/pill";
import { SectionHead } from "@/components/system/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { sortedPosts } from "@/content/blog";
import { faq } from "@/content/faq";
import { trainings } from "@/content/trainings";

const FIELD = "h-12 rounded-field border-brand-200 bg-white px-4 text-[0.9375rem] placeholder:text-ink-muted/70 focus-visible:border-brand-500 focus-visible:ring-brand-500/25";

export function DsComponents() {
  const post = sortedPosts()[0];

  return (
    <DsSection
      id="komponenty"
      index="08"
      title="Komponenty"
      lead="Wszystko poniżej to żywe komponenty z kodu witryny — nie makiety. Każdy ma jedną odpowiedzialność, warianty zamiast modyfikatorów i stany fokusu wbudowane, nie dopisywane."
    >
      {/* — przyciski — */}
      <DsSub
        id="przyciski"
        title="Przyciski"
        text="Warianty marki są pastylkami. Na stronie widoczny jest jeden przycisk główny na widok; reszta to przyciski obrysowe albo odnośniki ze strzałką."
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Specimen caption="brand · outline-brand · brand-soft · ghost-brand — na jasnym tle" align="center">
            <Button variant="brand" size="xl">
              Poproś o wycenę
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button variant="outline-brand" size="xl">Zobacz szkolenia</Button>
            <Button variant="brand-soft" size="xl">Zapisz mnie</Button>
            <Button variant="ghost-brand" size="xl">Anuluj</Button>
          </Specimen>
          <Specimen caption="inverse · outline-inverse — na ciemnym tle" tone="dark" align="center">
            <Button variant="inverse" size="xl">
              Poproś o wycenę
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button variant="outline-inverse" size="xl">789 61 61 31</Button>
          </Specimen>
          <Specimen caption="rozmiary: md 40 · lg 44 · xl 48 px — lg i xl spełniają cel dotyku 44 px" align="center">
            <Button variant="brand" size="md">Rozmiar md</Button>
            <Button variant="brand" size="lg">Rozmiar lg</Button>
            <Button variant="brand" size="xl">Rozmiar xl</Button>
            <Button variant="outline-brand" size="icon-lg" aria-label="Menu">
              <Coffee />
            </Button>
          </Specimen>
          <Specimen caption="stany: wysyłanie · wyłączony · z ikoną z przodu" align="center">
            <Button variant="brand" size="xl" disabled>
              <Spinner data-icon="inline-start" />
              Wysyłam…
            </Button>
            <Button variant="outline-brand" size="xl" disabled>
              Wyłączony
            </Button>
            <Button variant="brand" size="xl">
              <Send data-icon="inline-start" />
              Poproś o wycenę
            </Button>
          </Specimen>
        </div>
      </DsSub>

      {/* — odnośniki — */}
      <DsSub id="odnosniki" title="Odnośniki" text="Drugi poziom wezwania do działania. Linia rośnie od lewej, strzałka przesuwa się o 2 px. Odnośniki w treści mają podkreślenie odsunięte o 4 px.">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Specimen align="center">
            <ArrowLink href="#odnosniki">Poznaj cały Model 4R</ArrowLink>
            <ArrowLink href="#odnosniki" size="sm">Czytaj dalej</ArrowLink>
            <ArrowLink href="https://www.bezpieczneskrzydla.com" external>
              Zewnętrzny
            </ArrowLink>
          </Specimen>
          <Specimen tone="dark" align="center">
            <ArrowLink href="#odnosniki" tone="dark">Pełny cennik i zasady dopasowania</ArrowLink>
          </Specimen>
        </div>
        <p className="mt-4 text-body-sm text-brand-900/85">
          W akapicie: rozwijam to w szkoleniu{" "}
          <Link href="#odnosniki" className="focus-ring rounded-sm font-medium text-brand-800 underline decoration-brand-300 decoration-1 underline-offset-4 transition-colors hover:text-brand-600 hover:decoration-brand-500">
            „Czy to już mobbing?”
          </Link>
          .
        </p>
      </DsSub>

      {/* — pastylki — */}
      <DsSub id="pastylki" title="Pastylki i etykiety" text="Bez interakcji. Do oznaczania kategorii, materiałów, statusów. Interaktywne pastylki to zawsze przycisk albo chips formularza.">
        <Specimen>
          <Pill variant="outline">checklista „Konflikt czy mobbing?”</Pill>
          <Pill variant="soft">Dla pracowników</Pill>
          <Pill variant="solid">Nowość</Pill>
          <Pill variant="label">Produkt flagowy</Pill>
          <Pill variant="label-outline">
            <Coffee />
            To warsztat, nie szkolenie
          </Pill>
          <Pill variant="sand">Warsztat</Pill>
        </Specimen>
        <Specimen tone="dark" className="mt-4">
          <Pill variant="inverse">Kurs online · dostęp 60 dni</Pill>
        </Specimen>
      </DsSub>

      {/* — nagłówek sekcji — */}
      <DsSub id="naglowek-sekcji" title="Nagłówek sekcji" text="Podpis systemu: numer w obrysie, etykieta w kapitalikach, tytuł z akcentem kolorem, lead. Na stronie głównej numer buduje rytm 01–08; na podstronach numer się pomija.">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Specimen className="flex-col items-stretch">
            <SectionHead index="02" label="Oferta · Szkolenia" title="Pięć szkoleń, każde dla innej" accent="roli w organizacji" lead="Każde szkolenie ma formę nagranego kursu online." />
          </Specimen>
          <Specimen tone="dark" className="flex-col items-stretch">
            <SectionHead label="Cennik" title="Cennik —" accent="prosty i przejrzysty" lead="Podana kwota jest kwotą do zapłaty." tone="dark" align="center" />
          </Specimen>
        </div>
      </DsSub>

      {/* — karty — */}
      <DsSub id="karty" title="Karty" text="Cała powierzchnia karty jest odnośnikiem. Etykieta, tytuł Fraunces, opis, stopka z faktem i akcją; włoskowa ramka, bez cienia w spoczynku. Pod kursorem karta unosi się o 2 px.">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <TrainingCard training={trainings[0]} />
          <WorkshopCard />
          <PostCard post={post} />
        </div>
      </DsSub>

      {/* — kafelek liczby — */}
      <DsSub id="kafelek" title="Kafelek liczby" text="Wartość Fraunces z ikoną i podpisem. Na stronie głównej cztery fakty stoją 2×2 pod treścią hero, nad włoskową kreską — bez ramek; wersja w ramkach służy panelom.">
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-brand-200/80 bg-brand-200/70 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {[
            ["4R", "autorski model z warstwą Fundament"],
            ["5 + 1", "pięć szkoleń i jeden warsztat"],
            ["od 299 zł", "kurs online z certyfikatem"],
            ["cała Polska", "online, stacjonarnie na życzenie"],
          ].map(([value, label]) => (
            <li key={value} className="flex items-center gap-4 bg-white p-5">
              <IconTile tone="tint">
                <Coffee aria-hidden />
              </IconTile>
              <span className="flex flex-col">
                <span className="font-display text-[1.3rem] leading-tight tracking-tight text-ink">{value}</span>
                <span className="mt-0.5 text-caption text-ink-muted">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </DsSub>

      {/* — formularze — */}
      <DsSub id="formularze" title="Formularze" text="Chipsy radiowe dla pytań zamkniętych (zero list rozwijanych), pola 48 px, etykieta nad polem, komunikat błędu pod polem z role=alert, sukces zamiast toastu.">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Specimen caption="chipsy radiowe · min. 40 px wysokości, stan zaznaczony granatem" className="flex-col items-stretch">
            <fieldset>
              <legend className="text-[0.875rem] font-semibold text-brand-900">Ile osób chcesz przeszkolić?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {["1 osoba", "2–10 osób", "11–30 osób", "ponad 30 osób"].map((option, i) => (
                  <label key={option} className="cursor-pointer">
                    <input type="radio" name="ds-team" value={option} defaultChecked={i === 1} className="peer sr-only" />
                    <span className="inline-flex min-h-10 items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-[0.85rem] font-medium text-brand-800 transition-colors hover:border-brand-400 peer-checked:border-brand-700 peer-checked:bg-brand-700 peer-checked:text-white peer-focus-visible:ring-3 peer-focus-visible:ring-ring/40 peer-focus-visible:ring-offset-2">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          </Specimen>
          <Specimen caption="pole tekstowe · stan domyślny i błąd" className="flex-col items-stretch gap-5">
            <div>
              <label htmlFor="ds-name" className="block text-[0.875rem] font-semibold text-brand-900">Imię lub nazwa organizacji</label>
              <Input id="ds-name" placeholder="np. Anna Kowalska" className={`${FIELD} mt-2.5`} />
            </div>
            <div>
              <label htmlFor="ds-email" className="block text-[0.875rem] font-semibold text-brand-900">Adres e-mail</label>
              <Input id="ds-email" defaultValue="anna@firma" aria-invalid aria-describedby="ds-email-error" className={`${FIELD} mt-2.5`} />
              <p id="ds-email-error" role="alert" className="mt-2 text-[0.8125rem] font-medium text-destructive">Podaj adres e-mail, na który mam odpisać.</p>
            </div>
            <div>
              <label htmlFor="ds-msg" className="block text-[0.875rem] font-semibold text-brand-900">
                Wiadomość <span className="font-normal text-ink-muted">· Pole opcjonalne.</span>
              </label>
              <Textarea id="ds-msg" rows={3} placeholder="Napisz w kilku zdaniach…" className="mt-2.5 min-h-24 resize-none rounded-field border-brand-200 bg-white px-4 py-3 text-[0.9375rem]" />
            </div>
          </Specimen>
        </div>
        <Specimen caption="zapis na materiały · jedno pole + przycisk, stan sukcesu inline" className="mt-4 flex-col items-stretch">
          <NewsletterForm className="max-w-[34rem]" />
        </Specimen>
      </DsSub>

      {/* — akordeon — */}
      <DsSub id="akordeon" title="Akordeon FAQ" text="Jedna odpowiedź otwarta naraz, pierwsza otwarta domyślnie — wyszukiwarka i czytnik widzą pełną treść, użytkownik od razu widzi wzór odpowiedzi.">
        <FaqList items={faq.slice(0, 3)} />
      </DsSub>

      {/* — nawigacja pomocnicza — */}
      <DsSub id="okruszki" title="Okruszki i pasek haseł">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Specimen caption="Breadcrumbs · ostatni element to bieżąca strona (aria-current)">
            <Breadcrumbs items={[{ label: "Strona główna", href: "/" }, { label: "Szkolenia", href: "/szkolenia" }, { label: "Pierwsze 24 godziny" }]} />
          </Specimen>
          <Specimen caption="Breadcrumbs · wersja na ciemnym tle" tone="dark">
            <Breadcrumbs tone="dark" items={[{ label: "Strona główna", href: "/" }, { label: "Cennik" }]} />
          </Specimen>
        </div>
        <div className="mt-4 overflow-hidden rounded-card">
          <Marquee items={["Autorski Model 4R z Fundamentem", "Nagrane kursy online — dostęp 60 dni", "Test i imienny certyfikat", "Cała Polska"]} />
        </div>
        <p className="mt-3 text-caption text-ink-muted">
          Pasek haseł to jedyna animacja zapętlona w systemie. Ma statyczną listę <Code>sr-only</Code> dla czytników i zatrzymuje się przy ograniczeniu ruchu.
        </p>
      </DsSub>
    </DsSection>
  );
}
