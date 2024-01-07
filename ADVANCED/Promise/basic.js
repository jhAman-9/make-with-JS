// ******************** promise -> resolve , reject , then, catch, finally
// ******************** async , try -> catch, fetch api using async and then functions..

const promiseOne = new Promise((resolve, reject) =>{
    // Do any Async tast
    // lIke Db calls ,CryptoGraphy, Network
    setTimeout(function(){
        console.log("Async Task is Completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise one Is resolved')
})





new  Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Aysnc 2 is Resolved");
})





// passing obejct parameter to the resolve fuction 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName : "Aman" , Email : "aman@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})





promiseFour = new Promise( function (resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName : "Aman" , userId : 123})
        } else{
            reject("ERROR :Something Went Wrong")
        }
    },1000)
})

// here the Rejection state is come
promiseFour.then(function(user){
    console.log(user);
    return user.userName;
}).then( function(userName) {
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally( function() {
    console.log("This Block will always execute, either it is resolve or rejected");
})






// Use of Async function
const promiseFive = new Promise( function(resolve, reject){
    setTimeout(function (){
        let error = true
        if(!error){
            resolve({userName : "JavaScript" , pass : 1111})
        } else{
            reject("ERROR : JS Went Wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();





// fetching using the async method
async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()              /// converting into JSON
        console.log((data)); 
    } catch (error) {
        console.log("E: ", error);      
    }
}
// getAllUser()






// fetching using the then method
fetch('https://jsonplaceholder.org/users')
.then( function (response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch((error) => {
    console.log(error);
})


//Note: The fetch API run firstly the the other work will run...