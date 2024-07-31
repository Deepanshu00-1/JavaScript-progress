'use strict';
// a function is simply a piece of code which
// is reused over and over again
// a function can hold one or more complete lines of code
// it can also receive data and return data back

function logger(){
    console.log('My name is Rohan');
}
// calling / running / invoking function
logger(); // using the function is called invoking the function,running the function or calling the function
logger();
logger();

// here we will also specify parameters
// parameters are like variables that are
// specific to this function and they will get defined when we call functions

function fruitProcessor(apples, oranges){
    // console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // here 5,0 are arguments actual values to parameters
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
const string = String(23);
console.log(string);

function jujutsuKaisen(first, second){
    const hollowPurple = `Gojo Satoru made hollow purple by combining ${first} and ${second}`;
    return hollowPurple;
}

const killerMove = jujutsuKaisen("red repulsive","blue attraction");
console.log(killerMove);