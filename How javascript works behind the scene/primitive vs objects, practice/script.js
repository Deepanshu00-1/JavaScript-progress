"Use strict";

// let's learn about difference between the way primitive types and objects are stored in memory

// primitives are like numbers, strings, booleans etc.

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// This section is about worling of primitive and reference values
// in call stack and heap

// Reference value exapmle

const me = {
    name: 'jonas',
    age: 30,
};
const friend = me;
friend.age = 27;

console.log('Friends', friend);
// {name: 'Jonas', age: 27}

console.log('Me:', me);
// {name: 'Jonas', age: 27}