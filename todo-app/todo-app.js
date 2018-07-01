const todos = [{
    text: 'HTML5',
    completed: true
}, {
    text: 'Node',
    completed: false
}, {
    text: 'Python',
    completed: false
},
{
    text: 'CSS',
    completed: false
},
{
    text: 'React',
    completed: false
},
{
    text: 'Javascript',
    completed: false
},
{
    text: 'Javascript Andrew',
    completed: true
},
{
    text: 'Angular',
    completed: false
},
{
    text: 'Polymer',
    completed: false
}]

/*
const p = document.querySelectorAll('p')

p.forEach(element => {


    let currentTextContent = element.textContent;
    if (currentTextContent.includes('The')) {
        console.log('so far so good')
        element.remove()
    }

})
*/

//You have two todos left in a paragraph tag


//print a p tag for each todo above , textValue 
/* todos.forEach(todo => {
    let currentTodoElement = document.createElement('p')
    currentTodoElement.textContent = todo.text
    document.querySelector('body').appendChild(currentTodoElement)
})
 */
/* document.querySelector('#add-todo').addEventListener('click', (e) => {
    console.log("Add todo button clicked")
}) */

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    document.querySelector('#todos').innerHTML = ''
    const filteredTodos = todos.filter(todo => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(todo => !todo.completed)

    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)


    filteredTodos.forEach(todo => {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })



}
renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = { text: e.target.elements.todoText.value, completed: false }
    todos.push(newTodo)
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''

})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters)

});