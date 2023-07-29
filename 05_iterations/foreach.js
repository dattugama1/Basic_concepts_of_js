const coding = ["js","cpp","python", "java", "ruby"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach ( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) =>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        laguageName: "javascript",
        languageFile:"js"
    },
    {
        laguageName: "java",
        languageFile:"java1"
    },
    {
        laguageName: "python",
        languageFile:"py"
    }
]

myCoding.forEach( (val1)=> {
    console.log(val1.laguageName)
})