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
  "flour tortillas (8-inch)": { price: 1.98, unit: "10 count", brand: "Great Value", calories: 140 }, // per tortilla

  // Costco specific items
  "kirkland ground beef": { price: 19.99, unit: "5.5 lb pack", brand: "Kirkland Signature", calories: 290 }, // per 4 oz
  "rotisserie chicken costco": { price: 4.99, unit: "3 lb chicken", brand: "Kirkland Signature", calories: 750 }, // per half chicken
  "kirkland chicken breast": { price: 21.99, unit: "6.5 lb pack", brand: "Kirkland Signature", calories: 120 }, // per 4 oz
  "kirkland bacon": { price: 16.99, unit: "4 lb pack", brand: "Kirkland Signature", calories: 90 }, // per 2 slices
  "kirkland mozzarella": { price: 13.99, unit: "2.5 lb bag", brand: "Kirkland Signature", calories: 80 }, // per oz
  "kirkland rice": { price: 16.99, unit: "25 lb bag", brand: "Kirkland Signature", calories: 160 }, // per 1/4 cup dry
  "kirkland pasta": { price: 9.99, unit: "8 lb box", brand: "Kirkland Signature", calories: 200 }, // per 2 oz dry
  "kirkland marinara": { price: 9.99, unit: "3-pack 45oz jars", brand: "Kirkland Signature", calories: 70 }, // per 1/2 cup
  "kirkland frozen vegetables": { price: 12.99, unit: "5.5 lb bag", brand: "Kirkland Signature", calories: 70 }, // per cup
  "kirkland eggs": { price: 8.99, unit: "24 count", brand: "Kirkland Signature", calories: 70 }, // per egg
  "kirkland tortillas": { price: 6.99, unit: "20 count", brand: "Kirkland Signature", calories: 140 }, // per tortilla

  // Food 4 Less specific items
  "kroger lean ground beef": { price: 4.49, unit: "per lb", brand: "Kroger", calories: 290 }, // per 4 oz, 80/20 lean
  "foster farms chicken breast": { price: 3.49, unit: "per lb", brand: "Foster Farms", calories: 120 }, // per 4 oz, boneless skinless
  "mahatma long grain rice": { price: 3.99, unit: "5 lb bag", brand: "Mahatma", calories: 160 }, // per 1/4 cup dry
  "barilla penne pasta": { price: 0.89, unit: "16 oz box", brand: "Barilla", calories: 200 }, // per 2 oz dry
  "ragu traditional marinara": { price: 1.99, unit: "24 oz jar", brand: "Ragu", calories: 70 }, // per 1/2 cup
  "birdseye mixed vegetables": { price: 1.49, unit: "12 oz bag", brand: "Bird's Eye", calories: 70 }, // per cup, carrots, peas, corn & green beans
  "kroger large eggs": { price: 3.99, unit: "dozen", brand: "Kroger", calories: 70 }, // per egg, grade A
  "kroger wheat bread": { price: 0.99, unit: "20 oz loaf", brand: "Kroger", calories: 80 }, // per slice
  "kroger black beans": { price: 0.69, unit: "15 oz can", brand: "Kroger", calories: 120 }, // per 1/2 cup, low sodium
  "hunts diced tomatoes": { price: 0.79, unit: "14.5 oz can", brand: "Hunt's", calories: 30 }, // per 1/2 cup, no salt added
  "kroger mild cheddar": { price: 2.99, unit: "8 oz block", brand: "Kroger", calories: 110 } // per oz
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
        "Cook pasta according to package instructions until al dente",
        "Cook frozen vegetables in microwave following package directions",
        "Drain tuna well and break into chunks",
        "Combine pasta, vegetables, and tuna in a large bowl",
        "Season with salt and pepper to taste"
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
        "Toast bread if desired",
        "Spread 1 tablespoon peanut butter on each of 4 bread slices",
        "Slice bananas thinly",
        "Divide banana slices evenly among sandwiches",
        "Top with remaining bread slices and cut diagonally"
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
        "Dice potatoes into 1/2 inch cubes",
        "Dice half onion finely",
        "Fry potatoes until golden and crispy",
        "Add onions and cook until soft",
        "Beat eggs and pour over potatoes",
        "Cook until eggs are set, stirring occasionally"
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
        "Bring a large pot of water to boil and cook pasta until al dente (about 11 minutes)",
        "Meanwhile, mince garlic cloves",
        "In a large pan, heat tomato sauce and add minced garlic",
        "Simmer sauce for 10 minutes to develop flavors",
        "Drain pasta and combine with sauce"
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
        "Dice onion finely",
        "In a large pot, sauté onion until translucent (about 5 minutes)",
        "Add beans with their liquid and broth",
        "Bring to a simmer and cook for 15 minutes",
        "Optional: blend half the soup for a creamier texture",
        "Season with salt and pepper to taste"
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
        "Dice onion finely",
        "In a large pot, brown ground beef with diced onion, breaking meat into small pieces",
        "Drain excess fat if desired",
        "Add beans (with liquid) and diced tomatoes",
        "Bring to a simmer and cook for 20 minutes, stirring occasionally",
        "Season with salt and pepper to taste",
        "Optional: Top with shredded cheese"
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
        "Cook rice according to package instructions",
        "While rice cooks, remove meat from rotisserie chicken and shred",
        "Cook frozen vegetables in microwave according to package directions",
        "In a large bowl, combine rice, shredded chicken, and vegetables",
        "Season with salt and pepper to taste",
        "Optional: Add soy sauce for extra flavor"
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
        "Wash and dice potatoes into 1/2 inch cubes",
        "Dice onion finely",
        "In a large skillet, brown ground beef with onion, breaking meat into small pieces",
        "Remove beef mixture and set aside, leaving some fat in the pan",
        "Add diced potatoes to the same skillet and cook until golden and tender (about 15 minutes)",
        "Return beef mixture to the pan",
        "Add drained corn and heat through",
        "Season with salt and pepper to taste"
      ],
      servings: 6,
      totalCalories: 2145, // Sum of all ingredient calories
      caloriesPerServing: 358 // Rounded total calories per serving
    }
  ],
  
  costco: [
    // Under $30 Total Category (adjusted for Costco bulk sizing)
    {
      category: "Under $30 Total",
      name: "Bulk Meal Prep Chicken & Rice (12 servings)",
      ingredients: [
        {
          name: "kirkland chicken breast",
          type: "protein",
          quantity: "3 lbs",
          estimatedCost: (21.99 / 6.5) * 3,
          calories: 1440, // 12 4-oz servings
          caloriesPerServing: 120
        },
        {
          name: "kirkland rice",
          type: "grain",
          quantity: "3 cups dry",
          estimatedCost: (16.99 / 50) * 3, // 25lb = ~50 cups
          calories: 1920, // 12 quarter-cup servings
          caloriesPerServing: 160
        },
        {
          name: "kirkland frozen vegetables",
          type: "produce",
          quantity: "6 cups",
          estimatedCost: (12.99 / 22) * 6, // 5.5lb = ~22 cups
          calories: 420, // 6 cups
          caloriesPerServing: 35
        }
      ],
      instructions: [
        "Cook rice according to package instructions",
        "Cut chicken breasts into even portions",
        "Season chicken with salt and pepper",
        "Cook chicken in batches until done",
        "Steam frozen vegetables according to package directions",
        "Portion into 12 containers",
        "Optional: Add your favorite sauce when serving"
      ],
      servings: 12,
      totalCalories: 3780,
      caloriesPerServing: 315
    },
    {
      category: "Under $30 Total",
      name: "Big Batch Pasta & Marinara (15 servings)",
      ingredients: [
        {
          name: "kirkland pasta",
          type: "grain",
          quantity: "3 lbs",
          estimatedCost: (9.99 / 8) * 3,
          calories: 3000, // 15 2-oz servings
          caloriesPerServing: 200
        },
        {
          name: "kirkland marinara",
          type: "sauce",
          quantity: "2 jars (90 oz total)",
          estimatedCost: (9.99 / 3) * 2,
          calories: 1050, // 15 half-cup servings
          caloriesPerServing: 70
        },
        {
          name: "kirkland mozzarella",
          type: "dairy",
          quantity: "1 lb",
          estimatedCost: (13.99 / 2.5) * 1,
          calories: 1280, // 16 oz
          caloriesPerServing: 85
        }
      ],
      instructions: [
        "Bring a large pot of water to boil",
        "Cook pasta in batches until al dente",
        "Heat marinara sauce in a separate pot",
        "Combine pasta and sauce",
        "Top each portion with shredded mozzarella",
        "Optional: Add Italian herbs or garlic powder"
      ],
      servings: 15,
      totalCalories: 5330,
      caloriesPerServing: 355
    },

    // Family Size Under $50 Category
    {
      category: "Family Size Under $50",
      name: "Chicken Mozzarella Pasta Bake (20 servings)",
      ingredients: [
        {
          name: "kirkland chicken breast",
          type: "protein",
          quantity: "4 lbs",
          estimatedCost: (21.99 / 6.5) * 4,
          calories: 1920, // 16 4-oz servings
          caloriesPerServing: 96
        },
        {
          name: "kirkland pasta",
          type: "grain",
          quantity: "4 lbs",
          estimatedCost: (9.99 / 8) * 4,
          calories: 4000, // 20 2-oz servings
          caloriesPerServing: 200
        },
        {
          name: "kirkland marinara",
          type: "sauce",
          quantity: "2 jars (90 oz total)",
          estimatedCost: (9.99 / 3) * 2,
          calories: 1400, // 20 half-cup servings
          caloriesPerServing: 70
        },
        {
          name: "kirkland mozzarella",
          type: "dairy",
          quantity: "2 lbs",
          estimatedCost: (13.99 / 2.5) * 2,
          calories: 2560, // 32 oz
          caloriesPerServing: 128
        }
      ],
      instructions: [
        "Cut chicken breasts into bite-sized pieces",
        "Season chicken with salt, pepper, and Italian herbs",
        "Cook chicken in batches until golden",
        "Cook pasta in large pots until al dente",
        "Mix pasta with marinara sauce and cooked chicken",
        "Transfer to baking dishes, top with mozzarella",
        "Bake at 375°F until cheese is melted and bubbly",
        "Optional: Garnish with fresh basil if desired"
      ],
      servings: 20,
      totalCalories: 9880,
      caloriesPerServing: 494
    },
    {
      category: "Family Size Under $50",
      name: "Breakfast Meal Prep (24 servings)",
      ingredients: [
        {
          name: "kirkland bacon",
          type: "protein",
          quantity: "2 lbs",
          estimatedCost: (16.99 / 4) * 2,
          calories: 2160, // 48 slices (2 per serving)
          caloriesPerServing: 90
        },
        {
          name: "kirkland eggs",
          type: "protein",
          quantity: "24 eggs",
          estimatedCost: 8.99,
          calories: 1680, // 24 eggs
          caloriesPerServing: 70
        },
        {
          name: "kirkland frozen vegetables",
          type: "produce",
          quantity: "6 cups",
          estimatedCost: (12.99 / 22) * 6,
          calories: 420, // 6 cups
          caloriesPerServing: 17.5
        }
      ],
      instructions: [
        "Cook bacon in batches until crispy",
        "Drain on paper towels",
        "Scramble eggs in batches",
        "Steam vegetables according to package",
        "Portion into containers",
        "Optional: Add cheese or hot sauce when serving"
      ],
      servings: 24,
      totalCalories: 4260,
      caloriesPerServing: 177.5
    },
    {
      category: "Family Size Under $50",
      name: "Rotisserie Chicken Feast (10 servings)",
      ingredients: [
        {
          name: "rotisserie chicken costco",
          type: "protein",
          quantity: "2 whole chickens",
          estimatedCost: 4.99 * 2,
          calories: 3000, // 2 whole chickens
          caloriesPerServing: 300
        },
        {
          name: "kirkland rice",
          type: "grain",
          quantity: "2.5 cups dry",
          estimatedCost: (16.99 / 50) * 2.5,
          calories: 1600, // 10 quarter-cup servings
          caloriesPerServing: 160
        },
        {
          name: "kirkland frozen vegetables",
          type: "produce",
          quantity: "5 cups",
          estimatedCost: (12.99 / 22) * 5,
          calories: 350, // 5 cups
          caloriesPerServing: 35
        }
      ],
      instructions: [
        "Cook rice according to package instructions",
        "Remove meat from rotisserie chickens",
        "Steam vegetables according to package",
        "Combine rice, chicken, and vegetables",
        "Season with salt and pepper",
        "Optional: Add soy sauce or other seasonings"
      ],
      servings: 10,
      totalCalories: 4950,
      caloriesPerServing: 495
    }
  ],

  food4less: [
    // Under $10 Total Category
    {
      category: "Under $10 Total",
      name: "Budget Bean & Rice Bowl (6 servings)",
      ingredients: [
        {
          name: "mahatma long grain rice",
          type: "grain",
          quantity: "2 cups dry",
          estimatedCost: (3.99 / 5) * 2,
          calories: 1280, // 8 quarter-cups
          caloriesPerServing: Math.round(1280 / 6)
        },
        {
          name: "kroger black beans",
          type: "protein",
          quantity: "2 cans (15 oz each), low sodium",
          estimatedCost: 0.69 * 2,
          calories: 720, // 6 half-cups
          caloriesPerServing: Math.round(720 / 6)
        },
        {
          name: "birdseye mixed vegetables",
          type: "produce",
          quantity: "1 bag (12 oz)",
          estimatedCost: 1.49,
          calories: 210, // 3 cups
          caloriesPerServing: Math.round(210 / 6)
        }
      ],
      instructions: [
        "Cook rice according to package instructions",
        "Heat beans in a saucepan",
        "Cook frozen vegetables according to package directions",
        "Combine rice, beans, and vegetables in bowls",
        "Season with salt and pepper to taste",
        "Optional: Add hot sauce or lime juice"
      ],
      servings: 6,
      totalCalories: 2210,
      caloriesPerServing: 368
    },
    {
      category: "Under $10 Total",
      name: "Simple Pasta Dinner (4 servings)",
      ingredients: [
        {
          name: "barilla penne pasta",
          type: "grain",
          quantity: "16 oz box",
          estimatedCost: 0.89,
          calories: 1600, // 8 2-oz servings
          caloriesPerServing: Math.round(1600 / 4)
        },
        {
          name: "ragu traditional marinara",
          type: "sauce",
          quantity: "1 jar (24 oz)",
          estimatedCost: 1.99,
          calories: 280, // 4 half-cups
          caloriesPerServing: Math.round(280 / 4)
        },
        {
          name: "kroger mild cheddar",
          type: "dairy",
          quantity: "8 oz block",
          estimatedCost: 2.99,
          calories: 880, // 8 oz
          caloriesPerServing: Math.round(880 / 4)
        }
      ],
      instructions: [
        "Boil pasta according to package directions",
        "Heat marinara sauce in a pan",
        "Grate the cheese",
        "Combine pasta and sauce",
        "Top with grated cheese",
        "Optional: Add Italian herbs or garlic powder"
      ],
      servings: 4,
      totalCalories: 2760,
      caloriesPerServing: 690
    },

    // Under $15 Total Category
    {
      category: "Under $15 Total",
      name: "Hearty Chicken & Rice (6 servings)",
      ingredients: [
        {
          name: "foster farms chicken breast",
          type: "protein",
          quantity: "2 lbs, boneless skinless",
          estimatedCost: 3.49 * 2,
          calories: 960, // 8 4-oz servings
          caloriesPerServing: Math.round(960 / 6)
        },
        {
          name: "mahatma long grain rice",
          type: "grain",
          quantity: "2 cups dry",
          estimatedCost: (3.99 / 5) * 2,
          calories: 1280, // 8 quarter-cups
          caloriesPerServing: Math.round(1280 / 6)
        },
        {
          name: "birdseye mixed vegetables",
          type: "produce",
          quantity: "2 bags (24 oz total)",
          estimatedCost: 1.49 * 2,
          calories: 420, // 6 cups
          caloriesPerServing: Math.round(420 / 6)
        }
      ],
      instructions: [
        "Cook rice according to package instructions",
        "Cut chicken into even pieces and season",
        "Cook chicken until done",
        "Steam frozen vegetables according to package",
        "Combine rice, chicken, and vegetables",
        "Season with salt and pepper to taste"
      ],
      servings: 6,
      totalCalories: 2660,
      caloriesPerServing: 443
    },
    {
      category: "Under $15 Total",
      name: "Protein-Packed Pasta Bake (6 servings)",
      ingredients: [
        {
          name: "kroger lean ground beef",
          type: "protein",
          quantity: "1 lb, 80/20 lean",
          estimatedCost: 4.49,
          calories: 1160, // 4 4-oz servings
          caloriesPerServing: Math.round(1160 / 6)
        },
        {
          name: "barilla penne pasta",
          type: "grain",
          quantity: "16 oz box",
          estimatedCost: 0.89,
          calories: 1600, // 8 2-oz servings
          caloriesPerServing: Math.round(1600 / 6)
        },
        {
          name: "ragu traditional marinara",
          type: "sauce",
          quantity: "1 jar (24 oz)",
          estimatedCost: 1.99,
          calories: 280, // 4 half-cups
          caloriesPerServing: Math.round(280 / 6)
        },
        {
          name: "kroger mild cheddar",
          type: "dairy",
          quantity: "8 oz block",
          estimatedCost: 2.99,
          calories: 880, // 8 oz
          caloriesPerServing: Math.round(880 / 6)
        }
      ],
      instructions: [
        "Cook pasta according to package directions",
        "Brown ground beef in a large pan",
        "Add marinara sauce to the beef",
        "Mix sauce with cooked pasta",
        "Top with grated cheese",
        "Optional: Bake at 350°F until cheese melts"
      ],
      servings: 6,
      totalCalories: 3920,
      caloriesPerServing: 653
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
    document.querySelector('.scroll-bottom').style.display = 'none';
    return;
  }

  // Show scroll button when recipes are displayed
  document.querySelector('.scroll-bottom').style.display = 'flex';

  // Add price and calorie warning at the top with store-specific messaging
  const warningDiv = document.createElement('div');
  warningDiv.className = "price-warning";
  
  const warningMessage = matchedStore === 'costco' 
    ? `
      <p>
        <strong>⚠️ Notice:</strong> All prices and calorie counts shown are approximate. 
        Prices are based on Kirkland Signature or Costco-specific items and may vary by location and time of year. 
        Calorie information is estimated based on standard serving sizes and typical portions. 
        Actual calories may vary based on specific products used and preparation methods.
        Prices shown are estimates from Costco US stores and were last updated in 2024.
        Note that Costco prices and availability can vary significantly by region.
      </p>
    `
    : matchedStore === 'food4less'
    ? `
      <p>
        <strong>⚠️ Notice:</strong> All prices and calorie counts shown are approximate. 
        Prices are based on Kroger store brand items and common national brands found at Food 4 Less, and may vary by location and time of year. 
        Calorie information is estimated based on standard serving sizes and typical portions. 
        Actual calories may vary based on specific products used and preparation methods.
        Prices shown are estimates from Food 4 Less US stores and were last updated in 2024.
      </p>
    `
    : `
      <p>
        <strong>⚠️ Notice:</strong> All prices and calorie counts shown are approximate. 
        Prices are based on Great Value or store brand items when available and may vary by location and time of year. 
        Calorie information is estimated based on standard serving sizes and typical portions. 
        Actual calories may vary based on specific products used and preparation methods.
        Prices shown are estimates from Walmart US stores and were last updated in 2024.
      </p>
    `;
  
  warningDiv.innerHTML = warningMessage;
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
      
      let recipeIngredientCost = 0;
      let totalPackageCost = 0;
      let totalCalories = 0;
      let ingredientsList = '';
      
      recipe.ingredients.forEach(item => {
        // Calculate the cost of ingredients used in recipe
        recipeIngredientCost += item.estimatedCost;
        
        // Calculate the cost of full packages needed
        const fullPackagePrice = (() => {
          const itemDB = ingredientPriceDB[item.name];
          return itemDB.price;
        })();
        totalPackageCost += fullPackagePrice;
        
        totalCalories += item.calories;
        ingredientsList += `
          <li>
            ${item.name} - ${item.quantity}
            <br>
            <small>
              Cost for recipe portion: $${item.estimatedCost.toFixed(2)} 
              <br>
              Full package cost: $${ingredientPriceDB[item.name].price.toFixed(2)}
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
          <p><strong>Estimated Cost for Recipe Portions: $${recipeIngredientCost.toFixed(2)}</strong></p>
          <p><strong>Total Cost for Full Packages: $${totalPackageCost.toFixed(2)}</strong></p>
          <p><strong>Cost per serving (based on recipe portions): $${(recipeIngredientCost / recipe.servings).toFixed(2)}</strong> (Makes ${recipe.servings} servings)</p>
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

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}

// Hide scroll button initially
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.scroll-bottom').style.display = 'none';
});