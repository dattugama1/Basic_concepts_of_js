const userEmail = []

if (userEmail){
    console.log("we got the user email ")
} else {
    console.log("we didn't got user email")
}    

// falsy values

//false , 0, -0, null, "", BigInt 0n, undefined, NaN

// truthy values

//true, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is empty")
}
const myObj = {}

if (Object.keys(myObj).length === 0) {
    console.log("Object is empty")
}

// Nullish coaleacsing  Operator (??): null,undefined

let val1;
// val1 = 3 ?? 5
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 30
console.log(val1)

// terinary Operator

// condition ? true : false

const valscore = 100
valscore >= 80 ? console.log("lessthan 80") : console.log("greaterthan 80")