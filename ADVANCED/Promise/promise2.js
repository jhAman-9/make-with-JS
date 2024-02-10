/*Settle means resolve or reject 
resolve means promise has settled succeccfully
reject means promise has not satteld successfully */

function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("Data Get !");
            resolve(100);
        },1000)
    })
}

// getData().then((v) =>{
//     console.log("promise fulfill");
//     console.log(v);
// })

console.log("ASYNC AWAIT");

/* Here, the flow of program turn into asyncronmous way where it run
1. "ASYNC AWAIT"
2. Data Get !
3. promise Fullfill
4.100
*/




// If we don't want to run our program in asyncromous way and want to wait for the data while it doesnot came
// we use async keyword which help us to wait for the data...

async function data(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Data Getting");
            resolve(-190)
        },5000)
    })
}

// we can use await only in async function
async function main(){
    console.log("main function");
    await data().then((v) =>{
        console.log("promise fullfill and wait over");
        console.log(v);
    })
}

// main();





// Basically we use async await for fetching API from the server 
async function fetchApi (){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(x);
    let data = await x.json()
    console.log(data);
}

async function main2(){
    await fetchApi(0)
}

main2()