# Emerson Agency Design Tokens

Complete design system voor Emerson Agency met **GitHub sync** voor Tokens Studio.

---

## 🎯 Wat zit erin?

**Eén bestand (`tokens.json`) met:**
- **9 Token Sets** - Modulair georganiseerd
- **3 Themes** - Pre-configured voor verschillende gebruik
- **27 Colors** - Core, Taupe, Support + 2 Toolkits
- **Complete Typography** - Work Sans + Lora
- **Spacing System** - 4px grid
- **Shadows** - 4 varianten
- **Semantic Tokens** - High-level tokens voor easy use

---

## 🚀 Setup (5 minuten)

### Stap 1: Upload naar GitHub

**Optie A: Via GitHub Website**
1. Ga naar https://github.com/new
2. Repository name: `emerson-design-tokens`
3. Klik "Create repository"
4. Upload `tokens.json` file

**Optie B: Via Command Line**
```bash
cd emerson-design-tokens
git init
git add tokens.json
git commit -m "Initial design tokens"
git remote add origin https://github.com/JOUW-USERNAME/emerson-design-tokens.git
git push -u origin main
```

---

### Stap 2: GitHub Personal Access Token

1. Ga naar https://github.com/settings/tokens
2. Klik "Generate new token (classic)"
3. Token name: `Figma Tokens Studio`
4. Scopes: **✅ repo** (all repo permissions)
5. Generate token
6. **Copy token** (je ziet hem maar 1x!)

---

### Stap 3: Connect Figma Tokens Studio

1. **Open Figma** → Open je design file
2. **Open Tokens Studio** plugin (Plugins → Tokens Studio)
3. Klik **Settings** (⚙️ icoon rechtsboven)
4. Klik **"Sync"** tab
5. Kies **"GitHub"** als sync provider

**Vul in:**
```
Personal Access Token:  [plak je GitHub token]
Repository:             JOUW-USERNAME/emerson-design-tokens
Branch:                 main
File Path:              tokens.json
```

6. Klik **"Save"**
7. Tokens Studio test de connectie → Groene ✅ = success!

---

### Stap 4: Pull Tokens

1. In Tokens Studio: Klik **"Pull from GitHub"**
2. Plugin download tokens.json
3. Je ziet nu **9 token sets** verschijnen! 🎉

---

### Stap 5: Activeer Theme

1. Klik op **"Themes"** tab in plugin
2. Select **"Emerson Default"**
3. Tokens zijn nu actief! ✅

---

## 🎨 Token Sets (9 total)

### 1. **core** (3 colors)
```
orange    #e7602a   Logo, signature moments ONLY
clay      #b8886e   PRIMARY WORKHORSE - headers, accents
charcoal  #2a2d31   All body text, foundation
```

### 2. **taupe** (5 colors)
```
50    #f7f5f3   Primary background (warm white)
100   #ede8e3   Card surfaces
200   #ddd5cd   Borders, dividers
500   #9d8b7d   Labels, tertiary
700   #6d5f52   Text on taupe
```

### 3. **support** (4 colors)
```
deep-clay      #9a6f58   Darker clay
burnt-sienna   #c87654   Warm alternative
sage           #8a9b7e   Calm, balance
steel-blue     #6b7d8f   Cool, technical
```

### 4. **toolkit-retro** (8 colors) - Workshop warm
```
rust        terracotta   amber      gold
olive       forest       teal       slate
```

### 5. **toolkit-soft** (8 colors) - Workshop soft
```
coral       peach        apricot    sand
mint        seafoam      sky        periwinkle
```

### 6. **typography**
```
Fonts:          Work Sans (heading) + Lora (body)
Weights:        300, 400, 500, 600, 700
Sizes:          h1 (42) → label (12)
Line heights:   tight, snug, normal, relaxed
Letter spacing: tight, normal, wide
```

### 7. **spacing**
```
Spacing:   4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96
Radius:    sm, md, lg, xl, 2xl, full
Borders:   thin, medium, thick
```

