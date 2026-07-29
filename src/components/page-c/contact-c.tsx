"use client";

import * as React from "react";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import {
  ContainerC,
  EyebrowC,
  HeadingC,
  ProseC,
  SectionC,
} from "@/components/page-c/frame";
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
import { site } from "@/lib/content";
import { contactC } from "@/lib/content-c";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

/** Pola bez ramek — kreska pod tekstem, jak w formularzu na papierze. */
const LINE_FIELD =
  "h-11 rounded-none border-0 border-b border-brand-300 bg-transparent px-0 text-[1.02rem] shadow-none focus-visible:border-brand-700 focus-visible:ring-0 dark:bg-transparent";

export function ContactC() {
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
    <SectionC id="napisz" className="border-brand-200 border-t">
      <ContainerC>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <EyebrowC>{contactC.eyebrow}</EyebrowC>
            </Reveal>

            <HeadingC className="mt-6">{contactC.title}</HeadingC>

            <Reveal delay={0.1} className="mt-6">
              <ProseC>{contactC.intro}</ProseC>
            </Reveal>

            <Reveal delay={0.14} className="mt-9 flex flex-col gap-3">
              {contactC.reassurance.map((line) => (
                <p
                  key={line}
                  className="text-brand-800 flex gap-3 text-[1rem] leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="bg-brand-400 mt-[0.68rem] size-1 shrink-0 rounded-full"
                  />
                  {line}
                </p>
              ))}
            </Reveal>

            <Reveal
              delay={0.18}
              className="border-brand-200 mt-10 flex flex-col gap-4 border-t pt-8"
            >
              <a
                href={`tel:${site.phoneHref}`}
                className="text-brand-950 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-3 rounded text-[1.1rem] transition-colors outline-none focus-visible:ring-3"
              >
                <Phone className="text-brand-500 size-4" aria-hidden />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-brand-950 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-3 rounded text-[1.1rem] break-all transition-colors outline-none focus-visible:ring-3"
              >
                <Mail className="text-brand-500 size-4 shrink-0" aria-hidden />
                {site.email}
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <form onSubmit={handleSubmit} noValidate className="lg:pl-8">
                <FieldGroup className="gap-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <Field data-invalid={errors.name ? true : undefined}>
                      <FieldLabel
                        htmlFor="c-name"
                        className="text-brand-600 font-sans text-[0.72rem] tracking-[0.16em] uppercase"
                      >
                        Jak się nazywasz
                      </FieldLabel>
                      <Input
                        id="c-name"
                        name="name"
                        autoComplete="organization"
                        placeholder="Anna Kowalska"
                        aria-invalid={errors.name ? true : undefined}
                        className={LINE_FIELD}
                      />
                      {errors.name ? (
                        <FieldDescription className="text-destructive">
                          {errors.name}
                        </FieldDescription>
                      ) : null}
                    </Field>

                    <Field data-invalid={errors.email ? true : undefined}>
                      <FieldLabel
                        htmlFor="c-email"
                        className="text-brand-600 font-sans text-[0.72rem] tracking-[0.16em] uppercase"
                      >
                        Gdzie mam odpisać
                      </FieldLabel>
                      <Input
                        id="c-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="anna@firma.pl"
                        aria-invalid={errors.email ? true : undefined}
                        className={LINE_FIELD}
                      />
                      {errors.email ? (
                        <FieldDescription className="text-destructive">
                          {errors.email}
                        </FieldDescription>
                      ) : null}
                    </Field>
                  </div>

                  <Field data-invalid={errors.message ? true : undefined}>
                    <FieldLabel
                      htmlFor="c-message"
                      className="text-brand-600 font-sans text-[0.72rem] tracking-[0.16em] uppercase"
                    >
                      Co się dzieje
                    </FieldLabel>
                    <Textarea
                      id="c-message"
                      name="message"
                      rows={6}
                      placeholder="Napisz własnymi słowami. Nie musisz używać żadnych fachowych określeń."
                      aria-invalid={errors.message ? true : undefined}
                      className="border-brand-300 focus-visible:border-brand-700 resize-none rounded-none border-0 border-b bg-transparent px-0 text-[1.02rem] shadow-none focus-visible:ring-0"
                    />
                    {errors.message ? (
                      <FieldDescription className="text-destructive">
                        {errors.message}
                      </FieldDescription>
                    ) : null}
                  </Field>
                </FieldGroup>

                <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    variant="brand"
                    size="xl"
                    disabled={pending}
                    className="w-full rounded-lg sm:w-auto"
                  >
                    {pending ? (
                      <Spinner data-icon="inline-start" />
                    ) : (
                      <Send data-icon="inline-start" />
                    )}
                    {pending ? "Wysyłam…" : "Wyślij wiadomość"}
                  </Button>

                  <p className="text-brand-600 font-sans text-[0.75rem] leading-snug">
                    Dane wykorzystam wyłącznie do odpowiedzi na to zapytanie.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </ContainerC>
    </SectionC>
  );
}
