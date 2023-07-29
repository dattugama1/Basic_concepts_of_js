// const coding = ["javascript", "ruby", "python", "java", "ruby"]

// const values = coding.forEach( (num) => {
//     console.log(num)
// })
// console.log(values)


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNum.filter( (num) => {
// //      return num > 5
// // })

// const newNum = []

// myNum.forEach( (num) => {
//     if (num > 4) {
//         newNum.push(num)
//     }
// })


//  console.log(newNum)

const books = [
    {bookname:'Book one', genre: 'fiction', published:1990, edition:2000},
    {bookname:'Book two', genre: 'science', published:1991, edition:2001},
    {bookname:'Book three', genre: 'history', published:1992, edition:2002},
    {bookname:'Book four', genre: 'non-fiction', published:1993, edition:2003},
    {bookname:'Book five', genre: 'fiction', published:2001, edition:2004},
    {bookname:'Book six', genre: 'non-fiction', published:1995, edition:2005},
    {bookname:'Book seven', genre: 'history', published:1996, edition:2006},
    {bookname:'Book eight', genre: 'science', published:2003, edition:2007},
    {bookname:'Book nine', genre: 'non-fiction', published:1998, edition:2008},
    {bookname:'Book ten', genre: 'history', published:2004, edition:2009},
]

let userBooks = books.filter( (bk) => bk.genre === "history")
userBooks = books.filter( (bk) => {
    return bk.published >= 2000 && bk.genre === 'history'})

console.log(userBooks)