//Zad 1
function greet(name,surname) {
   return "Hi, " + "\""+name+" "+surname +"\""+ "." +" What's up?";
}
const greeting = greet('John', 'Smith');
console.log(greeting);

//Zad 2
const radius=5;
function getCircleArea(inputRadius) {
     return Math.pow(inputRadius,2)*Math.PI;
}
const area=getCircleArea(radius);
console.log(area);

//Zad 3
function getCircleRadius(inputArea){
    return Math.sqrt(inputArea/Math.PI);
}
const circleArea = 12;
const radius2 = getCircleRadius(circleArea);
console.log(radius2);

//Zad 4
function getCirclesAreaSum (firstRadiusInput, secondRadiusInput) {
    let firstArea = Math.pow(firstRadiusInput,2)*Math.PI;
    let secondArea = Math.pow(secondRadiusInput,2)*Math.PI;
    return firstArea+secondArea;
}
const firstRadius = 5;
const secondRadius = 10;
const circlesAreaSum = getCirclesAreaSum(firstRadius, secondRadius);
console.log(circlesAreaSum);

//Zad 5 Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    if(month<=3) {
        return 1;
    } else if(month<=6) {
        return 2;
    }
}