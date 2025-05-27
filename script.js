const recipeData = {
    walmart: [
      { name: "Rice & Beans Bowl", ingredients: ["rice", "canned beans", "frozen corn"] },
      { name: "Oatmeal & Fruit", ingredients: ["oats", "bananas", "frozen berries"] },
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
  
  function showRecipes() {
    const userInput = document.getElementById('storeInput').value.trim().toLowerCase();
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = "";
  
    const matchedStore = Object.keys(recipeData).find(key => userInput.includes(key));
  
    if (!matchedStore) {
      recipesDiv.innerHTML = "<p>Sorry, we don't have recipes for that store yet. Try Walmart, Aldi, or Local.</p>";
      return;
    }
  
    recipeData[matchedStore].forEach(recipe => {
      const div = document.createElement('div');
      div.className = "recipe";
      div.innerHTML = `<h3>${recipe.name}</h3><p>Ingredients: ${recipe.ingredients.join(", ")}</p>`;
      recipesDiv.appendChild(div);
    });
  }
  