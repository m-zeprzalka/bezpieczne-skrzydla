import { Award, Check, Clock, Package, Play, Users } from "lucide-react";

import { IconTile } from "@/components/system/icon-tile";
import { RevealGroup, RevealItem } from "@/components/system/reveal";
import { courseFormat } from "@/content/trainings";
import { cn } from "@/lib/utils";

const icons = {
  play: Play,
  clock: Clock,
  check: Check,
  award: Award,
  package: Package,
  users: Users,
} as const;

/** Sześć faktów o formacie kursu — siatka lub zwarta lista (`variant="list"`). */
export function CourseFormat({
  variant = "grid",
  className,
  limit,
}: {
  variant?: "grid" | "list";
  className?: string;
  limit?: number;
}) {
  const items = limit ? courseFormat.slice(0, limit) : courseFormat;

  if (variant === "list") {
    return (
      <ul className={cn("flex flex-col gap-4", className)}>
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title} className="flex items-start gap-3.5">
              <IconTile size="sm" tone="tint">
                <Icon aria-hidden />
              </IconTile>
              <span className="flex flex-col">
                <span className="text-[0.9375rem] font-semibold text-ink">{item.title}</span>
                <span className="text-caption text-ink-muted">{item.text}</span>
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <RevealGroup as="ul" className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => {
        const Icon = icons[item.icon];
        return (
          <RevealItem as="li" key={item.title} className="flex gap-4 rounded-card border border-brand-200/80 bg-white p-5">
            <IconTile tone="tint">
              <Icon aria-hidden />
            </IconTile>
            <span className="flex flex-col gap-1">
              <span className="text-[1rem] font-semibold text-ink">{item.title}</span>
              <span className="text-small text-ink-muted">{item.text}</span>
            </span>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
