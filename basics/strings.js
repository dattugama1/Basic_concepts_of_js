const name ="dattu"
const repoCount = 50

//console.log(name + repoCount + " value")

console.log(`this is my name ${name} my repocount value is ${repoCount}`);

const gameName = new String("daTtugama")
//console.log(gameName);

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('T'));

const newString = gameName.substring(1,6)
//const newString = gameName.substr(1,6)
console.log(newString) 

const newStringOne = gameName.slice(-9,5)
console.log(newStringOne) 

const anotherString = "    whitespace  "
console.log(anotherString);
console.log(anotherString.trim());

const url = "https://dattu.com20%dattugama"
console.log(url.replace('20%','-'));

console.log(url.includes('dattu123'));

console.log(gameName.split('--'));