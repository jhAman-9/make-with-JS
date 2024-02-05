// ************************ IIFE ******************************
// IIFE (Immediately Invoked Function Expressions )
// We use IIFE to remove Global Scope Polution..
// SYNTAX : ()() 
// 1st parenthesis() used to declear the Function
// 2nd parenthesis() used to call the Function 

(function(){
    console.log("IIFE Function");
})
(); // here, This Parentehsis is for the call the IIFE FUNCTION and to Stop IIFE call Execution use semicolon(;)

// Arrow Function into IIFE function  or UnNamed IIFE function
( (name) => {
    console.log("ARROW Function into IIFE function");
    console.log( "My name is ",name);
})
("Aman");           // calling the IIFE function

// Named IIFE function
(function aj (){
    console.log("Named IIFE Function")
}) ();