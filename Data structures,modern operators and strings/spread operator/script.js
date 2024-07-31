"Use strict";
// spread operator is of ES6 Js 
// Spread operator is used to expand an array into all its elements
// basically unpacking all the array elements at one.

const restaurant = {
    name: 'Classica Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'GarlicBread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, //open 24hours
            close:24,
        },
    },
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

const arr= [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // expands array into one(individual).

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // here we added 'Gnocci' to array using spread operator.
console.log(newMenu);

// spread operator is used when we have to write values seperated by commas.

// TWO IMPORTANT USE CASES OF SPREAD OPERATOR.

// Copy array
const mainMenu = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// console.log(`${...str} schmedmann`); error
// Multiple values seperated by a comma are only expected when we pass arguments into a function, or when we build a new array

// Real world example
const ingredients = [
    // prompt('Let\'s make pasta! Ingredient 1?'),
    // prompt('Ingredient 2?'),
    // prompt('Ingredient 3?')
];
console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// we can do the same using spread operator

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Rona';
console.log(restaurantCopy.name);
console.log(restaurant.name);