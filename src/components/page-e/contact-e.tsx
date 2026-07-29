"use client";

import * as React from "react";
import { Check, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

import {
  ContainerE,
  GRID_12,
  LabelE,
  MarkedTitle,
  SectionE,
  T_LEAD,
} from "@/components/page-e/frame";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/content";
import { contactE } from "@/lib/content-e";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const FIELD = "h-12 rounded-xl border-brand-200 bg-white text-[0.9375rem]";

export function ContactE() {
  const [pending, setPending] = React.useState(false);
  const [errors, setErrors] = React.useState<FormErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: FormErrors = {};
    if (name.length < 2) next.name = "Podaj imię lub nazwę organizacji.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "Podaj adres e-mail, na który mam odpisać.";
    if (message.length < 12)
      next.message = "Napisz kilka słów o sytuacji — choćby krótko.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setPending(true);
    // DEMO: formularz nie wysyła jeszcze zgłoszeń.
    // Docelowo → server action + dostawca poczty (Resend / SMTP) lub CRM.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setPending(false);
    form.reset();

    toast.success("Dziękuję za wiadomość", {
      description:
        "To wersja demonstracyjna — formularz nie wysyła jeszcze zgłoszeń. Napisz proszę bezpośrednio na kontakt@bezpieczneskrzydla.com",
    });
  }

  return (
    <SectionE id="kontakt">
      <ContainerE>
        <div className={GRID_12}>
          <div className="md:col-span-5">
            <LabelE>{contactE.label}</LabelE>
            <MarkedTitle
              before={contactE.titleBefore}
              marked={contactE.titleMarked}
              className="mt-4"
            />

            <p className={`${T_LEAD} text-muted-foreground mt-6 max-w-[30rem]`}>
              {contactE.lead}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {contactE.reasons.map((reason) => (
                <li
                  key={reason}
                  className="text-brand-800 flex gap-3 text-[0.9375rem] leading-[1.55]"
                >
                  <Check
                    className="text-brand-600 mt-0.5 size-4 shrink-0"
                    aria-hidden
                  />
                  {reason}
                </li>
              ))}
            </ul>

            <div className="border-brand-200 mt-10 flex flex-col gap-4 border-t pt-8">
              <a
                href={`tel:${site.phoneHref}`}
                className="text-brand-950 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-3 rounded text-[1.0625rem] font-semibold outline-none focus-visible:ring-3"
              >
                <Phone className="text-brand-600 size-4" aria-hidden />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-brand-950 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-3 rounded text-[1.0625rem] font-semibold break-all outline-none focus-visible:ring-3"
              >
                <Mail className="text-brand-600 size-4 shrink-0" aria-hidden />
                {site.email}
              </a>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-4 lg:pl-10">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-brand-50/70 rounded-[1.25rem] p-8 lg:p-10"
            >
              <FieldGroup>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field data-invalid={errors.name ? true : undefined}>
                    <FieldLabel
                      htmlFor="e-name"
                      className="text-brand-800 text-[0.8125rem] font-semibold"
                    >
                      Imię lub nazwa organizacji
                    </FieldLabel>
                    <Input
                      id="e-name"
                      name="name"
                      autoComplete="organization"
                      placeholder="np. Anna Kowalska"
                      aria-invalid={errors.name ? true : undefined}
                      className={FIELD}
                    />
                    {errors.name ? (
                      <FieldDescription className="text-destructive">
                        {errors.name}
                      </FieldDescription>
                    ) : null}
                  </Field>

                  <Field data-invalid={errors.email ? true : undefined}>
                    <FieldLabel
                      htmlFor="e-email"
                      className="text-brand-800 text-[0.8125rem] font-semibold"
                    >
                      Adres e-mail
                    </FieldLabel>
                    <Input
                      id="e-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="anna@firma.pl"
                      aria-invalid={errors.email ? true : undefined}
                      className={FIELD}
                    />
                    {errors.email ? (
                      <FieldDescription className="text-destructive">
                        {errors.email}
                      </FieldDescription>
                    ) : null}
                  </Field>
                </div>

                <Field>
                  <FieldLabel
                    htmlFor="e-topic"
                    className="text-brand-800 text-[0.8125rem] font-semibold"
                  >
                    Czego dotyczy zapytanie
                  </FieldLabel>
                  <Input
                    id="e-topic"
                    name="topic"
                    placeholder="np. szkolenie dla HR, procedura dla MŚP"
                    className={FIELD}
                  />
                  <FieldDescription>Pole opcjonalne.</FieldDescription>
                </Field>

                <Field data-invalid={errors.message ? true : undefined}>
                  <FieldLabel
                    htmlFor="e-message"
                    className="text-brand-800 text-[0.8125rem] font-semibold"
                  >
                    Wiadomość
                  </FieldLabel>
                  <Textarea
                    id="e-message"
                    name="message"
                    rows={5}
                    placeholder="Napisz w kilku zdaniach, kogo chcesz przeszkolić i w jakiej sytuacji jest zespół."
                    aria-invalid={errors.message ? true : undefined}
                    className="border-brand-200 resize-none rounded-xl bg-white text-[0.9375rem]"
                  />
                  {errors.message ? (
                    <FieldDescription className="text-destructive">
                      {errors.message}
                    </FieldDescription>
                  ) : null}
                </Field>
              </FieldGroup>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  disabled={pending}
                  className="w-full rounded-xl px-7 font-semibold sm:w-auto"
                >
                  {pending ? "Wysyłam…" : "Wyślij zapytanie"}
                </Button>

                <p className="text-muted-foreground text-[0.8125rem] leading-[1.5]">
                  Dane wykorzystam wyłącznie do odpowiedzi na to zapytanie.
                </p>
              </div>
            </form>
          </div>
        </div>
      </ContainerE>
    </SectionE>
  );
}
