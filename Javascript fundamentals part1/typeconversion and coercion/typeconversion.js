// const inputYear = '1991';
// console.log(inputYear + 18);
// when we did this calculation it gave us 199118 as output
// but we needed to add those numbers so
// for that we need to change their datatypes in same to make it work 

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
// what if we try to convert a type which is impossible
// like converting string(without containing any number) into number
console.log(Number('jonas'));
// it will give output - NaN(means invalid number)
console.log(typeof NaN); // its still a number but an invalid one

console.log(String(20), 29);