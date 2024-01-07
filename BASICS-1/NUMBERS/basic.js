const num1 = 122
// console.log(num1);

const num2 = new Number(122)
// console.log(num2);

// Converting Number dataType to string

console.log(num2.toString().length);    // 3
console.log(typeof num2);
console.log(num2.toFixed(1));       // 122.0


const otherNum = 23.2233
console.log(otherNum.toPrecision(3));      // 23.2
const otherNum2 = 1123.8922
console.log(otherNum2.toPrecision(3));      // 1.12e+3

const hundred = 100000000;
console.log(hundred.toLocaleString('en-IN'));   // 10,00,00,000

console.log(Number.MAX_VALUE);          // 1.7976931348623157e+308
console.log(Number.MIN_VALUE)           // 1.7976931348623157e+308

console.log(Number.MAX_SAFE_INTEGER);   // 9007199254740991

// ********************* MATHS ********************************
console.log(Math);                    // object 
console.log(Math.abs(-6));           // 6
console.log(Math.round(4.8));       //5
console.log(Math.ceil(4.2));       //5
console.log(Math.ceil(4.2));       //5
console.log(Math.floor(4.9));     //4

// find min and max value in array
console.log(Math.min(2,4,5,1,5,7));     // 1
console.log(Math.max(2,4,5,1,5,7));     // 7

console.log(Math.sqrt(25));               // 5

// Math.random give random value b/w 0 to 1
console.log(Math.random());
// for random value > 1
console.log((Math.random() * 10) + 1);
// for random value between the range you want
const max = 20;
const min = 10;

// here floor function is used to remove decimal values
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



