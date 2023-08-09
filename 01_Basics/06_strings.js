const name = "Archana Kumari"
console.log(name.length); // this is property
console.log(name.toLocaleUpperCase()); // function
console.log(name.toLocaleLowerCase());
console.log(name.slice(0,5)); // it slice index 0 to 4
console.log(name.slice(2)); // it slice index 0 to last index
console.log(name.replace("Kumari","Khushi"));

const friend = "Khushi"
console.log(name.concat(` is a friend of ${friend} ok`));

let friend1 = "    Achal Bharti    "
console.log(friend1);
console.log(friend1.trim());

const age = 20
// console.log(name + age);
console.log(`My name is ${name} and i am ${age} years old`);

const newName =  new String("Khushi-Archana")
console.log(newName[2]); // output: u   index value
console.log(newName.__proto__);  // output: {} which is object
console.log(newName.toLocaleUpperCase());  // output: KHUSHI
console.log(newName.toLocaleLowerCase());  // output: khushi

console.log(newName.charAt(2));  // output: u
console.log(newName.indexOf('u'));  // output: 2

let newString = newName.substring(0,4)
console.log(newString);  // output: Khus






