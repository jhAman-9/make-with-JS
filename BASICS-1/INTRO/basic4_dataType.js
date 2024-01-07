/*
        JavaScript is Dynamically Typed Language....

        DATATYPE : define on the basic of data store and retrive

        1.) Primitive Datatype =>  String, Boolean, null, undefined, Number, Symbol, BigInt

        2.) Reference Datatype(Non Primitive) => Array , Object & Function
        
*/ 

/* 
Array  = Object type
Function = function Object type
undefind variable  = undefined Type
null = object Type
symbols = Function Type  or Symbol Type(if we check Variable Name)
*/

const value  = 100;
const decimalValue = 100.09 // (Number Type)
const isLoggedIn = false // (boolean Type)
let outsideTemp = null // (Object Type)
let uesrEmail;  //  (undefined Type)



const userId = Symbol('1234');
const userId2 = Symbol('1234');
// both have different return values
// console.log(userId2 === userId);
// console.log(typeof userId);  // (symbol Type)
// console.log("Aman");

const bigNumber = 126661631695645814910n
// console.log(typeof bigNumber);




// how to define Arrays in JS 
const heros = ["shaktiman", "veer", "bablu", "123"] // (Object Type)
// console.log(heros);
// console.log(typeof heros);



// how to declear Object in JS
let myObj = {
    name  : "Aman",
    age : 22
}
// console.log(myObj);



// How to declear Function JS
const myFirstFunction = function(){  // (function Type)
    console.log("HELLO WORLD");
}
// console.log(typeof myFirstFunction);


// ****************************** MEMORY ***************************

// Stack => Primitive  (Copy pass)
// Heap => Non Primitive (Reference pass)

// Store In stack & copy is Given and Can't Changeable
let name1 = "Aman"
let name2 = name1
name1 = "Raj"
console.log(name1);
console.log(name2);


// Store In HEAP and Reference is Given and Can Changeable
let obj1 = {
    name : "Aman",
    age : 20
}

let obj2 = obj1
obj2.age = 22

console.log(obj1.age);
console.log(obj2.age);