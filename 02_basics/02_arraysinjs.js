const heros=["Shaktiman","Rangesrs","nagraj"]
const marvels = new Array(" thor","wanda","ironman"); 

// heros.push(marvels)
// console.log(heros)

// const newHeros = marvels.concat(heros);
// console.log(newHeros);
const new_heros1 = [...heros,...marvels] //spread operator
console.log(new_heros1);

const anotherArray = [1,2,3,4,[5,6,7],8,[11,12,[13,14,]]]
const new_annother_array = anotherArray.flat(Infinity)
console.log(new_annother_array);

console.log(Array.isArray("dattu"));
console.log(Array.from("dattu"));
console.log(Array.from({name:"dattu"}))  // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))