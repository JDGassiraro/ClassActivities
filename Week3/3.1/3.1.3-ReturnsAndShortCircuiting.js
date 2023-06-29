// ? what does the function below return?
 //It returns undefined since we are simply calling console.log, and not asking it to return a value
function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    console.log(num);
  }
  
  // change the function above to return a value
  function myNumberFunction() {
    let num = 2 ** 2;
    num = num + 3;
    num = num % 4;
    num = num * 14;
    console.log(num);
    return num;
  }
  
  // Short Circuiting
  // ! the console.log will not print
  function shortCircuitFunction() {
    return "Zap! - Short Circuited!";
    console.log(
      "This will never print because it is after the return statement."
    );
  }
  
  // ? will the following function short circuit?
  //No, because there are no returns. A function can't short circuit if there are no returns.
  let height = 50;
  function checkCircusRides() {
    if (height < 48) {
      console.log("Take a ride on the carousel!");
    }
    if (height < 60) {
      console.log("Try the bumper cars!");
    }
    console.log("Enjoy the roller coaster!");
  }
  
  // change the function above to use short circuiting
  function checkCircusRides() {
    if (height < 48) {
      return "Take a ride on the carousel!";
    }
    if (height < 60) {
      return "Try the bumper cars!";
    }
    return "Enjoy the roller coaster!";
  }