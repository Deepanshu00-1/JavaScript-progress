// arrow function is simply a special form of function expression
// that is shorter and therefore faster to write
"use strict";

// const killerMove = jujutsuKaisen(first, second) => `gojo satoru made hollow
// purple by combining ${first} and ${second}`;

// const jjK = jujutsuKaisen('repulsive red','attraction blue');
// console.log(jjK);
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'jonas'));
console.log(yearsUntilRetirement(1980, 'bob'));

const killerMove = (first,second) => {
    return `Gojo satoru made hollow purple by combining
    ${first} and ${second}`;
}
// const kMove = killerMove('red', 'blue');
// console.log(kMove);
console.log(killerMove('red','blue'));