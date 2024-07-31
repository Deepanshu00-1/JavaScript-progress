// Array is used to store multiple data in a singlle value

'Use strict'

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
// Array function is used to apply array as new Array
const  years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]); // array element as per index value

console.log(friends.length); // array length
console.log(friends[friends.length-1]);

friends[friends.length-3] = 'Jay';
console.log(friends); 

// friends = ['Bob', 'Alice'] error, we can't change entire array by putting new elements 

const jonas = ['jonas', 'schmedtmann', 2037 - 1991, 'teacher', friends ];
console.log(jonas);

// exercise

const calcAge = function(birthYear){
    return 2037 - birthYear;
}
const Years = [1990, 1967, 2002, 2018];
const age1 = calcAge(Years[0]);
const age2 = calcAge(Years[1]);
const age3 = calcAge(Years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);