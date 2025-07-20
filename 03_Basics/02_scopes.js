

if(true){
    let a = 1200
    console.log(a);
}
// console.log(a);

if(true){
    const b = 1000
    console.log(b);
}
// console.log(b);

if(true){
    var c = 2000    // its global scope variable
    // console.log(c);
}
console.log(c);
// +++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username = "Archana"
    function two(){
        const website = "YouTube"
        console.log(website);
    }
    console.log(username);
    two();
}
one();
// +++++++++++++++++++++++++++++++++++++++++++
if(true){
    const username = "Khushi"
    if(true){
        const website = " instagram"
        console.log(username + website);
    }
}


// ++++++++++ mini hoisting +++++++++
console.log(add(5))
function add(num){
   return num+3
}
// console.log(add(5))
//++++++++++++++++++++++++++++++++++++++++++++

// console.log(afunction(5));
const afunction = function add(num){
    return num+7
 }
 console.log(afunction(5));






