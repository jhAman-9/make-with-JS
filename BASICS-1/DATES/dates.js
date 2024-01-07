let myDate = new Date()

//2023-12-17T16:03:44.095Z
console.log(myDate);

// Sun Dec 17 2023 21:33:44 GMT+0530 (India Standard Time)
console.log(myDate.toString());  

// 2023-12-17T16:03:44.095Z
console.log(myDate.toJSON());   

// 17/12/2023
console.log(myDate.toLocaleDateString()); 

 // 2023-12-17T16:03:44.095Z
console.log(myDate.toISOString());  

// 9:33:44 pm
console.log(myDate.toLocaleTimeString()); 

// 17/12/2023, 9:33:44 pm
console.log(myDate.toLocaleString());

console.log(typeof myDate);     // object

let mySpecificDate = new Date(2023,0,12,5, 10) // In js Month start with ZERO
console.log(mySpecificDate.toLocaleString());  // 12/1/2023, 5:10:00 am

let date = new Date("2020-01-01")
console.log(date.toLocaleString());     // 1/1/2020, 5:30:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp);       
console.log(date.getTime());      // value in milisecond   

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());  // 11 in month  -> December

newDate.toLocaleString('default',{
    weekday :  'long'
})

console.log(newDate);

