const fs = require('fs');

const parsedCourseData = parseCourseData(fs.readFileSync('day02/demo-values.txt').toString().split("\n"));
console.log("Horizontal position: "+ calculateHorizontalPosition(parsedCourseData));
console.log("Depth: "+calculateDepth(parsedCourseData));

function parseCourseData(courseData) {
    const parsedCourseData = courseData.map((instruction) => {
        const splitInstruction = instruction.split(" ");
        const splitInstructionObject = {"direction":splitInstruction[0],"value":parseInt(splitInstruction[1])};
        return splitInstructionObject;
    })
    return parsedCourseData;
}

function calculateHorizontalPosition(parsedCourseData) {
    let horizontalPosition = 0;
    parsedCourseData.forEach((instruction) => {
        if(instruction.direction=='forward'){
            horizontalPosition+=instruction.value;
        }
    })
    return horizontalPosition;
}

function calculateDepth(parsedCourseData) {
    let depth = 0;
    parsedCourseData.forEach((instruction) => {
        if(instruction.direction=='down'){
            depth+=instruction.value;
        }
        if(instruction.direction=='up'){
            depth-=instruction.value;
        }
    })
    return depth;
}