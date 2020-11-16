var letsCookButton = document.querySelector('.cook-button');
var cookPotIcon = document.querySelector('img');
var dishDisplay = document.querySelector('.dish-display-area');
var radioButtons = document.getElementsByName('dish');
var displayHiddenText = document.querySelector('.display-text');
var clearButton = document.querySelector('.clear-me-button');

letsCookButton.addEventListener('click', revealDish);
clearButton.addEventListener('click', removeMessage);

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
  event.preventDefault();
  hide(cookPotIcon);
  show(displayHiddenText);
  show(clearButton);
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
}

function clearMessage() {
  dishDisplay.innerText = '';
}



/*
Pseudocoding:
5. user should not be able to click lets cook button for a recipe until they have selected an option
*/
