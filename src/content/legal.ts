/**
 * Dokumenty prawne — SZKIELET do uzupełnienia przez klientkę / prawnika.
 * Struktura odpowiada typowym wymaganiom RODO i regulaminu sprzedaży usług
 * cyfrowych; treść merytoryczna każdego punktu jest oznaczona jako placeholder
 * i nie powinna trafić na produkcję bez weryfikacji.
 */

export type LegalDoc = {
  slug: string;
  title: string;
  lead: string;
  updated: string;
  sections: { title: string; paragraphs: string[] }[];
};

const PLACEHOLDER =
  "Treść tego punktu wymaga uzupełnienia przez administratora danych lub obsługę prawną. Poniższa struktura porządkuje wymagane elementy — nie zastępuje ich.";

export const privacyPolicy: LegalDoc = {
  slug: "polityka-prywatnosci",
  title: "Polityka prywatności",
  lead: "Jak Bezpieczne Skrzydła przetwarzają dane osobowe osób odwiedzających stronę, zapisujących się na materiały i wysyłających zapytania o wycenę.",
  updated: "2026-08-24",
  sections: [
    {
      title: "1. Administrator danych",
      paragraphs: [
        "Administratorem danych osobowych jest Małgorzata Just, prowadząca działalność pod marką Bezpieczne Skrzydła (NIP 728 250 06 96, REGON 545292029). Kontakt: kontakt@bezpieczneskrzydla.com.",
      ],
    },
    {
      title: "2. Jakie dane zbieram i po co",
      paragraphs: [
        "Formularz wyceny: imię lub nazwa organizacji, adres e-mail, treść wiadomości oraz odpowiedzi na pytania wstępne — wyłącznie w celu przygotowania i przesłania odpowiedzi na zapytanie.",
        "Zapis na materiały: adres e-mail — w celu przesyłania informacji o nowych materiałach i artykułach. Wypisanie możliwe w każdej chwili.",
        PLACEHOLDER,
      ],
    },
    {
      title: "3. Podstawa prawna i okres przechowywania",
      paragraphs: [PLACEHOLDER],
    },
    {
      title: "4. Odbiorcy danych i narzędzia",
      paragraphs: [
        "Strona jest hostowana w infrastrukturze dostawcy usług hostingowych; wiadomości z formularzy są dostarczane przez dostawcę poczty. Lista podmiotów przetwarzających do uzupełnienia.",
        PLACEHOLDER,
      ],
    },
    {
      title: "5. Twoje prawa",
      paragraphs: [
        "Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu, a także skargi do Prezesa Urzędu Ochrony Danych Osobowych.",
      ],
    },
    {
      title: "6. Pliki cookies",
      paragraphs: [
        "Strona w obecnej wersji nie używa plików cookies do celów marketingowych ani analitycznych. Jeżeli to się zmieni, ten punkt zostanie zaktualizowany, a odwiedzający poproszeni o zgodę.",
      ],
    },
  ],
};

export const terms: LegalDoc = {
  slug: "regulamin",
  title: "Regulamin",
  lead: "Zasady korzystania z kursów online, pakietów dla firm i szkoleń stacjonarnych oferowanych przez Bezpieczne Skrzydła.",
  updated: "2026-08-24",
  sections: [
    {
      title: "1. Postanowienia ogólne",
      paragraphs: [
        "Usługodawcą jest Małgorzata Just, prowadząca działalność pod marką Bezpieczne Skrzydła. Regulamin określa zasady zamawiania i realizacji usług opisanych na stronie.",
      ],
    },
    {
      title: "2. Forma szkoleń",
      paragraphs: [
        "Szkolenia online mają formę nagranego kursu e-learningowego: moduły z lekcjami wideo, test (10–20 pytań) i imienny certyfikat. Dostęp do kursu trwa 60 dni od aktywacji. Szkolenia stacjonarne realizowane są na życzenie klienta dla grupy 10–15 osób.",
      ],
    },
    {
      title: "3. Zamówienie i płatność",
      paragraphs: [
        "Podane na stronie kwoty są kwotami do zapłaty. Każda oferta jest przygotowywana indywidualnie po bezpłatnej rozmowie; zamówienie następuje przez akceptację oferty.",
        PLACEHOLDER,
      ],
    },
    {
      title: "4. Odstąpienie od umowy i reklamacje",
      paragraphs: [PLACEHOLDER],
    },
    {
      title: "5. Prawa autorskie do materiałów",
      paragraphs: [
        "Materiały szkoleniowe (checklisty, workbooki, wzory dokumentów) są przeznaczone do użytku uczestnika lub organizacji, która je zamówiła. Dalsze rozpowszechnianie wymaga zgody usługodawcy.",
      ],
    },
    {
      title: "6. Postanowienia końcowe",
      paragraphs: [PLACEHOLDER],
    },
  ],
};

export const legalDocs = [privacyPolicy, terms];
