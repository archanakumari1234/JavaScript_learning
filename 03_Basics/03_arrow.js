const user = {
    username: "Archana",
    price: 500,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        // console.log(this);
    }
}
user.welcomeMessage()
user.username = "Khushi"
user.welcomeMessage()

// console.log(this);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
// function name(){
//     let username = "Hello"
//     console.log(this.username);
// }
// name()
//++++++++++++++++++++++++

const name = () => {
    let username = "Hello"
    console.log(this);
}
name()

// const add = (num1, num2) =>{
//     return num1 + num2       // explicit return
// }
// console.log(add(2,4));

// const add = (num1, num2) =>  num1 + num2
// const add = (num1, num2) =>  (num1 + num2)  //implicit return
const add = (num1, num2) =>  ({num1: "This is me"})
console.log(add());


