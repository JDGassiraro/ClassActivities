// create a new unordered list (ul) element
let newUL = document.createElement("ul");
console.log(newUL);

// remove the paragraph element in the nav-bar
const child = document.querySelector(".nav-bar").querySelector("p");
let noP = document.querySelector(".nav-bar").removeChild(child);
console.log(child);

// add your new ul element to the nav-bar
let addUL = document.querySelector("nav-bar").appendChild("newUL");

// create two new list item (li) elements, and add some text to them
let li1 = document.createElement("li");
li1.textContent = "Hi!"
let li2 = document.createElement("li");
li2.textContent = "Hi!"


// add the li elements to the ul in the nav-bar
