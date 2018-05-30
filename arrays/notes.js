// const notes = ['Note 1', 'Note 2', 'Note 3']

//length property
//console.log(notes.length)

//Grab by index position
//console.log(notes[0])

//undefined
//console.log(notes[notes.length])

//Get last item
//console.log(notes[notes.length - 2])

//array push
//notes.push('My new Note')
//console.log(notes)

//array pop - pop returns the removed value to store as well
//notes.pop()
//console.log(notes.pop())

//array shift - removes the first item in the array
//console.log(notes.shift())

//array unshift  -add item in the beginning 
// console.log(notes.unshift('Amar'))
// console.log(notes)

//array splice  -add or remove or replace elements in middle of the array
//remove
// notes.splice(1, 1)
// console.log(notes)

//add
// notes.splice(1, 0, 'this is the new second item')
// console.log(notes)

//replace

// notes.splice(1, 1, 'this is the replaced item')
// console.log(notes)

//reading/setting value with breacket notation
// notes[2] = 'new note bracket'
// console.log(notes)


//foreach -args individual item,index
//ForEach can work only with exisiting data

// notes.forEach(function (item, index) {
//     console.log(index)

//     console.log(item)

// })

//for loop - counting ...1 up to 3
//For loop can work without array data as well like just looping number counter
// array.length - 1 // for descend loop

// for (let count = 0; count <= 2; count++) {
//     console.log(`counting...${count + 1}`);
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

//indexof - returns index , or -1 if does not exist
//console.log(notes.indexOf('new note bracket'))

const notes = [{
    title: 'my next trip',
    body: 'I would like to go to spain'

}, {
    title: 'habits to work on',
    body: 'Excercise Eating healthy Yoga'
}, {

    title: 'Office modification',
    body: 'Learn new tech'
}]

//indexOf doesn't work with array of objects as they are different references
//console.log(notes.indexOf({}))

//using findIndex

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex((note, index) => {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

//using find method  -returns undefined if no match found

const findNote = function (notes, noteTitle) {
    return notes.find((note, index) => {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })


}

//filter - returns new array

const findNotes = function (notes, query) {

    return notes.filter((note, index) => {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())

        return isTitleMatch || isBodyMatch
    })

}

//sort 
// -1  a comes first
// 1 b comes first 
// 0 - no change
//comparison
//console.log('a' < 'b') //true
//console.log('a' < 'A')  // false -capital letters come first


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        }
        else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        }
        else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)

//console.log(findNotes(notes, 'trip'))


const note = findNote(notes, 'office modification')
//console.log(note)

//findIndex
// const index = notes.findIndex(function (note, index) {
//     return note.title === 'habits to work on'
// })
// console.log(index)
