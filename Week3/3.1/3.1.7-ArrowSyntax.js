// refactor the functions below into arrow syntax
// function myNumberFunction() {
//   return ((2 ** 2 + 3) % 4) * 14;
// }
//refactored arrow function
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

// function greet(name) {
//   return `Hello, ${name}`;
// }
//refactored arrow function
const greet = (name) => `Hello, ${name}`;

// const timeOfDayGreet = function(name, timeOfDay) {
//   return `Hello, ${name}, good ${timeOfDay}`;
// };
//refactored arrow function
const timeOfDayGreet = (name, timeOfDay) => `Hello, ${name}, good ${timeOfDay}`;

// function tripleAndHalf(num) {
//   let triple = num * 3;
//   return triple / 2;
// }
//refactored arrow function
const tripleAndHalf = (num) => {
  let triple = num * 3;
  return triple/2;
}

// function sumTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   console.log(`The sum of your numbers is ${sum}.`);
//   return sum;
// }
//refactored arrow function
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

