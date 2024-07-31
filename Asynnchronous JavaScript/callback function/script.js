"Use strict";

// function myDisplayer(some){
//     document.getElementById('demo').innerHTML = some;
// }

// function myFirst(){
//     myDisplayer("Hello");
// }

// function mySecond(){
//     myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();

// /*
// Sequence Control
// sometimes you would like to have better control over when to execute a function.

// suppose you want to do calculation, and then display the result.

// you could call a calculator function(myCalculator), save the result,
// and then call another function(myDisplayer) to display the result:
// */
// function myDisplayer(some){
//     document.getElementById("demo2").innerHTML = some;
// }

// function myCalculator(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }
// let result = myCalculator(5, 5);
// myDisplayer(result);

// function myDisplayer(some){
//     document.getElementById('demo3').innerHTML = some;
// };

// function myText(){
//     return "i now understand callback function concept" 
// }
// let finalText = myText();
// myDisplayer(finalText);

// /*
// The problem with the example above, is that you have to call two
// functions to display the result.

// The problem with the second example, is that you cannot prevent the
// calculator function from displaying the result.

// Now it is time to bring in a callback.
// */

// // JavaScript Callbacks
// // A callback is a function passed as argument to another function.

// /*
// Using a callback, you could call the calculator function(myCalculator) with a 
// callback(myCallback), and let the calculator function run the callback after
// the calculation is finished:
// */
// function myDisplayer(something){
//     document.getElementById('demo4').innerHTML = something;
// };

// function myCalculator(num1, num2, myCallback){
//     let sum = num1 + num2;
//     myCallback(sum);
// };

// myCalculator(5, 5, myDisplayer);

function myDisplayer(something){
    document.getElementById("demo5").innerHTML = something;
}

function myCalculator(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

function myRecruiter(something){
    document.write(something);
}

function doSomething(a, b, myCallback){
    let text = a + b;
    myCallback(text); 
}

let hello = "Hey! How you doin? ";
let more = "Fine then let's go";

doSomething(hello, more, myDisplayer);

// Create an array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const postNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo6").innerHTML = postNumbers;

// Remove negative numbers
function removeNeg(numbers, callback){
    const myArray = [];
    for(const x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
}