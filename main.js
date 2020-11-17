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
var currentMeal = new Meal();

radioButtons.forEach(function(button) {
  addEventListener('click', function() {
    toggleCookButton();
  })
});

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
    addNewRecipeData();
    hide(cookPotIcon);
    show(displayHiddenText);
    show(clearButton);
    displayNewRecipe();
    clearInputs();
  }
});

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function revealDish() {
  var randomSide = currentMeal.sides[generateRandomIndex(currentMeal.sides)]
  var randomMain = currentMeal.mains[generateRandomIndex(currentMeal.mains)]
  var randomDessert = currentMeal.desserts[generateRandomIndex(currentMeal.desserts)]

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

function toggleCookButton() {
  if (radioButtons[0].checked || radioButtons[1].checked || radioButtons[2].checked || radioButtons[3].checked) {
    letsCookButton.disabled = false;
    letsCookButton.classList.remove('disabled');
  } else {
    letsCookButton.disabled = true;
    letsCookButton.classList.add('disabled');
  }
}

function revealEntireMeal(side, main, dessert) {
  dishDisplay.innerHTML = `
  <p>${main} with a side of ${side} and ${dessert} for dessert!</p>`
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

function clearRadioButtons() {
  radioButtons.forEach(function(button) {
    button.checked = false;
  })
}

function displayNewRecipe() {
  dishDisplay.innerText = recipeNameInput.value;
}

function clearInputs() {
  recipeTypeInput.value = "";
  recipeNameInput.value = "";
}

function addNewRecipeData() {
  if (recipeTypeInput.value === 'Side') {
    currentMeal.sides.push(recipeNameInput.value);
  } else if (recipeTypeInput.value === 'Main Dish') {
    currentMeal.mains.push(recipeNameInput.value);
  } else if (recipeTypeInput.value === 'Dessert') {
    currentMeal.desserts.push(recipeNameInput.value);
  }
}