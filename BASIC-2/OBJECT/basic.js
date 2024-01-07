// Singleton
// Object Literals


// here the ele are in the form of key and val 
// first(key) automatcially is a string without in double cort
// and the second on ur disere type

//  OBJECT LITERALS
const mySym = Symbol("Student")
const myObj = {
    [mySym] : "Student",      // this is a symbol type key
    mySym : "BCA_Student",    // this is not symbol type , this string type key
    name : "Amna", 
    class : "BCA",
    roll : 12,
    email : "amankumar@gmail.com",
    "Topic" : "JavaScript"
}


// -> THERE ARE TWO WAYS TO ACCESS THE OBJECT ELEMENTS :-
console.log(myObj.email);
// in square bracket need to define the key tpye use Double Cort but not whem key is Symbol Type
console.log(myObj["email"]);
// someTime key is defined In double Cort like Topic. So, we can't accessed it with dot way, we use double cort way
console.log(myObj["Topic"]);        // JavaScript

// But with the help of 1st way to access elements we can't access the symbol type key
console.log(myObj.mySym)        //  BCA_Student
// so access the symbol type key we use squre brackect way without key in double Cort
console.log(myObj[mySym]);      // student



// -> HOW TO CHANGE VALUES IN OBJECT
myObj.name = "Aj"
console.log(myObj["name"]);     // Aj



// -> FREEZE THE ELEMENTS OF OBJECT TO CHANGE
// Object.freeze(myObj)



myObj.fun = function(){
    console.log("Hello User")
}
myObj.fun2 = function(){
    console.log(`Hello User, ${this.name}`)
}
console.log(myObj.fun);     // here just come reference    // [Function (anonymous)] 
console.log(myObj.fun());       // Hello User
console.log(myObj.fun2());      // Hello User, Aj