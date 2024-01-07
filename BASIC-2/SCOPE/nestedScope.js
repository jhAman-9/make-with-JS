// FUNCTION IN FUNCTION

function one(){
    const name = "Aman"
    function two(){
        const Roll = 12
        console.log(name);      // Aman
    }
    // we can't access Roll outside of function two
    two();
}
one();


if(true){
    const userName = "Aman"
    if(userName === "Aman"){
        const userId = 12;
        console.log(`userName ${userName} and userId ${userId}`);    // userName Aman and userId 12
    }
    // we can't access userId outside of its scope
}
// we can't access userName and userId outside of Scope



// ************************ INTRESTING ****************************
// Here, we can access add function before Initilization
console.log(add(5));        // 6
function add(num){
    return num + 1
}

// here, we cannot access addTwo function before Intialization
// addTwo(10)                   // OUTPUT: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(10));        // 12