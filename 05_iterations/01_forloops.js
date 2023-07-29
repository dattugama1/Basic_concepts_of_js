// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
       // console.log("5 is best number")
    }
    // console.log(element)
}

for (let  i = 1;   i <= 10;  i++) {
    const element = i;
    // console.log(`Outer loop value : ${i}`)
    for (let  j = 1; j <=10; j++) {
        const element = j;
        // console.log(`Inner lopp value :${j} and inner lopp value : ${i}`)
        // console.log(i +'*' + j + '=' + i*j);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("5 is ths best number")
//         break;
//     }
//     console.log(index)
    
// }

for (let index = 1; index <= 20; index++) {
    const element = index;
    if (element == 5) {
        console.log("5 is detected")
        continue;
    }
    console.log(`the valu of i is : ${index}`)
    
}