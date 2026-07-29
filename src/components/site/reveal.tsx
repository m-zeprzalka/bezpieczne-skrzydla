"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

type Tag = "div" | "section" | "li" | "ul" | "ol" | "dl" | "article" | "span";

type MotionDivProps = React.ComponentProps<typeof motion.div>;

type RevealProps = Omit<MotionDivProps, "ref"> & {
  delay?: number;
  y?: number;
  as?: Tag;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Stałe referencje do komponentów `motion` — tworzone raz, na poziomie modułu.
 * Typ zawężamy do `React.ElementType`, bo unia `motion.div | motion.li | …`
 * ma niekompatybilne sygnatury propsów; wejście walidujemy przez `RevealProps`.
 */
const MOTION_TAGS: Record<Tag, React.ElementType> = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  ul: motion.ul,
  ol: motion.ol,
  dl: motion.dl,
  article: motion.article,
  span: motion.span,
};

/**
 * Pojedyncze wejście: delikatne uniesienie + rozjaśnienie.
 * Przy `prefers-reduced-motion` element pojawia się od razu.
 *
 * WAŻNE: stan docelowy (`whileInView` / `variants`) podajemy ZAWSZE, także
 * przy ograniczonym ruchu. `useReducedMotion()` zwraca `false` przy hydratacji
 * i dopiero po zamontowaniu `true`; gdyby stan docelowy znikał razem z tą
 * zmianą, element zostawałby na `opacity: 0` na stałe. Od preferencji zależy
 * wyłącznie `initial` i czas trwania.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as = "div",
  ...props
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      data-reveal=""
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduce ? { duration: 0 } : { duration: 0.7, delay, ease: EASE }
      }
      {...props}
    >
      {children}
    </MotionTag>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Kontener dla list i siatek — dzieci wchodzą kaskadowo. */
export function RevealGroup({
  children,
  className,
  as = "div",
  ...props
}: Omit<RevealProps, "delay" | "y">) {
  const reduce = useReducedMotion();
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      data-reveal=""
      className={cn(className)}
      variants={staggerParent}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
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
 * Nagłówek pojawiający się słowo po słowie.
 * Pełny tekst zostaje w `aria-label`, animowane kopie są ukryte przed czytnikami.
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
  const reduce = useReducedMotion();
  const words = React.useMemo(() => text.split(" "), [text]);

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <motion.span
      className={cn("inline", className)}
      aria-label={text}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
      }}
    >
      {/* Okno maskujące jest o `pb` wyższe od tekstu, żeby overflow-hidden
          nie ucinał ogonków polskich znaków (y, j, ą, ę). Przesunięcie
          startowe musi przekraczać ten zapas — stąd 150%. */}
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="-mb-[0.24em] inline-block overflow-hidden pb-[0.24em] align-bottom"
        >
          <motion.span
            aria-hidden
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
