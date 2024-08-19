import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create Recipe</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cuisine">Cuisine</label>
          <input
            id="cuisine"
            name="cuisine"
            type="text"
            required
            value={formData.cuisine}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="photo">Photo URL</label>
          <input
            id="photo"
            name="photo"
            type="url"
            required
            value={formData.photo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            required
            value={formData.ingredients}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="preparation">Preparation</label>
          <textarea
            id="preparation"
            name="preparation"
            required
            value={formData.preparation}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </fieldset>
    </form>
  );
}

export default RecipeCreate;