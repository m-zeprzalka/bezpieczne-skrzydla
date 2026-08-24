"use server";

/**
 * Akcje serwerowe formularzy.
 *
 * Walidacja odbywa się tutaj (nie tylko w przeglądarce). Dostarczanie
 * wiadomości: na tym etapie zgłoszenie trafia do logów serwera —
 * podpięcie dostawcy poczty (np. Resend / SMTP) lub CRM to jedno miejsce
 * do uzupełnienia: `deliver()` poniżej.
 */

import { quoteForm } from "@/content/contact";

export type QuoteState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"name" | "email" | "form", string>>;
  values?: Record<string, string>;
};

export type NewsletterState = {
  status: "idle" | "success" | "error";
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function deliver(kind: "quote" | "newsletter", payload: Record<string, string>) {
  // TODO(wdrożenie): dostawca poczty / CRM. Do tego czasu zgłoszenia lądują w logach.
  console.info(`[bezpieczne-skrzydla] ${kind}`, payload);
  await new Promise((resolve) => setTimeout(resolve, 350));
}

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const values = Object.fromEntries(
    [...formData.entries()]
      .filter(([key]) => !key.startsWith("$"))
      .map(([key, value]) => [key, String(value).trim()]),
  ) as Record<string, string>;

  // Pole-pułapka na boty — prawdziwy użytkownik go nie widzi i nie wypełnia.
  if (values.website) return { status: "success" };

  const errors: QuoteState["errors"] = {};
  if (!values.name || values.name.length < 2) {
    errors.name = quoteForm.errors.name;
  }
  if (!values.email || !EMAIL_RE.test(values.email)) {
    errors.email = quoteForm.errors.email;
  }
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  try {
    await deliver("quote", values);
    return { status: "success" };
  } catch {
    return {
      status: "error",
      errors: { form: quoteForm.errors.generic },
      values,
    };
  }
}

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();
  if (String(formData.get("website") ?? "")) return { status: "success" };
  if (!EMAIL_RE.test(email)) {
    return { status: "error", error: "Podaj poprawny adres e-mail." };
  }

  try {
    await deliver("newsletter", { email });
    return { status: "success" };
  } catch {
    return { status: "error", error: "Nie udało się zapisać. Spróbuj ponownie." };
  }
}
