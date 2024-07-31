'use strict';

function webDevelopment(lan1, lan2, lan3){
    const frontEnd = `Frontend of website is made by ${lan1}, ${lan2}, ${lan3}`;
    return frontEnd;
}
const webDev = webDevelopment('html','css','javascript');
console.log(webDev);
console.log(webDevelopment('html','css','javascript'));