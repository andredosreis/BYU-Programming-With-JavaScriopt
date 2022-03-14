/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var myName = 'Andre Dos Reis'


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName

// Step 3: declare and instantiate a variable to hold the current year

var correntyear = 2022;
// Step 4: place the value of the current year variable into the HTML file

document.querySelector('#year').textContent = correntyearyear

// Step 5: declare and instantiate a variable to hold the name of your picture
var mypicture = 'image/photo.jpg'

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector('img').setAttribute('src', mypicture)


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var myFavoriteFoods = ['cooks', 'Steak', 'Chicken', 'Shrimp']

// Step 2: place the values of the favorite foods variable into the HTML file

document.querySelector('#food').textContent = myFavoriteFoods
// Step 3: declare and instantiate a variable to hold another favorite food
var myAnotherFavoriteFoods = 'Hamburguer'

// Step 4: add the variable holding another favorite food to the favorite food array
myFavoriteFoods.push(myAnotherFavoriteFoods)

// Step 5: repeat Step 2
document.querySelector('#food').textContent = myFavoriteFoods

// Step 6: remove the first element in the favorite foods array
myFavoriteFoods.shift()


// Step 7: repeat Step 2

document.querySelector('#food').textContent = myFavoriteFoods

// Step 8: remove the last element in the favorite foods array
myFavoriteFoods.pop()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = myFavoriteFoods


