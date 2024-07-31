// let bill = 275; // for bill 275

// let tip;

// const total = bill + tip;

// bill >=50 && bill <= 300 ? console.log(`The bill was ${bill}, 
// the tip was ${tip = (15/100 )*bill}, and the total value ${bill + (15/100)*bill} `) :
// console.log(`The bill was ${bill}, the tip was ${(20/100)*bill},
// and the total value ${bill + (20/100)*bill}`);

// bill = 40; // for bill 40

// bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, 
// the tip was ${tip = (15/100)*bill}, and the total value ${bill + (15/100)*bill} `) :
// console.log(`The bill was ${bill}, the tip was ${(20/100)*bill},
// and the total value ${bill + (20/100)*bill}`);

// bill = 430; // for bill 430

// bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, 
// the tip was ${tip = (15/100 )*bill}, and the total value ${bill + (15/100)*bill} `) :
// console.log(`The bill was ${bill}, the tip was ${(20/100)*bill},
// and the total value ${bill + (20/100)*bill}`);

const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, and th tip was ${tip}, and the total value${bill+tip}`);