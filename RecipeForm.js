import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeForm.css";


const RecipeForm = ({ onSubmit, initialData }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(initialData?.name || "");
  const [ingredients, setIngredients] = useState(initialData?.ingredients || [""]);
  const [steps, setSteps] = useState(initialData?.steps || [""]);
  const [time, setTime] = useState(initialData?.time || "");

  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...initialData, name, ingredients, steps, time });
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl"
    >
      <h2 className="text-xl font-bold text-center mb-4">
        {initialData ? "Edit Recipe" : "Add New Recipe"}
      </h2>

      {/* Recipe Name */}
      <input
        className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Recipe Name"
        required
      />

      {/* Cooking Time */}
      <input
        className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Cooking Time (mins)"
        required
      />

      {/* Ingredients */}
      <h4 className="font-semibold mt-4">Ingredients</h4>
      {ingredients.map((ing, idx) => (
        <input
          key={idx}
          className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={ing}
          onChange={(e) => handleIngredientChange(idx, e.target.value)}
          placeholder={`Ingredient ${idx + 1}`}
        />
      ))}
      <button
        type="button"
        className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 mb-4"
        onClick={() => setIngredients([...ingredients, ""])}
      >
        + Add Ingredient
      </button>

      {/* Steps */}
      <h4 className="font-semibold mt-4">Steps</h4>
      {steps.map((step, idx) => (
        <input
          key={idx}
          className="w-full p-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={step}
          onChange={(e) => handleStepChange(idx, e.target.value)}
          placeholder={`Step ${idx + 1}`}
        />
      ))}
      <button
        type="button"
        className="bg-purple-500 text-white px-3 py-2 rounded-lg hover:bg-purple-600 mb-4"
        onClick={() => setSteps([...steps, ""])}
      >
        + Add Step
      </button>

      {/* Save / Update Button */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {initialData ? "Update Recipe" : "Save Recipe"}
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;
