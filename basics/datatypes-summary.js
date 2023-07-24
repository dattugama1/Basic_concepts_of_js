// primitive

// 7 types : String , number , boolean , null , undefined , bigInt, symbol
 
 const score = 100
 const valueScore = 100.5
 const isLoggedIn = false

 const tempValue = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId);

 const bigNumber = 78796654698749874897n
 



// Refernce (non primitive )
// array , obejcts , functions

const heros = ["shaktiman","shinchan","rangers"]

const myObje = {
    name:"dattu",
    age:21,
    city:"jaipur",
}

const myFunction =  function(){
    console.log("Hello World");
}

console.log(typeof  bigNumber );