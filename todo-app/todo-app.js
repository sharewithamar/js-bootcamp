const p = document.querySelectorAll('p')

p.forEach(element => {


    let currentTextContent = element.textContent;
    if (currentTextContent.includes('The')) {
        console.log('so far so good')
        element.remove()
    }

})