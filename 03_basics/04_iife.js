// immediately invoke function expression

(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();

((name) =>{
    console.log(`DB TWO CONNECTED${name}`)
})(' dattu')
     
