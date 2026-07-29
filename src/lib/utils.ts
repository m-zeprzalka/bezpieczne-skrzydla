import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Polska odmiana rzeczownika po liczebniku.
 * `pluralPl(3, "materiał", "materiały", "materiałów")` → „materiały”.
 */
export function pluralPl(
  count: number,
  one: string,
  few: string,
  many: string,
) {
  const abs = Math.abs(count);
  if (abs === 1) return one;

  const lastTwo = abs % 100;
  const last = abs % 10;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return few;

  return many;
}
