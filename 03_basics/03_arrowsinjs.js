const user = {
    name:"dattu",
    price:123,

    welcome: function(){
        console.log(`${this.name} is a good boy`)
        // console.log(this)
    }
}

// user.welcome()
// user.name = "sam"
// user.welcome()
// console.log(this) // empty curlybraces

function chai(){
    // let username = "tikya";
    // console.log(this.username)
}

chai()

// const one = () => {
//     let username = "tikya";
//     console.log(this)
// }

// one()


//explicit
// const addtwo = (num1, num2) =>{
//     return num1 + num2
// }


//implicit (here we wont use retur)

// const addtwo = (num1, num2) =>  num1 + num2 

const addtwo = (num1, num2) => ({usernam:"dsttu"})
    

console.log(addtwo(5,5))
