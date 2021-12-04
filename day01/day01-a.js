const fs = require('fs');

console.log(getMeasurementIncreaseCount(fs.readFileSync('day01/demo-values.txt').toString().split("\n")));

function getMeasurementIncreaseCount(sonarSweepValues) {
    let measurementsLargerThanPrevious=0;
    sonarSweepValues.forEach((value,index) => {
        if(parseInt(value)>parseInt(sonarSweepValues[index-1])){
            measurementsLargerThanPrevious++;
        }
    });
    return measurementsLargerThanPrevious;
}


