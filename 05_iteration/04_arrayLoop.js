const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    if (greet == " ") {
        console.log(` `);
        continue
    }
    // console.log(`Each char is = ${greet}`);
}

// Maps
// it is unique
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('FR', "France")
// map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '=>', value);
}


const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}
// for (const [key,value] of myObject) {
//     console.log(key, '=>', value);
// }


const anObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in anObject) {
   console.log(`${key} shortcut is for  ${anObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('IN', "India")
for (const key in map) {
    console.log(key);
}