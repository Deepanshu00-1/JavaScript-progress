"Use sctrict;"
/* 
Let's first get to know what synchronous javascript is 
basically synchronous means the code we have been writing till now
code which executes line by line 

Asynchronous example

example: timer with callback
const p = document.querySelector('.p');
setTimeout(function(){
    p.textContent = 'My name is Jonas!';
}, 5000);
p.style.color = 'red';

here callback will run after timer

Asynchronous code is executed after a task that runs in the 'background' finishes;
Asynchronous code is non-blocking;
Execution doesn't wait for an asynchronous task to finish its work;
Callback function alone do NOT make code asynchronous 

ASYNCHRONUOS PROGRAMMING IS ALL ABOUT COORDINATING THE BEHAVIOUR OF OUR PROGRAM
OVER A CERTAIN PERIOD OF TIME.
ASYNCHRONOUS MEANS NOT OCCURING AT THE SAME TIME.


*/
const p = document.querySelector('.p');
setTimeout(function(){
    p.textContent = 'My name is Jonas!';
}, 5000);
p.style.color = 'red';

// AJAX 
// Asynchronous JavaScript and XML: Allows us to communicate with
// remote web servers in an asynchronous way. With AJAX calls, we can
// request data from web servers dynamically.

// API 
// Application Programming Interface: Piece of software
// that can be used by another piece of software, in order to
// allow applications to talk to each other.

// There are be many types of APIs in web development:
// DOM API , Geolocation API , Own Class API , "online" API

// "Online" API: Application running on a server, that receives
// requests for data, and sends data back as response;

// We can build our own web APIs (requires back-end development,
// e.g. with node.js) or use 3rd-party APIs.

// Suppose we are building a travelling application,
// and we have a databasewith different destinations
// and tours that we are offering so on our own server,
// we can build our own APi that can receive requests 
// From the frontend application in javaScript and send back results
// that would be our own API hosted on our own server.
// We can use API to get
/*
Weather data
Data about countries 
Flights data
Currency conversation data 
APIs for sending email or SMS
Google Maps
Millions of possibilities
*/