"use client";

import * as React from "react";
import { Check, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { ContainerB, LabelB, SectionB } from "@/components/page-b/frame";
import { useActiveRole } from "@/components/page-b/role-store";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { contact, site } from "@/lib/content";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactB() {
  const role = useActiveRole();
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
    await new Promise((resolve) => setTimeout(resolve, 900));
    setPending(false);
    form.reset();

    toast.success("Dziękuję za wiadomość", {
      description:
        "To wersja demonstracyjna — formularz nie wysyła jeszcze zgłoszeń. Napisz proszę bezpośrednio na kontakt@bezpieczneskrzydla.com",
    });
  }

  return (
    <SectionB id="kontakt" tone="deep">
      <ContainerB>
        <div className="grid grid-cols-1 gap-12 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-12 lg:gap-12 lg:pt-24 lg:pb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 font-mono text-[0.7rem] tracking-[0.18em] text-brand-300 uppercase">
              <span>09</span>
              <span aria-hidden className="bg-brand-400/50 h-px w-8" />
              <span>{contact.eyebrow}</span>
            </div>

            <Reveal delay={0.05} as="div">
              <h2 className="font-grotesk mt-6 text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-white">
                {contact.title}
              </h2>
            </Reveal>

            <Reveal
              delay={0.1}
              className="text-brand-200/85 mt-6 max-w-md text-[0.97rem] leading-relaxed"
            >
              {contact.description}
            </Reveal>

            <Reveal delay={0.14} className="mt-9 flex flex-col gap-3">
              {contact.reasons.map((reason) => (
                <span
                  key={reason}
                  className="text-brand-100 flex gap-3 text-[0.9rem] leading-snug"
                >
                  <Check
                    className="text-brand-400 mt-0.5 size-3.5 shrink-0"
                    aria-hidden
                  />
                  {reason}
                </span>
              ))}
            </Reveal>

            <Reveal
              delay={0.18}
              className="border-brand-800 mt-10 flex flex-col gap-px border-t"
            >
              <a
                href={`tel:${site.phoneHref}`}
                className="group border-brand-800 hover:bg-brand-900 focus-visible:ring-brand-400/50 flex items-center gap-4 border-b py-4 transition-colors outline-none focus-visible:ring-3"
              >
                <Phone className="text-brand-400 size-4 shrink-0" aria-hidden />
                <span className="flex flex-col leading-tight">
                  <LabelB tone="dark">Telefon</LabelB>
                  <span className="mt-1 text-[1.05rem] font-medium text-white">
                    {site.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group border-brand-800 hover:bg-brand-900 focus-visible:ring-brand-400/50 flex items-center gap-4 border-b py-4 transition-colors outline-none focus-visible:ring-3"
              >
                <Mail className="text-brand-400 size-4 shrink-0" aria-hidden />
                <span className="flex min-w-0 flex-col leading-tight">
                  <LabelB tone="dark">E-mail</LabelB>
                  <span className="mt-1 truncate text-[1.05rem] font-medium text-white">
                    {site.email}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <form
                onSubmit={handleSubmit}
                noValidate
                /* `text-foreground` — sekcja jest ciemna i narzuca jasny kolor,
                   który dziedziczyłyby etykiety pól na białym tle formularza. */
                className="border-brand-700 text-foreground rounded-md border bg-white p-6 sm:p-8"
              >
                <div className="border-brand-200 flex flex-wrap items-center justify-between gap-3 border-b pb-5">
                  <h3 className="font-grotesk text-brand-950 text-[1.15rem] font-semibold tracking-tight">
                    Napisz, czego potrzebuje Twoja organizacja
                  </h3>
                  {/* Kontekst z przełącznika ról wędruje razem ze zgłoszeniem */}
                  <span className="border-brand-200 bg-brand-50 text-brand-800 rounded-sm border px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.12em] uppercase">
                    {role.short}
                  </span>
                </div>

                <input type="hidden" name="rola" value={role.id} />

                <FieldGroup className="mt-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field data-invalid={errors.name ? true : undefined}>
                      <FieldLabel htmlFor="b-name">
                        Imię lub nazwa organizacji
                      </FieldLabel>
                      <Input
                        id="b-name"
                        name="name"
                        autoComplete="organization"
                        placeholder="np. Anna Kowalska / Firma sp. z o.o."
                        aria-invalid={errors.name ? true : undefined}
                        className="h-11 rounded-md"
                      />
                      {errors.name ? (
                        <FieldDescription className="text-destructive">
                          {errors.name}
                        </FieldDescription>
                      ) : null}
                    </Field>

                    <Field data-invalid={errors.email ? true : undefined}>
                      <FieldLabel htmlFor="b-email">Adres e-mail</FieldLabel>
                      <Input
                        id="b-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="anna@firma.pl"
                        aria-invalid={errors.email ? true : undefined}
                        className="h-11 rounded-md"
                      />
                      {errors.email ? (
                        <FieldDescription className="text-destructive">
                          {errors.email}
                        </FieldDescription>
                      ) : null}
                    </Field>
                  </div>

                  <Field data-invalid={errors.message ? true : undefined}>
                    <FieldLabel htmlFor="b-message">Wiadomość</FieldLabel>
                    <Textarea
                      id="b-message"
                      name="message"
                      rows={5}
                      placeholder={role.situation.replace(/[„”]/g, "")}
                      aria-invalid={errors.message ? true : undefined}
                      className="resize-none rounded-md"
                    />
                    <FieldDescription>
                      Wskazówka w polu jest dopasowana do wybranej roli — możesz
                      napisać zupełnie inaczej.
                    </FieldDescription>
                    {errors.message ? (
                      <FieldDescription className="text-destructive">
                        {errors.message}
                      </FieldDescription>
                    ) : null}
                  </Field>
                </FieldGroup>

                <div className="border-brand-200 mt-7 flex flex-col items-start gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    variant="brand"
                    size="xl"
                    disabled={pending}
                    className="w-full rounded-md sm:w-auto"
                  >
                    {pending ? (
                      <Spinner data-icon="inline-start" />
                    ) : (
                      <Send data-icon="inline-start" />
                    )}
                    {pending ? "Wysyłam…" : "Wyślij zapytanie"}
                  </Button>

                  <p className="text-muted-foreground text-[0.75rem] leading-snug">
                    Dane wykorzystam wyłącznie do odpowiedzi na to zapytanie.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </ContainerB>
    </SectionB>
  );
}
