// Load recipes from local storage and display them
window.onload = function() {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeList = document.getElementById('recipe-list');

    recipes.forEach((recipe, index) => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h3 onclick="viewRecipe(${index})">${recipe.name}</h3>
        `;
        recipeList.appendChild(recipeElement);
    });
}

// Show the selected recipe's details
function viewRecipe(index) {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipe = recipes[index];
    document.getElementById('recipe-name').textContent = recipe.name;
    document.getElementById('recipe-image').src = recipe.image;
    document.getElementById('servings-count').textContent = recipe.servings;
    document.getElementById('prep-time').textContent = recipe.prepTime;
    document.getElementById('difficulty').textContent = recipe.difficulty;

    // Update ingredients
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = `${ingredient.quantity} ${ingredient.name}`;
        ingredientsList.appendChild(li);
    });

    // Update instructions
    const instructionsList = document.getElementById('instructions-list');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    document.getElementById('recipe-detail').style.display = 'block';
    document.getElementById('recipe-list').style.display = 'none';
}

// Change servings (half, normal, double)
function changeServings(size) {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeName = document.getElementById('recipe-name').textContent;
    const recipe = recipes.find(r => r.name === recipeName);

    let factor;
    if (size === 'half') {
        factor = 0.5;
    } else if (size === 'double') {
        factor = 2;
    } else {
        factor = 1;
    }

    // Update ingredients based on servings
    recipe.ingredients.forEach(ingredient => {
        ingredient.quantity = ingredient.baseQuantity * factor;
    });

    // Re-render the ingredients list
    viewRecipe(recipes.indexOf(recipe));
}

// Toggle sections (Ingredients/Instructions)
function toggleSection(section) {
    const sectionElement = document.getElementById(`${section}-section`);
    sectionElement.style.display = sectionElement.style.display === 'none' ? 'block' : 'none';
}

function goBack() {
    document.getElementById('recipe-detail').style.display = 'none';
    document.getElementById('recipe-list').style.display = 'block';
}
