
const myObject = {
    js:"javascript",
    cpp:"C++",
    rb : "ruby",
    swift:"swift for apple",
}

for (const key in myObject) {
    //  console.log(`${key} for ${myObject[key]}`)
}

const prrogramming = ["ruby", "python", "cpp", "java"]

for (const key in prrogramming) {
    //console.log(prrogramming[key])
}

const map  = new Map()
map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set("FR", "france")

for (const key in map) {
     console.log(key)
}