// Immediately Invoked Function Expression (IIFE)

// function hello(){
//     console.log('DataBase Connected');
// }
// hello()

(function hello(){
    // named IIFE
    console.log('DataBase Connected');   
})();   
// for the second IIFE ; is most important at the end of first IIFE
( (name) => {
    // named IIFE
    console.log(`DataBase Connected Two, ${name}`);   
})("Archana")

