// NOTE : variable decleare with VAR keyword apper outside of scope
// the range to access any variable under the scope {} 
var c = 300
if(true){
    let a = 1;
    const b = 2;
    var c = 3;
}

// console.log(a);         // OUTPUT: a is not defined
// console.log(b);         // OUTPUT: b is not defined 
// console.log(c);         // OUTPUT: 3 (appers outside of scope so don't use var)  


let A = 300
if(true){
    // A = 1;          // here  A value will change
    let A = 20      // here A value not change outside of Scope A = 300
    console.log("Inner",A);
    const b = 2;
    var c = 3;
}
console.log("Outside",A);