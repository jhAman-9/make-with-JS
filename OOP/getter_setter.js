class User {
    constructor(email , password){
        this.email = email
        this.password = password
    }

    // now setter overide the value set by the constructor
    get password(){
        return `${this._password}aman`
    }

    set password(pass){
        this._password = pass
    }

    // now here also setter overide the value set by the constructor
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const aman = new User("aman@gmail.com",123)
console.log(aman.password);
console.log(aman.email);