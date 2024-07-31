// here in this challenge we have given to 
// update earlier code using template literals

// 1. Store Mark's and John's mass and height in variables
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

// 2. calculate both their BMIs using formula

let bmiMark = massMark / (heightMark * heightMark);
console.log( "BMI of mark =",bmiMark);

let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log("BMI of john = ",bmiJohn)

// 3.create a boolean variable containing information
// about whether mark has a higher BMI than john.
 
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
// challange2
// nice output telling who has higher BMI
console.log(`Mark's BMI is higher than John's!`);
console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);