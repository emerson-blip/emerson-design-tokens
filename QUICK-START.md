# ⚡ QUICK START - GitHub Sync

5-minuten setup voor Emerson Design Tokens

---

## 1️⃣ Upload naar GitHub (2 min)

**Optie A: GitHub Website**
1. Ga naar https://github.com/new
2. Name: `emerson-design-tokens`
3. Create repository
4. Upload `tokens.json`

**Optie B: Command Line**
```bash
cd emerson-design-tokens
git init
git add tokens.json README.md
git commit -m "Initial design tokens"
git remote add origin https://github.com/JOUW-USERNAME/emerson-design-tokens.git
git push -u origin main
```

---

## 2️⃣ GitHub Token (1 min)

1. https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Name: `Figma Tokens Studio`
4. Scope: ✅ **repo** (all repo permissions)
5. Generate → **Copy token**

---

## 3️⃣ Connect Figma (2 min)

**In Tokens Studio plugin:**

Settings → Sync → GitHub

```
Personal Access Token:  [plak token]
Repository:             JOUW-USERNAME/emerson-design-tokens
Branch:                 main
File Path:              tokens.json
```

Save → Test connection ✅

---

## 4️⃣ Pull & Activate (1 min)

1. Click **"Pull from GitHub"**
2. Tokens downloaden ✅
3. Go to **"Themes"** tab
4. Select **"Emerson Default"**

---

## ✅ Klaar!

Test het:
```
{text.primary}           → Charcoal
{text.heading}           → Clay
{bg.secondary}           → Taupe-50
{button.primary.bg}      → Clay
{spacing.spacing.4}      → 16px
```

---

## 🎭 Switch Themes

**Corporate work:**
→ "Emerson Default" (no toolkit colors)

**Workshop (warm):**
→ "Emerson Workshop Warm" (retro colors)

**Workshop (soft):**
→ "Emerson Workshop Soft" (soft colors)

---

## 🔄 Daily Workflow

**Team member wijzigt:**
1. Edit tokens.json in GitHub
2. Commit
3. You: "Pull from GitHub" ✅

**Jij wijzigt:**
1. Edit in Figma plugin
2. "Push to GitHub"
3. Team: "Pull from GitHub" ✅

---

## 💡 Pro Tips

✅ Use **semantic tokens** - `{text.primary}` not `{core.charcoal}`
✅ **Pull often** - Stay in sync
✅ **Use themes** - Switch context easily
✅ **Feature branches** - Test before pushing to main

---

**Ready! 🚀**

Voor details → zie README.md
