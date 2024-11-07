document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('recipe-name').value;
    const image = document.getElementById('recipe-image').value;
    const servings = parseInt(document.getElementById('servings').value, 10);
    const prepTime = document.getElementById('prep-time').value;
    const difficulty = document.getElementById('difficulty').value;

    const ingredientsInput = document.getElementById('ingredients').value.split(',');
    const instructionsInput = document.getElementById('instructions').value.split(',');

    // Convert ingredients to an array of objects
    const ingredients = ingredientsInput.map(ingredient => {
        const parts = ingredient.trim().split(' ');
        return { quantity: parseFloat(parts[0]), name: parts.slice(1).join(' ') };
    });

    // Create the new recipe object
    const newRecipe = {
        name,
        image,
        servings,
        prepTime,
        difficulty,
        ingredients,
        instructions: instructionsInput
    };

    // Get existing recipes from localStorage
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(newRecipe);

    // Save the updated recipes array back to localStorage
    localStorage.setItem('recipes', JSON.stringify(recipes));

    alert('
