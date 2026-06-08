document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recipe-form');
  const recipeContainer = document.getElementById('recipes-container');
  const localStorageKey = 'recipes';

  // Load recipes from localStorage
  const loadRecipes = () => {
      const recipes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      recipeContainer.innerHTML = recipes.map((recipe, index) => `
          <div class="recipe">
              <h3>${recipe.title}</h3>
              <p>${recipe.details}</p>
              <button class="btn-delete" onclick="deleteRecipe(${index})">Delete</button>
          </div>
      `).join('');
  };

  // Add recipe
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('recipe-title').value.trim();
      const details = document.getElementById('recipe-details').value.trim();
      if (title && details) {
          const recipes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
          recipes.push({ title, details });
          localStorage.setItem(localStorageKey, JSON.stringify(recipes));
          form.reset();
          loadRecipes();
      }
  });

  // Delete recipe
  window.deleteRecipe = (index) => {
      const recipes = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      recipes.splice(index, 1); // Remove the selected recipe
      localStorage.setItem(localStorageKey, JSON.stringify(recipes));
      loadRecipes(); // Re-render the recipes
  };

  // Initial load
  loadRecipes();
});
