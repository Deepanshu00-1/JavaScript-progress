let bill = 275;

let tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, and th tip was ${tip}, and the total value${bill+tip}`);

bill = 40;
tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, and th tip was ${tip}, and the total value${bill+tip}`);

bill = 430;
tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, and th tip was ${tip}, and the total value${bill+tip}`);
