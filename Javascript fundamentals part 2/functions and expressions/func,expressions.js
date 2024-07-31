// function is a value not a type,that's why we store it in variable
// two types of function
// 1. function declaration (function with name)
// 2.function expression  (function without name or anonymous function)

// function declaration

function calcAge1(birthYear){
    // const age = 2037 - birthYear;
    // return age;
    return 2037 - birthYear; // those two lines of code can also be written likw this
}
// in function declaration if we declare function before defining it, it will still work 

const age1 = calcAge1(1991);
console.log(age1);

// function expression

const calcAge2 =  function(birthYear){ // function without name is called anonymous function
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

// in function expression if we declare variable before defining the function then it will show error(it happens because of hoisting)

console.log(age1, age2);
let a = 10;
document.write(a);