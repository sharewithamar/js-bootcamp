let notes = []


const filters = {
    searchText: ''
}

//check for existing saved data
const notesJSON = localStorage.getItem('notes')
if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}


const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach((note) => {
        const noteEl = document.createElement('p')
        if (note.title.length > 0) {
            noteEl.textContent = note.title
        }
        else {
            noteEl.textContent = 'Unnamed note'
        }
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', (e) => {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
    //e.target.textContent
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value)
})