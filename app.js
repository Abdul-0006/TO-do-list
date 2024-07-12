let addtoDobutton = document.getElementById("addtoDO")
let inputfield = document.getElementById("inputfield")
let todocontainer= document.getElementById("toDocontainer")

addtoDobutton.addEventListener('click' ,function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputfield.value
    todocontainer.appendChild(paragraph)

    inputfield.value = " ";
    paragraph.addEventListener ('dblclick' , function(){
    todocontainer.removeChild(paragraph)
    })
})
