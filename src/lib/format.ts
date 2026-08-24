const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** „18 sierpnia 2026” — stały format niezależny od ustawień przeglądarki. */
export function formatDate(iso: string) {
  return dateFormatter.format(new Date(`${iso}T12:00:00Z`));
}

export function readingLabel(minutes: number) {
  return `${minutes} min czytania`;
}
