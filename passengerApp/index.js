
const initialCount = 5;
let count=initialCount;

let saveEl=document.getElementById("save-el")
let countEl= document.getElementById("count-el")
document.getElementById("count-el").innerText=initialCount

function increment(){
    count+= 1
    countEl.innerText= count
    console.log(count)
}
function save(){
    let countStr=count + " - " 
    saveEl.textContent+=countStr
    countEl.innerText=0
    count=0
}