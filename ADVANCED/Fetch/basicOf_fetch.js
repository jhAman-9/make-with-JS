
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
        const data = await response.json()              // converting into JSON
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