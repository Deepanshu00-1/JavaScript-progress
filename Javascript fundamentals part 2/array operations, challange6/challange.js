'Use strict'
// const calcTip = (bill) => {
//     const tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
//     console.log(`The bill was ${bill}, and th tip was ${tip}, and the total value is ${bill+tip}`);
//     return console.log(tip);
// }
// calcTip(100);

// const bills = [125, 555, 44];
// console.log(bills);
// const calcTips = (bills) => {
//     const tip = bills <= 300 && bills >= 50 ? bills*0.5 : bills*0.2;
//     //console.log(`The bill was ${bills}, and th tip was ${tip}, and the total value is ${bill+tip}`);
//     return console.log(tip);
// }
// const tip1 = calcTips(bills[0]);
// const tip2 = calcTips(bills[1]);
// const tip3 = calcTips(bills[2]);

// // const tips = [tip1, tip2, tip3];
// // console.log(tips);

// const calcTip = (bill) => {
//     const tip = bill <= 300 && bill >= 50 ? bill*0.15 : bill*0.2;
//     console.log(`The bill was ${bill}, and th tip was ${tip}, and the total value is ${bill+tip}`);
//     return console.log(tip);
// }
// // testing function using given bill value of 100
// calcTip(100);

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill*0.15: bill*0.2;
}

const bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills,tips, totals);