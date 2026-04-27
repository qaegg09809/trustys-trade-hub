export type SiteLanguage = "en" | "ar";

export function normalizeLanguage(value: unknown): SiteLanguage {
  return value === "ar" ? "ar" : "en";
}

export function isArabic(value: unknown): boolean {
  return normalizeLanguage(value) === "ar";
}
