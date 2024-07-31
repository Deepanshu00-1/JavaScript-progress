'Use strict'

const jonas = {
    firstName : 'Jonas',
    lastName: 'schmedman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven'],
    hasDriversLicense: true,

    calcAge: function(){
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);

// console.log(jonas['calcAge'](1991));

// challange
// 'jonas' is a 46 year old teacher, and he had a driving license'
console.log(jonas.getSummary());