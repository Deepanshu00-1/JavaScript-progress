'use strict'
// Arrow function is a third type of function that was added to javascript in ES6
// Arrow function is simply a special form of function expression that is shorter and faster to write

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1980, 'bob'));