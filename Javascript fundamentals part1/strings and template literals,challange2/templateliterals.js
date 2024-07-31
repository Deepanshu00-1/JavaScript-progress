const firstName = "Deepanshu";
const job = "student"
const birthYear = 2004;
const year = 2023;

const deepasnhu = "I am " + firstName + ',a ' + (year - birthYear)+ " years old " + job;
console.log(deepasnhu);

// template literals concatenate multiple strings
// `` (template literals)
// ${} for variables

const jonasNew = `I'm ${firstName}`;
console.log(jonasNew);

const deepanshu = `I am ${firstName} a ${year-birthYear} years old ${job}`;
console.log(deepanshu);

console.log(`just a regular string...`);

console.log(`string with \n\
multiple\n\
lines`);

console.log(`string
multiple 
lines`);