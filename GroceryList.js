import React, { useState } from "react";
import "./GroceryList.css"; // ✅ Make sure this file is in the same folder

function GroceryList({ mealPlan, recipes }) {
  const [extraGroceries, setExtraGroceries] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [newQty, setNewQty] = useState("");

  const ingredientTotals = {};

  if (!recipes) {
    return (
      <div className="calendar-container">
        <p className="loading">Loading recipes...</p>
      </div>
    );
  }

  // ✅ Build grocery list from recipes
  Object.values(mealPlan).forEach((meals) => {
    Object.values(meals).forEach((recipeName) => {
      const recipe = recipes.find((r) => r.name === recipeName);
      if (recipe) {
        recipe.ingredients.forEach((ing) => {
          if (!ingredientTotals[ing.name]) ingredientTotals[ing.name] = 0;
          ingredientTotals[ing.name] += ing.qty;
        });
      }
    });
  });

  // ✅ Add extra groceries
  extraGroceries.forEach(({ name, qty }) => {
    if (!ingredientTotals[name]) ingredientTotals[name] = 0;
    ingredientTotals[name] += qty;
  });

  // ✅ Add new grocery handler
  const handleAddGrocery = (e) => {
    e.preventDefault();
    if (!newItem || !newQty) return;

    setExtraGroceries((prev) => [
      ...prev,
      { name: newItem, qty: parseFloat(newQty) },
    ]);
    setNewItem("");
    setNewQty("");
  };

  return (
    <div className="page-wrapper">
      <div className="calendar-container">
        <h2 className="title">Grocery List 🛒</h2>

        {/* ➕ Grocery input form */}
        <form onSubmit={handleAddGrocery} className="grocery-form">
          <input
            type="text"
            placeholder="Item name"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <input
            type="number"
            placeholder="Qty"
            value={newQty}
            onChange={(e) => setNewQty(e.target.value)}
          />
          <button type="submit">➕ Add</button>
        </form>

        {/* ✅ Grocery Table */}
        {Object.keys(ingredientTotals).length === 0 ? (
          <p className="empty-msg">
            No ingredients yet. Assign recipes in the Meal Planner or add items!
          </p>
        ) : (
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Total Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(ingredientTotals).map(([name, qty]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default GroceryList;
