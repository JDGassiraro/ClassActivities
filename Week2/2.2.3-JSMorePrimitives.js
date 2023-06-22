// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "Morning";

// Create a variable "greeting" that references a template literal
let greeting = ``;

// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
greeting = `Good ${timeOfDay}!`;

// Print "greeting"
console.log(greeting);

// Create a new variable, but do not assign it a value
let monkey;

// Print the new variable and its type
console.log(monkey);
console.log(typeof monkey);

// What type should we expect?
//I believe a boolean, ope, I was wrong, it came out as undefined.

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
monkey = null;

// Print the variable and its type again
// What type should we expect?
console.log(monkey);
//I would expect it to still be undefined, since we are just explicitly calling the variable blank instead of it being implicit like it was earlier. Nope, I got null back instead. This is a good learning experience.

// Try to print a variable that does not exist
console.log(meepers);
// What should we expect to print in the CLI?
//I expect it to say reference error.

// Print "greeting" again
console.log(greeting);

// Will this line run?
//I believe so, since I haven't changed the value of the word greeting...wait, no, it won't because of the reference error I bet. I was right! Haha!