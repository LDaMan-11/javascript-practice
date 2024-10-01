// async function getData() {
//     const url = "https://example.org/products.json";
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
  
//       const json = await response.json();
//       console.log(json);
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  
// function first(){
//     console.log(1)
// }

// function second(callback){
//     setTimeout(() => {
//         console.log(2)
//         call
//     },0)
// }
// function third(){
//     console.log(3)
// }

// first()
// second()
// third()

// function callbackHell(){
//     setTimeout(() =>{
//         const data={ user: "Johhny"}
//         console.log(data)
//         setTimeout(() => {
//             console.log("data has been updated")
//         }, 1000)
//     },500)
// }
// callbackHell()


// const promise= new Promise((resolve, reject) =>{
//     resolve({user : "Blanka"})
// })

// promise
//     .then((data) => {
//         const user = data
//         return fetch('https://jsonplaceholder.typicode.com/todos/1')
//     })
//     .then((todos) => {
//         console.log(todos)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })

// const promise= new Promise((resolve, reject) =>{
//     setTimeout(() => resolve("this my data  from a server"),2000)
// })

// promise.then((res) => {
//     console.log(res)
// })

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((data) =>{
//     return data.json()
// })
//     .then((jsonedData) =>{
//     console.log(jsonedData)
//     })
//     .catch((err) =>{
//     console.log("dude, something went wrong")
//     })
//     .finally(() =>{
//         console.log("well, everything is done,we tried")
//     })

async function getTodos(){
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(1)
    console.log(response)
    console.log(3)
}
getTodos()