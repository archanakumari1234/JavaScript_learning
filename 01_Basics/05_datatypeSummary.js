/* Primitive datatypes: 
  there are 7 types:
  String, Number, Boolean, null, undefined, Symbol, BigInt.
  */
let str = "Archana Kumari"

let num = 233
let numValue = 3.44

const isLoggedIn = true
const isNotLoggedIn = false

let outSideTemp = null

let userEmail;

const id = Symbol('344')
const anotherId = Symbol('344')
console.log(id==anotherId);

const bigNumber = 2543454634567657345n
console.log(typeof bigNumber);


/* Reference or non-primitive datatypes:
   there are 3 types:
   Array, Object, Function
   */
const array = ["Archana", 344, 23.34, id]
console.log(array);

let object = {
    name: "Archana",
    age: 20,
}
console.log(object);

const myFunction = function(){
    console.log("Hello function this is me");
}
myFunction()

//*************************Stack (Primitive), Heap (Non-Primitive)**************************************
// stack / primitive
let name = "archana"
let anotherName = name
anotherName = "Khushi"
console.log(name);
console.log(anotherName);

let a = 1
let b = a
b = 2
console.log(a);
console.log(b);

// heap / reference

let obj = {
    carName: "BMW",
    price: "40 lakh",
    color: "white"
}
let changeColor = obj
changeColor.color = "black"

console.log(obj);
console.log(changeColor);

