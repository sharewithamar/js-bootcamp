const todos = ['js', 'Html5', 'css3', 'angular', 'polymer']

// console.log(todos[0])
// console.log(`you have ${todos.length} todos`)
// console.log(`Todo: ${todos[todos.length - 2]}`)
console.log(todos)

//delete 3rd item
todos.splice(2, 1)
console.log(todos)

//add a new item in the  end
todos.push('new item')
console.log(todos)

//remove first item in the list
todos.shift()
console.log(todos)
