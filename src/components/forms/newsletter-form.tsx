"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { subscribeNewsletter, type NewsletterState } from "@/components/forms/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { knowledge } from "@/content/knowledge";
import { cn } from "@/lib/utils";

/** Zapis na bezpłatne materiały — jedno pole, jeden przycisk, stan inline. */
export function NewsletterForm({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const [state, action, pending] = React.useActionState<NewsletterState, FormData>(
    subscribeNewsletter,
    { status: "idle" },
  );
  const dark = tone === "dark";

  if (state.status === "success") {
    return (
      <p
        role="status"
        className={cn(
          "flex items-center gap-3 rounded-field px-4 py-3 text-[0.9375rem] font-medium",
          dark ? "bg-white/10 text-white" : "bg-brand-50 text-brand-900",
          className,
        )}
      >
        <CheckCircle2 className={cn("size-5", dark ? "text-brand-300" : "text-brand-600")} aria-hidden />
        Dziękuję — sprawdź skrzynkę, pierwsze materiały są w drodze.
      </p>
    );
  }

  return (
    <form action={action} noValidate className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            {knowledge.signup.placeholder}
          </label>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={knowledge.signup.placeholder}
            aria-invalid={state.status === "error" ? true : undefined}
            aria-describedby={state.status === "error" ? "newsletter-error" : undefined}
            className={cn(
              "h-13 rounded-full px-5 text-[0.9375rem]",
              dark
                ? "border-white/15 bg-white/10 text-white placeholder:text-brand-200/70 focus-visible:border-brand-300 focus-visible:ring-brand-300/30"
                : "border-brand-200 bg-white placeholder:text-ink-muted/70 focus-visible:border-brand-500 focus-visible:ring-brand-500/25",
            )}
          />
        </div>
        <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor="newsletter-website">Strona www</label>
          <input id="newsletter-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <Button type="submit" variant={dark ? "inverse" : "brand"} size="xl" disabled={pending} className="shrink-0">
          {pending ? <Spinner data-icon="inline-start" /> : null}
          {knowledge.signup.cta}
          {!pending ? <ArrowRight data-icon="inline-end" /> : null}
        </Button>
      </div>
      {state.status === "error" ? (
        <p id="newsletter-error" role="alert" className={cn("text-[0.8125rem] font-medium", dark ? "text-brand-200" : "text-destructive")}>
          {state.error}
        </p>
      ) : (
        <p className={cn("text-caption", dark ? "text-brand-200/70" : "text-ink-muted")}>{knowledge.signup.consent}</p>
      )}
    </form>
  );
}
