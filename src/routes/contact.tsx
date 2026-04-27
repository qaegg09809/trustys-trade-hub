import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { getContent } from "@/components/site/content";
import { ContactForm } from "@/components/site/page-sections";
import { SiteLayout, SectionShell, SectionTitle } from "@/components/site/site-layout";
import { useSiteLanguage } from "@/components/site/use-site-language";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Yansab General Trading L.L.C" },
      {
        name: "description",
        content:
          "Contact Yansab for partnerships, supplier opportunities, distribution discussions, and general commercial inquiries.",
      },
      { property: "og:title", content: "Contact | Yansab General Trading L.L.C" },
      {
        property: "og:description",
        content:
          "Start the conversation with Yansab for disciplined and professional commercial execution support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const language = useSiteLanguage();
  const t = getContent(language);
  const isArabic = language === "ar";

  const contactRows = [
    `${isArabic ? "الهاتف" : "Phone"}: ${t.missingLabel}`,
    `${isArabic ? "البريد الإلكتروني" : "Email"}: ${t.missingLabel}`,
    `${isArabic ? "العنوان" : "Address"}: ${t.missingLabel}`,
    `${isArabic ? "منصات التواصل" : "Social Platforms"}: ${t.missingLabel}`,
  ];

  return (
    <SiteLayout language={language}>
      <SectionShell>
        <SectionTitle title={t.contact.pageTitle} subtitle={t.contact.intro} />

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <Card className="border-primary/14 shadow-[var(--shadow-soft)]">
              <CardContent className="space-y-3 pt-6 text-sm">
                {contactRows.map((row, index) => (
                  <p key={row} className={index === 0 ? "font-semibold text-primary" : "text-foreground"}>
                    {row}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <ContactForm fields={t.contact.fields} inquiryOptions={t.contact.inquiryOptions} />
          </div>
        </div>
      </SectionShell>
    </SiteLayout>
  );
}