### 8. **shadows**
```
sm   Subtle lift
md   Cards (default)
lg   Dropdowns, modals
xl   Floating elements
```

### 9. **semantic** ⭐ **GEBRUIK DEZE!**
```
Text:       primary, secondary, heading, heading-signature
Background: primary, secondary, surface, accent
Border:     default, emphasis, strong
Button:     primary, signature, secondary, tertiary
Status:     success, warning, error, info
```

---

## 🎭 Themes (3 pre-configured)

### 1. Emerson Default
**Voor:** Corporate work, presentations, documents

**Actief:**
```
✅ core, taupe, support
✅ typography, spacing, shadows
✅ semantic
❌ toolkit-retro (disabled)
❌ toolkit-soft (disabled)
```

### 2. Emerson Workshop Warm
**Voor:** Workshops met warm/retro vibe

**Actief:**
```
✅ Everything from Default
✅ toolkit-retro (enabled)
❌ toolkit-soft (disabled)
```

### 3. Emerson Workshop Soft
**Voor:** Workshops met soft/calm vibe

**Actif:**
```
✅ Everything from Default
❌ toolkit-retro (disabled)
✅ toolkit-soft (enabled)
```

**Switch theme in 1 click!** Geen handmatig sets aan/uit zetten.

---

## 💡 Gebruik in Figma

### Semantic Tokens (GEBRUIK DEZE!)

In plaats van `{core.charcoal}` → gebruik `{text.primary}`

**Waarom?**
- ✅ Flexibel: Je kunt kleur centraal wijzigen
- ✅ Semantisch: Duidelijk wat het betekent
- ✅ Consistent: Team gebruikt dezelfde tokens

**Voorbeelden:**
```
Text op witte achtergrond:
{text.primary}              → Charcoal (body text)
{text.heading}              → Clay (standard heading)
{text.heading-signature}    → Orange (hero - spaarzaam!)

Backgrounds:
{bg.primary}                → White
{bg.secondary}              → Taupe-50 (USE LIBERALLY!)
{bg.surface}                → Taupe-100 (cards)

Buttons:
{button.primary.bg}         → Clay
{button.signature.bg}       → Orange (max 1 per page!)
{button.secondary.border}   → Taupe-200

Spacing:
{spacing.spacing.4}         → 16px (standard padding)
{spacing.spacing.6}         → 24px (card padding)
{spacing.radius.lg}         → 8px (button radius)
```

---

## 🎨 Design Philosophy

### Spaarzaam = Krachtig

**Orange is SACRED:**
- Max 1-2x per page
- NEVER backgrounds
- Signature moments only

**Clay is WORKHORSE:**
- Primary heading color
- Use generously for accents
- Warm, professional

**Charcoal = Body Text:**
- ALL body text
- No exceptions
- Never orange in body!

**Taupe = Warmth:**
- Liberal use for backgrounds
- Creates warm, welcoming feel
- Professional maar niet koud

---

## 🔄 Workflow: Updates

### Team Member wijzigt tokens in GitHub:

1. Edit `tokens.json` in GitHub (web interface)
2. Commit changes
3. **Jij in Figma:** Click "Pull from GitHub"
4. Tokens update! ✅

### Jij wijzigt tokens in Figma:

1. Edit in Tokens Studio plugin
2. Click **"Push to GitHub"**
3. GitHub updates
4. **Team:** Click "Pull from GitHub"
5. Everyone in sync! 🎉

---

## 👥 Team Collaboration

### Setup voor team members:

1. **Install** Tokens Studio plugin in Figma
2. **Connect** same GitHub repo (read-only ok)
   - Settings → Sync → GitHub
   - Enter GitHub token
   - Repository: `JOUW-USERNAME/emerson-design-tokens`
   - File Path: `tokens.json`
3. **Pull tokens** from GitHub
4. **Select theme** (Emerson Default / Workshop Warm / Workshop Soft)
5. ✅ Everyone heeft dezelfde tokens!

