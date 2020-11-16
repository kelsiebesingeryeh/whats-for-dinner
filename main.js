var letsCookButton = document.querySelector('.cook-button');
var cookPotIcon = document.querySelector('img');
var dishDisplay = document.querySelector('.dish-display-area');
var radioButtons = document.getElementsByName('dish');
var displayHiddenText = document.querySelector('.display-text');

letsCookButton.addEventListener('click', revealDish)

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

function revealDish(event) {
  event.preventDefault();
  hide(cookPotIcon);
  show(displayHiddenText);

  if (radioButtons[0].checked) {
    setMessage(meal.sides[generateRandomIndex(meal.sides)]);
  } else if (radioButtons[1].checked) {
    setMessage(meal.mains[generateRandomIndex(meal.mains)]);
  } else if (radioButtons[2].checked) {
    setMessage(meal.desserts[generateRandomIndex(meal.desserts)]);
  } else if (radioButtons[3].checked) {

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
