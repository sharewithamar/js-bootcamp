let num = 103.941

//toFixed Method
console.log(num.toFixed(1))

//Math round Method
console.log(Math.round(num))

//Math Floor Method
console.log(Math.floor(num))

//Math ceil Method
console.log(Math.ceil(num))

//Math Random Method 0-1 but (0 inclusive ,  1 exlusive )
console.log(Math.random())

//Generate random number between two number
let min = 10;
let max = 20;
//0- .999999
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//console.log(randomNum)


//Challenge 
// guess  1- 5 true if correct else false if not correct

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)

    return randomNum === guess

}

console.log(makeGuess(1))