// Static database of common ingredient prices and calories (approximate Walmart prices)
const ingredientPriceDB = {
  // Proteins
  "boneless skinless chicken breast": { price: 3.98, unit: "per lb", brand: "Great Value", calories: 120 }, // per 4 oz
  "80/20 ground beef": { price: 4.94, unit: "per lb", brand: "Great Value", calories: 290 }, // per 4 oz
  "large grade A eggs": { price: 4.98, unit: "per dozen", brand: "Great Value", calories: 70 }, // per egg
  "extra firm tofu (14 oz block)": { price: 1.98, unit: "per block", brand: "Great Value", calories: 90 }, // per 4 oz
  "chunk light tuna in water": { price: 0.88, unit: "5 oz can", brand: "Great Value", calories: 100 }, // per can
  "seasoned rotisserie chicken": { price: 4.98, unit: "2 lb chicken", brand: "Walmart Deli", calories: 750 }, // per half chicken
  "creamy peanut butter": { price: 1.97, unit: "15 oz jar", brand: "Great Value", calories: 190 }, // per 2 tbsp
  
  // Vegetables & Fruits
  "mixed frozen vegetables": { price: 1.98, unit: "12 oz bag", brand: "Great Value", calories: 70 }, // per cup
  "yellow onion (medium)": { price: 0.98, unit: "each", brand: "Fresh Produce", calories: 45 }, // per onion
  "fresh garlic head": { price: 0.50, unit: "per head", brand: "Fresh Produce", calories: 4 }, // per clove
  "whole carrots": { price: 1.48, unit: "per lb", brand: "Fresh Produce", calories: 30 }, // per medium carrot
  "russet potatoes": { price: 4.98, unit: "5 lb bag", brand: "Fresh Produce", calories: 110 }, // per medium potato
  "yellow bananas": { price: 0.25, unit: "each", brand: "Fresh Produce", calories: 105 }, // per banana
  "whole kernel corn": { price: 0.68, unit: "15.25 oz can", brand: "Great Value", calories: 140 }, // per cup
  "diced tomatoes (no salt added)": { price: 0.88, unit: "14.5 oz can", brand: "Great Value", calories: 30 }, // per 1/2 cup
  
  // Pantry Items
  "long grain white rice": { price: 4.48, unit: "5 lb bag", brand: "Great Value", calories: 160 }, // per 1/4 cup dry
  "penne pasta": { price: 1.00, unit: "16 oz box", brand: "Great Value", calories: 200 }, // per 2 oz dry
  "reduced sodium soy sauce": { price: 1.98, unit: "15 oz bottle", brand: "Great Value", calories: 10 }, // per tbsp
  "extra virgin olive oil": { price: 4.98, unit: "17 oz bottle", brand: "Great Value", calories: 120 }, // per tbsp
  "black beans (low sodium)": { price: 0.78, unit: "15 oz can", brand: "Great Value", calories: 120 }, // per 1/2 cup
  "low sodium chicken broth": { price: 1.38, unit: "32 oz carton", brand: "Great Value", calories: 10 }, // per cup
  "tomato sauce (no salt added)": { price: 0.48, unit: "8 oz can", brand: "Great Value", calories: 30 }, // per 1/2 cup
  "chunky medium salsa": { price: 1.98, unit: "24 oz jar", brand: "Great Value", calories: 20 }, // per 1/4 cup
  
  // Dairy
  "2% reduced fat milk": { price: 3.98, unit: "per gallon", brand: "Great Value", calories: 120 }, // per cup
  "mild cheddar cheese block": { price: 2.98, unit: "8 oz block", brand: "Great Value", calories: 110 }, // per oz
  "unsalted butter": { price: 3.98, unit: "16 oz (4 sticks)", brand: "Great Value", calories: 100 }, // per tbsp
  
  // Bread & Bakery
  "whole wheat bread": { price: 1.00, unit: "20 oz loaf", brand: "Great Value", calories: 80 }, // per slice
  "flour tortillas (8-inch)": { price: 1.98, unit: "10 count", brand: "Great Value", calories: 140 } // per tortilla
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
          name: "long grain white rice",
          type: "grain",
          quantity: "2 cups dry (about 1 lb)",
          estimatedCost: (ingredientPriceDB["long grain white rice"].price / 5) * 2,
          calories: ingredientPriceDB["long grain white rice"].calories * 8 // 8 quarter-cups
        },
        {
          name: "black beans (low sodium)",
          type: "protein",
          quantity: "2 cans (15 oz each)",
          estimatedCost: ingredientPriceDB["black beans (low sodium)"].price * 2,
          calories: ingredientPriceDB["black beans (low sodium)"].calories * 6
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1 whole onion, diced",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price,
          calories: ingredientPriceDB["yellow onion (medium)"].calories
        },
        {
          name: "chunky medium salsa",
          type: "condiment",
          quantity: "1 cup (8 oz)",
          estimatedCost: ingredientPriceDB["chunky medium salsa"].price / 2,
          calories: ingredientPriceDB["chunky medium salsa"].calories * 4
        }
      ],
      instructions: [
        "1. Cook rice according to package instructions",
        "2. Dice onion and sauté until soft",
        "3. Add beans (drained and rinsed) and heat through",
        "4. Mix with rice and top with salsa",
        "5. Optional: Add shredded cheese if desired"
      ],
      servings: 6
    },
    {
      category: "Under $10 Total",
      name: "Tuna Pasta Bowl (4 servings)",
      ingredients: [
        {
          name: "penne pasta",
          type: "grain",
          quantity: "16 oz box",
          estimatedCost: ingredientPriceDB["penne pasta"].price,
          calories: ingredientPriceDB["penne pasta"].calories * 8 // 8 2-oz servings
        },
        {
          name: "chunk light tuna in water",
          type: "protein",
          quantity: "2 cans (5 oz each), drained",
          estimatedCost: ingredientPriceDB["chunk light tuna in water"].price * 2,
          calories: ingredientPriceDB["chunk light tuna in water"].calories * 2
        },
        {
          name: "mixed frozen vegetables",
          type: "produce",
          quantity: "1 bag (12 oz)",
          estimatedCost: ingredientPriceDB["mixed frozen vegetables"].price,
          calories: ingredientPriceDB["mixed frozen vegetables"].calories * 3 // about 3 cups
        }
      ],
      instructions: [
        "1. Cook pasta according to package instructions until al dente",
        "2. Cook frozen vegetables in microwave following package directions",
        "3. Drain tuna well and break into chunks",
        "4. Combine pasta, vegetables, and tuna in a large bowl",
        "5. Season with salt and pepper to taste"
      ],
      servings: 4
    },
    {
      category: "Under $10 Total",
      name: "PB&B Breakfast Sandwiches (4 servings)",
      ingredients: [
        {
          name: "whole wheat bread",
          type: "grain",
          quantity: "8 slices",
          estimatedCost: ingredientPriceDB["whole wheat bread"].price
        },
        {
          name: "creamy peanut butter",
          type: "protein",
          quantity: "4 tablespoons",
          estimatedCost: ingredientPriceDB["creamy peanut butter"].price / 4
        },
        {
          name: "yellow bananas",
          type: "fruit",
          quantity: "2",
          estimatedCost: ingredientPriceDB["yellow bananas"].price * 2
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
          name: "russet potatoes",
          type: "produce",
          quantity: "3 medium",
          estimatedCost: (ingredientPriceDB["russet potatoes"].price / 10) * 3 // Assuming 10 potatoes per 5lb bag
        },
        {
          name: "large grade A eggs",
          type: "protein",
          quantity: "6",
          estimatedCost: (ingredientPriceDB["large grade A eggs"].price / 12) * 6
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1/2",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price / 2
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
          name: "penne pasta",
          type: "grain",
          quantity: "16 oz box",
          estimatedCost: ingredientPriceDB["penne pasta"].price
        },
        {
          name: "tomato sauce (no salt added)",
          type: "sauce",
          quantity: "2 cans (16 oz)",
          estimatedCost: ingredientPriceDB["tomato sauce (no salt added)"].price * 2
        },
        {
          name: "fresh garlic head",
          type: "produce",
          quantity: "3 cloves",
          estimatedCost: ingredientPriceDB["fresh garlic head"].price / 2
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
          name: "black beans (low sodium)",
          type: "protein",
          quantity: "3 cans (15 oz each)",
          estimatedCost: ingredientPriceDB["black beans (low sodium)"].price * 3
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price
        },
        {
          name: "low sodium chicken broth",
          type: "liquid",
          quantity: "32 oz",
          estimatedCost: ingredientPriceDB["low sodium chicken broth"].price
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
          name: "80/20 ground beef",
          type: "protein",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["80/20 ground beef"].price
        },
        {
          name: "black beans (low sodium)",
          type: "protein",
          quantity: "2 cans (15 oz each)",
          estimatedCost: ingredientPriceDB["black beans (low sodium)"].price * 2
        },
        {
          name: "diced tomatoes (no salt added)",
          type: "produce",
          quantity: "2 cans",
          estimatedCost: ingredientPriceDB["diced tomatoes (no salt added)"].price * 2
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price
        }
      ],
      instructions: [
        "1. Brown ground beef with diced onion",
        "2. Add beans and tomatoes",
        "3. Simmer for 20 minutes",
        "4. Season with salt and pepper",
        "5. Optional: Top with shredded cheese"
      ],
      servings: 6
    },
    {
      category: "Family Size Under $15",
      name: "Rotisserie Chicken Rice Bowls (6 servings)",
      ingredients: [
        {
          name: "seasoned rotisserie chicken",
          type: "protein",
          quantity: "2 lb chicken",
          estimatedCost: ingredientPriceDB["seasoned rotisserie chicken"].price
        },
        {
          name: "long grain white rice",
          type: "grain",
          quantity: "2 cups dry",
          estimatedCost: (ingredientPriceDB["long grain white rice"].price / 5) * 2
        },
        {
          name: "mixed frozen vegetables",
          type: "produce",
          quantity: "2 bags",
          estimatedCost: ingredientPriceDB["mixed frozen vegetables"].price * 2
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
          name: "80/20 ground beef",
          type: "protein",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["80/20 ground beef"].price
        },
        {
          name: "russet potatoes",
          type: "produce",
          quantity: "6 medium",
          estimatedCost: (ingredientPriceDB["russet potatoes"].price / 10) * 6
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price
        },
        {
          name: "whole kernel corn",
          type: "produce",
          quantity: "1 can",
          estimatedCost: ingredientPriceDB["whole kernel corn"].price
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

  // Add price and calorie warning at the top
  const warningDiv = document.createElement('div');
  warningDiv.className = "price-warning";
  warningDiv.innerHTML = `
    <p>
      <strong>⚠️ Notice:</strong> All prices and calorie counts shown are approximate. 
      Prices are based on Great Value or store brand items when available and may vary by location and time of year. 
      Calorie information is estimated based on standard serving sizes. Prices shown are estimates from Walmart US stores and were last updated in 2024.
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
    categoryDiv.innerHTML = `<h2>${category}</h2>`;
    recipesDiv.appendChild(categoryDiv);

    recipes.forEach(recipe => {
      const div = document.createElement('div');
      div.className = "recipe";
      
      let totalCost = 0;
      let totalCalories = 0;
      let ingredientsList = '';
      
      recipe.ingredients.forEach(item => {
        totalCost += item.estimatedCost;
        totalCalories += item.calories;
        ingredientsList += `
          <li>
            ${item.name} - ${item.quantity}
            <br>
            <small>
              Estimated cost: $${item.estimatedCost.toFixed(2)} 
              (${ingredientPriceDB[item.name].brand} - ${ingredientPriceDB[item.name].unit})
              <br>
              Calories: ~${item.calories} cal
            </small>
          </li>
        `;
      });

      const caloriesPerServing = Math.round(totalCalories / recipe.servings);

      div.innerHTML = `
        <h3>${recipe.name}</h3>
        <div class="recipe-summary">
          <p><strong>Estimated Total Cost: $${totalCost.toFixed(2)}</strong></p>
          <p><strong>Cost per serving: $${(totalCost / recipe.servings).toFixed(2)}</strong> (Makes ${recipe.servings} servings)</p>
          <p><strong>Calories per serving: ~${caloriesPerServing}</strong> (Total: ~${totalCalories} cal)</p>
        </div>
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
  