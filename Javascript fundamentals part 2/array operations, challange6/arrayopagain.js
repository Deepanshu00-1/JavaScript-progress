const friends = ['michael', 'steven', 'peter'];

// Add elements
const newLength = friends.push('jay'); // newLength 
console.log(friends);
console.log(newLength);

friends.unshift('john'); // unshift operation adds element in starting of array
console.log(friends);

// Remove elements
friends.pop(); // will remove last element of array
const popped = friends.pop();
console.log(popped, 'removed');
console.log(friends);

// shift operation removes first element of array
friends.shift(); 
console.log(friends);

// indexOf operation returns index value of elements
console.log(friends.indexOf('steven')); 
console.log(friends.indexOf('bob'));

//includes operation give true or false if element exist in array or not
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
// includes operation do strict equality for its work
// as if we push element in array without logging then it will show false if we try to check that element with this operation
// it doesn't perform type coercion

if (friends.includes('steven')){
    console.log('you have a friend called steven');
}
