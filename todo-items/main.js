import Item from './item.js'

let todoForm  = document.querySelector('#todoForm'),
    todoInput = document.querySelector('#todoInput'),
    items     = document.querySelector('#items'),
    message   = document.querySelector('.message')

let itemsLength = 0;    

updateMessage();
todoForm.addEventListener('submit', addItem)

function removeItem(e) {
    itemsLength -= 1;
    var item = e.target.parentNode.parentNode
    item.remove();
    updateMessage();
}

function addItem(e) {
    e.preventDefault();
    const value = todoInput.value
    todoInput.value = ''

    let templateHtmlItem = `
        <div class="item"><div class="item-content"><p>${value}</p></div><button id="removeItem">Remover</button></div>
    `
    var item = document.createElement("li")
    item.innerHTML = templateHtmlItem
    items.appendChild(item)

    var buttons = document.querySelectorAll('#removeItem')
    for(var i = 0; i < buttons.length; i++)
        buttons[i].addEventListener('click', removeItem)

    
    itemsLength += 1;

    updateMessage()

}

function updateMessage() {
    
    if(itemsLength == 0)
        message.innerHTML = 'Não há items na lista.'
    else
        message.innerHTML = `A lista possui ${itemsLength} ${itemsLength == 1 ? 'item apenas.' : 'items.'}`
}

