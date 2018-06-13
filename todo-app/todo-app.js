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
    searchText: ''
}

const renderTodos = function (todos, searchText) {
    document.querySelector('#todos').innerHTML = ''
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchText.toLowerCase()))
    const todosLeft = filteredTodos.filter(todo => !todo.completed)

    const summary = document.createElement('h2')
    summary.textContent = `you have ${todosLeft.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(todo => {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}
renderTodos(todos, filters.searchText)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters.searchText)
})

document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = { text: e.target.elements.todoText.value, completed: false }
    todos.push(newTodo)
    renderTodos(todos, filters.searchText)
    e.target.elements.todoText.value = ''

})