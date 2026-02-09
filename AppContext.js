import { createContext, useContext, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export function AppProvider({ children }) {
  // -----------------------------
  // 🔹 Recipes State
  // -----------------------------
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Pasta",
      ingredients: ["pasta", "sauce", "cheese"],
      steps: ["Boil pasta", "Add sauce", "Top with cheese"],
    },
    {
      id: 2,
      name: "Salad",
      ingredients: ["lettuce", "tomato", "cucumber"],
      steps: ["Chop veggies", "Mix together", "Add dressing"],
    },
  ]);

  // Add new recipe
  const addRecipe = (recipe) => {
    setRecipes((prev) => [...prev, { ...recipe, id: Date.now() }]);
  };

  // Get recipe by ID (for RecipeDetail)
  const getRecipeById = (id) => {
    return recipes.find((r) => r.id === id);
  };

  // -----------------------------
  // 🔹 Meal Plan State
  // -----------------------------
  const [mealPlan, setMealPlan] = useState({
    Monday: { Breakfast: null, Lunch: null, Dinner: null },
    Tuesday: { Breakfast: null, Lunch: null, Dinner: null },
    Wednesday: { Breakfast: null, Lunch: null, Dinner: null },
    Thursday: { Breakfast: null, Lunch: null, Dinner: null },
    Friday: { Breakfast: null, Lunch: null, Dinner: null },
    Saturday: { Breakfast: null, Lunch: null, Dinner: null },
    Sunday: { Breakfast: null, Lunch: null, Dinner: null },
  });

  // Assign a recipe to a day/meal slot
  const assignMeal = (day, mealType, recipeId) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: { ...prev[day], [mealType]: recipeId },
    }));
  };

  // -----------------------------
  // 🔹 Grocery List (derived)
  // -----------------------------
  const getGroceryList = () => {
    let items = [];
    Object.values(mealPlan).forEach((meals) => {
      Object.values(meals).forEach((recipeId) => {
        if (recipeId) {
          const recipe = getRecipeById(recipeId);
          if (recipe) {
            items = [...items, ...recipe.ingredients];
          }
        }
      });
    });
    return [...new Set(items)]; // remove duplicates
  };

  // -----------------------------
  // 🔹 Context Provider
  // -----------------------------
  return (
    <AppContext.Provider
      value={{
        recipes,
        addRecipe,
        getRecipeById,
        mealPlan,
        assignMeal,
        getGroceryList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
