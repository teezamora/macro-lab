/* ============================================================
   MACRO LAB — recipes.js
   THE ONLY FILE YOU EDIT WHEN ADDING A NEW RECIPE.

   To add a recipe:
   1. Drop your-recipe.html into /recipes/
   2. Add one object to the RECIPES array below
   3. Push to GitHub — done.
   ============================================================ */

const RECIPES = [
  {
    file:        "cottage-cheese-pancakes.html",  // filename inside /recipes/
    name:        "Cottage Cheese Pancakes",
    description: "High-protein batter · 7 ingredients · 45g each",
    emoji:       "🥞",
    thumbBg:     "linear-gradient(135deg, #1a1500 0%, #2d2400 50%, #1a1500 100%)",
    tags:        ["Breakfast", "High Protein", "Post-Workout"],
    servings:    17,
    perServing: {
      calories: 100,
      protein:   5.6,
      carbs:     8.9,
      fat:       4.6,
    },
    macroSplit: {           // % of calories — must add to 100
      protein: 22.6,
      carbs:   35.8,
      fat:     41.6,
    },
  },

  {
    file:        "high-protein-breakfast-burritos.html",
    name:        "Breakfast Burritos",
    description: "Egg, sausage & cheddar wrap · 8 ingredients",
    emoji:       "🌯",
    thumbBg:     "linear-gradient(135deg, #1a0800 0%, #2d1200 50%, #1a0800 100%)",
    tags:        ["Breakfast", "High Protein", "Meal Prep"],
    servings:    6,
    perServing: {
      calories: 568,
      protein:  35.0,
      carbs:    35.0,
      fat:      28.0,
    },
    macroSplit: {
      protein: 26.3,
      carbs:   26.3,
      fat:     47.4,
    },
  },

  {
    file:        "honey-garlic-chicken.html",
    name:        "Honey Garlic Chicken",
    description: "Instant Pot chicken & tofu · honey soy glaze · 9 ingredients",
    emoji:       "🍗",
    thumbBg:     "linear-gradient(135deg, #1a0f00 0%, #2d1a00 50%, #1a0f00 100%)",
    tags:        ["Dinner", "High Protein", "Meal Prep"],
    servings:    5,
    perServing: {
      calories: 424,
      protein:  40.3,
      carbs:    37.0,
      fat:      13.1,
    },
    macroSplit: {
      protein: 37.7,
      carbs:   34.6,
      fat:     27.7,
    },
  },

  // ── PASTE NEW RECIPES BELOW THIS LINE ─────────────────────
  // {
  //   file:        "chicken-rice-bowl.html",
  //   name:        "Chicken Rice Bowl",
  //   description: "Lean bulk staple · 5 ingredients",
  //   emoji:       "🍚",
  //   thumbBg:     "linear-gradient(135deg, #001a0d 0%, #002d16 50%, #001a0d 100%)",
  //   tags:        ["Lunch", "High Protein", "Bulk"],
  //   servings:    4,
  //   perServing: {
  //     calories: 520,
  //     protein:  48,
  //     carbs:    58,
  //     fat:       8,
  //   },
  //   macroSplit: {
  //     protein: 37,
  //     carbs:   44,
  //     fat:     19,
  //   },
  // },

];
