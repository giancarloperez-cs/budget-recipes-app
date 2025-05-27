// Static database of common ingredient prices (approximate Walmart prices)
const ingredientPriceDB = {
  // Proteins
  "chicken breast": { price: 3.98, unit: "per lb", brand: "Great Value" },
  "ground beef": { price: 4.94, unit: "per lb", brand: "Great Value" },
  "eggs": { price: 4.98, unit: "per dozen", brand: "Great Value" },
  "tofu": { price: 1.98, unit: "per block", brand: "Great Value" },
  
  // Vegetables & Fruits
  "frozen vegetables": { price: 1.98, unit: "per bag", brand: "Great Value" },
  "onion": { price: 0.98, unit: "each", brand: "Fresh Produce" },
  "garlic": { price: 0.50, unit: "per head", brand: "Fresh Produce" },
  "carrots": { price: 1.48, unit: "per lb", brand: "Fresh Produce" },
  "potatoes": { price: 4.98, unit: "5 lb bag", brand: "Fresh Produce" },
  
  // Pantry Items
  "rice": { price: 4.48, unit: "5 lb bag", brand: "Great Value" },
  "pasta": { price: 1.00, unit: "per lb", brand: "Great Value" },
  "soy sauce": { price: 1.98, unit: "per bottle", brand: "Great Value" },
  "olive oil": { price: 4.98, unit: "17 oz bottle", brand: "Great Value" },
  "black beans": { price: 0.78, unit: "per can", brand: "Great Value" },
  
  // Dairy
  "milk": { price: 3.98, unit: "per gallon", brand: "Great Value" },
  "cheese": { price: 2.98, unit: "8 oz block", brand: "Great Value" },
  "butter": { price: 3.98, unit: "per lb", brand: "Great Value" },
  
  // Bread & Bakery
  "bread": { price: 1.00, unit: "per loaf", brand: "Great Value" },
  "tortillas": { price: 1.98, unit: "10 count", brand: "Great Value" }
};

// Recipe data with common ingredients
const recipeData = {
  walmart: [
    { 
      name: "Chicken Stir Fry",
      ingredients: [
        {
          name: "chicken breast",
          type: "protein",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["chicken breast"].price
        },
        {
          name: "frozen vegetables",
          type: "produce",
          quantity: "1 bag (16 oz)",
          estimatedCost: ingredientPriceDB["frozen vegetables"].price
        },
        {
          name: "soy sauce",
          type: "condiment",
          quantity: "1/4 cup",
          estimatedCost: ingredientPriceDB["soy sauce"].price
        },
        {
          name: "rice",
          type: "grain",
          quantity: "2 cups",
          estimatedCost: (ingredientPriceDB["rice"].price / 5) // Assuming 5lb bag makes about 10 cups
        }
      ],
      instructions: [
        "1. Cook rice according to package instructions",
        "2. Cut chicken into bite-sized pieces",
        "3. Heat oil in a large pan or wok",
        "4. Cook chicken until golden brown",
        "5. Add frozen vegetables and stir fry until heated through",
        "6. Add soy sauce and stir to combine",
        "7. Serve hot over rice"
      ]
    },
    {
      name: "Simple Bean Burritos",
      ingredients: [
        {
          name: "black beans",
          type: "protein",
          quantity: "2 cans",
          estimatedCost: ingredientPriceDB["black beans"].price * 2
        },
        {
          name: "tortillas",
          type: "bread",
          quantity: "8 count",
          estimatedCost: ingredientPriceDB["tortillas"].price
        },
        {
          name: "cheese",
          type: "dairy",
          quantity: "8 oz",
          estimatedCost: ingredientPriceDB["cheese"].price
        }
      ],
      instructions: [
        "1. Heat the black beans in a pan",
        "2. Warm the tortillas",
        "3. Add beans and cheese to each tortilla",
        "4. Roll into burritos",
        "5. Optional: Heat in pan until crispy"
      ]
    }
  ]
};

function showRecipes() {
  const userInput = document.getElementById('storeInput').value.trim().toLowerCase();
  const recipesDiv = document.getElementById('recipes');
  recipesDiv.innerHTML = "";

  const matchedStore = Object.keys(recipeData).find(key => userInput.includes(key));

  if (!matchedStore) {
    recipesDiv.innerHTML = `<p style="color: red;">Sorry, we don't have recipes for that store yet. Try Walmart.</p>`;
    return;
  }

  for (const recipe of recipeData[matchedStore]) {
    const div = document.createElement('div');
    div.className = "recipe";
    
    let totalCost = 0;
    let ingredientsList = '';
    
    recipe.ingredients.forEach(item => {
      totalCost += item.estimatedCost;
      ingredientsList += `
        <li>
          ${item.name} - ${item.quantity}
          <br>
          <small>Estimated cost: $${item.estimatedCost.toFixed(2)}</small>
        </li>
      `;
    });

    div.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Estimated Total Cost: $${totalCost.toFixed(2)}</strong></p>
      <div class="ingredients">
        <h4>Ingredients:</h4>
        <ul>${ingredientsList}</ul>
      </div>
      <div class="instructions">
        <h4>Instructions:</h4>
        <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
      </div>
    `;
    
    recipesDiv.appendChild(div);
  }
}
  