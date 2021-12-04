const fs = require('fs');

console.log(getMeasurementIncreaseCount(fs.readFileSync('demo-values.txt').toString().split("\n")));

function getMeasurementIncreaseCount(sonarSweepValues) {
    let measurementsLargerThanPrevious=0;
    sonarSweepValues.forEach((value,index) => {
        if(value>sonarSweepValues[index-1]){
            measurementsLargerThanPrevious++;
        }
    });
    return measurementsLargerThanPrevious;
}


