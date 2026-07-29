"use client";

import * as React from "react";
import { ArrowRight, Check, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import { ContainerD, EyebrowD, SectionD } from "@/components/page-d/frame";
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
import { sectionsD } from "@/lib/content-d";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactD() {
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
    <SectionD id="kontakt" className="overflow-hidden bg-white">
      <div
        aria-hidden
        className="bg-light-well absolute inset-0 -z-10 opacity-70"
      />

      <ContainerD>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <EyebrowD>
                <span
                  aria-hidden
                  className="bg-brand-500 size-1.5 rounded-full"
                />
                {sectionsD.contact.eyebrow}
              </EyebrowD>
            </Reveal>

            <Reveal delay={0.06} as="div">
              <h2 className="font-lux text-brand-950 mt-6 text-[clamp(2rem,3.8vw,3.1rem)] leading-[1.06] font-extralight tracking-[-0.035em]">
                {sectionsD.contact.title}
              </h2>
            </Reveal>

            <Reveal
              delay={0.12}
              className="text-brand-800/75 text-balance-pretty mt-6 leading-relaxed"
            >
              {sectionsD.contact.description}
            </Reveal>

            <Reveal delay={0.16} className="mt-9 flex flex-col gap-3">
              {contact.reasons.map((reason) => (
                <span
                  key={reason}
                  className="text-brand-800 flex items-start gap-3 text-[0.92rem]"
                >
                  <span className="bg-brand-700 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white">
                    <Check className="size-3" aria-hidden />
                  </span>
                  {reason}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-10 flex flex-col gap-3">
              <a
                href={`tel:${site.phoneHref}`}
                className="glass group hover:shadow-lux focus-visible:ring-ring/50 flex items-center gap-4 rounded-2xl px-5 py-4 transition-shadow outline-none focus-visible:ring-3"
              >
                <span className="bg-brand-100 text-brand-700 grid size-10 shrink-0 place-items-center rounded-xl">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-brand-600 text-[0.66rem] tracking-[0.18em] uppercase">
                    Telefon
                  </span>
                  <span className="text-brand-950 mt-1 text-[1.05rem] font-medium">
                    {site.phone}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="text-brand-400 ml-auto size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="glass group hover:shadow-lux focus-visible:ring-ring/50 flex items-center gap-4 rounded-2xl px-5 py-4 transition-shadow outline-none focus-visible:ring-3"
              >
                <span className="bg-brand-100 text-brand-700 grid size-10 shrink-0 place-items-center rounded-xl">
                  <Mail className="size-4" aria-hidden />
                </span>
                <span className="flex min-w-0 flex-col leading-tight">
                  <span className="text-brand-600 text-[0.66rem] tracking-[0.18em] uppercase">
                    E-mail
                  </span>
                  <span className="text-brand-950 mt-1 truncate text-[1.05rem] font-medium">
                    {site.email}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="text-brand-400 ml-auto size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass shadow-lux rounded-3xl p-7 sm:p-9"
              >
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field data-invalid={errors.name ? true : undefined}>
                      <FieldLabel htmlFor="d-name">
                        Imię lub nazwa organizacji
                      </FieldLabel>
                      <Input
                        id="d-name"
                        name="name"
                        autoComplete="organization"
                        placeholder="np. Anna Kowalska / Firma sp. z o.o."
                        aria-invalid={errors.name ? true : undefined}
                        className="h-12 rounded-xl bg-white/70"
                      />
                      {errors.name ? (
                        <FieldDescription className="text-destructive">
                          {errors.name}
                        </FieldDescription>
                      ) : null}
                    </Field>

                    <Field data-invalid={errors.email ? true : undefined}>
                      <FieldLabel htmlFor="d-email">Adres e-mail</FieldLabel>
                      <Input
                        id="d-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="anna@firma.pl"
                        aria-invalid={errors.email ? true : undefined}
                        className="h-12 rounded-xl bg-white/70"
                      />
                      {errors.email ? (
                        <FieldDescription className="text-destructive">
                          {errors.email}
                        </FieldDescription>
                      ) : null}
                    </Field>
                  </div>

                  <Field>
                    <FieldLabel htmlFor="d-topic">
                      Czego dotyczy zapytanie
                    </FieldLabel>
                    <Input
                      id="d-topic"
                      name="topic"
                      placeholder="np. szkolenie dla HR, procedura dla MŚP, warsztat"
                      className="h-12 rounded-xl bg-white/70"
                    />
                    <FieldDescription>
                      Pole opcjonalne — pomaga przygotować konkretną odpowiedź.
                    </FieldDescription>
                  </Field>

                  <Field data-invalid={errors.message ? true : undefined}>
                    <FieldLabel htmlFor="d-message">Wiadomość</FieldLabel>
                    <Textarea
                      id="d-message"
                      name="message"
                      rows={5}
                      placeholder="Napisz w kilku zdaniach, kogo chcesz przeszkolić i w jakiej sytuacji jest zespół."
                      aria-invalid={errors.message ? true : undefined}
                      className="resize-none rounded-xl bg-white/70"
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
                    className="w-full rounded-full px-8 sm:w-auto"
                  >
                    {pending ? (
                      <Spinner data-icon="inline-start" />
                    ) : (
                      <Send data-icon="inline-start" />
                    )}
                    {pending ? "Wysyłam…" : "Wyślij zapytanie"}
                  </Button>

                  <p className="text-brand-700/85 text-[0.75rem] leading-snug">
                    Dane wykorzystam wyłącznie do odpowiedzi na to zapytanie.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </ContainerD>
    </SectionD>
  );
}
