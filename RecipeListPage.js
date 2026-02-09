import React from "react";
import { useNavigate } from "react-router-dom";
import RecipeList from "../Components/RecipeList"; // adjust path

const RecipeListPage = ({ recipes = [], setEditingRecipe, deleteRecipe }) => {
  const navigate = useNavigate();

  const handleSelect = (recipe) => {
    navigate(`/detail/${recipe.id}`);
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
    navigate("/edit");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Recipes</h2>
      <button
        onClick={() => navigate("/add")}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-4"
      >
        ➕ Add New Recipe
      </button>

      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        <RecipeList
          recipes={recipes}
          onSelect={handleSelect}
          onEdit={handleEdit}
          onDelete={deleteRecipe}
        />
      )}
    </div>
  );
};

export default RecipeListPage;
