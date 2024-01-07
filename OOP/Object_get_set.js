// Object Base Getter and Setter

const User = {
    _email : 'aman@gmail.com',
    _password : "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this.email = value
    }

}

const tea = Object.create(User)
console.log(tea.email);             // AMAN@GMAIL.COM
console.log(User.email);            // AMAN@GMAIL.COM