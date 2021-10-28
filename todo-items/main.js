// Add your javascript here
let todoForm  = document.querySelector('#todoForm'),
    todoInput = document.querySelector('#todoInput'),
    items     = document.querySelector('#items'),
    message   = document.querySelector('.message'),
    error     = document.querySelector('.error')

let itemsArr = [];


init()

function init() {
    updateErrorMessage('none')
    updateMessage();
    todoForm.addEventListener('submit', addItem)
}

function removeItem(e) {
    let item = e.target.parentNode.parentNode
    let valueText = e.target.parentNode.childNodes[0].innerText
    item.remove();


    const newItems = itemsArr.filter((item) => { return item !== valueText })

    itemsArr = [...newItems]

    console.log(itemsArr)
    console.log(itemsArr.length)
    updateMessage();
    updateErrorMessage('none')

}

function addItem(e) {
    e.preventDefault();
    const value = todoInput.value

    if(isContain(value)) {
        updateErrorMessage('block')
        return 
    }

    updateErrorMessage('none')
    itemsArr.push(value)
    todoInput.value = ''

    let bgColor = (itemsArr.length % 2 === 0) ? '#F1F1F1' : '#E4EFF1'
    let textColor = (itemsArr.length % 3 === 0) ?  '#FF0000' : '#000000'
    let templateHtmlItem = `<div class="item" style='background-color:${bgColor}'><div class="item-content"><p style='color:${textColor}'>${value}</p></div><button id="removeItem">Remover</button></div>`

    var item = document.createElement("li")


    item.innerHTML = templateHtmlItem
    items.appendChild(item)

    var buttons = document.querySelectorAll('#removeItem')
    for(var i = 0; i < buttons.length; i++)
        buttons[i].addEventListener('click', removeItem)

    
    console.log(itemsArr)
    console.log(itemsArr.length)
    
    updateMessage()

}

function isContain(value) {
    return itemsArr.includes(value)
}

function updateMessage() {
    
    if(itemsArr.length == 0)
        message.innerHTML = 'Não há items na lista.'
    else
        message.innerHTML = `A lista possui ${itemsArr.length} ${itemsArr.length == 1 ? 'item apenas.' : 'items.'}`
}

function updateErrorMessage(display) {
    error.style.display = display
}