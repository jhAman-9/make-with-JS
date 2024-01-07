// A function can also be a object 
function multiplyBy5(number){
    return number * 5
}

console.log(multiplyBy5(10));                        // 50
multiplyBy5.power = 2
console.log(multiplyBy5.power);         // 2
console.log(multiplyBy5.prototype);     //  {}





// Understanding properly use of This Keyword
function createUser(userName, price){
    this.userName = userName
    this.price = price
}

// making our own increment function
createUser.prototype.incrementScore = function(){
    this.price++
}
// making a display function
createUser.prototype.display = function(){
    console.log(`price is ${this.price}`);
}

// here use new keyword
const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.display()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/