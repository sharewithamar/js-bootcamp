let todos = []

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''

})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters)

});