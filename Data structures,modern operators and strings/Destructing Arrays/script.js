"Use strict";

// Array destructuring is an ES6 feature.
// It is a way of unpacking values from an array or an object into seperate variables.
// It is to break a complex data structure down into a smaller data structure like a variable.

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2,3,4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr; //destructuring
console.log(x,y,z);

// const [first, second, third] = restaurant.categories;
// console.log(first, second, third);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5,6]];
// const [i, ,j] = nested;
const [i, ,[j,k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1,q = 1,r = 1] = [8,9];
console.log(p,q,r);