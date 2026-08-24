/**
 * Dane marki, nawigacja i stopka — jedno źródło prawdy dla całej witryny.
 *
 * Kontakt na stronie jest kontaktem firmowym (nie prywatnym) z dokumentu
 * klientki. Zmiana tutaj propaguje się do nagłówka, stopki, strony kontaktu,
 * danych strukturalnych i mapy witryny.
 */

export const site = {
  name: "Bezpieczne Skrzydła",
  owner: "Małgorzata Just",
  ownerRole: "Autorka szkoleń i Modelu 4R",
  tagline: "Szkolenia i praktyczne narzędzia dla bezpieczniejszych miejsc pracy",
  description:
    "Nagrane kursy online i praktyczne narzędzia z zakresu przeciwdziałania mobbingowi, dyskryminacji i przemocy psychicznej w pracy. Autorski Model 4R z Fundamentem dla pracowników, HR, pracodawców MŚP i komisji antymobbingowych.",
  url: "https://www.bezpieczneskrzydla.com",
  domainLabel: "www.bezpieczneskrzydla.com",
  phone: "789 61 61 31",
  phoneHref: "+48789616131",
  email: "kontakt@bezpieczneskrzydla.com",
  nip: "728 250 06 96",
  regon: "545292029",
  /** Ścieżka do zdjęcia autorki — po dostarczeniu pliku wystarczy ją podać. */
  authorPhoto: null as string | null,
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61575286035085",
    instagram: "https://www.instagram.com/bezpieczneskrzydla/",
    linkedin: "https://www.linkedin.com/in/bezpieczne-skrzyd%C5%82a",
  },
} as const;

/** Nawigacja główna — kolejność i etykiety według dokumentu klientki. */
export const primaryNav = [
  { label: "O Bezpiecznych Skrzydłach", short: "O nas", href: "/o-nas" },
  { label: "Model 4R", short: "Model 4R", href: "/model-4r" },
  { label: "Szkolenia", short: "Szkolenia", href: "/szkolenia" },
  { label: "Cennik", short: "Cennik", href: "/cennik" },
  { label: "Baza wiedzy", short: "Baza wiedzy", href: "/blog" },
  { label: "Kontakt", short: "Kontakt", href: "/kontakt" },
] as const;

export const primaryCta = { label: "Poproś o wycenę", href: "/kontakt" } as const;

export const footer = {
  description:
    "Marka edukacyjno-wspierająca poświęcona przeciwdziałaniu mobbingowi, dyskryminacji i przemocy psychicznej w środowisku pracy. Nagrane kursy online z testem i imiennym certyfikatem, a na życzenie klienta szkolenia stacjonarne — w całej Polsce.",
  columns: [
    {
      title: "Oferta",
      links: [
        { label: "Wszystkie szkolenia", href: "/szkolenia" },
        { label: "Pakiet „Bezpieczna Firma”", href: "/cennik#bezpieczna-firma" },
        { label: "Warsztat „przy kawie”", href: "/warsztat" },
        { label: "Cennik", href: "/cennik" },
      ],
    },
    {
      title: "Poznaj",
      links: [
        { label: "O Bezpiecznych Skrzydłach", href: "/o-nas" },
        { label: "Model 4R z Fundamentem", href: "/model-4r" },
        { label: "Baza wiedzy", href: "/blog" },
        { label: "Kontakt", href: "/kontakt" },
      ],
    },
  ],
  legal: [
    { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
    { label: "Regulamin", href: "/regulamin" },
    { label: "Design system", href: "/design-system" },
  ],
} as const;
