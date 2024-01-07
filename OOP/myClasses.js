// comes after ES6 

class User {
    constructor(userName, email, password){         // while initiallizing a obejct from class, constructor will call
        this.userName = userName
        this.email = email
        this.password = password
    }          

    encryptPassword() {
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}


const chai = new User("chai", "chai@gamail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());







// if we don't have the way of class so we did it like
// Behind the scene
// ProtoType give Inheritance Properties

function UserDetails(name, email, password){
    this.name = name
    this.email = email
    this.password = password
}

UserDetails.prototype.encryptPassword = function(){
    return `${this.password}efg`
}
UserDetails.prototype.changeUserName = function(){
    return `${this.name.toUpperCase()}`
}

const tea = new UserDetails("tea", 'tea@gmail.com', '123')

console.log(tea.encryptPassword());
console.log(tea.changeUserName());