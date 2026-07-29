"use client";

import * as React from "react";
import { Globe, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

import {
  ContainerF,
  SectionF,
  SectionHeadF,
  T_LABEL_F,
} from "@/components/page-f/frame-f";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/site/social-icons";
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
import { contactF } from "@/lib/content-f";

type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const FIELD_F = "h-12 rounded-xl border-brand-200 bg-white text-[0.9375rem]";

const socials = [
  { label: "Facebook", href: site.socials.facebook, icon: FacebookIcon },
  { label: "Instagram", href: site.socials.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
] as const;

export function ContactF() {
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
    <SectionF id="kontakt">
      <ContainerF>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12">
          {/* — pełne dane kontaktowe z dokumentu — */}
          <div className="md:col-span-5">
            <SectionHeadF
              index={contactF.index}
              label={contactF.label}
              title="Porozmawiajmy o Twojej"
              accent="organizacji"
              lead={contactF.lead}
            />

            <address className="mt-10 flex flex-col gap-4 not-italic">
              <p className="font-display text-brand-950 text-[1.3rem]">
                {site.owner}
              </p>

              <a
                href={`tel:${site.phoneHref}`}
                className="text-brand-900 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-3 rounded text-[1.0625rem] font-semibold outline-none focus-visible:ring-3"
              >
                <Phone className="text-brand-500 size-4" aria-hidden />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-brand-900 hover:text-brand-600 focus-visible:ring-ring/50 flex items-center gap-3 rounded text-[1.0625rem] font-semibold break-all outline-none focus-visible:ring-3"
              >
                <Mail className="text-brand-500 size-4 shrink-0" aria-hidden />
                {site.email}
              </a>
              <p className="text-brand-800 flex items-center gap-3 text-[0.9375rem]">
                <Globe className="text-brand-500 size-4" aria-hidden />
                www.bezpieczneskrzydla.com
              </p>
            </address>

            <dl className="text-muted-foreground mt-7 flex flex-col gap-1.5 text-[0.8125rem]">
              <div className="flex gap-2">
                <dt className="font-semibold">NIP</dt>
                <dd>{site.nip}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold">REGON</dt>
                <dd>{site.regon}</dd>
              </div>
            </dl>

            <div className="border-brand-100 mt-9 border-t pt-8">
              <p className={`${T_LABEL_F} text-brand-600`}>
                Media społecznościowe
              </p>
              <div className="mt-4 flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${site.name} na ${social.label}`}
                    className="border-brand-200 text-brand-700 hover:border-brand-700 hover:bg-brand-700 focus-visible:ring-ring/50 grid size-11 place-items-center rounded-full border outline-none hover:text-white focus-visible:ring-3"
                  >
                    <social.icon className="size-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* — formularz — */}
          <div className="md:col-span-7 md:pl-4 lg:pl-12">
            <Reveal delay={0.08}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-brand-50/70 rounded-[1.25rem] p-8 lg:p-10"
              >
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field data-invalid={errors.name ? true : undefined}>
                      <FieldLabel
                        htmlFor="f-name"
                        className="text-brand-800 text-[0.8125rem] font-semibold"
                      >
                        Imię lub nazwa organizacji
                      </FieldLabel>
                      <Input
                        id="f-name"
                        name="name"
                        autoComplete="organization"
                        placeholder="np. Anna Kowalska"
                        aria-invalid={errors.name ? true : undefined}
                        className={FIELD_F}
                      />
                      {errors.name ? (
                        <FieldDescription className="text-destructive">
                          {errors.name}
                        </FieldDescription>
                      ) : null}
                    </Field>

                    <Field data-invalid={errors.email ? true : undefined}>
                      <FieldLabel
                        htmlFor="f-email"
                        className="text-brand-800 text-[0.8125rem] font-semibold"
                      >
                        Adres e-mail
                      </FieldLabel>
                      <Input
                        id="f-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="anna@firma.pl"
                        aria-invalid={errors.email ? true : undefined}
                        className={FIELD_F}
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
                      htmlFor="f-topic"
                      className="text-brand-800 text-[0.8125rem] font-semibold"
                    >
                      Czego dotyczy zapytanie
                    </FieldLabel>
                    <Input
                      id="f-topic"
                      name="topic"
                      placeholder="np. szkolenie dla HR, procedura dla MŚP, warsztat"
                      className={FIELD_F}
                    />
                    <FieldDescription>Pole opcjonalne.</FieldDescription>
                  </Field>

                  <Field data-invalid={errors.message ? true : undefined}>
                    <FieldLabel
                      htmlFor="f-message"
                      className="text-brand-800 text-[0.8125rem] font-semibold"
                    >
                      Wiadomość
                    </FieldLabel>
                    <Textarea
                      id="f-message"
                      name="message"
                      rows={6}
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
                    variant="brand"
                    size="xl"
                    disabled={pending}
                    className="w-full rounded-full px-8 font-semibold sm:w-auto"
                  >
                    {pending ? (
                      <Spinner data-icon="inline-start" />
                    ) : (
                      <Send data-icon="inline-start" />
                    )}
                    {pending ? "Wysyłam…" : "Wyślij zapytanie"}
                  </Button>

                  <p className="text-muted-foreground text-[0.8125rem] leading-[1.5]">
                    Dane wykorzystam wyłącznie do odpowiedzi na to zapytanie.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </ContainerF>
    </SectionF>
  );
}
