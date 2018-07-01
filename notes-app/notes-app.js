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


//Document Object Model - document = html , object = js object(document)

//Query and Remove 
// const p = document.querySelector('p')
// p.remove()

//Query all and remove
/* const ps = document.querySelectorAll('p')

ps.forEach(element => {
    element.textContent = 'Ertugrul'
    //console.log(element.textContent)
    //  element.remove()
}); */


//add a new element
/* 
const newParagraph = document.createElement('p')
newParagraph.textContent = 'Noyan returns'
document.querySelector('body').appendChild(newParagraph) */

/* document.querySelector('button').addEventListener('click', (e) => {
    console.log('Did this work', e)
    e.target.textContent = 'The button was clicked'
})
 */
//querySelectorAll [index]
/* document.querySelectorAll('button')[1].addEventListener('click', (e) => {
    console.log('Did this work', e)
    e.target.textContent = 'The button was clicked'
}) */


const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', (e) => {
    e.target.textContent = 'Add button was clicked'
})
/* document.querySelector('#remove-all').addEventListener('click', (e) => {
    document.querySelectorAll('.note').forEach(note => note.remove())
})
 */
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

/* document.querySelector('#name-form').addEventListener('submit', (e) => {
    e.preventDefault()
    // e.target.elements - to get form element 
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
}) */

/* document.querySelector('#for-fun').addEventListener('change', function (e) {
    console.log(e.target.checked)
}); */

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})