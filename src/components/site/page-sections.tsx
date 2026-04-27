import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ServiceCards({
  cards,
  images,
  isArabic = false,
}: {
  cards: Array<{ title: string; body: string }>;
  images?: Array<{ src: string; alt: string }>;
  isArabic?: boolean;
}) {
  return (
    <div className={cn("services-premium-grid", isArabic && "services-premium-grid--rtl")}>
      {cards.map((card, index) => {
        const image = images?.[index];

        return (
          <Card
            key={card.title}
            className={cn(
              "services-premium-card group relative h-full overflow-hidden bg-card reveal-up",
              `services-premium-card--${(index % 6) + 1}`,
            )}
          >
            {image ? (
              <div className="services-premium-media relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="services-premium-media-image h-full w-full object-cover"
                  loading="lazy"
                  width={1600}
                  height={1024}
                />
                <div className="services-premium-media-overlay" aria-hidden="true" />
              </div>
            ) : null}

            <CardHeader className="services-premium-header space-y-4 pb-4">
              <div className="flex items-center justify-between gap-3">
                <span className="services-premium-index inline-flex h-11 min-w-11 items-center justify-center px-2 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="services-premium-rule h-px w-10" aria-hidden="true" />
              </div>
              <CardTitle className="services-premium-title text-xl leading-snug text-primary">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="services-premium-content">
              <p className="services-premium-body text-sm leading-7 text-muted-foreground">{card.body}</p>
              <span className="services-premium-foot-line mt-6 block h-px w-12" aria-hidden="true" />
            </CardContent>

            <span className="services-premium-corner" aria-hidden="true" />
          </Card>
        );
      })}
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3.5 text-sm leading-7 text-foreground md:text-base">
          <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaActions({
  primary,
  secondary,
  isArabic,
}: {
  primary: ReactNode;
  secondary?: ReactNode;
  isArabic: boolean;
}) {
  return (
    <div className={`mt-8 flex flex-wrap gap-3 ${isArabic ? "justify-start" : "justify-start"}`}>
      {primary}
      {secondary}
    </div>
  );
}

export function ProcessTimeline({
  items,
  isArabic = false,
  highlightIndices = [],
}: {
  items: Array<{ title: string; body: string }>;
  isArabic?: boolean;
  highlightIndices?: number[];
}) {
  return (
    <ol className="process-timeline-grid">
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            "process-timeline-step",
            highlightIndices.includes(index) && "process-timeline-step--featured",
          )}
        >
          <p className="process-timeline-chip inline-flex w-fit">
            {isArabic ? `الخطوة ${index + 1}` : `Step ${index + 1}`}
          </p>
          <h3 className="process-timeline-title mt-3 text-base font-semibold leading-snug text-primary">{item.title}</h3>
          <p className="process-timeline-body mt-2 text-sm leading-7 text-foreground/80">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}

