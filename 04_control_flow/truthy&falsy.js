// const user = ""  // falsy
// const user = false  // falsy
// const user = 0  // falsy
// const user = -0  // falsy
// const user =  0n // falsy
// const user = null  // falsy
// const user = undefined  // falsy
// const user = NaN  // falsy

// const user = "archana"  //truthy
// const user = "0"  //truthy
// const user = "false"  //truthy
// const user = " "  //truthy
// const user = []  //truthy
// const user = {}  //truthy
const user = function(){}  //truthy

if (user) {
    console.log("got user email");
}
else {
    console.log("Don't have user email");
}