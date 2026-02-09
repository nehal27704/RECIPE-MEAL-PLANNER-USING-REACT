import React from 'react';

const RecipeCard = ({ recipe, onSelect, onEdit, onDelete }) => {
  return (
    <div 
      className="recipe-card" 
      onClick={() => onSelect(recipe)}
    >
      <h3>{recipe.name}</h3>
      <p>Time: {recipe.time} mins</p>
      <button 
        onClick={(e) => { e.stopPropagation(); onEdit(recipe); }} 
      >
        Edit
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); onDelete(recipe.id); }}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default RecipeCard;