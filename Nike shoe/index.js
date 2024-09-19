let errorParagraph=document.getElementById("error")
console.log(errorParagraph)
function myFunction() {
  document.getElementById("demo").innerHTML = "button clicked"
  errorParagraph.textContent="something went wrong,please try again"  
}