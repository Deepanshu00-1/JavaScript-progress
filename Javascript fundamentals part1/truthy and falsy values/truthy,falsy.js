// falsy values
// there  are 5 falsy values in javascript
// i.e, 0, '', undefined, null, NaN
//  all these values will be converted
// into false when we attempt to convert them to a boolean
// truthy valuse
// everything else are our so-called truthy values
// so, values that will be converted to true, for example
// any number that is not zero or any string that is not 
// an empty string will be converted to true when we attempt
// to convert them into boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));

const money = 0;
if(money){
    console.log("Don't spend it all!");
} else{
    console.log("You should get a job");
} // here javascript(did coercion) convert 0 into boolean which is a falsy value

let height = 0;
if(height){
    console.log('YAY! height is defined');
} else{
    console.log('height is UNDEFINED');
}// here height is undefined because we didn't assigned it a value
// and undefined is a falsy value that's why javascript did coercion and gave us else condition as output
