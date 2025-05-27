// Static database of common ingredient prices (approximate Walmart prices)
const ingredientPriceDB = {
  // Proteins
  "chicken breast": { price: 3.98, unit: "per lb", brand: "Great Value" },
  "ground beef": { price: 4.94, unit: "per lb", brand: "Great Value" },
  "eggs": { price: 4.98, unit: "per dozen", brand: "Great Value" },
  "tofu": { price: 1.98, unit: "per block", brand: "Great Value" },
  "canned tuna": { price: 0.88, unit: "per can", brand: "Great Value" },
  "rotisserie chicken": { price: 4.98, unit: "whole chicken", brand: "Walmart Deli" },
  "peanut butter": { price: 1.97, unit: "15 oz jar", brand: "Great Value" },
  
  // Vegetables & Fruits
  "frozen vegetables": { price: 1.98, unit: "per bag", brand: "Great Value" },
  "onion": { price: 0.98, unit: "each", brand: "Fresh Produce" },
  "garlic": { price: 0.50, unit: "per head", brand: "Fresh Produce" },
  "carrots": { price: 1.48, unit: "per lb", brand: "Fresh Produce" },
  "potatoes": { price: 4.98, unit: "5 lb bag", brand: "Fresh Produce" },
  "bananas": { price: 0.25, unit: "each", brand: "Fresh Produce" },
  "canned corn": { price: 0.68, unit: "per can", brand: "Great Value" },
  "canned tomatoes": { price: 0.88, unit: "per can", brand: "Great Value" },
  
  // Pantry Items
  "rice": { price: 4.48, unit: "5 lb bag", brand: "Great Value" },
  "pasta": { price: 1.00, unit: "per lb", brand: "Great Value" },
  "soy sauce": { price: 1.98, unit: "per bottle", brand: "Great Value" },
  "olive oil": { price: 4.98, unit: "17 oz bottle", brand: "Great Value" },
  "black beans": { price: 0.78, unit: "per can", brand: "Great Value" },
  "chicken broth": { price: 1.38, unit: "32 oz", brand: "Great Value" },
  "tomato sauce": { price: 0.48, unit: "8 oz can", brand: "Great Value" },
  "salsa": { price: 1.98, unit: "24 oz jar", brand: "Great Value" },
  
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
    // Under $10 Total Category
    {
      category: "Under $10 Total",
      name: "Budget Rice & Beans (6 servings)",
      ingredients: [
        {
          name: "rice",
          type: "grain",
          quantity: "2 cups dry",
          estimatedCost: (ingredientPriceDB["rice"].price / 5) * 2 // 2 cups from 5lb bag
        },
        {
          name: "black beans",
          type: "protein",
          quantity: "2 cans",
          estimatedCost: ingredientPriceDB["black beans"].price * 2
        },
        {
          name: "onion",
          type: "produce",
          quantity: "1",
          estimatedCost: ingredientPriceDB["onion"].price
        },
        {
          name: "salsa",
          type: "condiment",
          quantity: "1 cup",
          estimatedCost: ingredientPriceDB["salsa"].price / 2
        }
      ],
      instructions: [
        "1. Cook rice according to package instructions",
        "2. Dice onion and sauté until soft",
        "3. Add beans (drained) and heat through",
        "4. Mix with rice and top with salsa",
        "5. Optional: Add cheese if desired"
      ],
      servings: 6
    },
    {
      category: "Under $10 Total",
      name: "Tuna Pasta Salad (4 servings)",
      ingredients: [
        {
          name: "pasta",
          type: "grain",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["pasta"].price
        },
        {
          name: "canned tuna",
          type: "protein",
          quantity: "2 cans",
          estimatedCost: ingredientPriceDB["canned tuna"].price * 2
        },
        {
          name: "frozen vegetables",
          type: "produce",
          quantity: "1 bag",
          estimatedCost: ingredientPriceDB["frozen vegetables"].price
        }
      ],
      instructions: [
        "1. Cook pasta according to package instructions",
        "2. Cook frozen vegetables in microwave",
        "3. Drain tuna and mix with pasta and vegetables",
        "4. Season with salt and pepper to taste",
        "5. Serve cold or warm"
      ],
      servings: 4
    },
    {
      category: "Under $10 Total",
      name: "PB&B Breakfast Sandwiches (4 servings)",
      ingredients: [
        {
          name: "bread",
          type: "grain",
          quantity: "8 slices",
          estimatedCost: ingredientPriceDB["bread"].price
        },
        {
          name: "peanut butter",
          type: "protein",
          quantity: "4 tablespoons",
          estimatedCost: ingredientPriceDB["peanut butter"].price / 4
        },
        {
          name: "bananas",
          type: "fruit",
          quantity: "2",
          estimatedCost: ingredientPriceDB["bananas"].price * 2
        }
      ],
      instructions: [
        "1. Toast bread if desired",
        "2. Spread peanut butter on each slice of bread",
        "3. Slice bananas",
        "4. Add banana slices to make sandwiches",
        "5. Cut diagonally and serve"
      ],
      servings: 4
    },

    // Under $2 Per Serving Category
    {
      category: "Under $2 Per Serving",
      name: "Potato & Egg Breakfast (3 servings)",
      ingredients: [
        {
          name: "potatoes",
          type: "produce",
          quantity: "3 medium",
          estimatedCost: (ingredientPriceDB["potatoes"].price / 10) * 3 // Assuming 10 potatoes per 5lb bag
        },
        {
          name: "eggs",
          type: "protein",
          quantity: "6",
          estimatedCost: (ingredientPriceDB["eggs"].price / 12) * 6
        },
        {
          name: "onion",
          type: "produce",
          quantity: "1/2",
          estimatedCost: ingredientPriceDB["onion"].price / 2
        }
      ],
      instructions: [
        "1. Dice potatoes and onion",
        "2. Fry potatoes until crispy",
        "3. Add onions and cook until soft",
        "4. Scramble eggs and add to the pan",
        "5. Season with salt and pepper"
      ],
      servings: 3
    },
    {
      category: "Under $2 Per Serving",
      name: "Simple Pasta Marinara (4 servings)",
      ingredients: [
        {
          name: "pasta",
          type: "grain",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["pasta"].price
        },
        {
          name: "tomato sauce",
          type: "sauce",
          quantity: "2 cans (16 oz)",
          estimatedCost: ingredientPriceDB["tomato sauce"].price * 2
        },
        {
          name: "garlic",
          type: "produce",
          quantity: "3 cloves",
          estimatedCost: ingredientPriceDB["garlic"].price / 2
        }
      ],
      instructions: [
        "1. Cook pasta according to package instructions",
        "2. Heat tomato sauce in a pan",
        "3. Mince garlic and add to sauce",
        "4. Combine pasta and sauce",
        "5. Season with salt and pepper to taste"
      ],
      servings: 4
    },
    {
      category: "Under $2 Per Serving",
      name: "Black Bean Soup (6 servings)",
      ingredients: [
        {
          name: "black beans",
          type: "protein",
          quantity: "3 cans",
          estimatedCost: ingredientPriceDB["black beans"].price * 3
        },
        {
          name: "onion",
          type: "produce",
          quantity: "1",
          estimatedCost: ingredientPriceDB["onion"].price
        },
        {
          name: "chicken broth",
          type: "liquid",
          quantity: "32 oz",
          estimatedCost: ingredientPriceDB["chicken broth"].price
        }
      ],
      instructions: [
        "1. Dice onion and sauté until soft",
        "2. Add beans (do not drain) and broth",
        "3. Simmer for 15 minutes",
        "4. Optional: blend half for creamier texture",
        "5. Season with salt and pepper"
      ],
      servings: 6
    },

    // Family Size Under $15 Category
    {
      category: "Family Size Under $15",
      name: "5-Ingredient Chili (6 servings)",
      ingredients: [
        {
          name: "ground beef",
          type: "protein",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["ground beef"].price
        },
        {
          name: "black beans",
          type: "protein",
          quantity: "2 cans",
          estimatedCost: ingredientPriceDB["black beans"].price * 2
        },
        {
          name: "canned tomatoes",
          type: "produce",
          quantity: "2 cans",
          estimatedCost: ingredientPriceDB["canned tomatoes"].price * 2
        },
        {
          name: "onion",
          type: "produce",
          quantity: "1",
          estimatedCost: ingredientPriceDB["onion"].price
        }
      ],
      instructions: [
        "1. Brown ground beef with diced onion",
        "2. Add beans and tomatoes",
        "3. Simmer for 20 minutes",
        "4. Season with salt and pepper",
        "5. Optional: Top with cheese"
      ],
      servings: 6
    },
    {
      category: "Family Size Under $15",
      name: "Rotisserie Chicken Rice Bowls (6 servings)",
      ingredients: [
        {
          name: "rotisserie chicken",
          type: "protein",
          quantity: "1 whole chicken",
          estimatedCost: ingredientPriceDB["rotisserie chicken"].price
        },
        {
          name: "rice",
          type: "grain",
          quantity: "2 cups dry",
          estimatedCost: (ingredientPriceDB["rice"].price / 5) * 2
        },
        {
          name: "frozen vegetables",
          type: "produce",
          quantity: "2 bags",
          estimatedCost: ingredientPriceDB["frozen vegetables"].price * 2
        }
      ],
      instructions: [
        "1. Cook rice according to package instructions",
        "2. Shred rotisserie chicken",
        "3. Cook frozen vegetables in microwave",
        "4. Combine rice, chicken, and vegetables",
        "5. Season with salt and pepper to taste"
      ],
      servings: 6
    },
    {
      category: "Family Size Under $15",
      name: "Hearty Potato & Ground Beef Skillet (6 servings)",
      ingredients: [
        {
          name: "ground beef",
          type: "protein",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["ground beef"].price
        },
        {
          name: "potatoes",
          type: "produce",
          quantity: "6 medium",
          estimatedCost: (ingredientPriceDB["potatoes"].price / 10) * 6
        },
        {
          name: "onion",
          type: "produce",
          quantity: "1",
          estimatedCost: ingredientPriceDB["onion"].price
        },
        {
          name: "canned corn",
          type: "produce",
          quantity: "1 can",
          estimatedCost: ingredientPriceDB["canned corn"].price
        }
      ],
      instructions: [
        "1. Dice potatoes and onion",
        "2. Brown ground beef with onion",
        "3. Add diced potatoes and cook until tender",
        "4. Add corn and heat through",
        "5. Season with salt and pepper"
      ],
      servings: 6
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

  // Add price warning at the top
  const warningDiv = document.createElement('div');
  warningDiv.className = "price-warning";
  warningDiv.innerHTML = `
    <p style="background-color: var(--matcha-light); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--matcha-accent);">
      <strong>⚠️ Price Notice:</strong> All prices shown are approximate and based on Great Value or store brand items when available. 
      Actual prices may vary by location and time of year. Prices shown are estimates from Walmart US stores and were last updated in 2024.
    </p>
  `;
  recipesDiv.appendChild(warningDiv);

  // Group recipes by category
  const recipesByCategory = {};
  recipeData[matchedStore].forEach(recipe => {
    if (!recipesByCategory[recipe.category]) {
      recipesByCategory[recipe.category] = [];
    }
    recipesByCategory[recipe.category].push(recipe);
  });

  // Display recipes by category
  for (const [category, recipes] of Object.entries(recipesByCategory)) {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = "recipe-category";
    categoryDiv.innerHTML = `<h2 style="color: var(--matcha-dark); margin: 30px 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid var(--matcha-accent);">${category}</h2>`;
    recipesDiv.appendChild(categoryDiv);

    recipes.forEach(recipe => {
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
            <small>Estimated cost: $${item.estimatedCost.toFixed(2)} 
            (${ingredientPriceDB[item.name].brand} - ${ingredientPriceDB[item.name].unit})</small>
          </li>
        `;
      });

      div.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Estimated Total Cost: $${totalCost.toFixed(2)}</strong></p>
        <p><strong>Cost per serving: $${(totalCost / recipe.servings).toFixed(2)}</strong> (Makes ${recipe.servings} servings)</p>
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
    });
  }
}
  