# Emerson Agency Design Tokens

Complete design system voor Emerson Agency — **v2.0**

---

## 📄 Specimens

| File | Beschrijving |
|------|--------------|
| `emerson-specimen-complete.html` | **Volledige brand showcase** met R.W. Emerson teksten — typography, colors, components |
| `typography-specimen.html` | Gedetailleerde typografie referentie met alle stijlen |
| `specimen.html` | Compacte kleur- en token referentie |

---

## 🎯 Wat zit erin?

**Eén bestand (`tokens.json`) met:**
- **4 Color Layers** — Hiërarchisch georganiseerd
- **21 Colors** — Core (2), Brand Support (3), Taupe (5), Toolkits (16)
- **Complete Typography** — Work Sans + IBM Plex Sans
- **Spacing System** — 4px grid
- **Shadows** — 4 varianten
- **Semantic Tokens** — High-level tokens voor easy use

---

## 🎨 Color Architecture

### Layer 1: Core Brand (2 colors)
| Token | Hex | Role |
|-------|-----|------|
| `color.core.orange` | #e7602a | **Signature** — Logo, 1 CTA per page, hero moments. NEVER backgrounds. |
| `color.core.charcoal` | #2a2d31 | **Foundation** — ALL text (headings + body) |

### Layer 2: Brand Support (3 colors)
| Token | Hex | Character |
|-------|-----|-----------|
| `color.brand.tobacco` | #9a7b4f | Warm, vintage, gold-tint |
| `color.brand.slate-bronze` | #7a6d5d | Cool, architectural, Swiss precision |
| `color.brand.oxblood` | #6b3a3a | Bold, punk, memorable |

**⚠️ Brand-level accents only — not for workshops or toolkit contexts**

### Layer 3: Taupe Foundation (5 shades)
| Token | Hex | Usage |
|-------|-----|-------|
| `color.taupe.50` | #f7f5f3 | Page backgrounds, cards |
| `color.taupe.100` | #ede8e3 | Hover states, alternating rows |
| `color.taupe.200` | #ddd5cd | Borders, dividers |
| `color.taupe.500` | #9d8b7d | Captions, muted text, icons |
| `color.taupe.700` | #6d5f52 | Secondary text, labels |

### Layer 4: Flexible Toolkits (16 colors)

**Retro Warmth** (8 colors)
```
mustard, rust, olive, teal, burgundy, gold, sage, terracotta
```

**Soft Palette** (8 colors)
```
blush, sky, mint, lavender, peach, seafoam, rose, cream
```

**⚠️ For workshops, frameworks, presentations only — NOT for core brand identity**

---

## 🎯 Design Philosophy

### Spaarzaam = Krachtig

**Orange is SACRED:**
- Max 1-2× per page/document
- NEVER as background
- Signature moments = alchemical transformation

**Charcoal = ALL Text:**
- Headings AND body
- No exceptions
- Stable foundation

**Brand Support Colors:**
- Tobacco, Slate Bronze, Oxblood
- Brand-level design only
- Semantic mapping coming in v2.1

**Taupe = Warmth:**
- Use liberally for backgrounds
- Warm, professional feel
- Not cold or clinical

---

## 💡 Usage: Semantic Tokens

Use semantic tokens instead of direct color references:

```
Text:
{semantic.text.primary}      → Charcoal (all text)
{semantic.text.secondary}    → Taupe-700 (labels)
{semantic.text.muted}        → Taupe-500 (captions)
{semantic.text.signature}    → Orange (sparingly!)

Backgrounds:
{semantic.bg.primary}        → White
{semantic.bg.secondary}      → Taupe-50
{semantic.bg.tertiary}       → Taupe-100

Borders:
{semantic.border.default}    → Taupe-200
{semantic.border.emphasis}   → Taupe-500
{semantic.border.strong}     → Charcoal

Accents:
{semantic.accent.signature}  → Orange
{semantic.accent.warm}       → Tobacco
{semantic.accent.cool}       → Slate Bronze
{semantic.accent.bold}       → Oxblood
```

---

## 🔤 Typography

### Fonts
- **Headings:** Work Sans (Light 300, Regular 400, Medium 500)
- **Body:** IBM Plex Sans (Regular 400, Medium 500)

### Type Scale
```
hero     72px   Work Sans Light
h1       48px   Work Sans Light
h2       36px   Work Sans Light
h3       28px   Work Sans Light
h4       22px   Work Sans Regular
body-lg  20px   IBM Plex Sans Regular
body     17px   IBM Plex Sans Regular
body-sm  15px   IBM Plex Sans Regular
caption  14px   IBM Plex Sans Regular (italic context)
label    12px   Work Sans Medium, UPPERCASE
```

---

## 📐 Spacing

4px base grid:
```
1:  4px     5:  20px    12: 48px
2:  8px     6:  24px    16: 64px
3:  12px    8:  32px    20: 80px
4:  16px    10: 40px    24: 96px
```

---

## 🔄 Migration from v1.0

### Breaking Changes

**Removed:**
- `color.clay` (#b8886e) — Use `color.core.charcoal` for text, or brand support colors for accents

**Changed:**
- Heading color: Was Clay → Now Charcoal
- Token structure: Flat → Nested (`color.core.orange` instead of `color.orange`)
- Body font: Lora → IBM Plex Sans

**Added:**
- `color.brand.tobacco`
- `color.brand.slate-bronze`
- `color.brand.oxblood`
- Semantic accent tokens

### Quick Migration

| Old (v1) | New (v2) |
|----------|----------|
| `{color.clay}` | `{color.core.charcoal}` or `{semantic.accent.warm}` |
| `{color.orange}` | `{color.core.orange}` |
| `{color.charcoal}` | `{color.core.charcoal}` |
| `{color.taupe-50}` | `{color.taupe.50}` |

---

## 🚀 Setup

### 1. Clone or Download

```bash
git clone https://github.com/YOUR-USERNAME/emerson-design-tokens.git
```

### 2. Connect to Figma (Tokens Studio)

1. Open Figma → Tokens Studio plugin
2. Settings → Sync → GitHub
3. Enter:
   - Repository: `YOUR-USERNAME/emerson-design-tokens`
   - Branch: `main`
   - File Path: `tokens.json`
4. Pull tokens

### 3. Use Semantic Tokens

In your designs, reference semantic tokens:
- `{semantic.text.primary}` for text
- `{semantic.bg.secondary}` for backgrounds
- `{semantic.accent.signature}` for CTAs (sparingly!)

---

## 📋 Quick Reference

| Need | Token |
|------|-------|
| Body text | `{semantic.text.primary}` |
| Heading | `{semantic.text.primary}` |
| Page background | `{semantic.bg.secondary}` |
| Card background | `{semantic.bg.tertiary}` |
| Border | `{semantic.border.default}` |
| CTA button | `{semantic.accent.signature}` (max 1!) |
| Warm accent | `{semantic.accent.warm}` |
| Cool accent | `{semantic.accent.cool}` |
| Bold accent | `{semantic.accent.bold}` |

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2024-12-23 | Color architecture redesign, Clay removed, Brand Support layer added, specimens |
| 1.0.0 | 2024-12-14 | Initial release |

---

**Emerson Agency — Bringing Order to Complexity**

*Design Tokens v2.0*
