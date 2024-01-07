// function for Generate Random color 
let GenerateRandomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color += hex[(Math.floor(Math.random() * 16))]; 
    }
    return color;
};

let intervalId;
const startChangingColor = function(){
    if(intervalId == null) intervalId = setInterval(changeBodyColor,1000)
    function changeBodyColor(){
        document.body.style.backgroundColor = GenerateRandomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
 
document.querySelector('#stop').addEventListener('click', stopChangingColor);

