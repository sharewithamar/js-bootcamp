let name = ' Amarnath Rajasekaran '

//length property
console.log(name.length)

//uppercase Method
console.log(name.toUpperCase())

//lowercase Method
console.log(name.toLowerCase())

//includes Method
let password = 'abc123password098'
console.log(password.includes('password'))

//trim Method - removes before and after spaces
console.log(name.trim())


//Challenge 

// isValidPassword  - true if length is more than 8 and doesn't contain the word password

let isValidPassword = function (str) {
    let query = str.trim()
    return query.length >= 8 && !query.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdfp123 '))
console.log(isValidPassword('asdfpasdas123aspassword'))