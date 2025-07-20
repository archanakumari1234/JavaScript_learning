// 1. Array.prototype.at()
// Koi value kis index par hai us value ko return karta hai. and jo value array mein present nahi hai use access karna chahe to undefined return karti hai.
// Aur negative index hamesha end of the array se count hota hai.
const array = [5, 12, 8, 130, 44];
let index = 7;
// console.log(`Using an index of ${index} the item returned is ${array.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"
index = -2;
// console.log(`Using an index of ${index} item returned is ${array.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"
//return the last value of an array
function returnLast(arr) {
    return arr.at(-1)
}
const item = returnLast(array)
// console.log(item);
array.push(100)
const item2 = returnLast(array)
// console.log(item2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. Array.prototype.concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
// console.log(array3);

const letters = ["a", "b", "c"];   //Concatenating values to an array
const alphaNumeric = letters.concat(1, [2, 3]);
// console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]

const num1 = [[1]]; //Concatenating nested arrays
const num2 = [2, [3]];
const numbers = num1.concat(num2);
// console.log(numbers);  // results in [[1], 2, [3]]
// modify the first element of num1
num1[0].push(4);
// console.log(numbers); // results in [[1, 4], 2, [3]]

const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };//Concatenating array-like objects with Symbol.isConcatSpreadable
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
// console.log([0].concat(obj1, obj2)); //output: [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]

// console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
// console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

//Calling concat() on non-array objects
// console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
// console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // ignored by concat() since length is 2
};
// console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Array.prototype.copyWithin()
const arr = ['a', 'b', 'c', 'd', 'e'];
// Copy to index 0 the element at index 3
console.log(arr.copyWithin(0, 3, 4));// Expected output: Array ["d", "b", "c", "d", "e"]
// Copy to index 1 all elements from index 3 to the end
console.log(arr.copyWithin(1, 3));// Expected output: Array ["d", "d", "e", "d", "e"]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Array.prototype.entries()
const ar = ['a', 'b', 'c'];
const iterator1 = ar.entries();

for (const iterator of iterator1) {
    // console.log(iterator);   // Expected output:[ 0, 'a' ]
                                            //  [ 1, 'b' ]
                                            //  [ 2, 'c' ]
}
// console.log(iterator1.next().value);// Expected output: Array [0, "a"]
// console.log(iterator1.next().value);// Expected output: Array [1, "b"]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5. Array.prototype.every()
// yah method pure array par apply hota hai aur ye true aur false return karta hai output mein.
const num = [1, 30, 39, 29, 10, 13];
const isNumhold = (currentValue) =>{
  return currentValue < 40;
} 
// console.log(num.every(isNumhold));// Expected output: true

// Example 1. Testing size of all array elements
function isBigEnough(element, index, array) {
    return element >= 10;
  }
//   console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
//   console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// Example 2. Check if one array is a subset of another array
const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 6. Array.prototype.fill()
const a = [1, 2, 3, 4];
// Fill with 0 from position 2 until position 4
// console.log(a.fill(0, 2, 4));// Expected output: Array [1, 2, 0, 0]
// Fill with 5 from position 1
// console.log(a.fill(5, 1));// Expected output: Array [1, 5, 5, 5]
// console.log(a.fill(6));// Expected output: Array [6, 6, 6, 6]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 7. Array.prototype.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
// console.log(result);// Expected output: Array ["exuberant", "destruction", "present"]

// Example 1. Filtering out all small values
function isBigEnough(value) {
    return value >= 10;
  }
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough); 
// console.log(filtered); // filtered is [12, 130, 44]

// Example 2. Find all prime numbers in an array
const integer = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
// console.log(integer.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 8. Array.prototype.find()
const arrayFind = [5, 12, 8, 130, 44];
const found = arrayFind.find((element) => element > 10);
console.log(found); // Expected output: 12

// Array.prototype.findLast()
const foundLast = arrayFind.findLast((element) => element > 10);
console.log(foundLast);// Expected output: 44

// Example 1. Find an object in an array by one of its properties
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ]; 
  function isCherries(fruit) {
    return fruit.name === "cherries";
  }
//   console.log(inventory.find(isCherries)); // { name: 'cherries', quantity: 5 }

  // Example 2. Find a prime number in an array
  function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
//   console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
//   console.log([4, 5, 8, 12].find(isPrime)); // 5
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++============
 
// 9. Array.prototype.findIndex()
// starting se condition ke according ak index value return karta hai
const findIndexNum = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
// console.log(findIndexNum.findIndex(isLargeNumber));  // Expected output: 3

//  Array.prototype.findLastIndex()
// end se condition ke according ak index value return karta hai
// console.log(findIndexNum.findLastIndex(isLargeNumber)); // Expected output: 3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 10. Array.prototype.flat()
// ye method sare sub arrays ko ya nested array ko concate karke ak new array return karta hai.
const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat());// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
// console.log(arr2.flat(2));// expected output: Array [0, 1, 2, 3, Array [4, 5]]
// console.log(arr2.flat(Infinity));// expected output: Array [0, 1, 2, 3, 4, 5]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 11. Array.prototype.includes()
// ye batata hai ki koi element array me present hai ya nahi aur ye boolean value return karta hai.

const include = [1, 2, 3];
// console.log(include.includes(2));// Expected output: true
const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));// Expected output: true
// console.log(pets.includes('at'));// Expected output: false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 12. Array.prototype.indexOf()
// ye batata hai ki array ki koi element kaun si index par hai. yadi koi value nahi present hai to uska index -1 return karta hai.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));// Expected output: 1
// Start from index 2
// console.log(beasts.indexOf('bison', 2));// Expected output: 4
// console.log(beasts.indexOf('giraffe'));// Expected output: -1

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 13. Array.isArray()
// yah batata hai ki pass ki gayi value array hai ya nahi. boolean value return karta hai.
// console.log(Array.isArray([1, 3, 5]));// Expected output: true
// console.log(Array.isArray('[]'));// Expected output: false
// console.log(Array.isArray(new Array(5)));// Expected output: true
// console.log(Array.isArray(new Int16Array([15, 33])));// Expected output: false

// all following calls return true
// Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(new Array("a", "b", "c", "d"));
// Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
// Array.isArray(Array.prototype);

// all following calls return false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(17);
// Array.isArray("Array");
// Array.isArray(true);
// Array.isArray(false);
// Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
// Array.isArray({ __proto__: Array.prototype });

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 13. Array.prototype.join()
// ye array ki element ko join kar deta hai . 
const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());// Expected output: "Fire,Air,Water"
// console.log(elements.join(''));// Expected output: "FireAirWater"
// console.log(elements.join('-'));// Expected output: "Fire-Air-Water"

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 14. Array.prototype.keyconst array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
for (const key of iterator) {
  // console.log(key);
}
// Expected output: 0
// Expected output: 1
// Expected output: 2

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 15. Array.prototype.lastIndexOf()
const animals = ['Dodo', 'Tiger', 'Penguin', 'Tiger','Dodo'];
console.log(animals.lastIndexOf('Dodo'));// Expected output: 4
console.log(animals.lastIndexOf('Tiger'));// Expected output: 3







