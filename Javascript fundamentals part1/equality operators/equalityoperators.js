// const age = 18;
// if(age === 18) console.log("you just became an adult");

const age = '18';
if(age === 18) console.log('you just became an adult :D (strict)');

if(age == 18) console.log('you just became an adult :D(loose');

// getting value from webpage
// prompt("What's your favourite number?");

const favourite = Number(prompt("What's your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23){
    console.log('cool! 23 is an amazing number');
} else if(favourite === 7){
    console.log('7 is also a cool number')
} else if(favourite === 10){
    console.log('10 is also a cool number')
} else {
    console.log('Number is not 23 or 7 or 10')
}

if (favourite !== 23) console.log('Why not 23?');