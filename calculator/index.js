let num1=8
let num2=2

document.querySelector("result").textContent = 500;

let sumEl=document.getElementById("sum-el")

function add(){
  let result=num1+ num2
  sumEl.textContent="sum:" + result
}

function subtract(){
  let result=num1-num2
	sumEl.textContent="sum:" + result
}

function multiply(){
	let result=num1*num2
  	sumEl.textContent=result + "sum:"
}

function divide(){
	let result=num1/num2
  	sumEl.textContent="sum:"+ result
}


