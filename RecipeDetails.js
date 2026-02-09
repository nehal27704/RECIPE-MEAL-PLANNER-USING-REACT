import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeDetail = ({ recipe }) => {
  const navigate = useNavigate();

  if (!recipe) return <p>Select a recipe to view details.</p>;

  return (
    <div style={{padding: '20px'}}>
      <h2>{recipe.name}</h2>
      <p>Cooking Time: {recipe.time} mins</p>

      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
      </ul>

      <h4>Steps:</h4>
      <ol>
        {recipe.steps.map((step, idx) => <li key={idx}>{step}</li>)}
      </ol>

      <button 
        onClick={() => navigate(-1)} 
        style={{marginTop: '20px', padding: '5px 10px', cursor: 'pointer'}}
      >
        Back
      </button>
    </div>
  );
};

export default RecipeDetail;