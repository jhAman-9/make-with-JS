// function sayMyName(){
//     console.log("A");
//     console.log("M");
//     console.log("A");
//     console.log("N");
// }
// sayMyName();


// Note: passing value while calling Function is Argumenst
// And While Defining Function values are parameters


// VOID return type Function
function add(a , b){  // here a ans b are Parameters
    console.log(a+b);
}
// add();           // NaN
// add(10,20);      // 30
// add(10,"20");    // string 1020
// add(10,'a');     // 10a
// add(10,null);    // 10



// VALUE return type Function
function add(a , b){ 
    let c = a + b;
    return c;
}
const res = add(3,4)
console.log("Return Type Function",res);


function userLoggedIn(username = "Raj"){  // if no argument pass while calling then "Raj" will as argument
    if(!username){
        console.log("Please enter a Name");
        return
    }
    return `${username} just loggged In`;
}

console.log(userLoggedIn("Aman"));


// MULTIPLE VALUE IN JUST ONE PARAMETER
function calculate1(...num){
    return num;
}
function calculate2(num1,num2,...num){
    return num;         // num = [ 4, 5, 6 ] and rest num1 = 2 , num2 = 3
}
// get output into array
console.log(calculate1(2,3,4,5,6));   // [ 2, 3, 4, 5, 6 ]
console.log(calculate2(2,3,4,5,6));   // [ 4, 5, 6 ]



// PASSING ONJECT TO THE FUNCTION
const user = {
    username : "Aman",
    number : 123
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and number is ${anyObj.number}`);
}

handleObject(user)          // username is Aman and number is 123
// we can also direct pass object
handleObject({             // username is Raj and number is 111
    username : "Raj",
    number : 111
})



// PASSING ARRAY TO THE FUNCTION
const myArray = [1,2,3,4,5]
function arrInfunction(getArray){
        return getArray[1];
}
console.log(arrInfunction(myArray));        // 2
// and we can direct pass array to the function as
console.log(arrInfunction([10,20,30]));     // 20