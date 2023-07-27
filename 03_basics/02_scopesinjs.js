let a = 50
var c =45

if(true){
    let a =10
    const b = 20
    var c = 30
    // console.log(a)

}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "dattu" 

    function two(){
        const webSite = "youtube"
        // console.log(userName)
    }
    // console.log(webSite)
    two()
}
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const channel = "dattu.com"
        // console.log(username + " " +channel)
    }
    // console.log(username)
}

console.log(addone(5))
function addone(num){
    return num + 1
}

console.log(addtwo(4)) // mini hoisting
const addtwo = function (num){
    return num + 3
}

