const fs = require('fs');

const rawData = fs.readFileSync('day03/demo-values.txt').toString().split("\n");
const dataValueLength = rawData[0].length;
const parsedData = rawData.map((value) => {
    return parseInt(value,2);
})

let gammaRate=0;
for(i=1;i<=Math.pow(2,dataValueLength)-1;i*=2){
    gammaRate+=(getMostCommonRightBit(parsedData)*i);
    parsedData.forEach((dataPoint,index) => {
        parsedData[index] = dataPoint >> 1;
    })
}
const epsilonRate = calculateEpsilonRate(gammaRate);
console.log("Gamma Rate: "+gammaRate);
console.log("Epsilon Rate: "+epsilonRate);


function getMostCommonRightBit(diagnosticData) {
    let zeroes = 0;
    let ones = 0;
    diagnosticData.forEach((dataPoint) => {
        if(dataPoint & 0b00001) {
            ones++;
        }
        else {
            zeroes++;
        }
    })
    if(zeroes>ones){
        return 0;
    }
    if(ones>zeroes){
        return 1;
    }
    return "ERROR";
}

function calculateEpsilonRate(gammaRate) {
    let epsilonRate = 0;
    for(i=1;i<=Math.pow(2,dataValueLength)-1;i*=2){
        if(!(gammaRate & 0b00001)){
            epsilonRate+=i;
        }
        gammaRate = gammaRate >> 1;
    }
    return epsilonRate;
}