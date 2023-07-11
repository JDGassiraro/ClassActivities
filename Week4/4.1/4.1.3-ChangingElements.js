// print the outer HTML of the navigation bar
let outNav = document.querySelector("nav").outerHTML;
console.log(outNav);

// print the inner HTML of the navigation bar
let inNav = document.querySelector("nav").innerHTML;
console.log(inNav);

// print the text content of the #class-schedule-list element
let textContent = document.querySelector("#class-schedule-list").textContent;
console.log(textContent);

// select the classList for the first class-week, then add the class "week-1"
let classList = document.querySelector(".class-week:first-child").classList.add("week-1");
console.log(classList);

// select the img element and add a src attribute
let srcAtt = document.querySelector("img").add(src= linkForImageHere)
console.log(srcAtt);

// change the font color of the h1 element
let newColor = document.querySelector("h1").style["font-color"] = "gray";

console.log(newColor);
