## Goal
Make sure **every colored (filled) button on the site shows white text**, per the new rule: any button with a brand color background → white inner text.

## Root cause found
In `src/styles.css`, the design token `--accent-foreground` (text color used on orange `bg-accent` buttons) is set to dark navy `#111827` instead of white. That's why the two orange CTAs ("Become a Partner", "Start the Conversation") rendered with dark text earlier even though we passed `text-accent-foreground`.

`--primary-foreground` and `--secondary-foreground` are already `#ffffff`, so blue/secondary buttons are already correct.

## Change (single token fix — global effect)
Update both light and dark theme definitions in `src/styles.css`:

- Line 51 (`:root`):
  `--accent-foreground: #111827;` → `--accent-foreground: #ffffff;`
- Line 110 (`.dark`):
  `--accent-foreground: oklch(0.24 0.03 258);` → `--accent-foreground: #ffffff;`

Because every "orange" button (and any future `bg-accent` element) reads its text color from this token, this single change automatically makes ALL colored brand-orange buttons display white text — including the two we styled in the previous turn, plus any future ones.

## Why this is the right approach
- One semantic token change instead of editing button-by-button.
- Keeps the design system consistent (the rule "colored buttons = white text" lives in tokens, not scattered across components).
- No layout, sizing, copy, or component-API change.

## Verification
After the change, on `/?lang=en` and `/?lang=ar`:
- "Become a Partner" (home partnership strip) → orange background, **white text**.
- "Start the Conversation" (home final CTA) → orange background, **white text**.
- Existing blue primary buttons (header "Contact Us", etc.) remain unchanged (already white text).
- No accessibility regression: white on `#F3961B` orange has sufficient contrast for button-sized bold text.

## Memory
Save a project rule: "All filled/colored brand buttons (primary, secondary, accent/orange) must use white text inside. Enforced via `--*-foreground` tokens in `src/styles.css`."
