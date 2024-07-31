'Use strict'
const jonas = {
    firstName: 'jonas',
    lastName: 'schmedmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven']
};
console.log(jonas); // in console the properties are ordered alphabatically

// dot notaion(.)
// first way of getting a property from an object is by using the dot notation
// it is very straight forward

console.log(jonas.lastName);

// bracket notaion []
console.log(jonas['lastName']);

// difference between these two is
// in the bracket notaion we can actually put any expression that we'd like,
// so we don't have to explicitly write the string here,
// but we can compute it from some operation
// because an operation is basically an expression(something that produces a value)
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// in dot notation we have to use a real property name
// in bracket notaion we can execute property name from an expression

const interestedIn = prompt(`What do you want to know about jonas?
choose between firstName, lastName, age, job, and friends`);
// console.log(interestedIn);

// console.log(jonas.interestedIn); undefined in dot notation

console.log(jonas[interestedIn]);

// as we know undefined is a false value,
// so we can use that to our advantage now and create some logic we'll print a custom string
// whenever a user tries to access a property that doesn't exist.

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('wrong request! choose between firstName, lastName, age, job, and friends');
}

// lets see how we can use dot and bracket notation
// to add new properties to the object

jonas.location = 'Portugal';
jonas['twitter'] = 'fdsajhfbhjs';
console.log(jonas);

// challange
// 'jonas has 3 friends, and his best friend is called michael'

// my way
// const Jonas = {
//     friends: ['Michael','peter','steven']
// }
// console.log(Jonas.friends);
// Jonas.bestFriend = Jonas.friends[0];
// console.log(Jonas);

// challange ,given solution
console.log(`${jonas.firstName} has ${jonas.friends.length}
friends, and best friends is ${jonas.friends[0]}`);