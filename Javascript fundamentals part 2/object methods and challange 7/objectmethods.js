'Use strict'

// let's see how to add functions to objects
const jonas = {
    firstName: 'jonas',
    lastName: 'schmetmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['michael', 'peter', 'steven'],
    hasDrivenLicense: true,
    calcAge: function(){
        console.log(this);
        return 2037 - this.birthYear;
    }
};
// console.log(jonas);
// calcAge=function(birthYear){
//     return 2037 - birthYear;
// }

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));