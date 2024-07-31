/*
Given an array of forecasted maximum temperature,
the thermometer displays a string with these
temperatures.

Example: [17,21,23] will print "...17C in 1 days.
.. 21C in 2 days ... 23C in 3 days..."

Create a function 'printForecast' which takes in an
array 'arr' and logs a string like the above to the 
console.

Use the problem-solving frameworks: Understand the 
problem and break it up into sub-problems!

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Array transformed to string, seperated by...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of
// string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ... `);

const printForecast = function (arr) {
  let str = ' ';
  for (let i = 0; i < arr.length; i++) {
    str = str +  `${arr[i]}C in ${i+1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
