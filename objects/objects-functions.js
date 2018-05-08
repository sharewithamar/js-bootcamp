let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'chronicles',
    author: 'Archer',
    pageCount: 1000
}


let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }


}

let bookSummary = getSummary(myBook);
//console.log(bookSummary.summary);


let otherBookSummary = getSummary(otherBook);
//console.log(otherBookSummary.pageCountSummary);


//Challenge 

let temperatureObject = function (fahrenheit) {

    return {
        fahrenheit,
        celcius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9,
    }
}

console.log(temperatureObject(50).celcius);
console.log(temperatureObject(50).kelvin);
console.log(temperatureObject(50).fahrenheit);

