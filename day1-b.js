const fs = require('fs');

const rawData = fs.readFileSync('sonar-sweep-values.txt').toString().split("\n");
const parsedData = rawData.map((value) => {
    return parseInt(value);
})

const slidingWindowData = getSlidingWindowData(parsedData);
console.log(getMeasurementIncreaseCount(slidingWindowData));

function getSlidingWindowData(sonarSweepValues) {
    const slidingWindowValues = sonarSweepValues.map((value,index) => {
        return value+sonarSweepValues[index+1]+sonarSweepValues[index+2];
    })
    return slidingWindowValues.slice(0,slidingWindowValues.length-2);
}

function getMeasurementIncreaseCount(sonarSweepValues) {
    let measurementsLargerThanPrevious=0;
    sonarSweepValues.forEach((value,index) => {
        if(parseInt(value)>parseInt(sonarSweepValues[index-1])){
            measurementsLargerThanPrevious++;
        }
    });
    return measurementsLargerThanPrevious;
}


