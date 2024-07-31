// when we write a conditional statement lie if
// then
// if(condition){
// code
// }
// if condition is true than code will be executed

const age = 15;
// const isOldEnough = age >= 18;

if (age >= 18){
    console.log('Sarah can start driving licence');
} else{
    const yearLeft = 18 - age;
    console.log(`sarah is too young, wait another ${yearLeft} years `);
}

const birthYear = 2012;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);