// Arrow Function does not access of this keyword...
// Everything is behave like Object
const user = {
    userName :"Aman",
    userId : 123,
    signedIn : true,

    getUserdatials: function(){
        console.log(`the user name is as: ${this.userName}`);
        console.log(this);      // this will give all the values of current context
    },
}

console.log(user.userName);
console.log(user.getUserdatials());
console.log(this);                      //out of it just have a empty object {}








// The UserTwo Will OverRide the Valuse of UserOne
function UserDetails(userName, loginCount, isLoggeIn){
    this.userName = userName;
    this.loggedCount = loginCount;
    this.isLoggedIn = isLoggeIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this                 // no need to use return while use of new Keyword
}

const userOne = UserDetails("Aman", 12, true);
const userTwo = UserDetails("Raj",100, false);          // Over Write the values of UserOne
// here, overWrite the Privious Function Values..
console.log(userOne);
/*
    And That's why We use constructor which gives us a copy or we can say that a instance of Class
     That we can use it easily and other will not be affected
     And We can achive it by using the new Keyword
*/ 

const userThree = new UserDetails("Aman", 12, true);
const userFour = new UserDetails("Raj",100, false);
// here we use the new keyWord, and with the help of constructor function, we get the intance so the previous function values doesnot get affected
console.log(userThree);

console.log(userThree.constructor);             // [Function: UserDetails]

// There is also a keyWord InstanceOf
console.log(userThree instanceof UserDetails);          // true
console.log(userThree instanceof Object);               // true






