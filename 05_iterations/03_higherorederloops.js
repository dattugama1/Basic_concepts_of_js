// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetingd = "Hello world!"

// for (const greet of greetingd) {
//     console.log(`Each cahr is: ${greet}`)
// }

// Maps

const map  = new Map()
map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set("FR", "france")

// console.log(map);

for (const [keys, values] of map) {
    // console.log(keys, ":-" , values)
}

const myObject = {
    'game1':"NFS",
    'game2':"GTA"
}

// for (const [keys, values] of myObject) {
//     // console.log(keys, ":-" , values)
// }

 