var firstName = 'Amarnath'

firstName = 'sowra'

console.log(firstName)

var firstName = "Rajasekaran"
console.log(firstName)
//Var allows you to redeclare a varaible again 
//var can be reassigned
//let or const will throw error if you redeclare 
//const variable cant be reassigned
//let can be reassigned
//var is function scoped and not block scoped

if (10 === 10) {
    let hero = 'Ertugrul'
}

const setName = function () {
    var villain = 'Noyan'
}
setName()
//console.log(villain) // error -function scoped

let age
console.log(age)  // undefined

console.log("amar", horse)  // variable gets hoised and returns undefined, even if not declared during usage
var horse

//console.log("sword", sword)  // throws error
let sword


console.log("horsename", horsename)  // variable declaration gets hoised but value does not  and returns undefined, even if not declared during usage
var horsename = 'Aktogali'


count = 10
console.log('count', count)
var count;  //declaration will get hoisted
