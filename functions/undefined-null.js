//undefined for variable
let name;

if (name === undefined) {
  console.log('please provide a name');
} else {
  console.log(name);
}

//undefined for function - when a value is not passed to a function argument

let square = function(num) {
  console.log(num);
};
//undefined if a function is assigned and If that function does not return anything
let result = square();
console.log(result);

//variables can be assigned undefined to clear as well

//null as assgined value
let age = 29;

age = null;

console.log(age);

//null explicilty cleared by the user '
// undefined set by the javascript
