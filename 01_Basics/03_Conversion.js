// conversion into number from string
// let score = 33
// console.log(typeof score);  // number

// conversion into number from string
let score = "33";
console.log(typeof(score));  // string
let valueInNumber = Number(score);
console.log(valueInNumber);   // output: 33
console.log(typeof(valueInNumber));   // output: number

// conversion into number from string
let score1 = "333abc"
console.log(score1);   // output: 333abc
console.log(typeof(score1));   // output: string
let convertScore1 = Number(score1)
console.log(convertScore1);  // output: NaN
console.log(typeof convertScore1);   // output: number

// conversion into number from null
let score2 = null
console.log(score2);  // output: null
console.log(typeof score2);  // output: object
let convertScore2 = Number(score2)
console.log(convertScore2);  // output: 0
console.log(typeof convertScore2);  // output: number

// conversion into number from undefined
let score3 = undefined
console.log(score3);  // output: undefined
console.log(typeof score3);  // output: undefined
let convertScore3 = Number(score3)
console.log(convertScore3);  // output: NaN
console.log(typeof convertScore3);  // output: number

// conversion into number from boolean
let score4 = true
console.log(score4);  // output: true
console.log(typeof score4);  // output: boolean
let convertScore4 = Number(score4)
console.log(convertScore4);  // output: 1
console.log(typeof convertScore4);  // output: number

// conversion into boolean from number
let isLoggedIn = undefined
let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn); //true
// 1 => true; 0 => false;
// "" => false;
// "archana" => true;
// null => false;
// undefined => false;




 