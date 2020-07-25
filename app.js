var todoItems = document.getElementById('todoItems')

function todo() {
    var input_todo = document.getElementById('todoInput')
    var todoItemli = document.createElement('li')

    var todoItemText = document.createTextNode(input_todo.value)
    todoItemli.appendChild(todoItemText)
    todoItems.append(todoItemli)
    console.log(todoItemli)

    var div = document.createElement('div')
    div.setAttribute('class','divbtn')
    
    
    var del = document.createElement('button')
    var delbtn = document.createTextNode('DELETE')
    del.appendChild(delbtn)
    del.setAttribute('class', 'Button')
    del.setAttribute('onclick', 'delButton(this)')
    div.appendChild(del)
    
    var edit = document.createElement('button')
    var editbtn = document.createTextNode('EDIT')
    edit.appendChild(editbtn)
    edit.setAttribute('class', "Button")
    edit.setAttribute('onclick' , 'editbutton(this)')
    div.appendChild(edit)
    todoItemli.appendChild(div)
    


    input_todo.value = ""
}
function delAll() {
    todoItems.innerHTML = ""


}
function delButton(e) {
    e.parentNode.parentNode.remove()

}
function editbutton(e){
    // console.log(e.parentNode.firstChild.nodeValue)
    var editVal = prompt("Edit your task", e.parentNode.parentNode.firstChild.nodeValue )
    e.parentNode.parentNode.firstChild.nodeValue = editVal
}
