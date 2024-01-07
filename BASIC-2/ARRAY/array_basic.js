const myArr = [2,3,1,55,3]
const myArr2 = ["bablu","doremone",12,34,true]
const myArr3 = new Array(1,23,4,true,"hello Aman")
console.log(myArr3[4])

// ARRAY METHODS
myArr.push(10)
console.log(myArr);                 // [ 2, 3, 1, 55, 3, 10 ]
myArr.pop();
console.log(myArr);                 // [ 2, 3, 1, 55, 3 ]


// add ele in idx 0 in array by shifting ele
myArr.unshift(100);
console.log(myArr);                 // [ 100, 2, 3, 1, 55, 3 ]

// remove ele from 0th idx and shift all ele to idx-1
myArr.shift();
console.log(myArr);                 // [ 2, 3, 1, 55, 3 ]

// find the ele present in array or not
console.log(myArr.includes(100));       // false
// find the ele idx
console.log(myArr.indexOf(3));          // 1


// join all ele of array and convert into string
const newArr = myArr.join();
console.log(newArr);                // 2,3,1,55,3
console.log(typeof newArr);         // string



// *************** SLICE and SPLICE(Manupulate Original Array)  ************
const arr1 = [1,2,3,4,5]
console.log("Original Array",arr1);

// Slice
const arr2 = arr1.slice(1, 3);
console.log("Slice",arr2);  // slice print last idx - 1 tak
console.log("After Slice Array Not Manupulated",arr1);

// Splice -> cut the array from the Give range and Manupulate original Array..
const arr3 = arr1.splice(1,3);
console.log("Splice",arr3);
// after splice operation the range of given index cut from the arr
console.log("After Splice Array Manupulated", arr1);



