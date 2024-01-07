
// ************ Function as Parameter ***********
// ************ A function accept another Functio as a parameter is said to Higher Order function.... 
// The Fucntion WHich A pass to the Parameter Is said to be the call Back function
const powerTwo = function print(n){
    return n ** 2;
}
function powerCude (powerTwo, n){
    return  powerTwo(n) * 2;
}

console.log(powerCude (powerTwo, 2));




// ............... Function returning a function
function sayMyName (){
    return () =>{
        console.log("Hey, I am Aman");
    }
}

let gessName = sayMyName();
console.log(gessName);  // Function Invoke here
gessName(); // functon Call here





// ................... Nesting Of  functions
const funOne  = m => {
    const funTwo = n => {
        const funThree = o => {
            return m + n + o           // funThree have access of above all functions variables..
        }
        return funThree
    } 
    return funTwo
}

console.log(funOne(2)(3)(4))






const myArray = [1,2,3,4,5,6]
const sumArray = arr => {
    let totalSum = 0;
    arr.forEach(element => {
        totalSum += element;
    });
    return totalSum
}

console.log(sumArray(myArray));





// *************** Asynchronomous Code Execution While Using SetInterval , setTimeOut
// *************** The JS not Going To Wait For The Execution of SetInterval, after The SetInterval Given Time the setInterval work will Execute 

//**************** while B/w That time the remaining code will Execute...
//............................ Function in setInterVal

function SayName(){
    console.log("Hey Dear, My Name is Aman !");
}

// it continuously executing after one sec
const interval = setInterval(SayName,1000)
clearInterval(interval)     // to stop


// It excute one Time after 1 sec
const timeOut = setTimeout(SayName,1000)
clearTimeout(timeOut)   // to stop
