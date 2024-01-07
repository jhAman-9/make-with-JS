const form = document.querySelector('form');

// this usecase will give you empty becaues we want the value on the Event
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault();     // hold for some time

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if((height === '' || height < 0 || isNaN(height)) && (weight === ''|| weight < 0 || isNaN(weight))){  // height and weight bith are empty  // NaN = Not a Number
        results.innerHTML = `Please Give a Valid Height ${height} And a Weight ${weight}`;
    }
    else if(weight === '' || isNaN(weight)  && height > 0){                                       // only weight is empty
        results.innerHTML = `Please give a valid Weight ${weight}`;
    }
    else if(height === '' || isNaN(height) && weight > 0){                                       // only height is empty
        results.innerHTML = `Please give a valid Height ${height}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);                          // here the result
        // show Result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});