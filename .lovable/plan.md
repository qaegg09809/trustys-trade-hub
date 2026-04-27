1) Define the premium visual direction for the Operating Model section (brand-safe)
- Keep existing YANSAB identity intact (colors, typography, logo, tone).
- Apply a modern “layered enterprise” background treatment behind the section:
  - Base image layer (business/operations style, desaturated + brand-tinted)
  - Soft gradient overlay using existing semantic tokens
  - Subtle noise/texture and depth shadows for high-end finish
- Ensure readability first: timeline and content panel remain clear over the background at all breakpoints.

2) Add high-quality background image workflow (two safe implementation paths)
- Path A (fast): use an existing project asset that best matches the section’s strategic tone.
- Path B (premium custom): generate a bespoke AI background aligned to YANSAB’s brand atmosphere (professional corporate, minimal clutter), then optimize and add as project asset.
- Build CSS so image can be swapped without touching component structure.

3) Refine Operating Model layout to feel more executive-grade
- Keep split structure (timeline left, detail panel right), but elevate spacing and rhythm:
  - Stronger vertical navigation rail
  - Cleaner step card alignment and spacing cadence
  - Sharper active state hierarchy (number/title/indicator)
- Enhance detail panel with improved visual hierarchy and premium surface treatment:
  - Icon → step number → title → description clarity
  - Better breathing room, refined border/shadow stack
  - More deliberate left/right proportioning and alignment

4) Upgrade interactions and polish micro-motion
- Keep hover/click update behavior, but make transitions smoother and more intentional:
  - Panel content fade/slide with calibrated timing
  - Active-state transitions on timeline without jitter
  - Optional subtle directional cue from active step to panel (clean, understated)
- Respect reduced-motion preferences and keyboard accessibility.

5) Responsive and quality hardening
- Tune section for desktop/tablet/mobile so background and content never look crowded.
- Verify contrast, spacing consistency, and visual balance in both LTR/RTL states.
- Validate no overlap, clipping, or visual noise; keep enterprise-clean appearance.

6) Final implementation QA pass
- Review final section against your request: “very high quality, organized, very professional, modern.”
- Confirm strict brand consistency and no off-brand colors.
- Run build validation and deliver a concise changelog with what was upgraded.

Technical details (implementation scope)
- Files to update:
  - src/routes/index.tsx (Operating Model section structure/layers only)
  - src/styles.css (token-driven background layers, spacing system, interaction polish)
- Approach:
  - Use semantic design tokens only (no arbitrary hardcoded UI colors in component classes)
  - Add reusable CSS classes for background layer + overlay + panel elevation
  - Keep existing dynamic step logic; refine only presentation and transition quality
- Optional artifact step (if AI background chosen):
  - Generate 1–2 background candidates, pick best fit, optimize, then integrate as asset.