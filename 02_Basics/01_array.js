let myArr = [0,1,2,4,"Hello", 33.44, "Everyone",5,6]

myArr.push(7) //output: [ 2, 4, 'Hello', 33.44, 'Everyone', 5, 6, 7 ]
// myArr.pop() //output: [ 2, 4, 'Hello', 33.44, 'Everyone', 5, 6 ]
// myArr.unshift(100) //output:  [ 100, 0, 1, 2, 4, 'Hello', 33.44, 'Everyone', 5, 6 ]
// myArr.shift() //output:  [ 0, 1, 2, 4, 'Hello', 33.44, 'Everyone', 5, 6 ]
console.log(myArr);

// console.log(myArr.includes(4)); //output:  true
// console.log(myArr.indexOf("Hello")); //output:  4

// const arr = [0,1,2,3,4,5,6,7,8,9]
// console.log("A", arr.);  //output: A [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(arr.slice(2,5));   //output: [ 2, 3, 4 ]
// console.log(arr.slice(starting Index , last index));  
// console.log("B", arr);   //output: B [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// console.log(arr.splice(4,5));   //output: [ 4, 5, 6, 7, 8 ]
// console.log(arr.splice(starting index, deletCount, add item1,item2,.....)); 
// console.log("C", arr);   //output: C [ 0, 1, 2, 3, 9 ]

// console.log(arr.splice(5,5));   //output: [ 5, 6, 7, 8, 9 ]
// console.log("C", arr);   //output: C [ 0, 1, 2, 3, 4 ]

// differece between slice and splice = 
/* slice me ham kisi array ke particular portion ko nikal kar ak naya array banata hai without modifying original array.
splice array se elements ko remove/add karta hai aur original array ko modify karta hai. 
*/




