import React from "react";

function MealSlot({ day, meal, mealPlan, recipes, assignRecipe }) {
  const handleChange = (e) => {
    assignRecipe(day, meal, e.target.value);
  };

  return (
    <select
      value={mealPlan[day][meal] || ""}
      onChange={handleChange}
      style={{ width: "100%", padding: "4px", borderRadius: "4px" }}
    >
      <option value="">--Select Recipe--</option>
      {recipes.map((recipe) => (
        <option key={recipe.id} value={recipe.id}>{recipe.title}</option>
      ))}
    </select>
  );
}

export default MealSlot;