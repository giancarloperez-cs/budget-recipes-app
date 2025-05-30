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
          calories: ingredientPriceDB["long grain white rice"].calories * 8, // 8 quarter-cups = 1280 calories
          caloriesPerServing: Math.round((ingredientPriceDB["long grain white rice"].calories * 8) / 6)
        },
        {
          name: "black beans (low sodium)",
          type: "protein",
          quantity: "2 cans (15 oz each)",
          estimatedCost: ingredientPriceDB["black beans (low sodium)"].price * 2,
          calories: ingredientPriceDB["black beans (low sodium)"].calories * 6, // 6 half-cups = 720 calories
          caloriesPerServing: Math.round((ingredientPriceDB["black beans (low sodium)"].calories * 6) / 6)
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1 whole onion, diced",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price,
          calories: ingredientPriceDB["yellow onion (medium)"].calories, // 45 calories
          caloriesPerServing: Math.round(ingredientPriceDB["yellow onion (medium)"].calories / 6)
        },
        {
          name: "chunky medium salsa",
          type: "condiment",
          quantity: "1 cup (8 oz)",
          estimatedCost: ingredientPriceDB["chunky medium salsa"].price / 2,
          calories: ingredientPriceDB["chunky medium salsa"].calories * 4, // 4 quarter-cups = 80 calories
          caloriesPerServing: Math.round((ingredientPriceDB["chunky medium salsa"].calories * 4) / 6)
        }
      ],
      instructions: [
        " Cook rice according to package instructions",
        " Dice onion and sauté until soft",
        " Add beans (drained and rinsed) and heat through",
        " Mix with rice and top with salsa",
        " Optional: Add shredded cheese if desired"
      ],
      servings: 6,
      totalCalories: 2125, // Sum of all ingredient calories
      caloriesPerServing: 354 // Rounded total calories per serving
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
          calories: ingredientPriceDB["penne pasta"].calories * 8, // 8 2-oz servings = 1600 calories
          caloriesPerServing: Math.round((ingredientPriceDB["penne pasta"].calories * 8) / 4)
        },
        {
          name: "chunk light tuna in water",
          type: "protein",
          quantity: "2 cans (5 oz each), drained",
          estimatedCost: ingredientPriceDB["chunk light tuna in water"].price * 2,
          calories: ingredientPriceDB["chunk light tuna in water"].calories * 2, // 2 cans = 200 calories
          caloriesPerServing: Math.round((ingredientPriceDB["chunk light tuna in water"].calories * 2) / 4)
        },
        {
          name: "mixed frozen vegetables",
          type: "produce",
          quantity: "1 bag (12 oz)",
          estimatedCost: ingredientPriceDB["mixed frozen vegetables"].price,
          calories: ingredientPriceDB["mixed frozen vegetables"].calories * 3, // about 3 cups = 210 calories
          caloriesPerServing: Math.round((ingredientPriceDB["mixed frozen vegetables"].calories * 3) / 4)
        }
      ],
      instructions: [
        "1. Cook pasta according to package instructions until al dente",
        "2. Cook frozen vegetables in microwave following package directions",
        "3. Drain tuna well and break into chunks",
        "4. Combine pasta, vegetables, and tuna in a large bowl",
        "5. Season with salt and pepper to taste"
      ],
      servings: 4,
      totalCalories: 2010, // Sum of all ingredient calories
      caloriesPerServing: 503 // Rounded total calories per serving
    },
    {
      category: "Under $10 Total",
      name: "PB&B Breakfast Sandwiches (4 servings)",
      ingredients: [
        {
          name: "whole wheat bread",
          type: "grain",
          quantity: "8 slices",
          estimatedCost: ingredientPriceDB["whole wheat bread"].price,
          calories: ingredientPriceDB["whole wheat bread"].calories * 8, // 8 slices = 640 calories
          caloriesPerServing: Math.round((ingredientPriceDB["whole wheat bread"].calories * 8) / 4)
        },
        {
          name: "creamy peanut butter",
          type: "protein",
          quantity: "4 tablespoons",
          estimatedCost: ingredientPriceDB["creamy peanut butter"].price / 4,
          calories: ingredientPriceDB["creamy peanut butter"].calories * 4, // 4 tbsp = 760 calories
          caloriesPerServing: Math.round((ingredientPriceDB["creamy peanut butter"].calories * 4) / 4)
        },
        {
          name: "yellow bananas",
          type: "fruit",
          quantity: "2 medium",
          estimatedCost: ingredientPriceDB["yellow bananas"].price * 2,
          calories: ingredientPriceDB["yellow bananas"].calories * 2, // 2 bananas = 210 calories
          caloriesPerServing: Math.round((ingredientPriceDB["yellow bananas"].calories * 2) / 4)
        }
      ],
      instructions: [
        "1. Toast bread if desired",
        "2. Spread 1 tablespoon peanut butter on each of 4 bread slices",
        "3. Slice bananas thinly",
        "4. Divide banana slices evenly among sandwiches",
        "5. Top with remaining bread slices and cut diagonally"
      ],
      servings: 4,
      totalCalories: 1610, // Sum of all ingredient calories
      caloriesPerServing: 403 // Rounded total calories per serving
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
          estimatedCost: (ingredientPriceDB["russet potatoes"].price / 10) * 3,
          calories: ingredientPriceDB["russet potatoes"].calories * 3, // 3 potatoes = 330 calories
          caloriesPerServing: Math.round((ingredientPriceDB["russet potatoes"].calories * 3) / 3)
        },
        {
          name: "large grade A eggs",
          type: "protein",
          quantity: "6 eggs",
          estimatedCost: (ingredientPriceDB["large grade A eggs"].price / 12) * 6,
          calories: ingredientPriceDB["large grade A eggs"].calories * 6, // 6 eggs = 420 calories
          caloriesPerServing: Math.round((ingredientPriceDB["large grade A eggs"].calories * 6) / 3)
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1/2 onion, diced",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price / 2,
          calories: Math.round(ingredientPriceDB["yellow onion (medium)"].calories / 2), // half onion = 23 calories
          caloriesPerServing: Math.round((ingredientPriceDB["yellow onion (medium)"].calories / 2) / 3)
        }
      ],
      instructions: [
        "1. Dice potatoes into 1/2 inch cubes",
        "2. Dice half onion finely",
        "3. Fry potatoes until golden and crispy",
        "4. Add onions and cook until soft",
        "5. Beat eggs and pour over potatoes",
        "6. Cook until eggs are set, stirring occasionally"
      ],
      servings: 3,
      totalCalories: 773, // Sum of all ingredient calories
      caloriesPerServing: 258 // Rounded total calories per serving
    },
    {
      category: "Under $2 Per Serving",
      name: "Simple Pasta Marinara (4 servings)",
      ingredients: [
        {
          name: "penne pasta",
          type: "grain",
          quantity: "16 oz box",
          estimatedCost: ingredientPriceDB["penne pasta"].price,
          calories: ingredientPriceDB["penne pasta"].calories * 8, // 16 oz = 8 2-oz servings = 1600 calories
          caloriesPerServing: Math.round((ingredientPriceDB["penne pasta"].calories * 8) / 4)
        },
        {
          name: "tomato sauce (no salt added)",
          type: "sauce",
          quantity: "2 cans (16 oz each)",
          estimatedCost: ingredientPriceDB["tomato sauce (no salt added)"].price * 2,
          calories: ingredientPriceDB["tomato sauce (no salt added)"].calories * 8, // 8 half-cups = 240 calories
          caloriesPerServing: Math.round((ingredientPriceDB["tomato sauce (no salt added)"].calories * 8) / 4)
        },
        {
          name: "fresh garlic head",
          type: "produce",
          quantity: "3 cloves, minced",
          estimatedCost: ingredientPriceDB["fresh garlic head"].price / 2,
          calories: ingredientPriceDB["fresh garlic head"].calories * 3, // 3 cloves = 12 calories
          caloriesPerServing: Math.round((ingredientPriceDB["fresh garlic head"].calories * 3) / 4)
        }
      ],
      instructions: [
        "1. Bring a large pot of water to boil and cook pasta until al dente (about 11 minutes)",
        "2. Meanwhile, mince garlic cloves",
        "3. In a large pan, heat tomato sauce and add minced garlic",
        "4. Simmer sauce for 10 minutes to develop flavors",
        "5. Drain pasta and combine with sauce"
      ],
      servings: 4,
      totalCalories: 1852, // Sum of all ingredient calories
      caloriesPerServing: 463 // Rounded total calories per serving
    },
    {
      category: "Under $2 Per Serving",
      name: "Black Bean Soup (6 servings)",
      ingredients: [
        {
          name: "black beans (low sodium)",
          type: "protein",
          quantity: "3 cans (15 oz each)",
          estimatedCost: ingredientPriceDB["black beans (low sodium)"].price * 3,
          calories: ingredientPriceDB["black beans (low sodium)"].calories * 9, // 9 half-cups = 1080 calories
          caloriesPerServing: Math.round((ingredientPriceDB["black beans (low sodium)"].calories * 9) / 6)
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1 whole onion, diced",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price,
          calories: ingredientPriceDB["yellow onion (medium)"].calories, // 45 calories
          caloriesPerServing: Math.round(ingredientPriceDB["yellow onion (medium)"].calories / 6)
        },
        {
          name: "low sodium chicken broth",
          type: "liquid",
          quantity: "32 oz (4 cups)",
          estimatedCost: ingredientPriceDB["low sodium chicken broth"].price,
          calories: ingredientPriceDB["low sodium chicken broth"].calories * 4, // 4 cups = 40 calories
          caloriesPerServing: Math.round((ingredientPriceDB["low sodium chicken broth"].calories * 4) / 6)
        }
      ],
      instructions: [
        "1. Dice onion finely",
        "2. In a large pot, sauté onion until translucent (about 5 minutes)",
        "3. Add beans with their liquid and broth",
        "4. Bring to a simmer and cook for 15 minutes",
        "5. Optional: blend half the soup for a creamier texture",
        "6. Season with salt and pepper to taste"
      ],
      servings: 6,
      totalCalories: 1165, // Sum of all ingredient calories
      caloriesPerServing: 194 // Rounded total calories per serving
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
          estimatedCost: ingredientPriceDB["80/20 ground beef"].price,
          calories: ingredientPriceDB["80/20 ground beef"].calories * 4, // 4 4-oz servings = 1160 calories
          caloriesPerServing: Math.round((ingredientPriceDB["80/20 ground beef"].calories * 4) / 6)
        },
        {
          name: "black beans (low sodium)",
          type: "protein",
          quantity: "2 cans (15 oz each)",
          estimatedCost: ingredientPriceDB["black beans (low sodium)"].price * 2,
          calories: ingredientPriceDB["black beans (low sodium)"].calories * 6, // 6 half-cups = 720 calories
          caloriesPerServing: Math.round((ingredientPriceDB["black beans (low sodium)"].calories * 6) / 6)
        },
        {
          name: "diced tomatoes (no salt added)",
          type: "produce",
          quantity: "2 cans (14.5 oz each)",
          estimatedCost: ingredientPriceDB["diced tomatoes (no salt added)"].price * 2,
          calories: ingredientPriceDB["diced tomatoes (no salt added)"].calories * 8, // 8 half-cups = 240 calories
          caloriesPerServing: Math.round((ingredientPriceDB["diced tomatoes (no salt added)"].calories * 8) / 6)
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1 whole onion, diced",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price,
          calories: ingredientPriceDB["yellow onion (medium)"].calories, // 45 calories
          caloriesPerServing: Math.round(ingredientPriceDB["yellow onion (medium)"].calories / 6)
        }
      ],
      instructions: [
        "1. Dice onion finely",
        "2. In a large pot, brown ground beef with diced onion, breaking meat into small pieces",
        "3. Drain excess fat if desired",
        "4. Add beans (with liquid) and diced tomatoes",
        "5. Bring to a simmer and cook for 20 minutes, stirring occasionally",
        "6. Season with salt and pepper to taste",
        "7. Optional: Top with shredded cheese"
      ],
      servings: 6,
      totalCalories: 2165, // Sum of all ingredient calories
      caloriesPerServing: 361 // Rounded total calories per serving
    },
    {
      category: "Family Size Under $15",
      name: "Rotisserie Chicken Rice Bowls (6 servings)",
      ingredients: [
        {
          name: "seasoned rotisserie chicken",
          type: "protein",
          quantity: "1 whole chicken (2 lb)",
          estimatedCost: ingredientPriceDB["seasoned rotisserie chicken"].price,
          calories: ingredientPriceDB["seasoned rotisserie chicken"].calories * 2, // whole chicken = 1500 calories
          caloriesPerServing: Math.round((ingredientPriceDB["seasoned rotisserie chicken"].calories * 2) / 6)
        },
        {
          name: "long grain white rice",
          type: "grain",
          quantity: "2 cups dry (about 1 lb)",
          estimatedCost: (ingredientPriceDB["long grain white rice"].price / 5) * 2,
          calories: ingredientPriceDB["long grain white rice"].calories * 8, // 8 quarter-cups = 1280 calories
          caloriesPerServing: Math.round((ingredientPriceDB["long grain white rice"].calories * 8) / 6)
        },
        {
          name: "mixed frozen vegetables",
          type: "produce",
          quantity: "2 bags (12 oz each)",
          estimatedCost: ingredientPriceDB["mixed frozen vegetables"].price * 2,
          calories: ingredientPriceDB["mixed frozen vegetables"].calories * 6, // 6 cups = 420 calories
          caloriesPerServing: Math.round((ingredientPriceDB["mixed frozen vegetables"].calories * 6) / 6)
        }
      ],
      instructions: [
        "1. Cook rice according to package instructions",
        "2. While rice cooks, remove meat from rotisserie chicken and shred",
        "3. Cook frozen vegetables in microwave according to package directions",
        "4. In a large bowl, combine rice, shredded chicken, and vegetables",
        "5. Season with salt and pepper to taste",
        "6. Optional: Add soy sauce for extra flavor"
      ],
      servings: 6,
      totalCalories: 3200, // Sum of all ingredient calories
      caloriesPerServing: 533 // Rounded total calories per serving
    },
    {
      category: "Family Size Under $15",
      name: "Hearty Potato & Ground Beef Skillet (6 servings)",
      ingredients: [
        {
          name: "80/20 ground beef",
          type: "protein",
          quantity: "1 lb",
          estimatedCost: ingredientPriceDB["80/20 ground beef"].price,
          calories: ingredientPriceDB["80/20 ground beef"].calories * 4, // 4 4-oz servings = 1160 calories
          caloriesPerServing: Math.round((ingredientPriceDB["80/20 ground beef"].calories * 4) / 6)
        },
        {
          name: "russet potatoes",
          type: "produce",
          quantity: "6 medium potatoes",
          estimatedCost: (ingredientPriceDB["russet potatoes"].price / 10) * 6,
          calories: ingredientPriceDB["russet potatoes"].calories * 6, // 6 potatoes = 660 calories
          caloriesPerServing: Math.round((ingredientPriceDB["russet potatoes"].calories * 6) / 6)
        },
        {
          name: "yellow onion (medium)",
          type: "produce",
          quantity: "1 whole onion, diced",
          estimatedCost: ingredientPriceDB["yellow onion (medium)"].price,
          calories: ingredientPriceDB["yellow onion (medium)"].calories, // 45 calories
          caloriesPerServing: Math.round(ingredientPriceDB["yellow onion (medium)"].calories / 6)
        },
        {
          name: "whole kernel corn",
          type: "produce",
          quantity: "1 can (15.25 oz)",
          estimatedCost: ingredientPriceDB["whole kernel corn"].price,
          calories: ingredientPriceDB["whole kernel corn"].calories * 2, // about 2 cups = 280 calories
          caloriesPerServing: Math.round((ingredientPriceDB["whole kernel corn"].calories * 2) / 6)
        }
      ],
      instructions: [
        "1. Wash and dice potatoes into 1/2 inch cubes",
        "2. Dice onion finely",
        "3. In a large skillet, brown ground beef with onion, breaking meat into small pieces",
        "4. Remove beef mixture and set aside, leaving some fat in the pan",
        "5. Add diced potatoes to the same skillet and cook until golden and tender (about 15 minutes)",
        "6. Return beef mixture to the pan",
        "7. Add drained corn and heat through",
        "8. Season with salt and pepper to taste"
      ],
      servings: 6,
      totalCalories: 2145, // Sum of all ingredient calories
      caloriesPerServing: 358 // Rounded total calories per serving
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
      Calorie information is estimated based on standard serving sizes and typical portions. 
      Actual calories may vary based on specific products used and preparation methods.
      Prices shown are estimates from Walmart US stores and were last updated in 2024.
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
              Calories: ~${item.calories} total (${item.caloriesPerServing} cal per serving)
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
          <p><strong>Total Calories: ${totalCalories}</strong></p>
          <p><strong>Calories per serving: ${caloriesPerServing}</strong></p>
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
  