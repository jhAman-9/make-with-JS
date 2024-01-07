class User {
    constructor(name) {
        this.name = name
    }

    static createId(){
        return `${this.name}1234`
    }
}

const aman  = new User("aman")

// createuId is not accessable by any class or also not by any child class
// console.log(aman.createId());


class Teacher extends User {
    constructor(userName, email){
        super(userName);
        this.email = email
    }
}

const iphone = new Teacher("iphone", "ipod.com")
console.log(iphone.email);
console.log(iphone.createId());         // static function is not accessable by any child class