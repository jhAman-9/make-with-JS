function SetName(name) {
    // Complex DB call
    this.name = name
    console.log("called");
}

// calling setName from another function
function details(name, email, password){
    /*
    if we don't use .call while callling a function from a function, the function will call
    like here SetName after that the call stack will remove and there is no change occur from where 
    it is call .. so for holding the refernce we use .call while calling the function
    But Only use of .call will also not help here..SO we need to give it our own refernce while calling 
    SO, that's why here we pass variable and this keyword as the current context from where it is call..
    */
    SetName.call(this, name)

    this.email = email
    this.password = password
}

const user = new details("chai", "chai.com", "123")
console.log(user);