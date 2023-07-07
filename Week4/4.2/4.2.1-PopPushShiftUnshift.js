const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let pop1 = nums.pop();
//0
let pop2 = nums.pop();
//1
console.log(pop1, pop2);

// remove each of the first two items with shift(), saving each item to a variable
let shift1 = nums.shift();
//6
let shift2 = nums.shift();
//5
console.log(shift1, shift2);

// use push and unshift to add the variables back to the array in numerical order, 0-6
//push adds items to the end
//unshift adds items to the front
nums.unshift(pop1, pop2);
nums.push(shift2, shift1);
console.log(nums);
