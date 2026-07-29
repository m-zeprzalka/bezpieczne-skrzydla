"use client";

import * as React from "react";

import { roles, type RoleId } from "@/lib/content-b";

const QUERY_KEY = "rola";
const DEFAULT_ROLE: RoleId = roles[0].id;

function isRoleId(value: string | null): value is RoleId {
  return !!value && roles.some((r) => r.id === value);
}

/**
 * Wybrana rola mieszka w adresie strony (`?rola=pracodawca`), nie w stanie
 * Reacta. Dzięki temu:
 *  — kampania w LinkedIn może prowadzić prosto do wersji dla pracodawców,
 *  — klientka wyśle rozmówcy link dopasowany do jego sytuacji,
 *  — wybór przetrwa odświeżenie strony i cofnięcie w historii.
 *
 * `useSyncExternalStore` to właściwe narzędzie do czytania stanu spoza Reacta:
 * obsługuje hydratację (serwer nie zna adresu klienta) bez efektu ubocznego.
 */
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("popstate", onChange);
  };
}

function getSnapshot() {
  return new URLSearchParams(window.location.search).get(QUERY_KEY) ?? "";
}

/** Serwer nie zna adresu klienta — startujemy od wartości domyślnej. */
function getServerSnapshot() {
  return "";
}

export function setRole(next: RoleId) {
  const url = new URL(window.location.href);
  url.searchParams.set(QUERY_KEY, next);
  // replaceState, nie push — wybór roli nie powinien zaśmiecać historii
  window.history.replaceState(null, "", url);
  emit();
}

export function useRole() {
  const raw = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const chosen = isRoleId(raw);

  return {
    role: chosen ? raw : DEFAULT_ROLE,
    chosen,
    setRole,
  };
}

export function useActiveRole() {
  const { role } = useRole();
  return roles.find((r) => r.id === role) ?? roles[0];
}
