// add an event listener to the dog picture that listens for a "click" and gives an alert
let handleClick = () => alert("It's a dog!");
console.log(handleClick);
document.querySelector("#dog-picture").addEventListener("click", handleClick);


// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
let changeColor = (event) => {
  //target is the specific element the mouse goes over. It is limited by the div on line 16.
  //event delegation
  if(event.target.tagName === "LI"){

    event.target.style.backgroundColor = "gray";

  }

};

document.querySelector("#class-schedule-list").addEventListener("mouseover", changeColor);

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
let pressedKey = (event) => {
console.log(event.key);
}

document.querySelector("html").addEventListener("keydown", pressedKey);
