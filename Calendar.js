// src/components/Calendar.js
import React from "react";
import "./Calendar.css";

function MealSlot({ day, mealType, mealPlan, recipes, assignRecipe }) {
  const currentRecipe = mealPlan[day]?.[mealType] || "";

  return (
    <select
      value={currentRecipe}
      onChange={(e) => assignRecipe(day, mealType, e.target.value)}
    >
      <option value="">- Select Recipe -</option>
      {recipes.map((recipe) => (
        <option key={recipe.id} value={recipe.name}>
          {recipe.name}
        </option>
      ))}
    </select>
  );
}

function Calendar({ mealPlan, recipes, assignRecipe, resetPlan }) {
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const meals = ["breakfast","lunch","dinner"];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>Weekly Meal Planner</h2>
        <button className="reset-btn" onClick={resetPlan}>Reset Plan</button>
      </div>

      <table className="calendar-table">
        <thead>
          <tr>
            <th>Day</th>
            {meals.map((meal) => (
              <th key={meal}>{meal.charAt(0).toUpperCase() + meal.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td><strong>{day}</strong></td>
              {meals.map((mealType) => (
                <td key={mealType}>
                  <MealSlot
                    day={day}
                    mealType={mealType}
                    mealPlan={mealPlan}
                    recipes={recipes}
                    assignRecipe={assignRecipe}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
