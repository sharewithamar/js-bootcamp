let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)


myBook.title = 'animal farm'
console.log(`${myBook.title} by ${myBook.author}`)


//Model a person

let person = {

    firstName: 'Amarnath',
    age: 29,
    location: 'Banglore'
}

console.log(`${person.firstName} is ${person.age} years old and lives in ${person.location}`)

person.age = person.age + 1;
console.log(`${person.firstName} is ${person.age} years old and lives in ${person.location}`)

