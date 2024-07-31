"Use strict";

const request = fetch("https://restcountries.eu/rest/v2/name/portugal");
console.log(request);

// Promise is an object that is used as a placeholder for the future
// result of an asynchronous operation. 

// We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results.
// Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations: escaping callback hell

