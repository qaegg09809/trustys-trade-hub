## Goal
Polish the Somitta brand card on the Brands page (and matching home brands grid) with three changes:

1. Display the brand name in **ALL CAPS** ("SOMITTA") to match the logo lockup.
2. Add an **"Explore" CTA button** at the bottom of the Somitta card, styled in **brand orange** with white text (matches our colored-button rule). Links out to https://www.somitta.com/.
3. Add proper **Arabic** name and tagline:
   - Name: `سـوميتـا`
   - Tagline: `أستشعر الحس السوداني`

The "Additional brand line" card stays unchanged (no Explore button — no website yet).

## Changes

### 1. `src/components/site/content.ts`

**English Somitta card (line ~363):**
- `name: "Somitta"` → `name: "SOMITTA"`
- Add `cta: "Explore"` field

**Arabic Somitta card (line ~579):**
- `name: "Somitta"` → `name: "سـوميتـا"`
- `tagline: "Feel The Sudanese Sense"` → `tagline: "أستشعر الحس السوداني"`
- Add `cta: "استكشف"` field

**Type update (line ~76 area, brands type):**
- Add optional `cta?: string` to the brand card type.

### 2. `src/routes/brands.tsx`

In the brand card render (currently ends after the `positioning` paragraph), add — only when both `brand.cta` and `brand.website` exist — an orange CTA button below the description:

```tsx
{brand.cta && brand.website ? (
  <div className="mt-6">
    <Button
      asChild
      className="h-11 min-w-32 px-6 font-semibold bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:border-accent/90 hover:text-accent-foreground"
    >
      <a href={brand.website} target="_blank" rel="noopener noreferrer">
        {brand.cta}
      </a>
    </Button>
  </div>
) : null}
```

This automatically shows the orange "Explore" button on the Somitta card and skips it on the "Additional brand line" placeholder.

## Why this is right
- Matches the user's circled requests in both screenshots (capitalized name + orange Explore button).
- Reuses the same orange-button style we standardized in the previous turn (white text via `--accent-foreground` token).
- Arabic content correctly localized; the brand name "سـوميتـا" uses the spaced/stretched form the user requested.
- No layout, no logo, no other style changes.

## Verification
- `/brands?lang=en` → Somitta card shows: logo, name in ALL CAPS as "SOMITTA", orange tagline, category, description, then orange "Explore" button bottom-left (RTL: bottom-right). Clicking opens somitta.com in a new tab.
- `/brands?lang=ar` → same structure, name reads "سـوميتـا", tagline "أستشعر الحس السوداني", button label "استكشف".
- "Additional brand line" card unchanged (no button).
