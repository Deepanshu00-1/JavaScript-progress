"Use strict";

// console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
    year: 1991,
    firstName: 'rohan',
    calcAge: function(){
        console.log(this)
        console.log(2037- this.year);
        console.log(`${this.firstName} is ${2037 - this.year} years old`)
    }
}
jonas.calcAge();
// this keyword points to the object that is calling the method

const matila = {
    year: 2017,
};

matila.calcAge = jonas.calcAge; // method borrowing
matila.firstName = jonas.firstName;
matila.calcAge();

const f = jonas.calcAge;
f();
