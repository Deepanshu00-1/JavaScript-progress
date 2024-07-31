// type coercion happens whenever an operator is dealing 
// with two values that have different types
// in that case javascript will then, behind the scenes,
// convert one of the values to match the other value
// so that in the end the operation can be executed

console.log('i am ' + 21 + ' years old');
// here javascript converted number into string between strings
// by typecoercion but in other languages it doesn't work like that
// there we need to change type to do so
console.log('23' - '10' - 3); //- operator triggers opposite conversion
console.log('23' + '10' + 3); // + operator concatenate strings
console.log('23' * '2'); // * operator triggers opposite conversion
console.log('23' / '2'); // / operator triggers opposite conversion

// guess the output

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // output = 10

console.log(2+3+4+'5');
console.log('10'-'4'-'3'-2+'5');