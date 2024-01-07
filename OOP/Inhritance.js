class User {
    constructor(name) {
        this.name = name
    }

    logme(){
        console.log(`User name is ${this.name}`);
    }
}

// Here teacher class is extending the Properties of User
class Teacher extends User {
    constructor(name, email, password){
        super(name)     
        this.email = email
        this.password = password
    }
    addCourse (){
        console.log(`A new course is added by ${this.name}`);
    }
}

const chai = new Teacher("chai","chai.com","12333")
chai.addCourse()


const masalaChai = new User("MasalaChai")
masalaChai.logme();


console.log(chai === masalaChai);           // false
console.log(chai === Teacher);              // false
// And fpr checking the instance 
console.log(chai instanceof Teacher);       // true
console.log(chai instanceof User);          // true
console.log(Teacher instanceof User);       // false