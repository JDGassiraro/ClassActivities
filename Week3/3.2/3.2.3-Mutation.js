let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = null;
y = 0;
z = "";
// print x, y, and z
console.log(x);
console.log(y);
console.log(z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
//I can't reassign const values, so an error

// using BRACKET NOTATION, assign a value to b
b[0] = "value";

// using DOT NOTATION, assign a PROPERTY to c
c.property = "value";

// using DOT NOTATION, assign a METHOD to c
c.method = () => {console.log("I'm a method!")};

// using BRACKET NOTATION, call the method in c
c["method"];

// print a, b, and c
console.log(a);
console.log(b);
console.log(c);
