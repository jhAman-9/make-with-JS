// Singleton
const youTube = new Object();       // singleton
// const youTube = {}                  // onject literals type
// console.log(youTube);               //{}

youTube.id = "123abc"
youTube.name = "Aman"
youTube.email = "amankumar@google.com"
youTube.isLoggedIn = true

// console.log(youTube);


// NESTED OBJECT
const Yt = {
    music : {
        HindiSong : {
            ArjitSingh :{
                Gaana : "Tum Hi Ho"
            }
        }
    }
}
// console.log(Yt.music.HindiSong.ArjitSingh.Gaana);


// COMBINE TWO or MORE OBJECTS
const obj1 = {1 : "a", 2 : "b", 3 : 'c'}
const obj2 = {4 : "d", 5 : "e", 6 : 'f'}

// -> object Into Object
const obj3 = {obj1, obj2};
console.log(obj3);

// combine objects elemets
const obj4 = Object.assign({}, obj1, obj2)  // assign obj1 and obj2 into empty object {}
console.log(obj4);          // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// another way to do this 
const obj5 = {...obj1, ...obj2}
console.log(obj5);         // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }



// OBJECT IN ARRAY
const arr = [
    object1 = {
        name1 : "Aman"
    },
    object2 = {
        name2 : "Raj"
    },
    object3 = {
        name3 : "Dev"
    }
]
console.log(arr[0].name1);

//  HOW TO FIND KEYS AND VALUES OF OBJECT

// NOTES: keys and values object printed in Array...
console.log(Object.keys(youTube));      // [ 'id', 'name', 'email', 'isLoggedIn' ]
console.log(Object.values(youTube));    // [ '123abc', 'Aman', 'amankumar@google.com', true ] 

// Make every keys and values seprately into array
console.log(Object.entries(youTube));   // [[ 'id', '123abc' ],[ 'name', 'Aman' ],[ 'email', 'amankumar@google.com' ],[ 'isLoggedIn', true ]]

// check wheather this key or properties present in this object or Not
console.log(youTube.hasOwnProperty('isLoggedIn'));      // true