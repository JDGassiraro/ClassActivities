// TODO: using the function expressions below, refactor them into function declarations

//1
//Utlizing Function Expression
const greet = function() {
  console.log("Hello!");
};

//Utilizing Function Declaration
function greet(){
  console.log("Hello");
};

//2
//Utlizing Function Expression
const threeModTwo = function() {
  console.log(3 % 2);
};

//Utlizing Function Declaration
function threeModTwo(){
  console.log(3%2);
};

//3
//Utlizing Function Expression
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//Utlizing Function Declaration
function checkDrivingAge(){
  if(age >= 16){
    console.log(true);
  } else {
    console.log(false);
  }
};