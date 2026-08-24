/**
 * Model 4R z Fundamentem.
 *
 * Reguły z maila klientki (3.08.2026):
 *  — Fundament NIE jest piątym etapem; to warstwa prewencyjna, która trwa cały czas,
 *  — strzałki obiegu: „wnioski i dane” ↓ z „Rozwiązuj”, „gotowość” ↑ do „Rozpoznaj”.
 */

export const approach = {
  label: "Moje podejście",
  paragraphs: [
    "W swoich szkoleniach łączę uporządkowaną wiedzę, doświadczenie zawodowe oraz ludzką perspektywę. Nie chcę jedynie przedstawiać definicji i przepisów. Zależy mi na tym, aby uczestnik po zakończeniu szkolenia wiedział, co może zrobić, jak powinien zareagować i czego należy unikać.",
    "Każdy program tworzę w oparciu o autorski Model 4R: Rozpoznaj – Reaguj – Raportuj – Rozwiązuj. To praktyczna mapa działania, która pomaga przejść od niepewności i chaosu do spokojnych, świadomych i odpowiedzialnych decyzji.",
  ],
  foundationIntro:
    "Zgodnie z nowelizacją Kodeksu pracy rozwinęłam model o warstwę FUNDAMENT — wcześniej nazywaną Regułami. Cztery etapy dzieją się po kolei, kiedy coś już się wydarzy. Fundament działa wcześniej i trwa cały czas, cyklicznie: to prewencja, która sprawia, że w trudnym momencie firma nie zaczyna od zera.",
} as const;

export const model4r = {
  title: "Od chaosu do spokojnej, świadomej decyzji",
  description:
    "Praktyczna mapa działania, na której opieram każdy program. Porządkuje to, co dzieje się w trudnej sytuacji — krok po kroku, bez pośpiechu i bez oceniania.",
  stepsCaption: "cztery etapy — od pierwszego sygnału do zamknięcia sprawy",
  steps: [
    {
      key: "rozpoznaj",
      index: "01",
      title: "Rozpoznaj",
      claim: "Zauważ sygnał i nazwij go po imieniu.",
      description:
        "Odróżnienie konfliktu, napięcia w zespole i wymagającego stylu zarządzania od zachowań, które mogą prowadzić do mobbingu. Powtarzalność i długotrwałość mają znaczenie.",
      points: [
        "Czerwone flagi w zachowaniu i komunikacji",
        "Konflikt czy mobbing — gdzie przebiega granica",
        "Sygnały, których nie należy bagatelizować",
      ],
    },
    {
      key: "reaguj",
      index: "02",
      title: "Reaguj",
      claim: "Zadbaj o bezpieczeństwo rozmowy, nie o szybki werdykt.",
      description:
        "Odpowiedzialna reakcja nie polega na wydaniu oceny ani obietnicy szybkiego rozwiązania. Zaczyna się od uważnego wysłuchania i zabezpieczenia poufności.",
      points: [
        "Jak wysłuchać bez przesłuchiwania i oceniania",
        "Komunikaty wspierające i te, których warto unikać",
        "Jak może zareagować świadek",
      ],
    },
    {
      key: "raportuj",
      index: "03",
      title: "Raportuj",
      claim: "Zapisz fakty, oddziel je od emocji i ocen.",
      description:
        "Rzeczowa dokumentacja chroni wszystkie strony. Notatka, która powstaje od razu, jest warta więcej niż najlepsza rekonstrukcja po miesiącach.",
      points: [
        "Wzór notatki z przyjęcia zgłoszenia",
        "Karta dokumentowania trudnych sytuacji",
        "Komu i w jakim zakresie można przekazać informacje",
      ],
    },
    {
      key: "rozwiazuj",
      index: "04",
      title: "Rozwiązuj",
      claim: "Zaplanuj dalszy tryb prowadzenia sprawy.",
      description:
        "Uporządkowany plan zamiast improwizacji: kto odpowiada za co, w jakim czasie i co usłyszy zespół. Schemat 24 godziny — 72 godziny — 7 dni.",
      points: [
        "Schemat „24 h — 72 h — 7 dni”",
        "Mapa odpowiedzialności w firmie",
        "Plan wdrożenia działań po szkoleniu",
      ],
    },
  ],
  foundation: {
    name: "Fundament",
    formerly: "warstwa prewencyjna · wcześniej: Reguły",
    claim: "Działa zanim cokolwiek się wydarzy — i nie przestaje działać.",
    items: [
      "regulaminy i polityki antymobbingowe",
      "ścieżka zgłoszeń",
      "mapa ról",
      "komunikacja",
      "szkolenia",
      "przegląd",
    ],
    note: "Fundament nie jest piątym etapem. To osobna, stale obecna warstwa prewencyjna — cztery etapy uruchamiają się dopiero wtedy, gdy coś już się wydarzy.",
    arrowDown: { from: "Rozwiązuj", label: "wnioski i dane" },
    arrowUp: { to: "Rozpoznaj", label: "gotowość" },
  },
} as const;

export type ModelStep = (typeof model4r.steps)[number];
