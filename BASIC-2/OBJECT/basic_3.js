const course = {
    course_Name : "JS",
    course_Instructor : "Hitesh",
    course_Duration : "1 month"
}

// both ways to access elements
const {course_Instructor : instrucor} = course  // change key name
console.log(instrucor);
console.log(course.course_Instructor);


// APT
// JSON
// API as Object
// {
//     "name" : "Aman",
//     "class" : "BCA",
//     "Roll" : 12,
//     "isLoggedIn" : true
// }

// // API as Array
// [ 
//     {},
//     {},
//     {},
// ]