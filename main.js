var letsCookButton = document.querySelector('.cook-button');
var cookPotIcon = document.querySelector('img');
var dishDisplay = document.querySelector('.dish-display-area');
var displayHiddenText = document.querySelector('.display-text');
var clearButton = document.querySelector('.clear-me-button');
var radioButtons = document.querySelectorAll('.radio-buttons')
var addRecipeButton = document.querySelector('.add-recipe-button');
var recipeForm = document.querySelector('.recipe-form');
var recipeTypeInput = document.querySelector('#recipe-type');
var recipeNameInput = document.querySelector('#recipe-name');
var addNewRecipeButton = document.querySelector('.add-new-button');

radioButtons.forEach(function (button) {
  addEventListener('click', function() {
    toggleButton();
  })
})

letsCookButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.className === 'cook-button') {
    hide(cookPotIcon);
    show(displayHiddenText);
    revealDish();
    show(clearButton);
  }
});

clearButton.addEventListener('click', removeMessage);

addRecipeButton.addEventListener('click', function() {
  show(recipeForm);
});

addNewRecipeButton.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.className === 'add-new-button') {
    addRecipeData();
    hide(cookPotIcon);
    show(displayHiddenText);
    show(clearButton);
    displayNewRecipe();
    clearInputs();
  }
});

var meal = {
  sides: [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
  ],

  mains: [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
  ],

  desserts: [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
  ]
}

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function revealEntireMeal(side, main, dessert) {
  dishDisplay.innerHTML = `
  <p>${main} with a side of ${side} and ${dessert} for dessert!</p>`
}

function revealDish(event) {
  var randomSide = meal.sides[generateRandomIndex(meal.sides)]
  var randomMain = meal.mains[generateRandomIndex(meal.mains)]
  var randomDessert = meal.desserts[generateRandomIndex(meal.desserts)]

  if (radioButtons[0].checked) {
    setMessage(randomSide);
  } else if (radioButtons[1].checked) {
    setMessage(randomMain);
  } else if (radioButtons[2].checked) {
    setMessage(randomDessert);
  } else if (radioButtons[3].checked) {
    revealEntireMeal(randomSide, randomMain, randomDessert)
  }
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function setMessage(dish) {
  dishDisplay.innerText = `${dish}!`
}

function removeMessage() {
  clearMessage();
  show(cookPotIcon);
  hide(displayHiddenText);
  hide(clearButton);
  clearRadioButtons();
}

function clearMessage() {
  dishDisplay.innerText = '';
}

function toggleButton() {
    if (radioButtons[0].checked || radioButtons[1].checked || radioButtons[2].checked || radioButtons[3].checked) {
      letsCookButton.disabled = false;
      letsCookButton.classList.remove('disabled');
    } else {
      letsCookButton.disabled = true;
      letsCookButton.classList.add('disabled');
    }
}

function clearRadioButtons() {
  radioButtons.forEach(function (button) {
    button.checked = false;
  })
}

function addRecipeData() {
  if (recipeTypeInput.value === 'Side') {
    meal.sides.push(recipeNameInput.value);
  } else if (recipeTypeInput.value === 'Main Dish') {
    meal.mains.push(recipeNameInput.value);
  } else if (recipeTypeInput.value === 'Dessert') {
    meal.desserts.push(recipeNameInput.value);
  }
}

function displayNewRecipe() {
  dishDisplay.innerText = recipeNameInput.value;
}

function clearInputs() {
  recipeTypeInput.value = "";
  recipeNameInput.value = "";
}
