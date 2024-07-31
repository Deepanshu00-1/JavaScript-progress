
const hasDriversLicense = true; // A
const hasGoodVision = false; // B
// AND is declared as && in js
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

// we can use these  variables to take decisions

const shouldDrive = hasDriversLicense || hasGoodVision;

// if(shouldDrive){
//     console.log('Sarah is able to drive!');
// } else{
//     console.log('Someone esle should drive...');
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if(hasDriversLicense || hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else{
    console.log('Someone esle should drive...');
}