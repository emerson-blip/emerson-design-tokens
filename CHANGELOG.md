# Changelog

All notable changes to Emerson Design Tokens.

---

## [2.0.0] - 2024-12-23

### 📄 Specimens Added
- **emerson-specimen-complete.html** — Volledige brand showcase met R.W. Emerson teksten
- **typography-specimen.html** — Gedetailleerde typografie referentie met alle stijlen
- **specimen.html** — Compacte kleur- en token referentie (updated for v2.0)

### 🎨 Color Architecture Redesign

**BREAKING CHANGES:**
- **Removed:** `clay` (#b8886e) — no longer part of color system
- **Changed:** Core now contains only Orange + Charcoal
- **Changed:** ALL text (headings + body) now uses Charcoal
- **Added:** New "Brand Support" layer with 3 colors

**New Color Structure (4 layers):**

| Layer | Colors | Usage |
|-------|--------|-------|
| 1. Core | Orange, Charcoal | Sacred signature + all text |
| 2. Brand Support | Tobacco, Slate Bronze, Oxblood | Brand-level accents only |
| 3. Taupe Foundation | 5 shades (50-700) | Backgrounds, borders |
| 4. Flexible Toolkits | Retro Warmth (8) + Soft Palette (8) | Workshops, frameworks |

**New Brand Support Colors:**
- `tobacco` (#9a7b4f) — Warm, vintage, gold-tint
- `slate-bronze` (#7a6d5d) — Cool, architectural, Swiss precision
- `oxblood` (#6b3a3a) — Bold, punk, memorable

**Token Structure:**
- Reorganized into nested groups: `color.core`, `color.brand`, `color.taupe`, etc.
- Added descriptions to color tokens
- Added semantic accent tokens for brand colors

**Typography Updates:**
- Font: Lora replaced with IBM Plex Sans
- All headings now use Charcoal (was Clay)
- Updated type scale with larger hero size (72px)

**Philosophy Update:**
- Charcoal now handles ALL text (headings + body)
- Brand support colors reserved for brand-level design only
- Toolkit colors remain for workshops and flexible applications

---

## [1.0.0] - 2024-12-14

### ✨ Initial Release

**Design System:**
- 27 colors across 4 layers (Core, Taupe, Support, 2x Toolkit)
- Complete typography system (Work Sans + Lora)
- Spacing grid (4px base, 12 steps)
- Box shadows (4 variants)
- Semantic token layer

**Token Sets (9 total):**
- `core` - 3 sacred brand colors
- `taupe` - 5 warm foundation colors
- `support` - 4 flexibility colors
- `toolkit-retro` - 8 warm workshop colors
- `toolkit-soft` - 8 soft workshop colors
- `typography` - Complete type system
- `spacing` - Grid, radius, borders
- `shadows` - Box shadow variants
- `semantic` - High-level tokens (most used)

**Themes (3 pre-configured):**
- Emerson Default - Corporate work
- Emerson Workshop Warm - Retro palette
- Emerson Workshop Soft - Soft palette

**Philosophy:**
- Spaarzaam = Krachtig (Orange max 1-2x per page)
- Clay as primary workhorse color
- Charcoal for ALL body text
- Taupe for warmth

**Technical:**
- Single `tokens.json` file (GitHub sync compatible)
- W3C Design Tokens format
- Modular token sets
- Semantic layer for easy adoption

---

## Future Roadmap

### v2.1 (Planned)
- [ ] Semantic mapping for brand support colors (when to use which)
- [ ] Component tokens (button sizes, input styles)
- [ ] Dark mode support

### v2.2 (Planned)
- [ ] Animation tokens (duration, easing)
- [ ] Icon system integration
- [ ] Alchemical framework symbols

---

**Versioning:**
We follow [Semantic Versioning](https://semver.org/):
- MAJOR: Breaking changes (like removing clay)
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)
