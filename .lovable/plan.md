1) Recalibrate the visual system to remove eye strain and enforce brand harmony
- Update `src/styles.css` tokens so light surfaces are less stark white and more brand-tinted (cool blue-gray surfaces based on `#264086` / `#1D71B8`).
- Introduce clearer section layering tokens (e.g., branded soft/dark surface levels, stronger separator lines, and balanced text contrast) so sections feel cohesive instead of disconnected blocks.
- Refine premium utility classes (`.section-shell-premium`, `.premium-card`, `.operating-stage`) to keep depth while avoiding washed-out backgrounds.

2) Fix the exact inconsistency visible in your screenshot (Operating Model + Why Yansab transition)
- Redesign the transition zone between the blue “Operating model” block and “Why Yansab” so it no longer looks like a large white slab.
- Convert “Why Yansab” into a branded premium band (brand-tinted background + subtle gradient/overlay), with cards that match the section above in tone, border, and shadow language.
- Add a visual bridge element (divider/overlay geometry) so both sections read as one intentional, high-end composition.

3) Apply the “two-image premium composition” on the homepage (top + bottom) in a brand-safe way
- Use two curated existing Yansab visuals from `src/assets` (one for the upper premium block, one for the lower companion block), each with controlled blue overlay and contrast tuning.
- Ensure both images use the same treatment system (overlay intensity, border, shadow, crop rules) so they feel from one art direction, not mixed styles.
- Keep text readability and bilingual layout quality (Arabic/English) across both image-backed sections.

4) Full buttons audit (all buttons, all variants)
- Re-tune `src/components/ui/button.tsx` variants (`default`, `outline`, `secondary`, `ghost`, `link`) so all buttons carry the same premium branding DNA.
- Standardize hover/active/focus depth and contrast so no button feels muted, generic, or off-brand.
- Validate CTA prominence in header, hero, section CTAs, mobile drawer, and forms.

5) Full section audit across routes for consistency
- Audit and align all major route sections (`index`, `about`, `services`, `capabilities`, `governance`, `partnerships`, `brands`, `contact`) to the same premium surface rhythm.
- Replace any overly bright/flat backgrounds with branded surface levels.
- Harmonize card styling, spacing rhythm, heading contrast, and divider behavior so every page feels like one coherent enterprise-grade system.

6) Implementation validation and quality check
- Build and run a visual pass for both `?lang=en` and `?lang=ar` at desktop and mobile breakpoints.
- Verify the exact zones you highlighted are fixed (no harsh white glare, no disconnected sections, premium continuity preserved).
- Final check: every button + every section adheres to brand palette and professional high-end finish.

Technical details
- Files to update:
  - `src/styles.css`
  - `src/components/ui/button.tsx`
  - `src/routes/index.tsx`
  - `src/components/site/page-sections.tsx`
  - Route files needing surface harmonization (`src/routes/about.tsx`, `services.tsx`, `capabilities.tsx`, `governance.tsx`, `partnerships.tsx`, `brands.tsx`, `contact.tsx`) as needed.
- No route architecture changes; this is a premium visual-system and composition refinement within the existing TanStack Start structure.