// console.log(document.URL)
// console.log(document.title)
//  document.title= 123
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.forms)
// console.log(document.form[0])
// console.log(document.links)
// console.log(document.images)

//console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById("header-title")
// console.log(headerTitle)

Header = document.getElementById("header-title")
Header.style.borderBottom= 'solid 3px'

// var items= document.getElementsByClassName("listGroup")
// console.log(items)
// console.log(items[0])
// items[0].textContent= "what's good"
// items[0].style.fontweight = 'bold'
// items[0].style.backgroundcolor = 'orange'

// for( var i=0;i < items.length;i++){
//     items[i].style.backgroundcolor= 'grey'
// }

var li= document.getElementsByTagName("li")
// console.log(li)
// console.log(li[0])
li[0].style.fontweight = 'bold'

for( var i=0;i < li.length ; i++){
    li[i].style.backgroundcolor= '#f4f4f4'
}

var header= document.querySelector('#main-header')
header.style.borderBottom= 'solid 4px #ccc'

// var input= document.querySelector('input')
// input.value= 'hello wolrd'

var submit = document.querySelector('input[type="submit"]')
submit.value= 'send'

var item= document.querySelector('.listGroup')
item.style.color = 'red'


// var lastItem= document.querySelector('.listGroup: first-child')
var item= document.getElementsByClassName('listGroup-item')[2]
item.style.color ='blue'

//var lastItem= document.querySelector('.listGroup: last-child')
//lastItem.style.color ='orange'

// var titles= document.querySelector('.title')
console.log("item" ,item)
// titles[0].textContent= 'hello'

let ul = document.querySelector("ul")
console.log(ul.parentNode)