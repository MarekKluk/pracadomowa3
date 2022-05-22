//Zad 1
function greet(name,surname) {
   return "Hi, " + "\""+name+" "+surname +"\""+ "." +" What's up?";
}
const greeting = greet('John', 'Smith');
console.log(greeting);

//Zad 2
const radius=5;
let getArea = function getCircleArea(inputRadius) {
     return Math.pow(inputRadius,2)*Math.PI;
}
const area=getArea(radius);
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
    return getArea(firstRadiusInput) + getArea(secondRadiusInput);
}
const firstRadius = 5;
const secondRadius = 10;
const circlesAreaSum = getCirclesAreaSum(firstRadius, secondRadius);
console.log(circlesAreaSum);

//Zad 5 Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => Math.ceil(month/3);
const monthNumber=7
const quarter=quarterOf(monthNumber);
console.log(quarter);



//Convert to string function
function convertToString(bool){
    let newString = bool === true? 'true':'false';
    return newString;
}
console.log(convertToString(true));

//Write a yesOrNo function that returns ‘Yes’ if the value is truthy and ‘No’ if it is falsy.

function yesOrNo (input){
    if (input){
        return 'Yes';
    } else return 'No';
}
console.log(yesOrNo(true));
console.log(yesOrNo(false));
console.log(yesOrNo(123));
console.log(yesOrNo(0));

//Return a string saying how old is the user
const user = {
    name: 'John',
    age: 20
}
function howOldIsUser(user) {
    return user.name + ' is ' + user.age + ' years old';
}
console.log(howOldIsUser(user));

//Write the isPalindrome function

function isPalindrome(input){
    let inputWithoutSpaces = input.replace(/\W/g, "");
    let newString = '';
    for (let i = inputWithoutSpaces.length - 1; i>=0; i--) {
        newString += inputWithoutSpaces[i];
    }
    return newString === inputWithoutSpaces? 'True' : "False";
}
console.log(isPalindrome('a to kanapa pana kota'));

//Write a rockPaperScissors function that returns 1 if the first player won, and 2 if the second player won. In case of a draw, return 0;

function rockPaperScissors(input1, input2){
    if (input1 === input2){
        return '0'
    } else if(input1 === 'Rock'){
        if(input2 === 'Scissors'){
            return '1';
        }else return'2';
    }else if (input1 === 'Scissors'){
        if(input2 === 'Paper'){
            return '1';
        } else return '2';
    }else if (input1 === 'Paper'){
        if(input2 === 'Rock'){
            return '1';
        } else return '2';
    }
}
console.log(rockPaperScissors('Paper','Paper'));