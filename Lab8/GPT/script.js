// Define recipe data structure
let recipes = [];

// Function to add a new recipe
function addRecipe(title, ingredients, instructions, image) {
  recipes.push({ title, ingredients, instructions, image });
}

// Function to display recipes
function displayRecipes() {
  const recipesList = document.getElementById("recipes");
  recipesList.innerHTML = "";
  recipes.forEach((recipe, index) => {
    const li = document.createElement("li");
    li.classList.add("recipe-item");
    li.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}">` : ""}
      <button onclick="editRecipe(${index})">Edit</button>
      <button onclick="deleteRecipe(${index})">Delete</button>
    `;
    recipesList.appendChild(li);
  });
}

// Function to edit a recipe
function editRecipe(index) {
  const recipe = recipes[index];
  // Populate form fields with recipe data for editing
  document.getElementById("title").value = recipe.title;
  document.getElementById("ingredients").value = recipe.ingredients;
  document.getElementById("instructions").value = recipe.instructions;
  // Remove the recipe from the array
  recipes.splice(index, 1);
  // Display updated recipe list
  displayRecipes();
}

// Function to delete a recipe
function deleteRecipe(index) {
  recipes.splice(index, 1);
  displayRecipes();
}

// Event listener for adding a new recipe
document
  .getElementById("addRecipeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;
    const image = document.getElementById("image").value; // Assuming you handle file upload
    addRecipe(title, ingredients, instructions, image);
    displayRecipes();
    // Reset form fields
    this.reset();
  });

// Initial display of recipes
displayRecipes();
