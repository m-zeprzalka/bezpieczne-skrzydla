"use client";

import * as React from "react";
import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

type Tag =
  | "div"
  | "section"
  | "li"
  | "ul"
  | "ol"
  | "dl"
  | "article"
  | "span"
  | "p"
  | "figure"
  | "header";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

type RevealProps = Omit<MotionDivProps, "ref"> & {
  delay?: number;
  y?: number;
  as?: Tag;
};

export const EASE = [0.16, 1, 0.3, 1] as const;

const MOTION_TAGS: Record<Tag, React.ElementType> = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  dl: motion.dl,
  article: motion.article,
  span: motion.span,
  p: motion.p,
  figure: motion.figure,
  header: motion.header,
};

/*
 * Zasada hydratacji: komponenty ruchu renderują IDENTYCZNE drzewo i style po
 * stronie serwera i klienta. Ograniczenie ruchu obsługują dwie warstwy poza
 * komponentem: `MotionConfig reducedMotion="user"` (pomija przekształcenia)
 * oraz CSS `[data-reveal]{opacity:1}` w `globals.css` (gwarancja widoczności).
 * Dzięki temu nie ma rozjazdu SSR/CSR, który wcześniej psuł hydratację.
 */

/**
 * Pojedyncze wejście: delikatne uniesienie + rozjaśnienie.
 * Wyzwalane 48 px zanim element wejdzie w kadr — blok jest gotowy, gdy
 * użytkownik do niego dojeżdża, a nie chwilę po.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
  ...props
}: RevealProps) {
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      data-reveal=""
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px 48px 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Kontener dla list i siatek — dzieci wchodzą kaskadowo. */
export function RevealGroup({
  children,
  className,
  as = "div",
  ...props
}: Omit<RevealProps, "delay" | "y">) {
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      data-reveal=""
      className={cn(className)}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px 48px 0px" }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  ...props
}: Omit<RevealProps, "delay" | "y">) {
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      data-reveal=""
      className={cn(className)}
      variants={staggerChild}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Nagłówek pojawiający się słowo po słowie (maska + przesunięcie).
 * Pełny tekst zostaje dla czytników w `aria-label`; słowa są `aria-hidden`.
 */
export function RevealWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = React.useMemo(() => text.split(" "), [text]);

  return (
    <motion.span
      className={cn("inline", className)}
      aria-label={text}
      role="text"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.04, delayChildren: delay } },
      }}
    >
      {/* Okno maskujące jest o `pb` wyższe od tekstu, żeby overflow-hidden
          nie ucinał ogonków polskich znaków (y, j, ą, ę). */}
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="-mb-[0.24em] inline-block overflow-hidden pb-[0.24em] align-bottom"
        >
          <motion.span
            aria-hidden
            data-reveal=""
            className="inline-block"
            variants={{
              hidden: { y: "150%" },
              show: { y: 0, transition: { duration: 0.85, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
