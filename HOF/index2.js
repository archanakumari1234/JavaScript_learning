let arr = [1,2,3,4]
arr.forEach(function(element,index,arr){
    // console.log(element,index,arr)
})

arr.map((element,index,arr)=>{
    // console.log(element,index,arr)
})

const name = ['archana', 'kumari', 'meerut']
name.forEach((n)=>{
    // console.log(n.toUpperCase());
})

name.map((el)=>{
    // console.log(el.toUpperCase());
})


const heros = ['naagraj', 'doga', 'dhruva','maniraj']
console.log(heros);

// heros.forEach(element => {
//     console.log(element.endsWith('raj')); // its only give true and false
// });

const nameWithRaj = heros.filter((h)=>{
    return h.endsWith('raj')
})
// console.log(nameWithRaj);

// Shopping Cart
const cartBill = [10,20,30,40]
const sumOfCartBill = cartBill.reduce((prev,currVal)=>{
    return prev+currVal
},10)
// console.log(sumOfCartBill);


const gameScore = [20,30,40,49,60]
const gameScoreCheck = gameScore.every((value)=>{
    return typeof value === 'number'
})
console.log(gameScoreCheck);


// find the above
const above30 = gameScore.find((v)=> v > 30)
// console.log(above30);

const above = gameScore.map((v)=>{
    return v>30
})
console.log(above); // its only return true or false





