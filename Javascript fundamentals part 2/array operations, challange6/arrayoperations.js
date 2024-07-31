const friends = ['Michael', 'steven', 'peter'];
friends.push('jay'); // push method add elements in a array
console.log(friends);
const newLength = friends.push('jay');
console.log(newLength);
const popped = friends.pop('jay'); // pop method remove elements from array
console.log(popped);
console.log(friends);

// besides the push method there is a method which add element at beginning of array
friends.unshift('john'); // add element at start
console.log(friends);

friends.shift(); // return elements that were removed
console.log(friends);

console.log(friends.indexOf('steven')); // indexOf method shows index or position of element

// include method return true if element is in array and false if element is not in array
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));

friends.push(23);
console.log(friends);
console.log(friends.includes(23));

if (friends.includes('peter')){
    console.log('you have a friend called peter');
}