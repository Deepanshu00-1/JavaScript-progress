"Use strict";
/* 
"I Promise a Result"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an object that links Producing code and Consuming code
*/
// Promise Syntax

// let myPromise = new Promise(function(myResolve, myReject){
//     // "Producing Code (May take some time)"

//     myResolve(); // when successful
//     myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function(value){/* code if successful */},
//     function(error){/* code if some error */}
// );

/* 
When the producing code obtains the result, it should call one of the two callbacks:
When           Call
success        myResolve(result value)
error          myReject(error object) 

Promise Object Properties

Pending         undefined
Fulfilled       a reset value 
Rejected        an error object


How to use promise:
myPromise.then(
    function(value){ code if successful },
    function(error){ code if some error }
);

Promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so you can add a callback for success or failure only.
*/
// Example

function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject){
    let x = 0;

    // some code (try to change x to 5)

    if(x==0){
        myResolve("OK");
    }else{
        myReject("Error");
    }
});
myPromise.then(
    function(value){
        myDisplayer(value);
    },
    function(error){
        myDisplayer(error);
    }
);

// To demonstrate the use of promises, we will use the callback examples
// 1. waiting for a Timeout
// 2. Waiting for a file

// Waiting for a Timeout
// Example without promise
setTimeout(function(){
    myFunction("Hello there!");
    // setTimeout(function(){
    //     document.write("How are you");
    // }, 4000)
}, 3000);

function myFunction(value){
    document.getElementById("demo2").innerHTML = value;
}

// Example with promise
const myPromise2 = new Promise(function(myResolve,myReject){
    setTimeout(function(){
        myResolve("How you doin?");
    }, 4000);
});

myPromise2.then(function(value){
    document.getElementById("demo3").innerHTML = value;
});

// Waiting for a file, example using callback
function myDisplayer(some){
    document.getElementById("demo4").innerHTML = some;
}

function getFile(myCallback){
    let req = new XMLHttpRequest();
    req.onload = function(){
        if (req.status == 200){
            myCallback(this.responseText);
        }else{
            myCallback("Error:" + req.status);
        }
    }
    req.open('GET', "mycar.html");
    req.send();
}
getFile(myDisplayer);

// Example using Promises
let  req = new XMLHttpRequest();
req.open('Get')
