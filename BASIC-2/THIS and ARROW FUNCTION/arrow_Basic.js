// this keyword refers Current Context
// const obj  = {
//     userName : "Aman",
//     welcome : function(){
//         console.log(`hi ${this.userName}, Welcome To the Code `)
//         console.log(this);  // here this will print all the content of current context
//     }
// }

// console.log(obj.welcome());             // hi Aman, Welcome To the Code
// obj.userName = "Raj"
// console.log(obj.welcome());            // hi Raj, Welcome To the Code

// console.log(this);                    // {}



// // this is not usable in function
// function fun(){
//     const name = "Aman";
//     // console.log(this.name);             // not useable
//     // console.log(this);
// }
// fun()





// *********************** ARROW Functioon ******************************

const chai = () => {             // here, Storing Arrow Function into a variable chai
    const name = "Aman";
    console.log(this.name);          
    console.log(this);              // {}
}
chai();

// we can also define Arrow Function as
() => {
    
}

const arrowFunction = (a, b, c) => {  // if we use curly bracket then write return keyword
    return a + b + c;
}
console.log(arrowFunction(1,2,3));          // 6

// Implicit return of Arrow Function
const add = (num1,num2) => (num1 + num2)      // here, don't need to write the return keyword, use parenthesis()
console.log(add(1,2));                      // 3

// how to ruturn Object in Arrow Function
const arrFuc = () => ({user : "Aman"})
console.log(arrFuc());      // { user: 'Aman' }