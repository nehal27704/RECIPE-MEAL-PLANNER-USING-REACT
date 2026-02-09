import React from 'react';
import RecipeCard from './RecipeCard';
import "./RecipeList.css";
const RecipeList = ({ recipes, onSelect, onEdit, onDelete }) => {
  if (recipes.length === 0) return <p>No recipes yet. Add one!</p>;

  return (
    <div className='recipe-list-container'>
      {recipes.map(recipe => (
        <RecipeCard 
          key={recipe.id} 
          recipe={recipe} 
          onSelect={onSelect} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default RecipeList;