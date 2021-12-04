const fs = require('fs');

const parsedCourseData = parseCourseData(fs.readFileSync('day02/demo-values.txt').toString().split("\n"));
console.log(calculatePosition(parsedCourseData))

function parseCourseData(courseData) {
    const parsedCourseData = courseData.map((instruction) => {
        const splitInstruction = instruction.split(" ");
        const splitInstructionObject = {"direction":splitInstruction[0],"value":parseInt(splitInstruction[1])};
        return splitInstructionObject;
    })
    return parsedCourseData;
}

function calculatePosition(parsedCourseData) {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;
    parsedCourseData.forEach((instruction) => {
        switch(instruction.direction) {
            case 'forward':
                horizontalPosition+=instruction.value;
                depthChange = aim*instruction.value;
                depth += depthChange;
                break;
            case 'down':
                aim+=instruction.value;
                break;
            case 'up':
                aim-=instruction.value;
                break;
        }
    })
    return {"horizontalPosition":horizontalPosition,"depth":depth}
}