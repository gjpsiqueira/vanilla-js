let question = document.querySelector('.question'),
    ul  = document.querySelector('.options'),
    btnNext = document.querySelector('.btn-next'),
    errorMessage = document.querySelector('.errorMessage')

let indexQuestion = 0;    
const questions = {
    "Inside which HTML element do we put the JavaScript?": [["script", "javascript", "JS", "link"],'script'],
    "How do you call the function 'myFunction'?": [["myFunction", "func myFunction()", "myFunction()", "None of those"], 'myFunction()'],
    "What keyword is used to create a JavaScript variable": [["variable", "varies", "string", "var"], 'var']
}

errorMessage.style.display = 'none'
document.addEventListener("DOMContentLoaded", loadQuestion)
ul.addEventListener('click', checkAnswer)

function loadQuestion() {

    errorMessage.style.display = 'none'
    question.innerHTML = Object.keys(questions)[indexQuestion]

    const options = Object.values(questions)[indexQuestion][0]
    let count = 0;
    options.forEach((option) => {
        count +=1;
        const li = document.createElement('li')
        li.setAttribute('data-id', count)
        li.className = 'answer'
        li.innerHTML = `<span>${option}</span> <div class="checkmark"></div>`
        ul.appendChild(li)
    })
}

function checkAnswer(e) {
    if(e.target.matches("li")) {
        const value = e.target.firstChild.textContent
        console.log(value)
        if(value == Object.values(questions)[indexQuestion][1]) {
            e.target.firstChild.nextSibling.nextElementSibling.style.display = 'block';
        } else {
            errorMessage.style.display = 'block'
        }
        avoidDoubleClick()

    }
}

function avoidDoubleClick() {
    const answer = document.querySelectorAll('.answer')
    answer.forEach((i) => {
        if(!i.classList.contains('selected')) {
            i.classList.add('disabled')
        }
    })
}

function nextQuestion() {
    ul.innerHTML = ''
    indexQuestion += 1
    loadQuestion()
}