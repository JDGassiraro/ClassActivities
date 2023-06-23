// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let name = "Joseph";
let age = 24;
let life = true;
let mind = null;
let day = undefined;


// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(name, age, life, day, mind);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let str = `This is a string: My name is ${Joseph}, and I am ${age}.`

// reassign the value of the variable that references "null"
mind = "awake";

// print the value and its type
console.log(mind, typeof mind);

// print a variable that causes a ReferenceError
let meeeeeep = "monkey";
console.log(meeeeeep);

// alter the previous line to no longer cause a ReferenceError