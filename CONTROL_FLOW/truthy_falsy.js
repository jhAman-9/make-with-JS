
/*  NOTE :
    FALSY Values => false, 0, -0, BigInt 0n, "" ,null, undefined, NaN
    and else are the TRUTHY values..
    Some special TRUTHY values => "0", 'false', " ", [], {}, function(){}

    SOME TRUE CONDITONS :-
    false == 0 , false == "" , 0 == ""
*/

const userEmail = "aman@ai.com"
if(userEmail){          // assumed that here is a value
    console.log("got user email");
}else{
    console.log("dont got the user email");
}


// CHECKING EMPTY ARRAY IN IF CONDITION
const emptyArray = []
if(emptyArray){  // execute because empty is true condition 
    console.log("Empty array is true in if statement");
}
// another way to execute empty arrry conditon
if(emptyArray.length === 0){
    console.log("Empty array gives True condition in if statement")
}


// CHECKING OBJECT IN IF CONDITION THAT IS IT TRUE OR FALSE
const obj = {}
if(Object.keys(obj).length === 0){
    console.log("empty OBJECT in If condition");
}




// NULLISH COALESCING OPERATOR (??) : NULL, UNDEFINED
let val;
val = 5 ?? 10
console.log(val);           // 5
val = null ?? 20
console.log(val)            // 20
val = undefined ?? 15
console.log(val);           // 15
val = null ?? 25 ?? 50
console.log(val);           // 25 first value will assign

