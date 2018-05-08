// Global scope (convertFahreinheitToCelcius,tempOne,tempTwo)
// local scope - function arguments and local variable to function
// key note is - function arguments are bounded to the local scope of the funtion alog with local function variable
let convertFahreinheitToCelcius = function(fahreinheit) {
  let celsius = (fahreinheit - 32) * 5 / 9;
  if (celsius <= 0) {
    let isFreezing = true;
  }
  return celsius;
};

let tempOne = convertFahreinheitToCelcius(32);
let tempTwo = convertFahreinheitToCelcius(68);

console.log(tempOne);
console.log(tempTwo);
