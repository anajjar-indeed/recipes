import React from "react";
  

// RecipeRow component to display each recipe
function RecipeRow({ recipe, onDelete }) {
  return (
    <tr className="post">
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt={recipe.name} style={{ width: "100px" }} /></td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

function RecipeList({ recipes, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <RecipeRow
            key={index}
            recipe={recipe}
            onDelete={() => onDelete(index)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RecipeList;