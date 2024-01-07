const clock = document.getElementById('clock');

// Function for the Changing the Color With the Time
function getRandomColor (){
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

setInterval(() =>{
    let date = new Date();
    clock.style.background = getRandomColor();
    clock.innerText = date.toLocaleTimeString();
}, 1000);