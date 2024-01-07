const marvel = ["Spiderman","Thor","Wonda","Hulk","Loki"];
const dc = ["wonderWomen","superman",'flash'];

// marvel.push(dc)
// console.log(marvel);

// concat two array
const allHero = marvel.concat(dc);
// console.log(allHero);

// spred all element of arrays into singal element like broke glass
const all_spred_heros = [...marvel,...dc]
console.log(all_spred_heros)


const another_array = [2,3,2,[4,2,6,[5,7],8,74,[7,5]]]
// to convert complex array like array into array into array in just a singal array
const real_array = another_array.flat(Infinity)
console.log(real_array);


// making another dataType into array
console.log(Array.from("Aman"));             // [ 'A', 'm', 'a', 'n' ]


// here we need to declare that we wnat the array of key or value else if give empty array
console.log(Array.from({name : "Aman"}));   // []


// is this a array -> no
console.log(Array.isArray("Aman"));     // false


// convert the variable into array
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;
console.log(Array.of(score1,score2,score3,score4,score5))           // [ 100, 200, 300, 400, 500 ]

