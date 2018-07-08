const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    }
    else {
        return []
    }
}

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const removeTodo = function (id) {
    const todoIndex = todos.findIndex(todo => todo.id === id)
    todos.splice(todoIndex, 1)
}
const generateTodoDom = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    removeButton.textContent = 'x'
    checkbox.setAttribute('type', 'checkbox')

    todoText.textContent = todo.text
    todoEl.appendChild(checkbox)
    todoEl.appendChild(todoText)
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', (todo) => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos)
    })
    return todoEl
}
const generateSummaryDom = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    return summary
}
const renderTodos = function (todos, filters) {
    document.querySelector('#todos').innerHTML = ''
    const filteredTodos = todos.filter(todo => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(todo => !todo.completed)
    document.querySelector('#todos').appendChild(generateSummaryDom(incompleteTodos))


    filteredTodos.forEach(todo => {
        document.querySelector('#todos').appendChild(generateTodoDom(todo))
    })



}