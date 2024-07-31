// operator precendence is priority of operators
// that decides which operator should executes before other
// console.log(now - 1991 > now - 2018);
// here in this (now - 991) and (now - 2018) processes before
// and after there processing > operator executes

let x,y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x,y);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);