// FOR OF loop
const arr = [1,2,3,4,5]
for (const it of arr) {
    // console.log(it);
}

const str = "Hello World"
for (const x of str) {
    if(x == ' ') continue
    // console.log(x);
}


// MAPS
/* 
    Maps are a collection of key-value pairs. It is something like OBJECT
    but main difference is that map remember the Order of Insertion but Object Not..
    Any value of map can be Used as key Value
    It store Only the Unique value ...
    MAP is not Iteratiable like Object OR Array, For Excess the key and value of MAP we use forof loop
*/

const mp = new Map()
mp.set('IN', "India")
mp.set('USA', "United State Of America")
mp.set('FR', "France")
mp.set('IN', "India")           // It can't Store the Duplicate Value

console.log(mp);

//************************************* FOR OF LOOP **********************

//  Iterating On MAP we use Forof loop
for (const key of mp) {
    console.log(key);
}
// Printing MAP key and Value Seprately..
for (const [key , value] of mp) {
    console.log(key, ":-", value);
}


// can we Iterate on Object With forof Technique : No
// NOTE: Forof technique is not Iteratable In OBJECT
const obj = {
    Name : "Aman",
    Class : "BCA",
    Roll : 12
}
// for (const [key , value] of obj) {
    // console.log(key, ":-", value);  // ERROR : obj is not iterable
// }



//************************************* FOR IN LOOP **********************

//  To Iterate On Object We use forin Loop
const myObj = {
    js : "JavaScript",
    cpp : "c++",
    rb : "ruby",
    html : "hyper text markup language"
}

// To Iterate On Object We use forin
for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

// forin loop in array
const arr1 = [10,20,30,12,3,13]
for (const key in arr1) {
    // console.log(key);       // here key is Index
    console.log(arr1[key]);
}

// We can't Iterate ON MAP using for in loop
const mp1 = new Map()
mp1.set('IN', "India")
mp1.set('USA', "United State Of America")
mp1.set('FR', "France")
mp1.set('IN', "India") 
for (const key in mp1) {
    console.log(key);
}


//************************************* FOR EACH LOOP **********************
// for each loop taking a call back fuction in parameter where it is function type or arrow function type
const array = [10,2,3,2,31,4,"aman","raj","aarav"]

// Implementing For each loop using funtion
array.forEach(function (val){   // under the forEach parenthesis there is a call back function
    console.log("for each using function declearation in for each parameter");
    console.log(val);
})


// Implementing FOR EACH using Arrow function
array.forEach( (val) => {
    console.log("for each using arrow function");
    console.log(val);
})


// Anothe Way to Implement For Each loop
function printMe(val){
    console.log("for each using outside function");
    console.log(val);
}
// Now pass the refrene as parameter in FOR EACH loop
array.forEach(printMe)      // here passing reference of printMe function


// for each function has access of array index , val, as well as whole array from any index
array.forEach((val, index, array) =>{
    console.log(`value is ${val}, index is ${index}, array is ${array}`);
})


// Accessing The OBJECT element which is in ARRAY using FOR EACH loop
const myCoding = [   // Array having Object as element
    {
    user : "Aman",
    language : "JS"
    },
    {
        user : "Raj",
        language : "PYTHON"
    },
    {
        user : "Mohan",
        language : "C++"
    }
]
myCoding.forEach((val) => {
    console.log(val.language);
});
