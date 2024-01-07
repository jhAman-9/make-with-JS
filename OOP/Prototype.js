const userName = "Aman    "
console.log(userName.truelength);




let myHeros = ["thor", " loki", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    loki : "intelligency",

    getSpiderPower : function (){
        console.log(`spider Power is ${this.spiderman}`);
    }
}
// Everything like function, array, string passes from Object and with the help of object, I injected aman function to it
// and it is available in every things.
// We give it in object and we can access it with array too..
// Object has aman function
Object.prototype.aman = function(){
    console.log("Aman is present in all Object");
}

heroPower.aman()            // Aman is present in all Object
myHeros.aman()              // Aman is present in all Object


// Now we are checking that if we give any Function to the array and can we access with object
// let's check
Array.prototype.helloAman = function(){
    console.log("Aman is saying Hello to you");
}
// here, we Just give the helloAman fucntion to the array, so it is only accessable by array, not by the object 
// but when we give the function to the object, it is accessable by everyOne because everyone is passing from the object
myHeros.helloAman()                 // myHeros is array so, helloAman function is accessable by it
// heroPower.helloAman()               // heroPower is object so, helloAman function is not accessable by it




// ********************** INHERITANCE ****************
// Prototyple Inheritance 

const user = {
    Uname : "Aman",
    umail : "aman@gmail.com"
}

const teacher = {
    name  : "Hitesh Chaudhry",
    videoMake : true
}

const TeachingSupport = {
    isAvailable : true
}

const teacherMode = {
    availability : "Online",
    // here we perform protoytpe Inheritance
    __proto__ : TeachingSupport
}


teacher.__proto__ = user


// Modern prototyple Inheritance
Object.setPrototypeOf(teacherMode, teacher)  // behind the scene same of __proto__ perform


// Now, how to solve the problem of find trueLenght of string ,
// so,with the help of prototyple Inheritance we create a method for it..


let anotherUserName = "AmanKumarJha   "
String.prototype.truelength = function (){
    console.log(`${this}`);            // and this has the access of current constext means who call it
    console.log(`The true length is as ${this.trim().length}`);
}

anotherUserName.truelength();       //  AmanKumarJha
                                    // The true length is as 12

"chaiAurCode    ".truelength()      // chaiAurCode
                                    // The true length is as 11