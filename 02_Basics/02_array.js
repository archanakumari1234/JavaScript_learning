const name = ["Archana", "Khushi", "Achal", "Sonam"] 
const course = ["B.tech", "BCA", "Polytechnic", "M.tech"]
const num = [2,3,4,5,4]
// name.push(course)
// console.log(name);

// console.log(name.concat(course)); // concat() method new array return karta hai aur yah more than one array ko add/concatenate karta hai.

const adding = [...name, ...course, ...num]
// console.log(adding);

// const depth = [3,2,1,[4,3],5,6,[6,7,8,9,[3,5,1]]]
// const subarray = depth.flat(Infinity)
// console.log(subarray);

// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray("Archana"));

// let a = "Khushi"
// b = Array.from(a)
// console.log(b);
// console.log(typeof b);

// arr1 = [1,2,3,4]
// arr2 = [4,3,2]
// arr3 = [8,7,6]
// console.log(Array.of(arr1,arr2,arr3));