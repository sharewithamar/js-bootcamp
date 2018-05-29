// const todos = ['js', 'Html5', 'css3', 'angular', 'polymer']

// // console.log(todos[0])
// // console.log(`you have ${todos.length} todos`)
// // console.log(`Todo: ${todos[todos.length - 2]}`)
// console.log(todos)

// //delete 3rd item
// todos.splice(2, 1)
// console.log(todos)

// //add a new item in the  end
// todos.push('new item')
// console.log(todos)

// //remove first item in the list
// todos.shift()

// // foreach

// todos.forEach((item, index) => console.log(`${index + 1}.${item}`))

// //using for
// for (let count = 0; count < todos.length; count++) {
//     console.log(`${count + 1}.${todos[count]}`)
// }

//convert array in to array of objects - text,completed
const todos = [{
    text: 'HTML5',
    completed: true
}, {
    text: 'Node',
    completed: false
}, {
    text: 'Python',
    completed: false
}]

//create function to remove a todo by text value
const deleteTodo = function (todos, text) {

    const index = todos.findIndex((todo) => todo.text.toLowerCase() === text.toLowerCase())
    if (index > -1)
        todos.splice(index, 1)


}
deleteTodo(todos, 'HTML5')
console.log(todos)