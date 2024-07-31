'Use strict'

const calcAverage = (score1, score2, score3) => {
    const average = (score1+score2+score3)/3;
    return average;
}
console.log(calcAverage(12,23,42));

// For DATA 1
var scoreDolphins = calcAverage(44,23,65);
console.log(scoreDolphins);

var scoreKoalas = calcAverage(65,54,49);
console.log(scoreKoalas);

var checkWinner = (avgDolphins,avgKoalas) =>{
    if(scoreDolphins > scoreKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(scoreKoalas > scoreDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log(`No team wins...`);
    }
};
console.log(checkWinner(scoreDolphins,scoreKoalas));

// For DATA 2

var scoreDolphins = calcAverage(85,54,41);
console.log(scoreDolphins);

var scoreKoalas = calcAverage(23,34,27);
console.log(scoreKoalas);

var checkWinner = (avgDolphins,avgKoalas) =>{
    if(scoreDolphins > scoreKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(scoreKoalas > scoreDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log(`No team wins...`);
    }
};
console.log(checkWinner(scoreDolphins,scoreKoalas));
