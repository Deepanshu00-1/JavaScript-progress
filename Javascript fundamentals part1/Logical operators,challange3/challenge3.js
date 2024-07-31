const scoreDolphins = (96 + 108 + 89)/3; // dolphins score average
const scoreKoalas = (88 + 91 + 110)/3; // koalas score average

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy");
}
else if(scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy");
}
else{
    console.log("Both win the trophy");
}