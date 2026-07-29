"use client";

import * as React from "react";
import { ArrowRight, Check, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/site/reveal";
import { Container, Section } from "@/components/site/section";
import { WingArcs } from "@/components/site/wing-arcs";
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

export function Contact() {
  const [pending, setPending] = React.useState(false);
  const [errors, setErrors] = React.useState<FormErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (name.length < 2) nextErrors.name = "Podaj imię lub nazwę organizacji.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      nextErrors.email = "Podaj adres e-mail, na który mam odpisać.";
    if (message.length < 12)
      nextErrors.message = "Napisz kilka słów o sytuacji — choćby krótko.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    // DEMO: na tym etapie formularz nie wysyła wiadomości.
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
    <Section id="kontakt" tone="deep">
      <div
        aria-hidden
        className="bg-aurora-deep absolute inset-0 -z-10 opacity-70"
      />
      <WingArcs
        className="absolute -top-56 left-1/2 -z-10 w-[1200px] max-w-none -translate-x-1/2 rotate-180 opacity-[0.14]"
        count={10}
      />

      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* — zaproszenie do rozmowy — */}
          <div className="lg:col-span-5">
            <Reveal className="text-brand-300 flex items-center gap-2.5 text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
              <span aria-hidden className="bg-brand-400/60 h-px w-6" />
              {contact.eyebrow}
            </Reveal>

            <Reveal delay={0.06} as="div">
              <h2 className="font-display mt-4 text-[clamp(1.9rem,3.6vw,2.85rem)] leading-[1.12] tracking-[-0.02em] text-white">
                {contact.title}
              </h2>
            </Reveal>

            <Reveal
              delay={0.12}
              className="text-brand-200/85 text-balance-pretty mt-5 leading-relaxed"
            >
              {contact.description}
            </Reveal>

            <Reveal delay={0.16} className="mt-9 flex flex-col gap-3.5">
              {contact.reasons.map((reason) => (
                <span
                  key={reason}
                  className="text-brand-100 flex items-start gap-3 text-[0.92rem]"
                >
                  <span className="bg-brand-400 text-brand-950 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                    <Check className="size-3" aria-hidden />
                  </span>
                  {reason}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-10 flex flex-col gap-3">
              <a
                href={`tel:${site.phoneHref}`}
                className="group border-brand-400/20 bg-brand-800/40 hover:border-brand-400/50 hover:bg-brand-800/70 focus-visible:ring-brand-400/50 flex items-center gap-4 rounded-2xl border px-5 py-4 backdrop-blur-sm transition-colors outline-none focus-visible:ring-3"
              >
                <span className="bg-brand-700/60 text-brand-200 grid size-10 shrink-0 place-items-center rounded-xl">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-brand-300/80 text-[0.68rem] font-medium tracking-[0.16em] uppercase">
                    Telefon
                  </span>
                  <span className="text-[1.05rem] font-medium text-white">
                    {site.phone}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="text-brand-300/60 ml-auto size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group border-brand-400/20 bg-brand-800/40 hover:border-brand-400/50 hover:bg-brand-800/70 focus-visible:ring-brand-400/50 flex items-center gap-4 rounded-2xl border px-5 py-4 backdrop-blur-sm transition-colors outline-none focus-visible:ring-3"
              >
                <span className="bg-brand-700/60 text-brand-200 grid size-10 shrink-0 place-items-center rounded-xl">
                  <Mail className="size-4" aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="text-brand-300/80 text-[0.68rem] font-medium tracking-[0.16em] uppercase">
                    E-mail
                  </span>
                  <span className="truncate text-[1.05rem] font-medium text-white">
                    {site.email}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="text-brand-300/60 ml-auto size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          {/* — formularz — */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                noValidate
                /* `text-foreground` jest konieczne: sekcja jest ciemna i
                   ustawia jasny kolor tekstu, który dziedziczyłyby etykiety
                   pól na białym tle formularza. */
                className="border-brand-200/60 text-foreground rounded-3xl border bg-white p-7 shadow-2xl sm:p-9"
              >
                <h3 className="font-display text-brand-900 text-xl">
                  Napisz, czego potrzebuje Twoja organizacja
                </h3>
                <p className="text-muted-foreground mt-2 text-[0.88rem] leading-relaxed">
                  Odpowiem propozycją zakresu, formy i wyceny.
                </p>

                <FieldGroup className="mt-7">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field data-invalid={errors.name ? true : undefined}>
                      <FieldLabel htmlFor="contact-name">
                        Imię lub nazwa organizacji
                      </FieldLabel>
                      <Input
                        id="contact-name"
                        name="name"
                        autoComplete="organization"
                        placeholder="np. Anna Kowalska / Firma sp. z o.o."
                        aria-invalid={errors.name ? true : undefined}
                        className="h-11"
                      />
                      {errors.name ? (
                        <FieldDescription className="text-destructive">
                          {errors.name}
                        </FieldDescription>
                      ) : null}
                    </Field>

                    <Field data-invalid={errors.email ? true : undefined}>
                      <FieldLabel htmlFor="contact-email">
                        Adres e-mail
                      </FieldLabel>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="anna@firma.pl"
                        aria-invalid={errors.email ? true : undefined}
                        className="h-11"
                      />
                      {errors.email ? (
                        <FieldDescription className="text-destructive">
                          {errors.email}
                        </FieldDescription>
                      ) : null}
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="contact-topic">
                      Czego dotyczy zapytanie
                    </FieldLabel>
                    <Input
                      id="contact-topic"
                      name="topic"
                      placeholder="np. szkolenie dla HR, procedura dla MŚP, warsztat"
                      className="h-11"
                    />
                    <FieldDescription>
                      Pole opcjonalne — pomaga mi przygotować konkretną
                      odpowiedź.
                    </FieldDescription>
                  </Field>

                  <Field data-invalid={errors.message ? true : undefined}>
                    <FieldLabel htmlFor="contact-message">Wiadomość</FieldLabel>
                    <Textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Napisz w kilku zdaniach, kogo chcesz przeszkolić i w jakiej sytuacji jest zespół."
                      aria-invalid={errors.message ? true : undefined}
                      className="resize-none"
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
                    variant="brand"
                    size="xl"
                    disabled={pending}
                    className="w-full sm:w-auto"
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
      </Container>
    </Section>
  );
}