---

## 🔧 Advanced: Branching

### Test nieuwe tokens in feature branch:

```bash
# In GitHub:
1. Create branch: feature/new-colors

# In Tokens Studio:
2. Change "Branch" to: feature/new-colors
3. Edit tokens
4. Push to GitHub

# Test in Figma:
5. Team kan feature branch pullen om te testen

# Merge to main:
6. Create Pull Request on GitHub
7. Review → Merge
8. Everyone switch back to "main" branch
9. Pull from GitHub → Updates live! ✅
```

---

## 📋 Quick Reference

### Meest gebruikte semantic tokens:

| Token | → | Waarde | Gebruik |
|-------|---|--------|---------|
| `{text.primary}` | → | Charcoal | Alle body text |
| `{text.heading}` | → | Clay | Standard headings |
| `{text.heading-signature}` | → | Orange | Hero (max 1-2x!) |
| `{bg.secondary}` | → | Taupe-50 | Warm backgrounds |
| `{button.primary.bg}` | → | Clay | Primary buttons |
| `{button.signature.bg}` | → | Orange | CTA (max 1x!) |
| `{spacing.spacing.4}` | → | 16px | Standard padding |
| `{spacing.spacing.6}` | → | 24px | Card padding |
| `{spacing.radius.lg}` | → | 8px | Button radius |
| `{shadows.shadow.md}` | → | ... | Card shadow |

---

## 🆘 Troubleshooting

**Problem:** "Pull from GitHub" werkt niet
→ **Fix:** Check GitHub token permissions (needs `repo` scope)

**Problem:** Tokens niet showing in Figma
→ **Fix:** Check File Path = `tokens.json` (not `tokens` folder)

**Problem:** Changes niet syncing
→ **Fix:** Check je bent op juiste branch (`main`)

**Problem:** Semantic tokens niet resolving
→ **Fix:** Make sure theme is active (not just sets)

**Problem:** Token references tonen `{core.charcoal}` instead of color
→ **Fix:** Activate theme in "Themes" tab, niet alleen sets

---

## 📝 Tips & Tricks

### ✅ DO:
- Use semantic tokens (`{text.primary}`)
- Pull often to stay in sync
- Use themes to switch context (corporate vs workshop)
- Document changes in commit messages
- Test in feature branch voor grote changes

### ❌ DON'T:
- Use base tokens directly (gebruik semantic layer)
- Forget to pull before editing
- Edit tokens.json manually (use plugin)
- Mix themes (choose one per design)
- Use orange for backgrounds (NEVER!)

---

## 📦 Single File Structure

Het `tokens.json` bestand bevat alles, maar Tokens Studio splitst het intern:

```json
{
  "core": { ... },           ← Token Set 1
  "taupe": { ... },          ← Token Set 2
  "support": { ... },        ← Token Set 3
  "toolkit-retro": { ... },  ← Token Set 4
  "toolkit-soft": { ... },   ← Token Set 5
  "typography": { ... },     ← Token Set 6
  "spacing": { ... },        ← Token Set 7
  "shadows": { ... },        ← Token Set 8
  "semantic": { ... },       ← Token Set 9
  "$themes": [ ... ],        ← Theme definitions
  "$metadata": { ... }       ← Set order
}
```

**Eén bestand → GitHub sync compatible ✅**

---

## 🎯 Version History

**v1.0.0** - December 14, 2024
- Initial release
- 27 colors (Core, Taupe, Support, 2x Toolkit)
- Complete typography (Work Sans + Lora)
- Spacing grid (4px base)
- 3 pre-configured themes
- GitHub sync ready

---

## 📞 Need Help?

- **Tokens Studio Docs:** https://docs.tokens.studio/
- **GitHub Issues:** Voor bug reports
- **Notion Brand Guidelines:** Volledige brand specs

---

**Emerson Agency - Bringing Order to Complexity**

*Design Tokens v1.0 - GitHub Sync Ready*
