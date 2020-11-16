var letsCookButton = document.querySelector('.cook-button');
var cookPotIcon = document.querySelector('img');
var dishDisplay = document.querySelector('.dish-display-area');
var radioButtons = document.getElementsByName('dish');
var displayHiddenText = document.querySelector('.display-text');

letsCookButton.addEventListener('click', revealDish)

var sides = [
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
]

var mains = [
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
]

var desserts = [
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

function generateRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function revealDish(event) {
  event.preventDefault();
  var sideIndex = generateRandomIndex(sides);
  var mainIndex = generateRandomIndex(mains);
  var dessertIndex = generateRandomIndex(desserts);
  hide(cookPotIcon);
  show(displayHiddenText);

  if (radioButtons[0].checked) {
    setMessage(sides[sideIndex]);
  } else if (radioButtons[1].checked) {
    setMessage(mains[mainIndex]);
  } else if (radioButtons[2].checked) {
    setMessage(desserts[dessertIndex])
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
