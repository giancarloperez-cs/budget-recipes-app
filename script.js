// Recipe and ingredient data with price ranges and specific brands
const recipeData = {
  walmart: [
    { 
      name: "Chicken Stir Fry",
      ingredients: [
        {
          name: "chicken breast",
          type: "meat",
          quantity: "1 lb",
          searchTerms: ["chicken breast", "chicken breasts", "boneless chicken breast"],
          recommendedBrands: []  // Will be populated with real-time data
        },
        {
          name: "frozen vegetables",
          type: "produce",
          quantity: "1 bag (16 oz)",
          searchTerms: ["stir fry vegetables", "frozen vegetable mix"],
          recommendedBrands: []
        },
        {
          name: "soy sauce",
          type: "condiment",
          quantity: "1/4 cup",
          searchTerms: ["soy sauce"],
          recommendedBrands: []
        }
      ],
      instructions: [
        "1. Cut chicken into bite-sized pieces",
        "2. Heat oil in a large pan or wok",
        "3. Cook chicken until golden brown",
        "4. Add frozen vegetables and stir fry until heated through",
        "5. Add soy sauce and stir to combine",
        "6. Serve hot"
      ]
    },
    // Add more recipes here
  ],
  aldi: [
    { name: "Egg Stir Fry", ingredients: ["eggs", "frozen veggies", "soy sauce"] },
    { name: "Peanut Butter Toast", ingredients: ["whole grain bread", "peanut butter", "banana"] },
  ],
  local: [
    { name: "Pasta with Veggies", ingredients: ["pasta", "tomato sauce", "carrots"] },
    { name: "Tuna Wrap", ingredients: ["tortilla", "canned tuna", "lettuce"] },
  ]
};

// Function to fetch product prices from Walmart using web scraping
async function fetchWalmartPrices(searchTerm) {
  try {
    // Using a proxy service or web scraping API would go here
    // For now, we'll return mock data to demonstrate functionality
    const mockProducts = [
      {
        name: "Great Value Chicken Breast",
        brand: "Great Value",
        price: 7.98,
        unit: "per lb",
        itemId: "123456"
      },
      {
        name: "Tyson Chicken Breast",
        brand: "Tyson",
        price: 9.98,
        unit: "per lb",
        itemId: "234567"
      }
    ];
    
    // Sort by price to get cheapest options first
    return mockProducts.sort((a, b) => a.price - b.price);
  } catch (error) {
    console.error('Error fetching prices:', error);
    return null;
  }
}

// Function to find the cheapest option for each ingredient
async function findCheapestIngredients(ingredients) {
  const results = [];
  
  for (const ingredient of ingredients) {
    let cheapestOption = null;
    let lowestPrice = Infinity;
    
    for (const searchTerm of ingredient.searchTerms) {
      const products = await fetchWalmartPrices(searchTerm);
      if (products && products.length > 0) {
        const cheapestProduct = products[0];
        if (cheapestProduct.price < lowestPrice) {
          lowestPrice = cheapestProduct.price;
          cheapestOption = {
            name: cheapestProduct.name,
            brand: cheapestProduct.brand,
            price: cheapestProduct.price,
            unit: cheapestProduct.unit,
            itemId: cheapestProduct.itemId
          };
        }
      }
    }
    
    if (cheapestOption) {
      results.push({
        ingredient: ingredient.name,
        recommendation: cheapestOption
      });
    }
  }
  
  return results;
}

async function showRecipes() {
  const userInput = document.getElementById('storeInput').value.trim().toLowerCase();
  const recipesDiv = document.getElementById('recipes');
  recipesDiv.innerHTML = "<p>Searching for the best deals...</p>";

  const matchedStore = Object.keys(recipeData).find(key => userInput.includes(key));

  if (!matchedStore) {
    recipesDiv.innerHTML = `<p style="color: red;">Sorry, we don't have recipes for that store yet. Try Walmart, Aldi, or Local.</p>`;
    return;
  }

  try {
    for (const recipe of recipeData[matchedStore]) {
      const cheapestIngredients = await findCheapestIngredients(recipe.ingredients);
      
      const div = document.createElement('div');
      div.className = "recipe";
      
      let totalCost = 0;
      let ingredientsList = '';
      
      cheapestIngredients.forEach(item => {
        totalCost += item.recommendation.price;
        ingredientsList += `
          <li>
            ${item.ingredient} - ${item.recommendation.brand}
            <br>
            <small>Best price: $${item.recommendation.price.toFixed(2)} ${item.recommendation.unit}</small>
          </li>
        `;
      });

      div.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Estimated Total Cost: $${totalCost.toFixed(2)}</strong></p>
        <div class="ingredients">
          <h4>Ingredients (Best Deals):</h4>
          <ul>${ingredientsList}</ul>
        </div>
        <div class="instructions">
          <h4>Instructions:</h4>
          <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
        </div>
      `;
      
      recipesDiv.appendChild(div);
    }
  } catch (error) {
    console.error('Error:', error);
    recipesDiv.innerHTML = `<p style="color: red;">Sorry, there was an error fetching the latest prices. Please try again later.</p>`;
  }
}
  