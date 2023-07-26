//  

// function myName(){
// console.log("d")
// console.log("a")
// console.log("t")
// console.log("t")
// console.log("u")
// }

// myName()

function addition(number1,number2){
    // let result=(number1 + number2)
    // return result;
    return number1 + number2;
}

 let result = addition(4,5)
 //console.log("result :", result)

 function logInuserMessage(username = "sam"){
    if(username === undefined){
        console.log("plese enter a username")
        return
    }
    return `${username} you are logged in`
 }

//  console.log(logInuserMessage("dattu"))
//  console.log(logInuserMessage("hitsh"))


function getCartCaluculate(...num1){
    return num1
}

// console.log(getCartCaluculate(2,200,300))

const user ={
    name:"shyam",
    id:12,
    adress:"jaipur"
}

function mallu(anyobject){
    console.log(`Username is ${anyobject.name} he is from ${anyobject.adress}`)
}

// mallu(user)
// mallu({
//     name:"tikya",
//     adress:"hyderabad"
    
// })

const myNewDojo = [1,2,3,4,5]

function getValueOfArray(getArray){
    console.log(getArray[2])
}

console.log(getValueOfArray([21,22,23,24]))

