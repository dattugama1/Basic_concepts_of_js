//singleton
//object.create

//object.literals
const mySym = Symbol("key1")

const jsUser = {
    name:"dattu",
    "full name": "gamagurudattu",
    age:18,
    [mySym]:"key1",
    isLoggedIn:true,
    loggedInDays:["monday","tuesday"],
    email:"dattu@gmail.com"
}

// console.log(jsUser.name);
// console.log(jsUser["full name"])
// console.log(typeof jsUser["name"]);
// console.log( jsUser[mySym]);

// jsUser.email = "faltu@gmail.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
// jsUser.name = "shasikant"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello welcome all")
}
jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())