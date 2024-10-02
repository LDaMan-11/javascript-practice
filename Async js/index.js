// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];
  
//   // map every url to the promise of the fetch
//   let requests = urls.map(url => fetch(url));
  
//   // Promise.all waits until all jobs are resolved
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => alert(`${response.url}: ${response.status}`)
//    ));

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
//   ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

Promise.all([
    new Promise((resolve,reject) =>{
        setTimeout(() =>resolve(1),1000)
       throw new Error("something is wrong")
    }),
    2,
    3,
]).then(alert)


