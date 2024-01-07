// FOR Loop

// BASIC 0 TO 10 PRINT
for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is Best");
    }
    console.log(element);
}

// CHECK WORK OF INNER AND OUTER LOOP
for (let i = 0; i < 5; i++) {
    console.log(`Outer: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Ineer : ${j}`);
    } 
}

// PRINT TABLE
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = `+i*j);
    } 
}


const MY_array = [10,2,3,"amankumar@gmail.com",2,"Aman",5,]
for (let index = 0; index < MY_array.length; index++) {
    const element = MY_array[index];
    console.log(element);  
}



// BREAK and CONTINUE keyword
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("DETECTED 5");      
        break                   // loop break
    }
    console.log(`values of ${index}`); 
}
for (let index = 0; index <= 20; index++) {
    if(index == 5){         // condition skip
        continue
    }
    console.log(`values of ${index}`); 
}
