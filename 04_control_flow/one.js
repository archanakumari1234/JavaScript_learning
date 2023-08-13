// const ques = 1000
// if(ques>500){
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// let balance = 2000
// if(balance>1000) console.log("test clear") // console.log("test not clear");

const user = 190

if (user > 25) {
    console.log(" this is greater than 50");
}
else if (user > 100) {
    console.log(" this is less than 50");
}
else if (user == 50) {
    console.log(" this is equal to 50");
}
else {
    console.log(" Invalid ");
}


// const userloggedIn = true
// const debitCard = true
// if(userloggedIn==true && debitCard==true){
//     console.log("Allow to buy course");
// }

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Login");
}
