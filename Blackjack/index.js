let firstCard= 6;
let secondCard= 9;

let sum= firstCard + secondCard;
let hasBlackJack= false;
let isAlive= true;
let message="";

function startGame(){
    if(sum<=21){
        message=" would you like to pick another card?"
    } else if(sum===21){
        message="congratulatons,you got Blackjack!"
        hasBlackJack= true
    } else{
        message="Sorry bro,you lost"
        isAlive= false
    }
    console.log(message, sum)
}
console.log(hasBlackJack)
console.log(isAlive)