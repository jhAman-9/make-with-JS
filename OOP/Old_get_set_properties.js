// Function base Getter and Setter

function User(email , password) {
    this._email = email
    this._password = password

    // getter setter for email
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },

        set: function(value){
            this._password = value
        }
    })
}

const aman = new User("aman@gmail.com", "aman123")
console.log(aman.password);
console.log(aman.email);