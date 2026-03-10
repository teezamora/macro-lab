# 🏋️ MACRO LAB

A personal bodybuilder nutrition dashboard. Track recipes, break down macros, and optimize your diet for muscle growth.

## 📁 Structure

```
macro-lab/
├── index.html          ← Home screen — never edit this
├── recipes.js          ← THE ONLY FILE YOU EDIT to add recipes
├── styles/
│   └── global.css      ← Shared styles & CSS variables
├── js/
│   └── nav.js          ← Shared utilities (donut ring, serving scaler)
└── recipes/
    └── cottage-cheese-pancakes.html
```

---

## ➕ Adding a New Recipe (2 steps, that's it)

### Step 1 — Drop your recipe HTML into `/recipes/`
Name it with kebab-case: `chicken-rice-bowl.html`

### Step 2 — Add one object to `recipes.js`

```js
{
  file:        "chicken-rice-bowl.html",   // must match filename exactly
  name:        "Chicken Rice Bowl",
  description: "Lean bulk staple · 5 ingredients",
  emoji:       "🍚",
  thumbBg:     "linear-gradient(135deg, #001a0d 0%, #002d16 50%, #001a0d 100%)",
  tags:        ["Lunch", "High Protein", "Bulk"],  // drives filter pills automatically
  servings:    4,
  perServing: {
    calories: 520,
    protein:  48,
    carbs:    58,
    fat:       8,
  },
  macroSplit: {     // % of calories — should add to ~100
    protein: 37,
    carbs:   44,
    fat:     19,
  },
},
```

**`index.html` never gets edited again.** It reads `recipes.js` on load and automatically builds every card, every filter pill, and recalculates the stats bar.

**`recipes.js` is your master list** — each entry has just the data the home screen needs (name, emoji, macros, tags, filename). The recipe HTML file itself holds all the detailed ingredient breakdown.

> 💬 When you drop a new recipe in chat, you'll get both the `.html` file for `/recipes/` and the one object to paste into `recipes.js`. Two things, done.

---

## 🌐 GitHub Pages Setup

1. Push repo to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Live at: `https://yourusername.github.io/macro-lab/`

---

## 🎨 Colors (edit in `styles/global.css`)

| Variable | Value | Used For |
|---|---|---|
| `--accent` | `#e8ff47` | Calories, highlights |
| `--protein` | `#4ade80` | Protein macro |
| `--carbs` | `#facc15` | Carbs macro |
| `--fat` | `#f97316` | Fat macro |

---

## 📋 Recipes

| Recipe | Cal/serving | Protein | Carbs | Fat |
|---|---|---|---|---|
| [Cottage Cheese Pancakes](recipes/cottage-cheese-pancakes.html) | 207 | 11.1g | 18.8g | 9.5g |
