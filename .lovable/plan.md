## Goal
Make the two prominent CTA buttons on the home page use the brand **orange (#F3961B / `accent`)** background instead of their current blue/dark style — keeping all other styling, spacing, sizing, and text unchanged.

## Affected buttons
Both live in `src/routes/index.tsx` on the dark-blue hero strips visible in your screenshots:

1. **"Become a Partner"** — partnerships strip on the home page (line ~362), text comes from `t.ctaSecondary`.
2. **"Start the Conversation"** — final CTA section on the home page (line ~381), text comes from `t.home.finalCtaButton`.

No other "Become a Partner" / "Start the Conversation" buttons elsewhere will be touched in this change (the partnerships page CTA and the contact page heading remain as-is, since the screenshots and request refer to these home hero buttons).

## Visual design
- Background: `bg-accent` (#F3961B — brand orange)
- Text color: `text-accent-foreground` (white) — for strong contrast on orange
- Border: `border-accent` (matches background, clean edge)
- Hover: slight darken via `hover:bg-accent/90` and `hover:border-accent/90`
- Keep existing height (`h-12`), min-width, padding, font weight, rounded-full shape, and shadow tokens already used by `<Button>`.
- No gradients, no glow — strictly flat brand orange per brand rules.

## Implementation
In `src/routes/index.tsx`, append the orange override classes to the two buttons' `className`:

- Line 362 button:
  `className="mt-7 h-12 min-w-40 px-7 font-semibold bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:border-accent/90 hover:text-accent-foreground"`

- Line 381 button:
  `className="mt-6 h-12 min-w-44 px-8 font-semibold bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:border-accent/90 hover:text-accent-foreground"`

That's it — pure styling change, no markup, no copy, no layout changes.

## Out of scope
- Header/nav "Contact Us" button (stays primary blue — primary nav action).
- Partnerships page "Become a Partner" button at the bottom (separate context).
- Any Arabic text or button labels.

## Verification
After the change, on `/?lang=en` and `/?lang=ar`:
- The "Become a Partner" button on the partnership strip renders solid orange with white text.
- The "Start the Conversation" button on the final CTA renders solid orange with white text.
- Hover slightly darkens the orange; focus ring still visible.
