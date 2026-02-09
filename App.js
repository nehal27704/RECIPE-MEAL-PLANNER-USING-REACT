import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Calendar from "./Components/Calendar";
import GroceryList from "./Components/GroceryList";
import RecipeForm from "./Components/RecipeForm";
import RecipeList from "./Components/RecipeList";
import RecipeDetail from "./Components/RecipeDetails";
import RecipeListPage from "./Components/RecipeListPage";
import About from "./Components/About";
import Home from "./Components/Home";
import "./App.css";

function App() {
  // --- Meal Plan State ---
  const [mealPlan, setMealPlan] = useState({
    Monday: { breakfast: "", lunch: "", dinner: "" },
    Tuesday: { breakfast: "", lunch: "", dinner: "" },
    Wednesday: { breakfast: "", lunch: "", dinner: "" },
    Thursday: { breakfast: "", lunch: "", dinner: "" },
    Friday: { breakfast: "", lunch: "", dinner: "" },
    Saturday: { breakfast: "", lunch: "", dinner: "" },
    Sunday: { breakfast: "", lunch: "", dinner: "" },
  });

  const assignRecipe = (day, mealType, recipe) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: { ...prev[day], [mealType]: recipe },
    }));
  };

  const resetPlan = () => {
    setMealPlan({
      Monday: { breakfast: "", lunch: "", dinner: "" },
      Tuesday: { breakfast: "", lunch: "", dinner: "" },
      Wednesday: { breakfast: "", lunch: "", dinner: "" },
      Thursday: { breakfast: "", lunch: "", dinner: "" },
      Friday: { breakfast: "", lunch: "", dinner: "" },
      Saturday: { breakfast: "", lunch: "", dinner: "" },
      Sunday: { breakfast: "", lunch: "", dinner: "" },
    });
  };

  // --- Recipe CRUD State ---
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addOrUpdateRecipe = (recipe) => {
    if (recipe.id) {
      setRecipes((prev) => prev.map((r) => (r.id === recipe.id ? recipe : r)));
    } else {
      setRecipes((prev) => [...prev, { ...recipe, id: Date.now() }]);
    }
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* ✅ About Page */}
        <Route path="/about" element={<About />} />

        {/* Recipe CRUD */}
        <Route path="/add" element={<RecipeForm onSubmit={addOrUpdateRecipe} />} />
        <Route
          path="/edit"
          element={<RecipeForm onSubmit={addOrUpdateRecipe} initialData={editingRecipe} />}
        />
        <Route
          path="/detail/:id"
          element={<RecipeDetailWrapper recipes={recipes} />}
        />

        {/* Recipe List */}
        <Route
          path="/recipes"
          element={
            <RecipeListPage
              recipes={recipes}
              setEditingRecipe={setEditingRecipe}
              deleteRecipe={deleteRecipe}
            />
          }
        />

        {/* Meal Planner */}
        <Route
          path="/meal-planner"
          element={
            <Calendar
              mealPlan={mealPlan}
              recipes={recipes}
              assignRecipe={assignRecipe}
              resetPlan={resetPlan}
            />
          }
        />

        {/* Grocery List */}
        <Route
          path="/grocery-list"
          element={<GroceryList mealPlan={mealPlan} recipes={recipes} />}
        />

        {/* Optional alias if you need /home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

// --- Recipe Detail Wrapper ---
const RecipeDetailWrapper = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === Number(id));
  return <RecipeDetail recipe={recipe} />;
};

export default App;
