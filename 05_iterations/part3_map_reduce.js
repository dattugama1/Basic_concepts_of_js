const myNums = [1, 2, 3]

// const total = myNums.reduce((acc,currval) =>{
//     console.log(`the acc values is${acc}, and currval is${currval}`)
//     return acc + currval
// },3)

// const myTotal = myNums.reduce( function(accu,currval){
//     console.log(`acc is: ${accu} and cuurval is ${currval}`)
//     return accu + currval
// },0)

// console.log(myTotal)

const shoppingCart = [
    {
        courseName:"python course",
        price:999
    },
    {
        courseName:"js course",
        price:5999
    },
    {
        courseName:"mob dev course",
        price:9999
    },
    {
        courseName:"data science course",
        price:999
    },
]

const payForCart = shoppingCart.reduce((acc,item) =>(acc + item.price),0)
console.log(payForCart)