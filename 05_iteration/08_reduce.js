const myNum = [1,2,3]
// const myTotal = myNum.reduce( (acc, cval) =>{
//     console.log(`accumulator_value: ${acc} and current_value: ${cval}`);
//     return acc+cval
// },1)

const myTotal = myNum.reduce( (acc, cval) => acc+cval,1)
// console.log(myTotal);


// +++++++++++++++++++++++++++++++++++++++++
const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 2999
    },
    {
        itemName: "Wev development Course",
        price: 5999
    },
    {
        itemName: "Python Course",
        price: 3999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);