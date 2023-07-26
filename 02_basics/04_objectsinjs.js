 const dattuUser = {}
// console.log(dattuUser)


dattuUser.name = "shiva"
dattuUser.age = 14
dattuUser.adress = "jaipur"
dattuUser.email = "dattu@gmail.com"

//console.log(dattuUser.age)

const jsUser = {
    name:"dattu",
    fullname:{
        firstName:"shahsi",
        lastName:"dhabale"
    }
}

// console.log(jsUser.fullname)

const user1 = {1: "a" , 2:"b" }
const user2 = {3:"c"  , 4:"d"}

// const user3 = {user1 , user2} it just adds the array inside the array
//const user3 = {...user1,... user2} spread property
// const user3 = Object.assign({},user1 , user2) avoids to add array in array make it in single array


// console.log(user3)

const regularUser = [
    {
        id:12,
        name:"dattu"
    },
    {
        id:122,
        name:"dattu11"
    },
    {
        id:12,
        name:"dattu"
    }
]

// console.log(regularUser[2].id)

console.log(Object.keys(dattuUser));
console.log(Object.values(dattuUser));
console.log(Object.entries(dattuUser));

console.log(dattuUser.hasOwnProperty('age1'))
