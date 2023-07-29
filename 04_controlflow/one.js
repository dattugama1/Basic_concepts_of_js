// if

// const userLoggedIn = true
// const temperature = 41

// if (temperature === 42){
//   console.log("less than 50")
// } 
// else {
//     console.log("temperature is greater than 50")
// }
// console.log("execute")
// // >, <, >=, <=, ==, !=, ===, !=

const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power : ${power}`);
// }
 
// console.log(`user power : ${power}`)

// const balance = 1000

// // short hand notation (implicit)
// // if(balance > 500)  console.log("test"),console.log("test2");

// if (balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750")
// } else if (balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("greater than 1200")
// }

const isUserLoggedIn = true
const debitCard = true
const userLoggedInByGoogle = true
const UserLoggedInByEmail = true

if(isUserLoggedIn && debitCard && 2==3){
     console.log("you can buy the course")
}

if (userLoggedInByGoogle || UserLoggedInByEmail){
    console.log("user logged in")
}