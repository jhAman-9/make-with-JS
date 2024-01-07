
const array = [10,2,3,2,31,4,"aman","raj","aarav"]

const forEachReturn = array.forEach((val) => {
    // console.log(val);
    return val;
});
console.log(forEachReturn);         // for each loop return nothing



// *************************** FILTER FUNCTION ****************************************

// Accessing particular elements in array using filter function
const num = [12,13,41,3,4,2]
const ans = num.filter( (val) => val > 5)       // val > 5 is condition here
console.log(ans);               // [ 12, 13, 41 ]

// another way to write this 
const ans2 = num.filter( (val) => {
    return val > 5
})
console.log(ans2);              // [ 12, 13, 41 ]


// Accessing particular elements in array using FOR EACH loop
const newArray = []
num.forEach( (val) =>{
    if(val > 5) newArray.push(val)
})
console.log(newArray);          // [ 12, 13, 41 ]


// Accessing Particular element of Array using Filter Function
const books = [
    {title : 'Book One', genre : "Rhymes", pubish : 1980},
    {title : 'Book two', genre : "History", pubish : 1982},
    {title : 'Book three', genre : "History", pubish : 1979},
    {title : 'Book four', genre : "Science", pubish : 1960},
    {title : 'Book five', genre : "Maths", pubish : 1995}
]
// console.log(books);
let userBook = books.filter( (val) => val.genre === "History")
console.log(userBook);
userBook = books.filter( (val) => { return val.pubish > 1980}) 
console.log(userBook);
userBook = books.filter( (val) => { 
    return val.pubish > 1980 && val.genre === "Maths" 
}) 
console.log(userBook);




// *************************** MAP FUNCTION ****************************************

// Using MAP function, do some operation on element of Array
const number = [12,3,4,2,34,675,32]
let newNum = number.map( (val) => val + 100)
console.log(newNum);
// anoter way to do this return keyword in parameter {}
newNum = number.map( (val) => {return val + 100})
console.log(newNum);


// CHANINING OF FUNCTIONS
const numArray1 = [10,20,30,40,50]
let ans1 = numArray1.map( (val) => val * 10).map( (val) => val + 10).filter( (val) => val > 40);
console.log(ans1)




// *************************** REDUCE FUNCTION ****************************************

const array2 = [1,2,3,4,,5,6]

let result = array2.reduce( function(accumulator, currVal) {
    console.log(`accumulator ${accumulator} and currVal ${currVal}`);
    return accumulator + currVal;
}, 0)
console.log("Reduce Fuction Used ",result);         // accumulator == sum of all elements

// another Way to do this..
let res2 = array2.reduce( (acc , curr) => acc + curr , 0) 
console.log(res2);

// Example 2 of Reduce Function to calculate the cart value
const course = [
    {
        name : "C++",
        price : 100
    },
    {
        name : "Data Scientist",
        price : 500
    },
    {
        name : "java",
        price : 150
    },
    {
        name : "DSA",
        price : 200
    }
]

const total_course_price = course.reduce( (acc, val) => acc + val.price, 0 )
console.log(total_course_price);            // 950