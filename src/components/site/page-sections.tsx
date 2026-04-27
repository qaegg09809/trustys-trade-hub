import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => {
        const image = images?.[index];

        return (
          <Card
            key={card.title}
            className="premium-card group relative h-full overflow-hidden bg-card"
          >
            {image ? (
              <div className="relative h-40 overflow-hidden border-b border-primary/12">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" width={1600} height={1024} />
                <div className="absolute inset-0 bg-primary/12" aria-hidden="true" />
              </div>
            ) : null}

            <CardHeader className="space-y-4 pb-4">
              <div className={`flex items-center ${isArabic ? "justify-between" : "justify-between"}`}>
                <span className="inline-flex h-11 min-w-11 items-center justify-center border border-primary/18 px-2 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-10 bg-accent" aria-hidden="true" />
              </div>
              <CardTitle className="text-xl leading-snug text-primary">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-7 text-muted-foreground">{card.body}</p>
            </CardContent>
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/45"
              aria-hidden="true"
            />
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

export function PartnerForm({
  title,
  intro,
  fields,
}: {
  title: string;
  intro: string;
  fields: {
    name: string;
    company: string;
    country: string;
    businessType: string;
    phone: string;
    email: string;
    message: string;
    submit: string;
  };
}) {
  return (
    <Card className="premium-card border-[var(--line-strong)] shadow-[var(--shadow-strong)]">
      <CardContent className="pt-6">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{intro}</p>
        <form className="mt-6 grid gap-5 md:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="partner-name">{fields.name}</Label>
            <Input id="partner-name" placeholder={fields.name} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="partner-company">{fields.company}</Label>
            <Input id="partner-company" placeholder={fields.company} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="partner-country">{fields.country}</Label>
            <Input id="partner-country" placeholder={fields.country} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="partner-business-type">{fields.businessType}</Label>
            <Input id="partner-business-type" placeholder={fields.businessType} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="partner-phone">{fields.phone}</Label>
            <Input id="partner-phone" placeholder={fields.phone} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="partner-email">{fields.email}</Label>
            <Input id="partner-email" type="email" placeholder={fields.email} required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="partner-message">{fields.message}</Label>
            <textarea
              id="partner-message"
              rows={5}
              required
              className="w-full rounded-sm border border-input bg-background p-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus-visible:border-primary/52 focus-visible:ring-0 focus-visible:shadow-[var(--shadow-focus)]"
              placeholder={fields.message}
            />
          </div>
          <div className="md:col-span-2">
            <Button type="submit">{fields.submit}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
