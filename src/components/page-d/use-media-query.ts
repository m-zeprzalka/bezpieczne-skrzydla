"use client";

import * as React from "react";

/**
 * Zapytanie medialne czytane przez `useSyncExternalStore` — bez `setState`
 * w efekcie i bez rozjazdu przy hydratacji. Serwer nie zna szerokości okna,
 * więc startujemy od `false`; React sam dociągnie wartość po zamontowaniu.
 */
export function useMediaQuery(query: string) {
  const subscribe = React.useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = React.useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );

  return React.useSyncExternalStore(subscribe, getSnapshot, () => false);
}
