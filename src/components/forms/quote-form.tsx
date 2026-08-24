"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Phone, Send } from "lucide-react";

import { submitQuote, type QuoteState } from "@/components/forms/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { interestByTopic, quoteForm } from "@/content/contact";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const FIELD =
  "h-12 rounded-field border-brand-200 bg-white px-4 text-[0.9375rem] placeholder:text-ink-muted/70 focus-visible:border-brand-500 focus-visible:ring-brand-500/25";

/** Grupa chipsów radiowych — pytania wstępne przed wyceną. */
function ChipRadioGroup({
  legend,
  name,
  options,
  defaultValue,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  defaultValue?: string;
}) {
  return (
    <fieldset>
      <legend className="text-[0.875rem] font-semibold text-brand-900">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={option === defaultValue}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-10 items-center rounded-full border border-brand-200 bg-white px-4 py-2 text-[0.85rem] leading-snug font-medium text-brand-800 transition-[background-color,border-color,color,box-shadow] duration-300 hover:border-brand-400 peer-checked:border-brand-700 peer-checked:bg-brand-700 peer-checked:text-white peer-focus-visible:ring-3 peer-focus-visible:ring-ring/40 peer-focus-visible:ring-offset-2">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-[0.8125rem] font-medium text-destructive">
      {children}
    </p>
  );
}

/**
 * Formularz „Poproś o wycenę” — nie koszyk. Parametr `?temat=` w adresie
 * (z kart cennika i warsztatu) wstępnie zaznacza, czego dotyczy wycena.
 */
export function QuoteForm({ className }: { className?: string }) {
  const params = useSearchParams();
  const topic = params.get("temat");
  const defaultInterest =
    (topic && interestByTopic[topic]) || quoteForm.defaultInterest;

  const [state, action, pending] = React.useActionState<QuoteState, FormData>(
    submitQuote,
    { status: "idle" },
  );
  const successRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className={cn(
          "focus-ring flex flex-col items-start rounded-panel border border-brand-200 bg-white p-8 lg:p-10",
          className,
        )}
      >
        <span className="grid size-12 place-items-center rounded-full bg-foundation-100 text-foundation-700">
          <CheckCircle2 className="size-6" aria-hidden />
        </span>
        <h3 className="mt-6 font-display text-h3 text-ink">{quoteForm.success.title}</h3>
        <p className="mt-3 max-w-[32rem] text-body text-ink-muted">{quoteForm.success.text}</p>
        <Button asChild variant="outline-brand" size="lg" className="mt-8">
          <a href={`tel:${site.phoneHref}`}>
            <Phone data-icon="inline-start" />
            {site.phone}
          </a>
        </Button>
      </div>
    );
  }

  const errors = state.errors ?? {};
  const values = state.values ?? {};

  return (
    <form
      action={action}
      noValidate
      className={cn("rounded-panel bg-brand-50/80 p-6 sm:p-8 lg:p-10", className)}
    >
      <div className="flex flex-col gap-7">
        <ChipRadioGroup
          legend={quoteForm.interestLegend}
          name="interest"
          options={quoteForm.interests}
          defaultValue={values.interest ?? defaultInterest}
        />
        <ChipRadioGroup
          legend={quoteForm.teamLegend}
          name="teamSize"
          options={quoteForm.teamSizes}
          defaultValue={values.teamSize}
        />
        <ChipRadioGroup
          legend={quoteForm.procedureLegend}
          name="procedure"
          options={quoteForm.procedureOptions}
          defaultValue={values.procedure}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="quote-name" className="block text-[0.875rem] font-semibold text-brand-900">
              {quoteForm.fields.name.label}
            </label>
            <Input
              id="quote-name"
              name="name"
              autoComplete="organization"
              placeholder={quoteForm.fields.name.placeholder}
              defaultValue={values.name}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "quote-name-error" : undefined}
              className={cn(FIELD, "mt-2.5")}
            />
            <FieldError id="quote-name-error">{errors.name}</FieldError>
          </div>

          <div>
            <label htmlFor="quote-email" className="block text-[0.875rem] font-semibold text-brand-900">
              {quoteForm.fields.email.label}
            </label>
            <Input
              id="quote-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={quoteForm.fields.email.placeholder}
              defaultValue={values.email}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "quote-email-error" : undefined}
              className={cn(FIELD, "mt-2.5")}
            />
            <FieldError id="quote-email-error">{errors.email}</FieldError>
          </div>
        </div>

        <div>
          <label htmlFor="quote-message" className="block text-[0.875rem] font-semibold text-brand-900">
            {quoteForm.fields.message.label}{" "}
            <span className="font-normal text-ink-muted">· {quoteForm.fields.message.hint}</span>
          </label>
          <Textarea
            id="quote-message"
            name="message"
            rows={5}
            defaultValue={values.message}
            placeholder={quoteForm.fields.message.placeholder}
            className="mt-2.5 min-h-32 resize-none rounded-field border-brand-200 bg-white px-4 py-3 text-[0.9375rem] placeholder:text-ink-muted/70 focus-visible:border-brand-500 focus-visible:ring-brand-500/25"
          />
        </div>

        {/* pułapka na boty */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor="quote-website">Strona www</label>
          <input id="quote-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {errors.form ? (
        <p role="alert" className="mt-6 rounded-field border border-destructive/30 bg-destructive/5 px-4 py-3 text-[0.875rem] text-destructive">
          {errors.form}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="brand" size="xl" disabled={pending} className="w-full sm:w-auto">
          {pending ? <Spinner data-icon="inline-start" /> : <Send data-icon="inline-start" />}
          {pending ? quoteForm.submitting : quoteForm.submit}
        </Button>
        <p className="text-caption text-ink-muted">Dane wykorzystam wyłącznie do odpowiedzi na to zapytanie.</p>
      </div>
    </form>
  );
}
