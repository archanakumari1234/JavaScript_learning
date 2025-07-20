const myNum = [11,12,13,14,15,16,17,18,19,20]
// const newNum = myNum.map( (num) => num + 10)
const newNum = myNum
         .map( (num) => num * 10)
         .map( (num) => num + 10)
         .map( (num) => num / 2)
         .filter( (num) => num <= 80)
console.log(newNum);




// ++++++++++++++++OR++++++++++++++++++++

// console.log(myNum.map((num)=>{
//     return num*10
// }).map((num)=>{
//     return num+10
// }).map((num)=>{
//     return num/2
// }).filter((num)=>{
//     return num>85
// })
// );