// arrays

const numbers = [0,1,2,3,4,5]
//console.log(numbers);

let heros = new Array(5,6,7,8,9,);
// console.log(heros[3]);

// Methods

// numbers.push(6) // push nothing but it adds the element or string at last of the array
// numbers.pop(); // it removes the pushed value..
// numbers.pop();

// numbers.unshift(9); //it to add the first element in the row
// numbers.shift();  // to remove that which we added

//console.log(numbers.includes(6)); // include check the value is it present or not in the given array.. if its there it says true either false
//console.log(numbers.indexOf(4));// checks the index 

// const newNumber = numbers.join();//it makes the va.ue as string

// console.log(numbers);
// console.log(typeof newNumber);

// slice , splice

console.log("A ", numbers)
const myne1 = numbers.slice(1,3)
console.log(myne1)

console.log("B " , numbers)


 const myne2 = numbers.splice(1,3) // here splice deletes its origin given value and presents the rest value ans:(0, 4, 5)
 console.log("C " , numbers)
 console.log(myne2)




