
// < , > , <=, >=, ==, ===, !=, !==
// NOTES: === and !== These operator can match value as well as datatype
// The Scope of var variable is completely Global


// IF ELSE
const isLogged = true;
const temperature = 41;
if(temperature === 41){
    console.log("less the 50")
}else{
    console.log("Less than 50")
}

console.log("executed");


// DONT USE VAR KEYWORD
const score = 200;
if(score == 200){
    const power = "fly"
    var checkVar = "Var out of scope"
    console.log(`superman can ${power}`);
}
console.log(checkVar);          // Var out of 


// IF WITHOUR SCOPE, but this way is not good
const balance = 20
if(balance < 500) console.log("written without scope {} "),
console.log("writing Multiple Line using , "),
console.log("muliple statement using , without {} ");



// IF ELSE IF
const amount = 500;
if(amount < 500){
    console.log("amount less than 500");
}
else if(amount < 750){
    console.log("'less than 750");          // less than 750
}
else if(amount < 1000){
    console.log("'less than 1000");
}
else if(amount < 1000){
    console.log("'less than 1000");
}
else{
    console.log("less than 1500");
}




// lOGICAL OPERATOR -> AND(&&) , OR(||)
const user = "aman";
const loggedIn = true;
const loggedOut = false
if(loggedIn == true && 2==2) {
    console.log("AND Operatin is Used");
}

if(loggedOut || loggedIn){
    console.log("OR Operator is used");
}




//  SWITCH CASE
const month = "m"
switch (month){
    case "j":
        console.log("January");
        break;
    case "f":
        console.log("February");
        break;
    case "m":
        console.log("March");       // March
        break;
    case "a":
        console.log("April");
        break;
    default:
        console.log("Wrong Input");
        break;
}
// Use Of Break Here because By default after CONDITION match all the statement will execute so donot execute all the statement break is Used...



// TURNIARY OERATOR :- condition ? true : false
const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("More than 80");