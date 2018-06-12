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

const todosLeft = todos.filter(todo => !todo.completed)

const summary = document.createElement('h2')
summary.textContent = `you have ${todosLeft.length} todos left`
document.querySelector('body').appendChild(summary)
//print a p tag for each todo above , textValue 
todos.forEach(todo => {
    let currentTodoElement = document.createElement('p')
    currentTodoElement.textContent = todo.text
    document.querySelector('body').appendChild(currentTodoElement)
})

document.querySelector('#add-todo').addEventListener('click', (e) => {
    console.log("Add todo button clicked")
}) 