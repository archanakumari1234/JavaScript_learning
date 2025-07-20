//const coding = ["JavaScript", "ruby", "python", "java", "cpp"]

// const value = coding.forEach((item) =>{
//     // console.log(item);
//     return item // forEach dosn't return the value
// })
// console.log(value);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter((num) =>{
//     return num>4   //filter return the value
// })
// console.log(newNums);

// const newNum = []
// myNum.forEach( (num) => {
//     if (num>4) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);


const books = [
    {title: 'Book one', genre: 'Fiction', publish: '1981', edition: 2004},
    {title: 'Book two', genre: 'Non-Fiction', publish: '1992', edition: 2008},
    {title: 'Book three', genre: 'History', publish: '1999', edition: 2007},
    {title: 'Book four', genre: 'Non-Fiction', publish: '1989', edition: 2010},
    {title: 'Book five', genre: 'Science', publish: '2009', edition: 1996},
    {title: 'Book six', genre: 'Fiction', publish: '2003', edition: 2001},
    {title: 'Book seven', genre: 'History', publish: '2004', edition: 2011},
    {title: 'Book eight', genre: 'Non-Fiction', publish: '1987', edition: 2014},
    {title: 'Book nine', genre: 'Science', publish: '1986', edition: 2000},
    {title: 'Book ten', genre: 'Fiction', publish: '2011', edition: 2004},
]
// const userBooks = books.filter( (bk) => bk.genre === "History")
// const userBooks = books.filter( (bk) =>{
    // return bk.genre === 'History'
// })
const userBooks = books.filter( (bk) =>{
    return bk.genre === 'History' && bk.publish >= '2004'
})
console.log(userBooks);



