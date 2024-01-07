// Ways to Declear String
const Name = "Aman"
const val = 20;
console.log(Name + val + "kumar");
// anoher way to Perform this type of Operation
console.log(`hello my name is ${Name} and roll is ${val}`);
// another way to assign val to String using "new" keyword
const myName = new String('Aman Kumar')
console.log(myName);


// SOME BASIC OPERATION AND FUNCTION OF STRING IN JS
const userName = "aman_1809"

console.log(userName[0])                     //a
console.log(userName.__proto__);             // {}

// find length 
console.log(userName.length);               //9
// convert to upeerCaseCharactor
console.log(userName.toUpperCase())         // AMAN_1809
// find char at index
console.log(userName.charAt(2))             // a
// find char Index Number
console.log(userName.indexOf('n'));         // 3


// Important Pre_defined function are as:
const user = "    Aman     "
console.log(user);                          //     Aman
console.log(user.trim());                   // Aman

const url = "https://aman.com/aman%20kumar"
// replace char with another
console.log(url);                           // https://aman.com/aman%20kumar
console.log(url.replace("%20",'-'))         // https://aman.com/aman-kumar
console.log(url.split('/'));

const userId = "123Aman"
// find char or string in string
console.log(userId.includes("am"))      // false

const fullName = "AmanKumar"

// to get subString
console.log(fullName.substring(0,4));   // Aman
// slice can have -ve index

console.log(fullName.slice(2,-1));      //anKuma







