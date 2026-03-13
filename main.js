// VARIABLES

let myName = "Ethan";
let myAge = 17;
let isStudent = true;
let colors = ["red","blue","black"];
let today = new Date();

console.log("My name:", myName);
console.log("My age:", myAge);
console.log("Student:", isStudent);
console.log("Colors:", colors);
console.log("Date:", today);



// FUNCTIONS

function add(a,b){
return a+b;
}

function subtract(a,b){
return a-b;
}

function multiply(a,b){
return a*b;
}

function divide(a,b){

if(b===0){
return "Cannot divide by zero";
}

return a/b;

}



// CALCULATOR

function calculate(num1,operator,num2){

switch(operator){

case "+":
return add(num1,num2);

case "-":
return subtract(num1,num2);

case "*":
return multiply(num1,num2);

case "/":
return divide(num1,num2);

default:
return "Invalid operator";

}

}



console.log("Calculator Tests");

console.log(calculate(10,"+",5));
console.log(calculate(10,"-",5));
console.log(calculate(10,"*",5));
console.log(calculate(10,"/",5));
console.log(calculate(10,"/",0));




// ARRAY

let numbers=[1,2,3,4,5];

numbers.forEach(num=>{
console.log(num*2);
});



// OBJECT

let student={
name:"Alice",
age:22,
grade:85
};

console.log(student.name);



// ARRAY OF OBJECTS

let students=[
{name:"Alice",grade:85},
{name:"Bob",grade:70},
{name:"Charlie",grade:90}
];

let topStudent=students.find(s=>s.grade>80);

console.log("Top student:",topStudent);