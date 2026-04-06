/* ============================================================
   LATTITUDE — recipes.js
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
