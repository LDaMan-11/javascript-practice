//Dom manipulation

//event listeneers

//element.addEventListener("click", function)
const buttonTwo= document.querySelector('.button-2') 

function alertBtn(){
    alert('I also love Javascript')
}
buttonTwo.addEventListener("click", alertBtn)

//mouseOver
const newBackgroundColor =document.querySelector('.btn-3')
 
function changeBgColor(){
    newBackgroundColor.style.backgroungColor = 'blue'
 }
 newBackgroundColor.addEventListener('mouseover',changeBgColor)