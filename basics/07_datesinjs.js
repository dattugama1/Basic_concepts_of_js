// dates  

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());

// let createdMyDate = new Date(2022,0,23)
// let createdMyDate = new Date(2022,0,23,5 ,40 )
 let createdMyDate = new Date("2023 , 01 , 14" );
// console.log(createdMyDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(createdMyDate.getTime());
// console.log(createdMyDate.getTime());
//console.log(Math.floor(Date.now()/10000));  //interview question

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})