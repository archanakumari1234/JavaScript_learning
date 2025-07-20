const powerTwo = (n) =>{     // function as an variable
    return n**2
}
function powerCube(powerTwo, n){   // function as an arguement
     return powerTwo(n)*n
}
console.log(powerCube(powerTwo, 3));

function sayHello(){
    return ()=>{
        console.log("Hello Archana");
    }
}
const guessValue = sayHello()
console.log(guessValue);
guessValue()



