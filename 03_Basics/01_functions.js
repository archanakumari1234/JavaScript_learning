
function name() {
    console.log("A")
    console.log("R")
    console.log("C")
    console.log("H")
    console.log("A")
    console.log("N")
    console.log("A")
    console.log(" ");
}
name()

function addNumbers(number1,number2,number3){
    console.log(number1 + number2 - number3);
}
addNumbers(3,4,2)

// function addTwoNumbers(number1,number2){
//     let evaluation = number1 + number2
//     return evaluation
// }
//     or
function addTwoNumbers(number1,number2){
    return number1 + number2
}
const results = addTwoNumbers(6,6)
console.log("result = ", results);

function loginUser(username){
        return `Hello  ${username} , please logged in.`
}
console.log(loginUser("Archana"))

function loginUser1(username){
    if(username===undefined){
        console.log("please enter a username");
        return 
    }
    return `Hello  ${username} , please logged in.`
}
console.log(loginUser1())

function calculateCartPrice(val1, val2, ...num){
    return num
}
// console.log(calculateCartPrice(200,300,500,4000));


// Access the value from object through the function
const user = {
    username: "Archana",
    price:199
}
function userDetails(anyobject){
     console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}
userDetails(user)


// Access the value from Array through the function
const myNewArray = [1,3,4,5,6]
function returnValue(getArray){
    // return getArray[2]
    console.log(`getarray ${getArray[2]}`);
}
// console.log(returnValue(myNewArray));
returnValue(myNewArray)