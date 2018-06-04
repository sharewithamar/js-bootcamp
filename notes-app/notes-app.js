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
