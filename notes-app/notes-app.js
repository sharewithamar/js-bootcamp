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
const ps = document.querySelectorAll('p')

ps.forEach(element => {
    element.textContent = 'Ertugrul'
    //console.log(element.textContent)
    //  element.remove()
});


//add a new element

const newParagraph = document.createElement('p')
newParagraph.textContent = 'Noyan returns'
document.querySelector('body').appendChild(newParagraph)


