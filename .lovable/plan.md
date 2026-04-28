## Goal
Apply Title Case to all main English section headings across the site (as shown in the reference: "Our Operating Model" instead of "Our operating model"). Arabic content stays unchanged.

## Scope
Only edit English headings in `src/components/site/content.ts`. Arabic remains as-is. No layout/style changes.

## Title Case Rule
Capitalize the first letter of every word except short connectors (a, an, the, and, or, but, of, in, on, at, to, for, with, by). Always capitalize first and last word.

## Changes (English only — `src/components/site/content.ts`)

**Home section:**
- `heroTitle`: "A trading company built on trust, discipline, and long-term value." → "A Trading Company Built on Trust, Discipline, and Long-Term Value."
- `introTitle`: "Built to move with the market." → "Built to Move with the Market."
- `scopeTitle`: "What we do" → "What We Do"
- `scopeCta`: "View all services" → "View All Services"
- `operatingModelTitle`: "Our operating model" → "Our Operating Model"
- `whyTitle`: "Why Yansab" → keep (already correct)
- `partnershipTitle`: "Partnerships built with care, transparency, and continuity." → "Partnerships Built with Care, Transparency, and Continuity."
- `governanceTitle`: "Clear foundations that reduce execution risk." → "Clear Foundations That Reduce Execution Risk."
- `brandsTitle`: "Brands & business lines" → "Brands & Business Lines"
- `finalCtaTitle`: "Let's build the next commercial move with clarity." → "Let's Build the Next Commercial Move with Clarity."

**About section:**
- `pageTitle`: "About Yansab" → keep
- `founderTitle`: "Founder's Message" → keep
- `visionTitle`/`missionTitle`/`valuesTitle`: keep (single words)

**Services:**
- `pageTitle`: "Services" → keep

**Capabilities:**
- `pageTitle`: "Sectors & Commercial Capabilities" → keep (already Title Case)

**Governance:**
- `pageTitle`: "Governance & Compliance" → keep

**Partnerships:**
- `pageTitle`: "Distribution & Partnerships" → keep
- `whyPartnerTitle`: "Why partner with Yansab?" → "Why Partner with Yansab?"
- `journeyTitle`: "Partner journey" → "Partner Journey"
- `partnerFormTitle`: "Become a Partner" → keep

**Brands:**
- `pageTitle`: "Brands & Business Lines" → keep

**Contact:**
- `pageTitle`: "Start the conversation" → "Start the Conversation"

## Out of Scope
- Body text, paragraphs, bullet items, list content (only headings/titles)
- Arabic strings (Arabic doesn't have letter case)
- Form field labels and small UI text
- Visual styling, layout, components

## Verification
After edits, scan English `home`, `about`, `services`, `partnerships`, `contact` for any title-like field still in sentence case and confirm headings render in Title Case across the live preview.
