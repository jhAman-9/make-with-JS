const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


// Creating my Own Object
// const myNewObj = Object.create(null)

const chai = {
    name : "Ginger chai",
    price : 12,
    isAvailable : true
}


console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// MAking the name Property of chai Object not iterable like Pi in Math Obejct
Object.defineProperty(chai,'name', {
    writable : false,
    enumerable : false          // name is enumerable false means it never been iterable now
})


// checking name properties is iterable or not
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


// let make price to "not iterate"
Object.defineProperty(chai,"price",{
    enumerable : false
})

// checking the price property is iterable or not
console.log(Object.getOwnPropertyDescriptor(chai,"price"));


// iterating the Object 
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);        // here name and price are not iterable in Object
    }
}


