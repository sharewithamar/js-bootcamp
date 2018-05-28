const notes = ['Note 1', 'Note 2', 'Note 3']

//length property
console.log(notes.length)

//Grab by index position
console.log(notes[0])

//undefined
console.log(notes[notes.length])

//Get last item
console.log(notes[notes.length - 2])

//array push
notes.push('My new Note')
console.log(notes)

//array pop - pop returns the removed value to store as well
//notes.pop()
console.log(notes.pop())

//array shift - removes the first item in the array
console.log(notes.shift())

//array unshift  -add item in the beginning 
console.log(notes.unshift('Amar'))
console.log(notes)

//array splice  -add or remove or replace elements in middle of the array
//remove
notes.splice(1, 1)
console.log(notes)

//add
notes.splice(1, 0, 'this is the new second item')
console.log(notes)

//replace

notes.splice(1, 1, 'this is the replaced item')
console.log(notes)

//reading/setting value with breacket notation
notes[2] = 'new note bracket'
console.log(notes)
